(function (exports) {

  'use strict';

  var transformProp;
  var loaded;

  (function () {
    var style = document.createElement('a').style;
    var prop;
    if (style[prop = 'webkitTransform'] !== undefined) {
      transformProp = prop;
    }
    if (style[prop = 'msTransform'] !== undefined) {
      transformProp = prop;
    }
    if (style[prop = 'transform'] !== undefined) {
      transformProp = prop;
    }
  }());

  function forEach(arr, cb) {
    if (arr) {
      for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i]) {
          cb(arr[i], i, arr);
        }
      }
    }
  }

  function minigrid(props) {
    var containerEle = props.container instanceof Node ?
      props.container : document.querySelector(props.container);

    if (!containerEle) {
      return false;
    }

    var itemsNodeList = containerEle.querySelectorAll(props.item);
    if (!itemsNodeList || itemsNodeList.length === 0) {
      return false;
    }

    if (loaded || props.skipWindowOnLoad) {
      init(containerEle, itemsNodeList, props);
      return;
    }

    if (navigator.userAgent.toLowerCase().match(/webkit/)) {
      setTimeout(function() {
        webkitWaitForReadyState({
          container: containerEle,
          item: itemsNodeList,
          props: props
        });
      }, 10);
    } else {
      window.onload = function() {
        init(containerEle, itemsNodeList, props);
      };
    }

  }

  function webkitWaitForReadyState(minigrid) {
    if (document.readyState === 'loaded' || document.readyState === 'complete') {
      init(minigrid.container, minigrid.item, minigrid.props);
    } else {
      setTimeout(function() {
        webkitWaitForReadyState(minigrid);
      }, 10);
    }
  }

  function init(containerEle, itemsNodeList, props) {

    containerEle.classList.add(containerEle.className.split(' ')[0] + '--loaded');
    loaded = true;

    var gutter = (
      typeof props.gutter === 'number' &&
      isFinite(props.gutter) &&
      Math.floor(props.gutter) === props.gutter
    ) ? props.gutter : 6;
    var done = props.done;

    containerEle.style.width = '';

    var containerWidth = containerEle.getBoundingClientRect().width;
    var firstChildWidth = itemsNodeList[0].getBoundingClientRect().width + gutter;
    var cols = Math.max(Math.floor((containerWidth - gutter) / firstChildWidth), 1);
    var count = 0;

    containerWidth = (firstChildWidth * cols + gutter) + 'px';
    containerEle.style.width = containerWidth;
    containerEle.style.position = 'relative';

    var itemsGutter = [];
    var itemsPosX = [];

    for ( var g = 0 ; g < cols ; ++g ) {
      itemsPosX.push(g * firstChildWidth + gutter);
      itemsGutter.push(gutter);
    }

    forEach(itemsNodeList, function (item) {
      var itemIndex = itemsGutter
        .slice(0)
        .sort(function (a, b) {
          return a - b;
        })
        .shift();
      itemIndex = itemsGutter.indexOf(itemIndex);

      var posX = itemsPosX[itemIndex];
      var posY = itemsGutter[itemIndex];

      item.style.position = 'absolute';
      item.classList.add(item.className.split(' ')[0] + '--loaded');

      if (!props.animate && transformProp) {
        item.style[transformProp] = 'translate3D(' + posX + 'px,' + posY + 'px, 0)';
      }

      itemsGutter[itemIndex] += item.getBoundingClientRect().height + gutter;
      count = count + 1;

      if (props.animate) {
        return props.animate(item, posX, posY, count);
      }

    });

    var containerHeight = itemsGutter
      .slice(0)
      .sort(function (a, b) {
        return a - b;
      })
      .pop();

    containerEle.style.height = containerHeight + 'px';
    //containerEle.style.minHeight = containerHeight + 'px';

    if (typeof done === 'function') {
      done(itemsNodeList);
    }
  }

  if (typeof define === 'function' && define.amd) {
    define(function() { return minigrid; });
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = minigrid;
  } else {
    exports.minigrid = minigrid;
  }

})(this);

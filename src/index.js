/* @license minigrid v3.0.0 – minimal cascading grid layout http://alves.im/minigrid */
(function (root, factory) {
  if (typeof exports === 'object') {
    factory(exports);
  } else if (typeof define === 'function' && define.amd) {
    define(['exports'], factory);
  } else {
    factory(root);
  }
}(this, function(exports){
  'use strict';

  function extend(a, b) {
    for (var key in b) {
      if (b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
    return a;
  }

  var minigrid = function(props) {
    var containerEle = props.container instanceof Node ? (
      props.container
    ) : (
      document.querySelector(props.container)
    );

    if (!containerEle) {
      return false;
    }

    var itemsNodeList = props.item instanceof NodeList ?
      props.item : containerEle.querySelectorAll(props.item);
    if (!itemsNodeList || itemsNodeList.length === 0) {
      return false;
    }

    this.props = extend(props, {
      container: containerEle,
      nodeList: itemsNodeList
    });

  }

  minigrid.prototype.mount = function() {
    var gutter = (
      typeof this.props.gutter === 'number' &&
      isFinite(this.props.gutter) &&
      Math.floor(this.props.gutter) === this.props.gutter
    ) ? this.props.gutter : 0;

    var done = this.props.done;
    var containerEle = this.props.container;
    var itemsNodeList = this.props.nodeList;

    containerEle.style.width = '';

    var forEach = Array.prototype.forEach;
    var containerWidth = containerEle.getBoundingClientRect().width;
    var firstChildWidth = itemsNodeList[0].getBoundingClientRect().width + gutter;
    var cols = Math.max(Math.floor((containerWidth - gutter) / firstChildWidth), 1);
    var count = 0;

    containerWidth = (firstChildWidth * cols + gutter) + 'px';
    containerEle.style.width = containerWidth;
    containerEle.style.position = 'relative';

    var itemsGutter = [];
    var itemsPosX = [];
    var context = this;

    for ( var g = 0 ; g < cols ; ++g ) {
      itemsPosX.push(g * firstChildWidth + gutter);
      itemsGutter.push(gutter);
    }

    forEach.call(itemsNodeList, function (item) {
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
      item.style.webkitBackfaceVisibility = item.style.backfaceVisibility = 'hidden';

      if (!context.props.animate) {
        item.style.transform = 'translate3D(' + posX + 'px,' + posY + 'px, 0)';
      }

      itemsGutter[itemIndex] += item.getBoundingClientRect().height + gutter;
      count = count + 1;

      if (context.props.animate) {
        return context.props.animate(item, posX, posY, count);
      }

    });

    var containerHeight = itemsGutter
      .slice(0)
      .sort(function (a, b) {
        return a - b;
      })
      .pop();

    containerEle.style.height = containerHeight + 'px';

    if (typeof done === 'function') {
      done(itemsNodeList);
    }
  }

  exports.minigrid = minigrid;
  return minigrid;

}));

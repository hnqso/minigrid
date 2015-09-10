/* @license minigrid v1.6.5 - minimal cascading grid layout http://alves.im/minigrid */
(function (exports) {

  'use strict';

  var transformProp;
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

  function forEach (arr, cb) {
    if (arr) {
      for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i]) {
          cb(arr[i], i, arr);
        }
      }
    }
  }

  function minigrid (gridContainer, itemSelector, gutter, animate, done) {
    var containerEle = gridContainer instanceof Node ? gridContainer : document.querySelector(gridContainer);
    if (!containerEle) { return false; }
    var itemsNodeList = containerEle.querySelectorAll(itemSelector);
    if (itemsNodeList.length === 0) { return false; }
    gutter = (typeof gutter === 'number' && isFinite(gutter) && Math.floor(gutter) === gutter) ? gutter : 6;
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
      if (!animate && transformProp) {
        item.style[transformProp] = 'translate3D(' + posX + 'px,' + posY + 'px, 0)';
      }
      itemsGutter[itemIndex] += item.getBoundingClientRect().height + gutter;
      count = count + 1;
      if (animate) {
        return animate(item, posX, posY, count);
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

  if (typeof define === 'function' && define.amd) {
    define(function() { return minigrid; });
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = minigrid;
  } else {
    exports.minigrid = minigrid;
  }

})(this);

/* @license Minigrid v3.0.3 – minimal cascading grid layout http://alves.im/minigrid */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Minigrid = factory();
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

  var Minigrid = function(props) {
    var containerEle = props.container instanceof Node ? (
      props.container
    ) : (
      document.querySelector(props.container)
    );

    var itemsNodeList = props.item instanceof NodeList ?
      props.item : containerEle.querySelectorAll(props.item);

    this.props = extend(props, {
      container: containerEle,
      nodeList: itemsNodeList
    });

  }

  Minigrid.prototype.mount = function() {
    if (!this.props.container) {
      return false;
    }
    if (!this.props.nodeList || this.props.nodeList.length === 0) {
      return false;
    }
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

      var posX = parseInt(itemsPosX[itemIndex]);
      var posY = parseInt(itemsGutter[itemIndex]);

      item.style.position = 'absolute';
      item.style.overflow = 'hidden';
      item.style.webkitBackfaceVisibility = item.style.backfaceVisibility = 'hidden';
      item.style.transformStyle = 'preserve-3d';
      item.style.transform = 'translate3D(' + posX + 'px,' + posY + 'px, 0)';

      itemsGutter[itemIndex] += item.getBoundingClientRect().height + gutter;
      count = count + 1;

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

  return Minigrid;

}));

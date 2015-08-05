/* @license minigrid v1.6.0 - minimal cascading grid layout http://alves.im/minigrid */
(function(exports){

  'use strict';

  function minigrid(gridContainer, itemSelector, gutter, animate, done) {
    var forEach = Array.prototype.forEach;
    var containerEle = gridContainer instanceof Node ? gridContainer : document.querySelector(gridContainer);
    if (!containerEle) { return false; }
    var itemsNodeList = containerEle.querySelectorAll(itemSelector);
    if (itemsNodeList.length === 0) { return false; }
    gutter = (typeof gutter === "number" && isFinite(gutter) 
      && Math.floor(gutter) === gutter) ? gutter : 6;
    containerEle.style.width = '';
    var containerWidth = containerEle.getBoundingClientRect().width;
    var firstChildWidth = itemsNodeList[0].getBoundingClientRect().width + gutter;
    var cols = Math.max(Math.floor((containerWidth - gutter) / firstChildWidth), 1);
    var count = 0;
    containerWidth = (firstChildWidth * cols + gutter) + 'px';
    containerEle.style.width = containerWidth;
    containerEle.style.position = 'relative';
    
    for (var itemsGutter = [], itemsPosX = [], g = 0; g < cols; g++) {
      itemsPosX.push(g * firstChildWidth + gutter);
      itemsGutter.push(gutter);
    }

    forEach.call(itemsNodeList, function(item){
      var itemIndex = itemsGutter.slice(0).sort(function (a, b) {
        return a - b;
      }).shift();
      itemIndex = itemsGutter.indexOf(itemIndex);
      var posX = itemsPosX[itemIndex];
      var posY = itemsGutter[itemIndex];
      var transformProps = [
        'webkitTransform', 
        'MozTransform', 
        'msTransform',
        'OTransform', 
        'transform'
      ];
      item.style.position = 'absolute';
      if (!animate) {
        forEach.call(transformProps, function(transform){
          item.style[transform] = 'translate(' + posX + 'px,' + posY + 'px)';
        });  
      }
      itemsGutter[itemIndex] += item.getBoundingClientRect().height + gutter;
      count = count + 1;
      if (animate) {
        return animate(item, posX, posY, count);
      }
    });

    var containerHeight = itemsGutter.slice(0).sort(function (a, b) {
      return a - b;
    }).pop();

    containerEle.style.height = containerHeight + 'px';

    if (typeof done === 'function'){
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

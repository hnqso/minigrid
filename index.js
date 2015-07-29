(function(exports){

  function mingrid(containerSelector, itemSelector, gutter) {
    var forEach = Array.prototype.forEach;
    var containerEle = document.querySelector(containerSelector);
    var itemsNodeList = document.querySelectorAll(itemSelector);
    gutter = gutter || 6;

    containerEle.style.width = '';

    var containerWidth = containerEle.getBoundingClientRect().width;
    var firstChildWidth = itemsNodeList[0].getBoundingClientRect().width + gutter;
    var cols = Math.max(Math.floor((containerWidth - gutter) / firstChildWidth), 1);
    containerWidth = (firstChildWidth * cols + gutter) + 'px';
    containerEle.style.width = containerWidth;
    
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
      forEach.call(transformProps, function(transform){
        item.style[transform] = 'translate(' + posX + 'px,' + posY + 'px)';
      });
      itemsGutter[itemIndex] += item.getBoundingClientRect().height + gutter;
    });

    var containerHeight = itemsGutter.slice(0).sort(function (a, b) {
      return a - b;
    }).pop();

    containerEle.style.height = containerHeight + 'px';
  }

  if (typeof define === 'function' && define.amd) {
    define(function() { return mingrid; });
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = mingrid;
  } else {
    exports.mingrid = mingrid;
  }

})(this);
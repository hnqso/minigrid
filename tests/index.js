'use restrict';

/*
  var grid = new minigrid({
   container: '.cards',
   item: '.card',
   gutter: 6
 });
 grid.mount();
**/

var minigrid = require('../src/index');
var test = require('tape');

test('minigrid init with empty node list', function(t){
  var grid = new minigrid({
    container: document.createElement('div')
  });
  t.equal(grid.mount(), false, 'return false');
  t.end();
});

test('minigrid init and get nodeList', function(t){
  var container = document.createElement('div');
  container.classList.add('cards');
  document.body.appendChild(container);
  var gridItem = document.createElement('div');
  gridItem.classList.add('card');
  container.appendChild(gridItem);
  var grid = new minigrid({
    container: '.cards',
    item: '.card',
    done: function(nodeList) {
      t.equal(typeof nodeList.length, 'number', 'nodeList.lenght is number');
      t.equal(nodeList.length > 0, true, nodeList.length + ' grid items');
      t.end();
    }
  });
  grid.mount();
});

test('minigrid init with existing nodeList', function(t){

  var container = document.createElement('div');
  document.body.appendChild(container);

  var numGridItems = 5;

  for(var i = 0; i< numGridItems; i++){
    var item = document.createElement('div');
    container.appendChild(item);
  }

  var items = container.querySelectorAll('div');

  var grid = new minigrid({
    container: container,
    item: items,
    done: function(nodeList){
      t.equal(typeof nodeList.length, 'number', 'nodeList.lenght is number');
      t.equal(nodeList.length > 0, true, nodeList.length + ' grid items');
      t.end();
    }
  });
  grid.mount();
});

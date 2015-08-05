'use restrict';

var minigrid = require('./');
var test = require('tape');

test('minigrid init with empty container', function(t){
  t.equal(minigrid('.grid', '.grid-item'), false, 'return false');
  t.end();
});

test('minigrid init with empty node list', function(t){
  t.equal(minigrid('.grid', '.grid-item'), false, 'return false');
  t.end();
});

test('minigrid done callback', function(t){
  var grid = document.createElement('div');
  grid.classList.add('grid');
  document.body.appendChild(grid);
  var gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');
  grid.appendChild(gridItem);
  minigrid('.grid', '.grid-item', 6, null, function(nodeList){
    t.equal(typeof nodeList.length, 'number', 'nodeList.lenght is number');
    t.equal(nodeList.length > 0, true, nodeList.length + ' grid items');
    t.end();
  });
});
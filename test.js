'use restrict';

var minigrid = require('./');
var test = require('tape');

test('minigrid init with empty container', function(t){
  t.equal(minigrid('.grid', '.grid-item'), false);
  t.end();
});

test('minigrid init with empty node list', function(t){
  t.equal(minigrid('.grid', '.grid-item'), false);
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
    t.equal(typeof nodeList.length, 'number');
    t.comment(nodeList.length + ' grid items');
    t.end();
  });
});
'use restrict';

var minigrid = require('../src/index');
var test = require('tape');

test('minigrid init with empty container and node list', function(t){
  t.equal(minigrid({ container: '.grid', item: '.grid-item'}), false, 'return false');
  t.end();
});

test('minigrid init and get nodeList', function(t){
  var grid = document.createElement('div');
  grid.classList.add('grid');
  document.body.appendChild(grid);
  var gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');
  grid.appendChild(gridItem);
  minigrid({
    container: '.grid',
    item: '.grid-item',
    skipWindowOnLoad: true,
    done: function(nodeList){
      t.equal(typeof nodeList.length, 'number', 'nodeList.lenght is number');
      t.equal(nodeList.length > 0, true, nodeList.length + ' grid items');
      t.end();
    }
  });
});

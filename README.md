![icon](http://alves.im/minigrid/assets/favicon-32x32.png)

Minigrid is a minimal 2kb zero dependency cascading grid layout.

**[Demo](http://alves.im/minigrid/)**

## Install

`npm install minigrid`

Using Bower:

`bower install minigrid`

## Usage

```html
<div class="grid">
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
</div>
```

```js
var grid = require('minigrid');
grid('.grid', '.grid-item');
```

## API

### `minigrid(gridContainer, itemSelector, gutter, animate, done)`

- **gridContainer** - `string`|`node`: required. The element selector or element where your grid items sit.
- **itemSelector** - `string`: required. The grid item element selector.
- **gutter** - `number`: optional. The space between items, the default is `6`.
- **animate(element, x, y, index)** - `function`: optional.
- **done(nodeList)** - `function`: optional. Callback called after the grid is built. It returns the node list of grid items.

#### `animate`

It returns a function with the `element`,`x`,`y` and `index` parameters for each grid item.

```js
function animate(el, x, y, index) {
  // Use your favourite library for animate the element
}
minigrid('.grid', '.grid-item', 6, animate);
```

## Responsiveness

minigrid is dead-simple and doesn't provide anything in-the-box but you can do:

```js
window.addEventListener('resize', function(){
  minigrid('.grid', '.grid-item');
});
```

[Demo](http://output.jsbin.com/maroda/9/)

## Animation

The simple solution is to add a CSS `transition` in your grid item:

```css
.grid-item {
  transition: .3s ease-in-out;
}
```

[Demo](http://output.jsbin.com/maroda/10/)

Or take it to the next level by using your favourite library. The example bellow is using the awesome [Dynamics.js](http://dynamicsjs.com) library:

```js
function animate(item, x, y, index) {
  dynamics.animate(item, {
    translateX: x,
    translateY: y
  }, {
    type: dynamics.spring,
    duration: 800,
    frequency: 120,
    delay: 100 + index * 30
  });
}

minigrid('.grid', '.grid-item', 6, animate);
```
[Demo](http://output.jsbin.com/maroda/11/)

## Contributing

Plese see [CONTRIBUTING](CONTRIBUTING.md).

## License

MIT &copy; 2015 [Henrique Alves](http://alves.im)

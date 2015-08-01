# minigrid
Minimal 2kb zero dependency cascading grid layout.

**[Demo](http://henriquea.github.io/minigrid/)**

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

Set `position: absolute` to your grid items.

```css
.grid-item {
  position: absolute;
}
```

For best practices set `position: relative` in your main container.

```css
.grid {
  position: relative;
}
```


## API

### `minigrid(containerSelector, itemSelector, gutter, animate, done)`

- **containerSelector** - `string`: required. The element selector where your grid items sit.
- **itemSelector** - `string`: required. The grid item element selector.
- **gutter** - `number`: optional. The space between items, the default is `6`.
- **animate** - `function`: optional.
- **done** - `function`: optional. Callback called after the grid was updated.

#### `animate`

It returns a function with the `element`,`x`,`y` and `index` for each grid item.

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

[Demo](http://output.jsbin.com/maroda/1/)

## Animation

The simple solution is to add a CSS `transition` in your grid item:

```css
.grid-item {
  transition: .3s ease-in-out;
}
```

[Demo](http://output.jsbin.com/maroda/3/)

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
[Demo](http://output.jsbin.com/maroda/7/)

## License

MIT &copy; 2015 [Henrique Alves](http://alves.im)

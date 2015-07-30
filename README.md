# minigrid
Minimal 2kb zero dependency cascading grid layout.

**[Demo](http://henriquea.github.io/minigrid/)**

## Install

For node:

`npm install minigrid`

Or for the browser:

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

To avoid weird stuff to happen I'd suggest set `position: relative` in your main container.

```css
.grid {
  position: relative;
}
```

Then set `position: absolute` to your grid items.

```css
.grid-item {
  position: absolute;
}
```

That's it!

## API

### `minigrid(containerSelector, itemSelector, gutter, animate, done)`

- **containerSelector** - `string`: required.
- **itemSelector** - `string`: required.
- **gutter** - `number`: gutter between items, default is `6`.
- **animate** - `function`: optional.
- **done** - `function`: optional. Called after the grid was updated.

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

You can either add a CSS `transition` to your grid item:

```css
.grid-item {
  transition: .3s ease-in-out;
}
```

[Demo](http://output.jsbin.com/maroda/3/)

Or take it to the next level. The example bellow is using the awesome [Dynamics.js](http://dynamicsjs.com) library:

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
[Demo](http://output.jsbin.com/maroda/6/)

## License

MIT &copy; 2015 [Henrique Alves](http://twitter.com/healves82)
# minigrid
Minimal 2k zero dependency cascading grid layout.

**[Demo](http://henriquea.github.io/minigrid/)**

## Install

For node:

`npm install minigrid`

Or for the browser:

`bower install minigrid`

## Usage

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

#### minigrid(containerSelector, itemSelector, gutter, done);

- **containerSelector** - `string`: required.
- **itemSelector** - `string`: required.
- **gutter** - `number`: gutter between items, default is `6`.
- **done** - `function`: optional. Called after the grid was updated.

## Responsiveness

minigrid is dead-simple and doesn't provide anything in-the-box but you can do:

```js
window.addEventListener('resize', function(){
  minigrid('.grid', '.grid-item');
});
```

[Demo](http://output.jsbin.com/maroda/1/)

## Animation

You can applay CSS `transition` to the grid items e.g.

```css
.grid-item {
  transition: .3s ease-in-out;
}
```

[Demo](http://output.jsbin.com/maroda/3/)

## License

MIT &copy; 2015 [Henrique Alves](http://twitter.com/healves82)
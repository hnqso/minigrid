# minigrid
Minimal 2k (842 bytes compressed) zero dependency cascading grid layout.

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

Then set `position`, `top` and `left` to your grid items.

```css
.grid-item {
  position: absolute;
  top: 0;
  left: 0;
}
```

## API

#### minigrid(containerSelector, itemSelector, gutter);

- **containerSelector** - `string`
- **itemSelector** - `string`
- **gutter** - `number`: gutter between items, default is `6`

## Responsiveness

minigrid is dead-simple and doesn't provide anything in-the-box however you can achieve this easily by doing:

```js
window.addEventListener('resize', function(){
  minigrid('.grid', '.grid-item');
});
```

[Demo](http://output.jsbin.com/maroda/1/)

## Animation

Using CSS `transition` you can apply it to the grid item e.g.

```css
.grid-item {
  transition: .3s ease-in-out;
}
```

[Demo](http://output.jsbin.com/maroda/3/)

## License

MIT &copy; 2015 [Henrique Alves](http://twitter.com/healves82)
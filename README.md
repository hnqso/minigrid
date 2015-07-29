# minigrid
Minimal 2k (842 bytes compressed) zero dependency cascading grid layout.

**[Demo, please](http://henriquea.github.io/minigrid/)**

## Install

`npm install minigrid`

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

## License

MIT &copy; 2015 [Henrique Alves](http://twitter.com/healves82)
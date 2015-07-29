# minigrid
Minimal 2k (842 bytes compressed) dead-simple zero dependency cascading grid layout.

## Install

`npm install minigrid`

## Usage

```js
var grid = require('minigrid');
minigrid('.grid', '.grid-item');
```

First to avoid weird stuff to happen, I'd suggest set `position: relative` in your main container.

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

### minigrid(containerSelector, itemSelector, gutter);

- **containerSelector** - `string`
- **itemSelector** - `string`
- **gutter** - `number`

## License

MIT &copy; 2015 [Henrique Alves](http://alves.im)
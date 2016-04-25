# CHANGELOG

### v3.0.3

- Add site to js.org

### v3.0.2

- Move GitHub pages to `master` branch

### v3.0.1

- Add dist file to `package.json`

### v3.0.0

The major change is the API. We took one step back to its core principle of "keep it simple".

```js
var props = {
  container: '.cards',
  item: '.card',
  guter: 8
};
var grid = new Minigrid(props);
grid.mount();
```

- Back to 2kb 🎉
- `mount()` method to initialize Minigrid
- Animation was removed due to issues when dealing with many items which is the most of the user cases
- Remove the custom loading causing issues when loaded with require
- Round `posX`, `poxY` values #48
- Fixes the issue when working with multiple grids/selectors #43
- Works when loaded via module #40

### v2.2.0

- Add containerLoaded and itemLoaded options #37
- Fix minification #38
- Remove webpack
- Remove custom `forEach` loop
- Replace custom `window.onload` function for `window.addEventListener('load')`. Closes #36
- Add `backface-visibility` to prevent text rendering issues. Closes #26

### v2.1.3

- Change default `gutter` to `0`
- Fix issue uptading the container className with `--loaded` modifier multiple times

### v2.0.0

The major change is that now minigrid receives a `props` object rather arguments.

```js
// v1.x
minigrid('.grid', '.grid-item');

// v2.0.0
minigrid({ container: '.grid', item: '.grid-item'});
```

On `window.onLoad` minigrid adds a new className, the container name plus the `--loaded` modifier.

```html
<div class="grid grid--loaded">
  ...
</div>
```

The same happens for each grid child item when it is ready for use.

```html
<div class="grid grid--loaded">
  <div class="grid-item grid-item--loaded">
</div>
```

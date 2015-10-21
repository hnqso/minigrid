# CHANGELOG

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
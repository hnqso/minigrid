- [GitHub](https://github.com/henriquea/minigrid)
- [npm](https://www.npmjs.com/package/minigrid)

![Minigrid](logo.svg)

# Minigrid

Minimal 2kb zero dependency cascading grid layout without pain.

<p><a class="github-button" href="https://github.com/henriquea/minigrid" data-style="mega" data-count-href="/henriquea/minigrid/stargazers" data-count-api="/repos/henriquea/minigrid#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star henriquea/minigrid on GitHub">Star</a></p>

## Demo

There's a simple example on [jsbin](http://jsbin.com/wamele/edit?js,output).

## Usage

It works on a grid container with a group of grid items.

```
<div class="cards">
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
</div>
```

Then:

```
var grid = new Minigrid({
  container: '.cards',
  item: '.card',
  gutter: 6
});
grid.mount();
```

## Installation

Get it from <strong>npm</strong>.

```
npm install minigrid
```

Or 1998 script tag from [npmcdn](https://npmcdn.com/minigrid@3.0.3/dist/minigrid.min.js):

```
<script src="https://npmcdn.com/minigrid@3.0.3/dist/minigrid.min.js"></script>
```

## Upgrade

Upgrading from v1.x or v2.x?

Please read the [CHANGELOG](https://github.com/henriquea/minigrid/blob/master/CHANGELOG.md) for API changes.

## Limitations

Minigrid was built having in mind "cards" with same width and different heights. If your cards have different width sizes or you need more power I would recommend [Isotope](http://isotope.metafizzy.co/).

## Questions

Open an [issue](https://github.com/henriquea/minigrid/issues) or hit me on Twitter.

<a href="https://twitter.com/share" class="twitter-share-button" data-url="http://alves.im/minigrid" data-text="Minimal 2kb zero dependencies cascading grid layout" data-via="healves82" data-hashtags="javascript">Tweet Project</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>

- [Minigrid](http://alves.im/minigrid) v3.0.3
- [GitHub](https://github.com/henriquea/minigrid)
- [npm](https://www.npmjs.com/package/minigrid)
- <a href="https://js.org"><img src="https://logo.js.org/dark_horz.png" width="55"/></a>

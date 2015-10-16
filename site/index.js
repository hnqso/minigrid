import './styles/normalize.css';
import './styles/syntax.css';
import './styles/skeleton.css';
import './styles/index.css';
import './static/twitter-card.jpg';

import pkg from '../package.json';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Demo from './demo';

const Container = ({children}) =>
  <div className="container">{children}</div>;

const NavBar = ({children}) =>
  <div className="navbar">
    <div className="vs">Minigrid</div>
    <div className="links">
      <a href="https://github.com/henriquea/minigrid">GitHub</a>
      <a href="https://www.npmjs.com/package/minigrid">NPM</a>
    </div>
  </div>;

const installMarkup =
`<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/minigrid/2.0.0/minigrid.min.js"></script>`;

const usageHtmlMarkup =
`<div class="grid">
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
</div>`;

const usageJsMarkup = `minigrid({
  container: '.grid',
  item: '.grid-item',
  gutter: 6
});`;

const responsivenessMarkup =
`/* styles.css */
.grid {
  margin: 0 auto;
}

/* index.js */
window.addEventListener('resize', function(){
  minigrid({
    container: '.grid',
    item: '.grid-item',
    gutter: 6
  });
});`;

const animationCSSMarkup =
`.grid-item {
  opacity: 0;
  transition: opacity .3s ease-in-out;
}

.grid-item--loaded {
  opacity: 1;
}`;

const animationMarkup = `/* styles.css */
.grid-item {
  transform-origin: 50%;
  opacity: 0; /* make sure the card doesn't show after loaded */
};

/* index.js */
minigrid({
  container: '.grid',
  item: '.grid-item',
  gutter: 6,
  animate: function(el, x, y, index) {
    // don't animate the x and y position
    velocity(el, {
      translateX: x + 'px',
      translateY: y + 'px'
    }, {
      duration: 0,
      complete: function() {
        // fadeIn
        velocity(el, {
          opacity: [1, 0]
        }, {
          duration: 300,
          delay: 100 + index * 30
        });
      }
    });
  }
});`;

class Site extends Component {

  render() {
    return (
      <div>
        <Container>

          <NavBar />

          <div className="section hero">
            <div className="row">
              <div className="twelve columns">
                <div className="headline">
                  <h5>Cascading grid layout without pain.</h5>
                  <a
                    href="https://github.com/henriquea/minigrid/archive/master.zip"
                    className="button button-primary"
                  >
                    Download
                  </a>
                  <p className="release">v{pkg.version}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <div className="demo">
          <Container>
            <div className="row">
              <div className="twelve columns">
                <Demo />
              </div>
            </div>
          </Container>
          <a href="https://www.pinterest.com" className="pinterest"><span>Pinterest</span></a>
        </div>

        <Container>
          <div className="section no-border">
            <div className="row">
              <div className="twelve columns">
                <h6><a href="#install" name="install">Install</a></h6>
                <p>Get it from npm.</p>
                <pre><code className="prettyprint lang-bsh">$ npm install minigrid</code></pre>
                <p>Or include the script.</p>
                <pre><code className="prettyprint lang-html">{installMarkup}</code></pre>
                <p><strong>Upgrade from v1?</strong></p>
                <p>If you're using any of the releases bellow v2.0.0 please 
                read the <a href="https://github.com/henriquea/minigrid/CHANGELOG.md">CHANGELOG</a> for 
                API changes.</p>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="row">
              <div className="twelve columns">
                <h6><a href="#usage" name="usage">Usage</a></h6>
                <p>It works on a grid container with a group of grid items.</p>
                <pre>
                  <code className="prettyprint lang-html">{usageHtmlMarkup}</code>
                </pre>
                <p>
                  Initialize it passing the <code>container</code>, <code>item</code> and <code>gutter</code>.
                </p>
                <pre>
                  <code className="prettyprint lang-js">{usageJsMarkup}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="row">
              <div className="twelve columns">
                <h6><a href="#api" name="api">API</a></h6>
                <pre><code className="prettyprint lang-js">minigrid(<cite>props</cite>)</code></pre>
                <p>props is an object with the follow properties:</p>
                <ul>
                  <li><code>container</code></li>
                  <li><code>item</code></li>
                  <li><code>gutter</code></li>
                  <li><code>animate(item, x, y, index)</code></li>
                  <li><code>done(nodeList)</code></li>
                </ul>
                <p><strong>container</strong> <code className="no-style">string or node</code></p>
                <p>The element selector or element where your grid items sit.</p>

                <p><strong>item</strong> <code className="no-style">string</code></p>
                <p>The grid item element selector.</p>

                <p><strong>gutter</strong> <code className="no-style">number</code></p>
                <p>The space between items, the default is <code>0</code>.</p>

                <p><strong>animate</strong> <code className="no-style">function</code></p>
                <p>It returns a function with the <code>item</code>,
                <code>x</code>, <code>y</code> and <code>index</code> parameters for each child item.</p>
                <p>See <a href="#animation">animation</a> for more information.</p>
                <p><strong>done</strong> <code className="no-style">function</code></p>
                <p>
                  Callback called after the grid is built. It returns the <code>nodeList</code>
                  of grid items.
                </p>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="row">
              <div className="twelve columns">
                <h6><a href="#limitations" name="install">Limitations</a></h6>
                <p>
                 Minigrid was built having in mind "cards" with same width and different heights.
                 If your cards have different width sizes or you need more control I’d recommend <a href="http://isotope.metafizzy.co">Isotope</a>.
                </p>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="row">
              <div className="twelve columns">
                <h6><a href="#responsiveness" name="responsiveness">Responsiveness</a></h6>
                <p>
                  Minigrid is dead-simple and doesn’t provide anything in-the-box but you
                 can do:
                </p>
                <pre>
                  <code className="prettyprint lang-js">{responsivenessMarkup}</code>
                </pre>
                <p><a href="http://output.jsbin.com/lemusi" className="button">Demo</a></p>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="row">
              <div className="twelve columns">
                <h6><a href="#animation" name="animation">Animation</a></h6>
                <p>Minigrid provide one simple way to animate the child items with CSS only.
                Minigrid appends the <code>--animate</code> to your item class name.</p>
                <pre>
                  <code className="prettyprint lang-css">{animationCSSMarkup}</code>
                </pre>
                <p><a href="http://output.jsbin.com/carasa" className="button">Demo</a></p>
                <p>You may use the <code>animate</code> function to control it via JavaScript.
                The example bellow is using the <a href="http://julian.com/research/velocity/">
                Velocity.js</a> library.</p>
                <pre>
                  <code className="prettyprint lang-js">{animationMarkup}</code>
                </pre>
                <p><a href="http://output.jsbin.com/moqami" className="button">Demo</a></p>
              </div>
            </div>
          </div>

          <NavBar />

        </Container>
      </div>
    );
  }
}

ReactDOM.render(
  <Site />,
  document.getElementById('root')
);
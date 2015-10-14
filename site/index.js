import './styles/normalize.css';
import './styles/syntax.css';
import './styles/skeleton.css';
import './styles/custom.css';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const Container = ({children}) =>
  <div className="container">{children}</div>;

class Site extends Component {
  render() {
    const usageJsMarkup = {__html: 'minigrid({ container: ".grid", item: ".grid-item" });'};
    const responsivenessJsMarkup = {__html: 'window.addEventListener("resize", function(){\n\tminigrid({ container: ".grid", item: ".grid-item" });\n});'}
    const animationCSSMarkup = {__html: '.grid-item {\n\topacity: 0;\n\ttransition: opacity .3s ease;\n}\n\n.grid-item--animate {\n\topacity: 1;\n}'}
    const animationMarkup = {__html: '/* styles.css */\n.grid-item {\n\ttransition-property: opacity, scale;\n\topacity: 0;\n\tscale: 0.95;\n}\n\n/* index.js */\nminigrid({\n\tcontainer: ".grid",\n\titem: ".grid-item",\n\tanimate: function(el, x, y, index) {\n\t\tdynamics.animate(el, {\n\t\t\topacity: 1,\n\t\t\tscale: 1,\n\t\t\ttransformX: x,\n\t\t\ttransformY: y\n\t\t}, {\n\t\t\ttype: dynamics.spring,\n\t\t\tfrequency: 200,\n\t\t\tfriction: 270,\n\t\t\tduration: 800\n\t\t});\n\t}\n});'}
    return (
      <Container>

        <header className="navbar">
          <div className="vs">Minigrid <cite>v2.2.1</cite></div>
          <div className="links">
            <a href="#">GitHub</a>
            <a href="#">npm</a>
          </div>
        </header>

        <div className="section hero">
          <div className="row">
            <div className="twelve columns">
              <h4>Cascading grid layout without pain.</h4>
              <a href="#" className="button button-primary">Download</a>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="row">
            <div className="twelve columns">
              <h6>When to use?</h6>
              <p>
               Minigrid was done having in mind "cards" with same width and
               different heights. It won't work if your grid item has different width sizes.
               If you need more control I'd recommend <a href="http://isotope.metafizzy.co">Isotope</a>.
              </p>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="row">
            <div className="twelve columns">
              <h6><a href="#install" name="install">Install</a></h6>
              <pre><code className="prettyprint lang-bsh">$ npm install minigrid</code></pre>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="row">
            <div className="twelve columns">
              <h6><a href="#usage" name="usage">Usage</a></h6>
              <p>It works on a grid container with a group of grid items.</p>
              <pre>
                <code className="prettyprint lang-html">
                  &lt;div class="grid"&gt;{'\n'}
                    {'\t'}&lt;div class="grid-item"&gt;&lt;/div&gt;{'\n'}
                    {'\t'}&lt;div class="grid-item"&gt;&lt;/div&gt;{'\n'}
                    {'\t'}&lt;div class="grid-item"&gt;&lt;/div&gt;{'\n'}
                  &lt;/div&gt;
                </code>
              </pre>
              <p>Initialize it passing two arguments: the grid container and child items selector.</p>
                <pre>
                  <code className="prettyprint lang-js">
                    <span dangerouslySetInnerHTML={usageJsMarkup} />
                  </code>
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
                <li><code>container *</code></li>
                <li><code>item *</code></li>
                <li><code>gutter</code></li>
                <li><code>animate(item, x, y, index)</code></li>
                <li><code>done(nodeList)</code></li>
              </ul>
              <p><code className="no-style">* required</code></p>
              <p><strong>container</strong> <code className="no-style">string or node</code></p>
              <p>The element selector or element where your grid items sit.</p>

              <p><strong>item</strong> <code className="no-style">string</code></p>
              <p>The grid item element selector.</p>

              <p><strong>gutter</strong> <code className="no-style">number</code></p>
              <p>The space between items, the default is 6.</p>

              <p><strong>animate</strong> <code className="no-style">function</code></p>
              <p>It returns a function with the <code className="no-style">item</code>, <code className="no-style">x</code>, <code className="no-style">y</code> and <code className="no-style">index</code> parameters for each child item.</p>
              <p>See <a href="#animation">animation</a> for more information.</p>
              <p><strong>done</strong> <code className="no-style">function</code></p>
              <p>Callback called after the grid is built. It returns the node
              list of grid items.</p>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="row">
            <div className="twelve columns">
              <h6><a href="#responsiveness" name="responsiveness">Responsiveness</a></h6>
              <p>minigrid is dead-simple and doesn't provide anything in-the-box but you can do:</p>
              <pre>
                <code className="prettyprint lang-js">
                  <span dangerouslySetInnerHTML={responsivenessJsMarkup} />
                </code>
              </pre>
              <p><a href="#" className="button">Demo</a></p>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="row">
            <div className="twelve columns">
              <h6><a href="#animation" name="animation">Animation</a></h6>
              <p>Minigrid provide one simple way to animate the child items with CSS only. Minigrid appends the <code>--animate</code> to your item class name.</p>
              <pre>
                <code className="prettyprint lang-css">
                  <span dangerouslySetInnerHTML={animationCSSMarkup} />
                </code>
              </pre>
              <p><a href="#" className="button">Demo</a></p>
              <p>You may use the <code>animate</code> function to control it via JavaScript. The example bellow is using the <a href="http://dynamicsjs.com/">Dynamics.js</a> library.</p>
              <pre>
                <code className="prettyprint lang-js">
                  <span dangerouslySetInnerHTML={animationMarkup} />
                </code>
              </pre>
              <p><a href="#" className="button">Demo</a></p>
            </div>
          </div>
        </div>

        <footer className="foo">
          <div className="vs">Minigrid <cite>v2.2.1</cite></div>
          <div className="links">
            <a href="#">GitHub</a>
            <a href="#">npm</a>
          </div>
        </footer>

      </Container>
    );
  }
}

ReactDOM.render(
  <Site />,
  document.getElementById('root')
);
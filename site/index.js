import './styles/normalize.css';
import './styles/skeleton.css';
import './styles/styles.css';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const Container = ({children}) =>
  <div className="container">{children}</div>;

class Site extends Component {
  render() {
    return (
      <Container>

        <ul className="navbar">
          <li><a href="#">GitHub</a></li>
          <li><a href="#">npm</a></li>
        </ul>

        <div className="docs-section hero">
          <div className="row">
            <div className="twelve columns">
              <h6>Minigrid</h6>
              <p>Cascading grid layout without pain.</p>
            </div>
          </div>
        </div>

        <div className="docs-section">
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

        <div className="docs-section">
          <div className="row">
            <div className="twelve columns">
              <h6>Install</h6>
              <pre><code>npm install minigrid</code></pre>
            </div>
          </div>
        </div>

        <div className="docs-section">
          <div className="row">
            <div className="twelve columns">
              <h6>Usage</h6>
              <p>Hello</p>
            </div>
          </div>
        </div>

      </Container>
    );
  }
}

ReactDOM.render(
  <Site />,
  document.getElementById('root')
);
import './styles/demo.css';

import velocity from 'velocity-animate';
import minigrid from 'minigrid';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Demo extends Component {

  grid(resizing) {
    minigrid({
      container: '.cards',
      item: '.card',
      gutter: 6,
      animate: function(el, x, y, index) {
        velocity(el, {
          translateX: x + 'px',
          translateY: y + 'px',
          translateZ: 0
        }, {
          duration: 0,
          delay: resizing ? 0 : 500,
          complete: function() {
            if (resizing) {
              return;
            }
            velocity(el, {
              opacity: [1, 0],
              scale: [1, 0.9],
            }, {
              duration: 300,
              easing: [.4,.2,.5,1.4],
              delay: 100 + index * 30
            });
          }
        });
      }
    });
  }

  componentDidMount() {
    const self = this;
    window.addEventListener('resize', function(){
      self.grid(true);
    });
    /* setTimout fix loading issue on Safari */
    setTimeout(function() {
      self.grid();
    }, 0);
  }

  render() {
    return (
      <div className="cards">
        <div className="card">
          <div className="card-wrapper">
            <div className="card-image">
              <img src="https://s-media-cache-ak0.pinimg.com/236x/2a/30/13/2a3013448eb806e51da5de96eb38cf36.jpg" />
            </div>
            <div className="card-info">
              Villetta Barrea and Scanno, Abruzzo, Italy
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-wrapper">
            <div className="card-image">
              <img src="https://s-media-cache-ak0.pinimg.com/236x/fa/a2/41/faa24120c4689443e2169366972cb194.jpg" />
            </div>
            <div className="card-info">
              Vøringfossen, Norway
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-wrapper">
            <div className="card-image">
              <img src="https://s-media-cache-ak0.pinimg.com/236x/f9/06/4c/f9064c91a4f63705e5a4408cda6739de.jpg" />
            </div>
            <div className="card-info">
              Theogefiro, Zitsa, Greece
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-wrapper">
            <div className="card-image">
              <img src="https://s-media-cache-ak0.pinimg.com/236x/ab/e2/1b/abe21b2f3a5be204cb2436d0b9cc6a1d.jpg" />
            </div>
            <div className="card-info">
              Los Andes, Argentina
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-wrapper">
            <div className="card-image">
              <img src="https://s-media-cache-ak0.pinimg.com/236x/7f/20/c5/7f20c589a41bffc8c0b8960fc8001160.jpg" />
            </div>
            <div className="card-info">
              Moon Mountain, Yangshuo, Guangxi, China
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-wrapper">
            <div className="card-image">
              <img src="https://s-media-cache-ak0.pinimg.com/236x/54/a0/e0/54a0e0acf60f33f9b64528bd364ce5d6.jpg" />
            </div>
            <div className="card-info">
              Valley of the Ten Peaks, Moraine Lake, Canada
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-wrapper">
            <div className="card-image">
              <img src="https://s-media-cache-ak0.pinimg.com/236x/d2/d5/aa/d2d5aa40108038f92d4cb0edca78ec26.jpg" />
            </div>
            <div className="card-info">
              Hawaii
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-wrapper">
            <div className="card-image">
              <img src="https://s-media-cache-ak0.pinimg.com/236x/f7/e2/c0/f7e2c018f5ec39a83df831495ed9cad5.jpg" />
            </div>
            <div className="card-info">
              Chichimilá, Yucatan, Mexico
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-wrapper">
            <div className="card-image">
              <img src="https://s-media-cache-ak0.pinimg.com/236x/a7/51/a9/a751a9a163c76ea37eba4747c35d1940.jpg" />
            </div>
            <div className="card-info">
              Basalt Pinnacles, Scotland
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-wrapper">
            <div className="card-image">
              <img src="https://s-media-cache-ak0.pinimg.com/236x/d9/86/6b/d9866b911c08387bc8ab17a6c9897e85.jpg" />
            </div>
            <div className="card-info">
              The Cliff, Iceland
            </div>
          </div>
        </div>

      </div>
    );
  }
}
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Site extends Component {
  render() {
    return (
      <div>hello</div>
    );
  }
}

ReactDOM.render(
  <Site />,
  document.getElementById('root')
);
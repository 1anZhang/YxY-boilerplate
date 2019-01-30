
import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from './avatar.jpg'
import Button from './components/Button'

import './style.less';

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <img src={Avatar} />
        <p>
          We are a most promising species, Mr. Spock, as predators go. Did you know that? I
          frequently have my doubts. I dont. Not any more. And maybe in a thousand years or so, we
          will be able to prove it.
        </p>
        <p>- Captain Kirk</p>
        <Button>YxY</Button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

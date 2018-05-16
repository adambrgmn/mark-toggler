import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  state = {
    who: 'world',
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Hello {this.state.who}!</h1>
      </div>
    );
  }
}

const root = document.getElementById('root');

ReactDOM.render(<App />, root);

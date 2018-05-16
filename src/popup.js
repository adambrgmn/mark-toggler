import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  state = {
    who: 'world',
  };

  render() {
<<<<<<< HEAD
=======
    const { count } = this.state;
>>>>>>> db64da5864dc75d8135c52fa98f18e314edcba07
    return (
      <div>
        <h1>Hello {this.state.who}!</h1>
      </div>
    );
  }
}

const root = document.getElementById('root');

ReactDOM.render(<App />, root);

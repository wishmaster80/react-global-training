import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './ErrorBoundary'
import Movies from './Movies'
class App extends Component {

  render() {

    return (
      <React.Fragment>
        <ErrorBoundary>
          <Movies/>
        </ErrorBoundary>
      </React.Fragment>
    );
  }
}

export default App;

// class Exception extends Component {
//   componentDidMount() {
//     throw new Error('I crashed!');
//   }
//   render() {
//     return (
//       <div></div>
//     );
//   }
// }

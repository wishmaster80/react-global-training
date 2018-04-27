import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './ErrorBoundary'
import Movies from './Movies'
import Movie from './Movie'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {

  render() {

    return (
      <React.Fragment>
        <ErrorBoundary>
          <Router>
            <React.Fragment>
              <Route exact path="/" component={Movies} />
              <Route path="/movie/:id" component={Movie} />
            </React.Fragment>
          </Router>
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

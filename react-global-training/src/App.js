import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './ErrorBoundary'
import MoviesContainer from './Movies'
import MovieContainer from './Movie'
import { BrowserRouter as Router,  Route } from 'react-router-dom';

class App extends Component {

  render() {

    return (
      <React.Fragment>
        <ErrorBoundary>
          <Router>
            <React.Fragment>
              <Route exact path="/" component={MoviesContainer} />
              <Route path="/movie/:id" component={MovieContainer} />
            </React.Fragment>
          </Router>
        </ErrorBoundary>
      </React.Fragment>
    );
  }
}

export default App;
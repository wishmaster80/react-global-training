import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './ErrorBoundary'
import MoviesContainer from './Movies'
import MovieContainer from './Movie'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {

  render() {

    return (
      <React.Fragment>
        <ErrorBoundary>
          <Router>
            <React.Fragment>
              <Route exact path="/movies" component={MoviesContainer} />
              <Route path="/movie/:id" component={MovieContainer} />
              <Route path="/" component={PageNotFound} />
            </React.Fragment>
          </Router>
        </ErrorBoundary>
      </React.Fragment>
    );
  }
}

export default App;

const PageNotFound = (props) => {
  return (
    <div>
      <div>
        Page not found 404
      </div>
      <div>
        <Link to="/movies">movies</Link>
      </div>
    </div>
  )

}

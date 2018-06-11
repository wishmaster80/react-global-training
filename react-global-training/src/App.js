import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import MoviesContainer from './Movies';
import MovieContainer from './Movie';

const PageNotFound = () => (
  <div>
    <div>
      Page not found 404
    </div>
    <div>
      <Link to="/movies">movies</Link>
    </div>
  </div>
);


const App = () => (
      <React.Fragment>
        <ErrorBoundary>
          <Router>
            <React.Fragment>
              <Switch>
                <Route exact path="/movies/" component={MoviesContainer} />
                <Route path="/search/:searchText/:searchBy/:sortBy" component={MoviesContainer} />
                <Route path="/movie/:id" component={MovieContainer} />
                <Route path="/" component={MoviesContainer} />
                <Route component={PageNotFound} />
              </Switch>
            </React.Fragment>
          </Router>
        </ErrorBoundary>
      </React.Fragment>
);

export default App;

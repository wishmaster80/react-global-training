import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './ErrorBoundary'

class App extends Component {

  render() {
    
    return (
      <React.Fragment>
      <ErrorBoundary>        
        <div>
            Hello Component!     
        </div>
      </ErrorBoundary>      
      <ErrorBoundary>        
        <div>
            Hello Component!2
            <Exception/>
        </div>
      </ErrorBoundary>
      </React.Fragment>
    );
  }
}

export default App;

class Exception extends Component {  
  componentDidMount()
  {
    throw new Error('I crashed!');
  }  
  render() {
    return (
    <div></div>
  );
}
}

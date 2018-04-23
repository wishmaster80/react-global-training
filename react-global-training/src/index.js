import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppPure from './AppPure'
import registerServiceWorker from './registerServiceWorker';

const HelloWorldFunctional = () => (
    <div>Hello Functional!</div>
   );
   

const HelloWorld = React.createElement(
    "h1",
    null,
    "Hello React.createElement!", <App/>, <AppPure/>, <HelloWorldFunctional/>
)


ReactDOM.render(HelloWorld, document.getElementById('root'));

registerServiceWorker();

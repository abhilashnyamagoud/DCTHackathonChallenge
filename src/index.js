import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import configureStore from './stores/configureStore'

const store=configureStore()
store.subscribe(()=>{
  console.log(store.getState())
})
ReactDOM.render(
  <Provider store={store}>
  <Router>
    <App />
  </Router>
  </Provider>,
  document.getElementById('root')
);



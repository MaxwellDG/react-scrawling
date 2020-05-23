import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as ReactRedux from 'react-redux'
import { createStore } from 'redux'

/*const store = createStore(
  console.log("Filler")
)*/

ReactDOM.render(
  // <ReactRedux.Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  // </ReactRedux.Provider>,
  document.getElementById('root')
);

// you're practicing with *. Remember that you might've gotten the import syntax wrong and "ReactRedux.Prodider" might not function properly


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {DARK_THEME , LIGHT_THEME} from './colors';

document.documentElement.style.setProperty(
  '--orangeText' , DARK_THEME.orangeText
);

document.documentElement.style.setProperty(
'--darkGrey' , DARK_THEME.darkGrey
);

document.documentElement.style.setProperty(
      '--lightGrey' , DARK_THEME.lightGrey
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

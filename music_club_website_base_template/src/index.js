import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {DARK_THEME} from './colors';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer'

document.documentElement.style.setProperty(
  '--orangeText' , DARK_THEME.orangeText
);

document.documentElement.style.setProperty(
'--darkGrey' , DARK_THEME.darkGrey
);

document.documentElement.style.setProperty(
      '--lightGrey' , DARK_THEME.lightGrey
);

document.documentElement.style.setProperty(
      '--cardTitle' , DARK_THEME.cardTitle
);

document.documentElement.style.setProperty(
      '--timelineContent' , DARK_THEME.timelineContent
);

document.documentElement.style.setProperty(
      '--headerBackground' , DARK_THEME.headerBackground
);

const store  = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

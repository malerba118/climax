import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from 'components/App';
import * as serviceWorker from './serviceWorker';
import store from 'store'
import { HashRouter } from 'react-router-dom'
import ReactGA from 'react-ga'

import './index.scss';

ReactGA.initialize('UA-130777483-1')
ReactGA.pageview(window.location.pathname, [window.location.search])

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

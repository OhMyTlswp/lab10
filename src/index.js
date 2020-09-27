import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import GiphyBrowser from './components/giphyBrowser/GiphyBrowser';
ReactDOM.render(
  <React.StrictMode>
    <GiphyBrowser />
  </React.StrictMode>,
  document.getElementById('root'),
);
serviceWorker.unregister();

import React from 'react';
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App';
import AppContext from './AppContext';

export function render(url, store) {
  return ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <AppContext.Provider value={store}>
        <App />
      </AppContext.Provider>
    </StaticRouter>,
  )
}

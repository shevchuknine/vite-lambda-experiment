import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home.jsx";
import Terms from "./pages/terms/Terms.jsx";

export function render(url, data) {
  return ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms data={data} />} />
      </Routes>
    </StaticRouter>
  );
}

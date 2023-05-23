import React, {Suspense} from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import TermsWrapper from "./pages/terms/TermsWrapper.jsx";

// this App components stays to leave for CSR application, that you described
// it's not involved into SSR logic, it can be triggered if you start your app
// in dev environment.
//
// like you describer here:
// "I want to be able to develop csr, and run csr dev server, but have the option
// to put it into a web function so that we can do ssr for SEO"

export default function App() {
  return (
    <Suspense fallback={<div>spinner</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<TermsWrapper />} />
      </Routes>
    </Suspense>
  );
}

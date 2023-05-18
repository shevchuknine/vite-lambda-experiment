import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Dynamic from './pages/dynamic/Dynamic';

export default function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dynamic">Dynamic</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dynamic" element={<Dynamic />} />
      </Routes>
    </>
  )
}

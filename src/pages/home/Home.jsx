import React from 'react';
import Header from "../../components/header/Header.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <div>
        <h1>Home page</h1>
        <p className="note--home">Static page without any dynamic content just static content, styles, images, etc.</p>
      </div>
    </>
  )
}

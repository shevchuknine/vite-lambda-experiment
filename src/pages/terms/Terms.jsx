import React, {useState} from 'react';
import Header from "../../components/header/Header.jsx";

export default function Terms({ data }) {
  const onLogButtonClick = () => {
    console.log('passed via props data: ', data);
  };

  const [inputState, setInputState] = useState(null);
  const handleInputState = (e) => {
    setInputState(e.target.value);
  }

  const onFormSubmit = () => {
    console.log('form data: ', inputState);
    setInputState(null);
  }

  return (
    <>
      <Header/>
      <div>
        <h1>Terms page</h1>
        <p className="note--terms">Terms page with dynamic content on it</p>
        <p>Passed data: { data }</p>
        <p>
          <button onClick={onLogButtonClick}>Click me to log data in console</button>
        </p>
        <p>
          <input value={inputState || ''} onChange={handleInputState} />
          <button onClick={onFormSubmit}>Submit form</button>
        </p>
      </div>
    </>
  )
}

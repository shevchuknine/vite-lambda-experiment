import React, { useState, useEffect, useContext } from 'react';
import styles from './Dynamic.module.css';
import AppContext from "../../AppContext";
import dataLoader from './data.js';

/*
* DESCRIPTION
*
* hook, that allows to receive dynamic data from server (as a part of SSR vie React.Context)
* or it gives ability to load info on the client, if page was rendered on client.
* to load data on the client, it uses the same loader, that lambda function uses to load data on the server
*
* PROBLEM:
*
* if you start application and go to '/dynamic' you will see different results of data, that was received from SSR
* (in html file) and that one, that is visualized on the page.
* that is in case, that i'm still looking for the solution to prevent receiving data on the client side,
* if it was received on server side.
* it works completely nice if you open '/dynamic' page that is generated on the client (f.e. you open '/' and then
* go to '/dynamic' via link).
* but if you open '/dynamic' that was generated on the server, you'll see this problem.
* */
const getStore = () => {
  const store = useContext(AppContext);
  
  const [storeState, setStoreState] = useState(store);
  useEffect(() => {
    if (!store) {
      dataLoader().then(setStoreState);
    }
  }, []);
  
  return storeState;
};

export default function Dynamic() {
  const store = getStore();
  
  return (
    <div>
      <h1>Dynamic page</h1>
      <p className={styles.note}>Dynamic page with previously downloaded data</p>
      <p>Random value: {store ? store.randomValue : 'loading...'}</p>
    </div>
  )
}

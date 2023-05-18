import React from 'react';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div>
        <h1>Home page</h1>
        <p className={styles.note}>Static page without any dynamic content just static content, styles, images, etc.</p>
    </div>
  )
}

import React from 'react'
import styles from "./Card.module.css";
import Details from "./Details";


function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.pfp}></div>
      <Details />
    

    </div>
  );
}

export default Card;

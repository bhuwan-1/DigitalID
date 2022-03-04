import React from "react";
import styles from "./Card.module.css";
import Buttons from "./Buttons";
import {AiFillTwitterCircle,AiFillFacebook, AiFillInstagram,AiFillGithub} from 'react-icons/ai'




export default function Details() {

  function Footer(){
    return(
      <div className={styles.foot}>

        <div>
          <AiFillTwitterCircle/>
          <AiFillFacebook/>
          <AiFillInstagram/>
          <AiFillGithub/>
        </div>
        
      </div>
    )
  }
  
  

  return (
    <div>
      <div className={styles.det}>
        <h3>Bhuwan Sharma</h3>
        <p className={styles.job}>Frontend Developer</p>
        <p className={styles.site}>bhuws.io</p>
      </div>
      <Buttons />
      <div className={styles.main_cont}>
        <h4>About</h4>
        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        <h4>Interests</h4>
        <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
      </div>
      <Footer/>
    </div>
  );
}

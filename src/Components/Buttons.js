import React from 'react'
import { Button } from '@mui/material';
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import styles from "./Card.module.css";

export default function Buttons() {
  return (
    <div className={styles.btns}>
      <div>
        
        <Button variant="contained" startIcon={<AiOutlineMail />} className={styles.em_btn}>
          Email
        </Button>
        <Button variant="contained" startIcon={<AiFillLinkedin />}>
          LinkedIn
        </Button>
        
      </div>
    </div>
  );
}

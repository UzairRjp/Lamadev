"use client"
import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import newImg from "../../../public/youtube.png"
import newImg1 from "../../../public/fb.png"
import newImg2 from "../../../public/twitter.png"
import newImg3 from "../../../public/instagram.png"


const Footer = () => {
    console.log("Hello")
  return (
    <div className={styles.container }>
     <div>@2023 Lamania, All rights reserved.</div>
     <div>
        <div className={styles.social}>
        <Image src={newImg} alt='facebookImage'  className={styles.icon} height={20} width={20}/>
        <Image src={newImg1} alt='facebookImage' className={styles.icon}  height={20} width={20} />
        <Image src={newImg2} alt='facebookImage' className={styles.icon}  height={20} width={20} />
        <Image src={newImg3} alt='facebookImage' className={styles.icon}  height={20} width={20} />
        </div>
    
     </div>
    </div>
  )
}

export default Footer

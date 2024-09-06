import React from 'react'
import Image from 'next/image';
import styles from '@/styles/profile.module.scss'
function Profile() {
  return (
    <main style={{ padding: "80px 0px 20px 0px", backgroundColor: '#f4f2ee' }}>
        <div className={styles.profile_card} style={{ marginBottom: "20px" }}>
    <div className={styles.main_box}>
     <Image alt='background image' width={100} height={100} className={styles.cover} id="blah" src="https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=800&q=100" />
     <div className={styles.dp}>
     <Image src="/linkdinProfile.jpg" width={200} height={142} alt='profilePic'/>
     </div>

     <div className={styles.box}>
     <div className={styles.main_content}> 
        <h3>Alina Edward</h3>
        <h4>Web Developer@ Zoho Corporation
        </h4>
        <div className={styles.content}>
        <h4>Thoothukudi, Tamil Nadu, India</h4> 
        <ul className={styles.content}>
         <li><span>97 connection</span></li>
         <li><span>contact info</span></li>
      </ul>
   </div>
     </div>
     <div className="current">
         <ul>
            <li className={styles.align}><Image width={50} height={50} alt='company' src="https://lh3.googleusercontent.com/WQuOogmAxhiYTCzHwxyJfq70_Fg5PIJ7zryuFM8dix-jG-6NwgOYtf2OZR6Qq8YSIAOe6g=s85" className={styles.icon} /><span className={` ${styles.cmpy} ${styles.clg}`} >Zoho Corporation</span></li>
            <li className={styles.align}><Image width={50} height={50} alt='college' src="https://lh3.googleusercontent.com/6ih0PuKeKquQ0poB6akePuTvfTRgOkmrSW6nSU24sehKODQoXWL6ek5d1VWzVADrkq9U=s59" className={styles.icon}  /><span className="cmpy">Dr.Sivanthi Aditanar College Of Engineering</span></li>
         </ul>
     </div>
     </div>
     <button className={styles.but}>Open to <i className="fa fa-caret-down"></i></button>
     <button className={styles.but1}>Add Profile section </button>
     <button className={styles.but1}>More...</button>
   </div>
   </div>
   </main>
  )
}

export default Profile
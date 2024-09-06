import React from 'react';
import styles from '@/styles/feed.module.scss'
import Image from 'next/image';

function Feed() {
  return (
   <main style={{paddingTop:"80px", height:"100vh",backgroundColor:'#f4f2ee'}}>
      <div className={styles.feed_card}>
      <div className='d-flex align-items-center'>
          <div className="circle-div flex-shrink-1">
            <Image src="/linkdinProfile.jpg" width={100} height={100} alt='profilePic'/>
          </div>
          <div className='w-100'>
            <button className='w-100'>Start a Post, try writing with AI</button>
          </div>
      </div>
      </div>
   </main>
  )
}

export default Feed
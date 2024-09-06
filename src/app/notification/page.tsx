'use client'
import React, { useContext } from 'react';
import Image from 'next/image';
import styles from '@/styles/notification.module.scss'
import UserContext from '@/context/UserContext';
import { Notification } from '@/context/types';

function Notifications() {
    const { notification } = useContext(UserContext)
  return (
    <main style={{ padding: "80px 0px 20px 0px", backgroundColor: '#f4f2ee' }}>
    <ul className={styles.notification_card} style={{ marginBottom: "20px" }}>
      {notification.map(notification => (
        <li key={notification.id} className={styles.notification}>
          <Image
            width={48}
            height={48}
            className={notification.sharedPost ? `${styles.notification__avatar} ${styles.square}` : styles.notification__avatar}
            src={notification.avatarSrc}
            alt=""
          />
          <div className={styles.notification__body} dangerouslySetInnerHTML={{ __html: notification.body }}></div>
          <div className={styles.notification__interactive}>
            <div className={styles.notification__time}>{notification.time}</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.5rem" id="overflow-web-ios-medium" role="none" data-supported-dps="24x24" fill="currentColor">
              <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
            </svg>
          </div>
        </li>
      ))}
    </ul>
    {/* <button onClick={handleAddNotification}>Add Notification</button> */}
  </main>

  )
}

export default Notifications
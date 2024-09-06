// UserContext.tsx
'use client'
import React, {  ReactNode, useState } from 'react';
import {  Notification } from './types';
import UserContext from './UserContext';

// Sample notifications data
const notifications: Notification[] = [
    {
        id: 1,
        avatarSrc: "https://assets.codepen.io/240751/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.png",
        body: "Congratulate a near-stranger for two years at a job you didn’t know they had.",
        time: "1h",
        button: "Say congrats"
      },
      {
        id: 2,
        avatarSrc: "https://assets.codepen.io/240751/christina-wocintechchat-com-SJvDxw0azqw-unsplash.png",
        body: "<b>Someone</b> looked at your profile! Who? We’re holding that information for ransom.",
        time: "2h"
      },
      {
        id: 3,
        avatarSrc: "https://assets.codepen.io/240751/alexander-hipp-iEEBWgY_6lA-unsplash.png",
        body: "Follow <b>the worst coworker you’ve ever had</b> for their sudden unsolicited insights.",
        time: "8h"
      },
      {
        id: 4,
        avatarSrc: "https://assets.codepen.io/240751/christina-wocintechchat-com-Zpzf7TLj_gA-unsplash.png",
        body: "<b>Somebody</b> connected to <b>your first manager</b> from your job in 2014 reacted to <b>a former classmate’s</b> post. Thought you should know.",
        time: "1d"
      },
      {
        id: 5,
        avatarSrc: "https://assets.codepen.io/240751/kate-bezzubets-UJbqowk5fso-unsplash.png",
        body: "<b>A wannabe influencer</b> shared <b>an incredibly shitty opinion</b> just for the engagement. Click here to engage.",
        time: "2d",
      },
      {
        id: 6,
        avatarSrc: "https://assets.codepen.io/240751/bf.png",
        body: "<b>Destructive, monopolistic corporations</b> are hiring for <b>jobs that kinda sound like yours</b>. …Real estate developer is the same as software developer, right?",
        time: "1w"
      },
      {
        id: 7,
        avatarSrc: "https://assets.codepen.io/240751/1674590195758.jpg",
        body: "You’re <b>one of a few experts</b> invited to <s>do free unpaid labor</s> add to this collaborative article: How do you exploit users without them noticing?",
        time: "1w"
      },
      {
        id: 8,
        avatarSrc: "https://assets.codepen.io/240751/darceystone-photography-KmRM8RkL2ZI-unsplash.png",
        body: "<b>Kris</b>, <b>Taylor</b>, and 36 others at <b>soul-sucking corporation</b> shared <b>this post from the CEO</b> in hopes of avoiding the next round of layoffs.",
        time: "2w",
      },
      {
        id: 9,
        avatarSrc: "https://assets.codepen.io/240751/searches.png",
        body: "<b>You appeared in 28 searches this week</b>. …Is that good? We have no idea either. Try Premium, maybe.",
        time: "3w"
      },
      {
        id: 10,
        avatarSrc: "https://assets.codepen.io/240751/foto-sushi-6anudmpILw4-unsplash.png",
        body: "Wish <b>that guy who made you cry in the bathroom</b> a happy birthday.",
        time: "4w",
        button: "Say happy birthday"
      }
];



export const UserContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notification, setNotification] = useState<Notification[]>(notifications);

  return (
    <UserContext.Provider value={{ notification, setNotification }}>
      {children}
    </UserContext.Provider>
  );
};

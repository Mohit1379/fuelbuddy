// types.ts

export interface SocialCounts {
    reactions: string;
    comments: string;
  }
  
  export interface Notification {
    id: number;
    avatarSrc: string;
    body: string;
    time: string;
    button?: string;
    sharedPost?: string;
    socialCounts?: SocialCounts;
  }
  
  export interface UserContextType {
    notification: Notification[];
    setNotification: React.Dispatch<React.SetStateAction<Notification[]>>;
  }
  
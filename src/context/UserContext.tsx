import React from "react";
import { UserContextType } from './types';

// Initialize with a default value
const defaultContextValue: UserContextType = {
  notification: [],
  setNotification: () => {} // Default no-op function
};

const UserContext = React.createContext<UserContextType>(defaultContextValue);
export default UserContext;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react';

// Create the AppContext
export const AppContext = createContext<AppContextType>({} as AppContextType);

interface AppContextType {
  showDropdown: boolean;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

// AppContextProvider component to wrap the application or specific parts of it
export const AppContextProvider = ({ children }: any) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <AppContext.Provider
      value={{
        showDropdown,
        setShowDropdown
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

import { createContext, useState } from 'react';

export const SidebarContext = createContext({
  showSidebar: false,
  toggleSidebar: () => {},
  closeSidebar: () => {},
});

export const SidebarProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar((prevState) => !prevState);
  const closeSidebar = () => setShowSidebar(false);

  return (
    <SidebarContext.Provider
      value={{ showSidebar, toggleSidebar, closeSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

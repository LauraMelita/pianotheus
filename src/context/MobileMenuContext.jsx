import { createContext, useState, useContext } from 'react';

const MobileMenuContext = createContext({
  menus: {
    slider: {
      open: false,
      toggle: () => {},
      close: () => {},
    },
    drawer: {
      open: false,
      toggle: () => {},
      close: () => {},
    },
  },
});

const configureMenuState = (state, setState) => ({
  open: state,
  toggle: () => setState((prevState) => !prevState),
  close: () => setState(false),
});

export const MobileMenuProvider = ({ children }) => {
  const [openSlider, setOpenSlider] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const menus = {
    slider: configureMenuState(openSlider, setOpenSlider),
    drawer: configureMenuState(openDrawer, setOpenDrawer),
  };

  return (
    <MobileMenuContext.Provider value={{ menus }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export const useMobileMenuContext = () => useContext(MobileMenuContext);

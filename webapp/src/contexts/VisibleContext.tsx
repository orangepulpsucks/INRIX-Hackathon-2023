import { createContext, useState } from "react";

interface IMyContext {
  visible: boolean;
  visibleRoute: boolean;
  setVisible: Function;
  setVisibleRoute: Function;
}

export const VisibleContext = createContext<IMyContext>({
  visible: false,
  visibleRoute: false,
  setVisible: () => {},
  setVisibleRoute: () => {},
});

export const VisibleContextProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [visibleRoute, setVisibleRoute] = useState(false);

  return (
    <VisibleContext.Provider
      value={{ visible, setVisible, visibleRoute, setVisibleRoute }}
    >
      {children}
    </VisibleContext.Provider>
  );
};

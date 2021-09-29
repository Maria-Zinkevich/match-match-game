import { createContext, useState, useContext } from "react";

const openCardsContext = createContext();

export const ImageProvider = ({ children }) => {
  const [openCards, setOpenCards] = useState([]);

  return (
    <openCardsContext.Provider value={{ openCards, setOpenCards }}>
      {children}
    </openCardsContext.Provider>
  );
};

export const useImages = () => {
  const openCardsArray = useContext(openCardsContext);
  return openCardsArray;
};

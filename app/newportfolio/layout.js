"use client";
import { AppContextProvider } from "@context/AppContext";

import LayoutContainer from "./LayoutContainer";
import { IconContext } from "react-icons";

const NewPortfolioLayout = (props) => {
  return (
    <AppContextProvider>
      <IconContext.Provider value={{ color: "darkgrey" }}>
        <LayoutContainer {...props} />
      </IconContext.Provider>
    </AppContextProvider>
  );
};

export default NewPortfolioLayout;

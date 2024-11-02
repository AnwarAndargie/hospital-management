import React from "react";
import {
  assets,
  doctors,
  specialityData,
} from "../../public/assets/assets_frontend/assets";
import { createContext } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const shared = { assets, doctors, specialityData };
  return <AppContext.Provider value={shared}>{children}</AppContext.Provider>;
}

export default AppContextProvider;

import React, { createContext, useContext } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { IUserStore } from "./types/types";
import UserStore from "./store/userStore";

const Context = createContext<IUserStore>({} as IUserStore);
export const useContextMob = () => useContext(Context);

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
    }}
  >
    <App />
  </Context.Provider>,
);

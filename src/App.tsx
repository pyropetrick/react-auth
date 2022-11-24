import { BrowserRouter } from "react-router-dom";
import { AppRouter, NavBar } from "./components";

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
};

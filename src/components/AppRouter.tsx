import { Route, Routes, Navigate } from "react-router-dom";
import { useContextMob } from "..";
import { Path } from "../config/path";
import { Login, Home, Registration } from "../pages";

export const AppRouter = () => {
  const { user } = useContextMob();
  return (
    <Routes>
      {user.isAuth && <Route path={Path.HOME} element={<Home />} />}
      <Route path={Path.LOGIN} element={<Login />} />
      <Route path={Path.REGISTRATION} element={<Registration />} />
    </Routes>
  );
};

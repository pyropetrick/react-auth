import { Route, Routes, Navigate } from "react-router-dom";
import { useContextMob } from "..";
import { Path } from "../config/path";
import { Login, Home, Registration, AdminPanel } from "../pages";

export const AppRouter = () => {
  const { user } = useContextMob();
  return (
    <Routes>
      {user.isAuth && <Route path={Path.ADMIN} element={<AdminPanel />} />}
      <Route path={Path.LOGIN} element={<Login />} />
      <Route path={Path.REGISTRATION} element={<Registration />} />
      <Route path={Path.HOME} element={<Home />} />
    </Routes>
  );
};

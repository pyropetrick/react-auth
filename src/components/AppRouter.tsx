import { observer } from "mobx-react-lite";
import { Route, Routes, Navigate } from "react-router-dom";

import { Path } from "../config/path";
import { Login, Home, Registration } from "../pages";
import userStore from "../store/userStore";

export const AppRouter = observer(() => {
  return (
    <Routes>
      {userStore.auth && <Route path={Path.HOME} element={<Home />} />}
      <Route path={Path.LOGIN} element={<Login />} />
      <Route path={Path.REGISTRATION} element={<Registration />} />
    </Routes>
  );
});

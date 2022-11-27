import { observer } from "mobx-react-lite";
import { redirect, Route, Routes, useNavigate } from "react-router-dom";
import { Path } from "../config/path";
import { Login, Home, Registration } from "../pages";
import userStore from "../store/userStore";
import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { auth } from "../http/userApi";

export const AppRouter = observer(() => {
  const { isAuthificate } = userStore;
  const navigate = useNavigate();
  useEffect(() => {
    isAuthificate ? navigate(Path.HOME) : navigate(Path.LOGIN);
  }, [isAuthificate]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    auth()
      .then((t) => userStore.setAuth(true))
      .then((t) => setLoading(false))
      .catch((e) => {
        setLoading(false);
        redirect(Path.LOGIN);
      });
  }, []);
  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-center">
        <Spinner animation="border" />
      </Container>
    );
  }
  return (
    <Routes>
      {isAuthificate && <Route path={Path.HOME} element={<Home />} />}
      {!isAuthificate && (
        <>
          <Route path={Path.LOGIN} element={<Login />} />
          <Route path={Path.REGISTRATION} element={<Registration />} />
        </>
      )}
    </Routes>
  );
});

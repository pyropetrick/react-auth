import { observer } from "mobx-react-lite";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Path } from "../config/path";
import userStore from "../store/userStore";
import jwt_decode from "jwt-decode";

export const NavBar = observer(() => {
  const { logoutUser, isAuthificate } = userStore;
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      const tokenDecode: any = jwt_decode(token as string);
      await logoutUser(tokenDecode.id);
      localStorage.removeItem("token");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink to={Path.HOME} className="text-white text-decoration-none">
          Auth App
        </NavLink>
        {!isAuthificate ? (
          <Nav className="ml-auto gap-2" style={{ color: "white" }}>
            <Button variant="outline-light">
              <NavLink to={Path.LOGIN} className="text-white text-decoration-none">
                Sign in
              </NavLink>
            </Button>
            <Button variant="outline-light">
              <NavLink to={Path.REGISTRATION} className="text-white text-decoration-none">
                Sign up
              </NavLink>
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto gap-2" style={{ color: "white" }}>
            <Button variant="outline-light" onClick={handleLogout}>
              Logout
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

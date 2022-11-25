import { observer } from "mobx-react-lite";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Path } from "../config/path";
import userStore from "../store/userStore";

export const NavBar = observer(() => {
  const handleLogout = () => userStore.setAuth(false);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to={Path.HOME} className="text-white text-decoration-none">
          Auth App
        </Link>
        {!userStore.auth ? (
          <Nav className="ml-auto gap-2" style={{ color: "white" }}>
            <Button variant="outline-light" onClick={() => userStore.setAuth(true)}>
              Sign in
            </Button>
            <Button variant="outline-light">Sign up</Button>
          </Nav>
        ) : (
          <Nav className="ml-auto gap-2" style={{ color: "white" }}>
            <Button variant="outline-light">Admin Panel</Button>
            <Button variant="outline-light" onClick={handleLogout}>
              Logout
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContextMob } from "..";
import { Path } from "../config/path";

export const NavBar = () => {
  const { user } = useContextMob();
  const handleLogout = () => user.setIsAuth(false);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to={Path.HOME} className="text-white text-decoration-none">
          Auth App
        </Link>
        {!user.isAuth ? (
          <Nav className="ml-auto gap-2" style={{ color: "white" }}>
            <Button variant="outline-light">Sign in</Button>
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
};

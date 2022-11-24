import { Button, Container, Nav, Navbar } from "react-bootstrap";

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ color: "white" }}>
      <Container>
        <Nav.Link href="#home" className="blue">
          Auth App
        </Nav.Link>
        <Nav className="ml-auto">
          <Button variant="outline-light">Login</Button>
          <Button variant="outline-light">Registration</Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

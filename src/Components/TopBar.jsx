import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const TopBar = () => {
  const location = useLocation();
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <Link className={`nav-link ${location.pathname === "/" && "active"}`} to="/">
            React-Bootstrap
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#deets">
              <Link className={`nav-link ${location.pathname === "learn" && "active"}`} to="learn">
                Learn
              </Link>
            </Nav.Link>
            <Nav.Link href="#deets">
              <Link className={`nav-link ${location.pathname === "learn" && "active"}`} to="learn">
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;

import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const TopBar = () => {
  const location = useLocation();
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand>
          <Link
            style={{ color: "white", border: "2px solid" }}
            className={`nav-link ${location.pathname === "/" && "active"}`}
            to="/"
          >
            IoLavoro
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link
              style={{ color: "white" }}
              className={`nav-link ${location.pathname === "learn" && "active"}`}
              to="learn"
            >
              Learn
            </Link>

            <Link
              style={{ color: "white" }}
              className={`nav-link ${location.pathname === "about-us" && "active"}`}
              to="about-us"
            >
              About Us
            </Link>

            <Link
              style={{ color: "white" }}
              className={`nav-link ${location.pathname === "contact" && "active"}`}
              to="contact"
            >
              Contact
            </Link>

            <Dropdown className="mx-3">
              <Dropdown.Toggle variant="success" className="px-3" id="dropdown-basic">
                Join
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link className={`nav-link ${location.pathname === "contact" && "active"}`} to="contact">
                    Login
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className={`nav-link ${location.pathname === "contact" && "active"}`} to="contact">
                    Register
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;

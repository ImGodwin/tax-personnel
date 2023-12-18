import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const TopBar = () => {
  const token = useSelector(state => state.user.token);
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
              to="/about-us"
            >
              About Us
            </Link>

            <Link
              style={{ color: "white" }}
              className={`nav-link ${location.pathname === "contact" && "active"}`}
              to="/contact"
            >
              Contact
            </Link>

            <Dropdown className="mx-3">
              <Dropdown.Toggle variant="success" className="px-3" id="dropdown-basic">
                Become a Collaborator
                {/*this becomes a button, then the login/logout will be beside it 
                the profile only appears if user is logged in */}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link className={`nav-link ${location.pathname === "/login" && "active"}`} to="/login">
                    Login
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className={`nav-link ${location.pathname === "/register" && "active"}`} to="/register">
                    Register
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
        {token !== "" && (
          <Link style={{ color: "white" }} className={`nav-link ${location.pathname === "me" && "active"}`} to="/me">
            Profile
          </Link>
        )}
      </Container>
    </Navbar>
  );
};

export default TopBar;

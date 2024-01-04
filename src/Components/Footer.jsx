import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <div className="bg-dark mt-5" style={{ height: "80px" }}>
      <div className="d-flex justify-content-center align-self-center">
        <Link
          style={{ color: "white" }}
          className={`nav-link ${location.pathname === "learn" && "active"} mx-3`}
          to="learn"
        >
          Learn
        </Link>

        <Link
          style={{ color: "white" }}
          className={`nav-link ${location.pathname === "about-us" && "active"} mx-3`}
          to="/about-us"
        >
          About Us
        </Link>

        <Link
          style={{ color: "white" }}
          className={`nav-link ${location.pathname === "contact" && "active"} mx-3`}
          to="/contact"
        >
          Contact
        </Link>
      </div>

      <p className="d-flex justify-content-center align-items-center" style={{ color: "white" }}>
        ©IoLavoro 2023
      </p>
    </div>
  );
};

export default Footer;

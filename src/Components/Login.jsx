import { useState } from "react";
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { logout, userLogin } from "../redux/action";

const Login = () => {
  const loginDetails = useSelector(state => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (propertyName, propertyValue) => {
    setLogin({ ...login, [propertyName]: propertyValue });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(userLogin(login)).then(() => navigate("/"));
    //console.log(loginDetails);
  };

  return (
    <>
      <Container className=" mt-5 w-75 " style={{ height: "100vh" }}>
        <div className="d-flex row border border-dark bg-secondary-subtle justify-content-evenly p-5">
          <Col md={12} lg={6} className="">
            <Image
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
              src="https://images.unsplash.com/photo-1580377968103-84cadc052dc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Col>
          <Col className="" md={12} lg={6}>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel>Enter email</FormLabel>
                <FormControl
                  type="text"
                  placeholder="email"
                  onChange={mail => {
                    handleChange("email", mail.target.value);
                  }}
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Enter password</FormLabel>
                <FormControl
                  type="password"
                  placeholder="password"
                  onChange={credential => {
                    handleChange("password", credential.target.value);
                  }}
                  required
                />
              </FormGroup>

              <div className="d-flex">
                <Button type="submit" className="bg-success mt-3 me-auto px-4">
                  Login
                </Button>
              </div>

              {/* <div className="d-flex">
                <Button onClick={() => dispatch(logout())} type="submit" className="bg-success mt-3 me-auto px-4">
                  Logout
                </Button>
              </div> */}
              <p className="d-flex me-auto mt-3">
                If you're not registered, click <Link to={"/register"}> here</Link>
              </p>
              <p className="d-flex me-auto">
                Return to <Link to={"/"}> home</Link> page
              </p>
            </Form>
          </Col>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default Login;

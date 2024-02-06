import { useEffect, useState } from "react";
import { Button, Container, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/action";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const nav = useNavigate();

  const [register, setRegister] = useState({
    name: "",
    surname: "",
    email: "",
    telephone: "",
    address: "",
    cityName: "",
    pIva: "",
    description: "",
    password: "",
  });

  const handleChange = (propertyName, propertyValue) => {
    setRegister({ ...register, [propertyName]: propertyValue });
  };

  const handleSubmit = event => {
    event.preventDefault();
    //console.log(register);
    //fetch save here then useEffect
    dispatch(registerUser(register)).then(() => nav("/login"));
  };

  useEffect(() => {
    console.log("registered");
  }, []);

  return (
    <>
      <Container className="mt-5 w-50">
        <div className="display-5 mb-3" style={{ color: "green" }}>
          Enter details correctly
        </div>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel className="d-flex mt-3" style={{ color: "green" }}>
              name
            </FormLabel>
            <FormControl
              type="text"
              onChange={firstName => {
                handleChange("name", firstName.target.value);
              }}
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabel className="d-flex mt-3" style={{ color: "green" }}>
              surname
            </FormLabel>
            <FormControl
              type="text"
              onChange={lastName => {
                handleChange("surname", lastName.target.value);
              }}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel className="d-flex mt-3" style={{ color: "green" }}>
              email
            </FormLabel>
            <FormControl
              type="text"
              onChange={mail => {
                handleChange("email", mail.target.value);
              }}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel className="d-flex mt-3" style={{ color: "green" }}>
              telephone number
            </FormLabel>
            <FormControl
              type="text"
              onChange={cellNum => {
                handleChange("telephone", cellNum.target.value);
              }}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel className="d-flex mt-3" style={{ color: "green" }}>
              address
            </FormLabel>
            <FormControl
              type="text"
              onChange={addy => {
                handleChange("address", addy.target.value);
              }}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel className="d-flex mt-3" style={{ color: "green" }}>
              cityName
            </FormLabel>
            <FormControl
              type="text"
              onChange={location => {
                handleChange("cityName", location.target.value);
              }}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel className="d-flex mt-3" style={{ color: "green" }}>
              Partita Iva
            </FormLabel>
            <FormControl
              type="text"
              onChange={credential => {
                handleChange("pIva", credential.target.value);
              }}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel className="d-flex mt-3" style={{ color: "green" }}>
              description
            </FormLabel>
            <FormControl
              as="textarea"
              type="text"
              onChange={longText => {
                handleChange("description", longText.target.value);
              }}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel className="d-flex mt-3" style={{ color: "green" }}>
              password
            </FormLabel>
            <FormControl
              type="password"
              onChange={credential => {
                handleChange("password", credential.target.value);
              }}
              required
            />
          </FormGroup>

          <div className="d-flex">
            <Button type="submit" className="bg-success mt-3 me-auto px-4">
              Register
            </Button>
          </div>
          <p className="d-flex me-auto mt-3">
            Go to <Link to={"/login"}> login page</Link>
          </p>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default RegisterPage;

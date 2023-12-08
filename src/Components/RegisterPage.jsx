import { useState } from "react";
import { Button, Container, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { Link } from "react-router-dom";

const RegisterPage = () => {
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

    //fetch save here then useEffect
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Enter email</FormLabel>
          <FormControl
            type="text"
            placeholder="name"
            onChange={firstName => {
              handleChange("name", firstName.target.value);
            }}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Enter password</FormLabel>
          <FormControl
            type="text"
            placeholder="password"
            onChange={credential => {
              handleChange("password", credential.target.value);
            }}
            required
          />
        </FormGroup>

        <div className="d-flex">
          <Button className="bg-success mt-3 me-auto px-4">Login</Button>
        </div>
        <p className="d-flex me-auto mt-3">
          If you're not registered, click <Link to={"/register"}> here</Link>
        </p>
      </Form>
    </Container>
  );
};

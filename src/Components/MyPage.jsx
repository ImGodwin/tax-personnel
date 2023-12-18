import { Button, Container, Form, FormControl, FormGroup, FormLabel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProfile } from "../redux/action";

const MyPage = () => {
  const myProfileEdit = useSelector(state => state.me.content);
  const dispatch = useDispatch();
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
    dispatch(editProfile(register));
    //fetch save here then useEffect
  };

  /*  useEffect(() => {
    handleSubmit();
  }, []); */

  return (
    <>
      <div className="mt-5">
        <Image src={myProfileEdit.image} style={{ height: "200px", borderRadius: "25%" }} />
      </div>

      <Container className="mt-5 w-50">
        <div className="display-5 mb-3" style={{ color: "green" }}>
          Update Profile
        </div>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel className="d-flex mt-3" style={{ color: "green" }}>
              {myProfileEdit.name}
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
              {myProfileEdit.surname}
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
              {myProfileEdit.telephone}
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
              {myProfileEdit.address}
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
              {myProfileEdit.cityName}
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
              {myProfileEdit.piva}
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
              {myProfileEdit.description}
            </FormLabel>
            <FormControl
              as="textarea"
              type="text"
              onChange={longText => {
                handleChange("decription", longText.target.value);
              }}
              required
            />
          </FormGroup>
          <Button className="mt-3" variant="success">
            Update
            {/* add a means to delete profile below */}
          </Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default MyPage;

import { Alert, Button, Container, Form, FormControl, FormGroup, FormLabel, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePersonnel as dp, editProfile } from "../redux/action";

const MyPage = () => {
  const myProfileEdit = useSelector(state => state.me.content);
  //const deletePersonnel = useSelector(state => state.personnel.personnelArr);
  const myToken = useSelector(state => state.user.token);
  //console.log("my token", myToken);
  //console.log("personnel check", myProfileEdit);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [update, setUpdate] = useState({
    name: "",
    surname: "",
    telephone: "",
    address: "",
    cityName: "",
    pIva: "",
    description: "",
  });

  const [alert, setAlert] = useState(false);

  const handleChange = (propertyName, propertyValue) => {
    setUpdate({ ...update, [propertyName]: propertyValue });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(editProfile(update)).then(() => {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
        navigate("/");
      }, 2000);
    });
    //fetch save here then useEffect
  };

  /*  useEffect(() => {
    handleSubmit();
  }, []); */

  //if (!myProfileEdit) return null;
  return (
    <>
      {alert && <Alert variant="success">Updated Successfully</Alert>}
      myProfileEdit && (
      <>
        <div className="mt-5">
          <Image src={myProfileEdit?.image} style={{ height: "200px", borderRadius: "25%" }} />
        </div>

        <Container className="mt-5 w-50">
          <div className="display-5 mb-3" style={{ color: "green" }}>
            Update Profile
          </div>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel className="d-flex mt-3" style={{ color: "green" }}></FormLabel>
              <FormControl
                type="text"
                placeholder={myProfileEdit.name}
                onChange={firstName => {
                  handleChange("name", firstName.target.value);
                }}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel className="d-flex mt-3" style={{ color: "green" }}></FormLabel>
              <FormControl
                type="text"
                placeholder={myProfileEdit.surname}
                onChange={lastName => {
                  handleChange("surname", lastName.target.value);
                }}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel className="d-flex mt-3" style={{ color: "green" }}></FormLabel>
              <FormControl
                type="text"
                placeholder={myProfileEdit.telephone}
                onChange={cellNum => {
                  handleChange("telephone", cellNum.target.value);
                }}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel className="d-flex mt-3" style={{ color: "green" }}></FormLabel>
              <FormControl
                type="text"
                placeholder={myProfileEdit.address}
                onChange={addy => {
                  handleChange("address", addy.target.value);
                }}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel className="d-flex mt-3" style={{ color: "green" }}></FormLabel>
              <FormControl
                type="text"
                placeholder={myProfileEdit.cityName}
                onChange={location => {
                  handleChange("cityName", location.target.value);
                }}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel className="d-flex mt-3" style={{ color: "green" }}></FormLabel>
              <FormControl
                type="text"
                placeholder={myProfileEdit.piva}
                onChange={credential => {
                  handleChange("pIva", credential.target.value);
                }}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel className="d-flex mt-3" style={{ color: "green" }}></FormLabel>
              <FormControl
                as="textarea"
                type="text"
                placeholder={myProfileEdit.description}
                onChange={longText => {
                  handleChange("decription", longText.target.value);
                }}
                required
              />
            </FormGroup>
            <Button type="submit" className="mt-3 mb-3" variant="success">
              Update
            </Button>
          </Form>
          <Button
            className="bg-danger border-0"
            onClick={() => {
              dp({ onSuccess: () => navigate("/"), id: myProfileEdit.id, token: myToken });
            }}
          >
            Click to delete profile
          </Button>
        </Container>
        <Footer />
      </>
      )
    </>
  );
};

export default MyPage;

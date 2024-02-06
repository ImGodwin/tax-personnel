import { Col, Container, Row } from "react-bootstrap";
import SingleCollaborator from "./SingleCollaborator";
import GoogleMap from "../mapFolder/GoogleMap";
import { useLocation } from "react-router-dom";

const PersonnelPage = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const lat = queryParams.get("lat");
  const lng = queryParams.get("lng");

  return (
    <Container>
      <Row>
        <Col lg={4}>
          <GoogleMap position={{ lat, lng }} />
        </Col>
        <Col lg={8}>
          <SingleCollaborator />
        </Col>
      </Row>
    </Container>
  );
};

export default PersonnelPage;

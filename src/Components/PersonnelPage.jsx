import { Col, Container, Row } from "react-bootstrap";
import GoogleMap from "./GoogleMap";
import SingleCollaborator from "./SingleCollaborator";

const PersonnelPage = () => {
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <GoogleMap />
        </Col>
        <Col lg={8}>
          <SingleCollaborator />
        </Col>
      </Row>
    </Container>
  );
};

export default PersonnelPage;

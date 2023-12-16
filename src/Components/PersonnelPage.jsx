import { Col, Container, Row } from "react-bootstrap";
import SingleCollaborator from "./SingleCollaborator";
import PersonnelMap from "./PersonnelMap";

const PersonnelPage = () => {
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <PersonnelMap />
        </Col>
        <Col lg={8}>
          <SingleCollaborator />
        </Col>
      </Row>
    </Container>
  );
};

export default PersonnelPage;

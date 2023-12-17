import { Col, Container, Row } from "react-bootstrap";
import GoogleMap from "./GoogleMap";
import Cities from "./Cities";

const MapAndCity = () => {
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <GoogleMap />
        </Col>
        <Col lg={8}>
          <Cities />
        </Col>
      </Row>
    </Container>
  );
};

export default MapAndCity;

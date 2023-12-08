import { Col, Container, Row } from "react-bootstrap";
import City from "./City";
import GoogleMap from "./GoogleMap";
const MapAndCity = () => {
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <GoogleMap />
        </Col>
        <Col lg={8}>
          <City />
        </Col>
      </Row>
    </Container>
  );
};
export default MapAndCity;

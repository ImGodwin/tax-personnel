import { Col, Container, Row } from "react-bootstrap";
import Map from "./Map";
import City from "./City";
const MapAndCity = () => {
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <Map />
        </Col>
        <Col lg={8}>
          <City />
        </Col>
      </Row>
    </Container>
  );
};
export default MapAndCity;

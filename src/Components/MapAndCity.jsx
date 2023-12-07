import { Col, Container, Row } from "react-bootstrap";
import Map from "./Map";
const MapAndCity = () => {
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <Map />
        </Col>
        <Col lg={7}></Col>
      </Row>
    </Container>
  );
};
export default MapAndCity;

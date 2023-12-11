import { Col, Container, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const City = () => {
  return (
    <Container className="mb-5 ">
      <Row xs={12} md={8} lg={8} className="d-flex justify-content-evenly gy-5">
        <Col>
          <Link to={"/collaborators"}>
            <Image
              style={{ height: "150px" }}
              className="rounded"
              src="https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Link>
        </Col>

        <Col>
          <Image
            style={{ height: "150px" }}
            className="rounded"
            src="https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Col>

        <Col>
          <Image
            style={{ height: "150px" }}
            className="rounded"
            src="https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Col>

        <Col>
          <Image
            style={{ height: "150px" }}
            className="rounded"
            src="https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Col>

        <Col>
          <Image
            style={{ height: "150px", borderRadius: "50% rounded" }}
            className="rounded"
            src="https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Col>

        <Col>
          <Image
            style={{ height: "150px", borderRadius: "50% rounded" }}
            className="rounded"
            src="https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default City;

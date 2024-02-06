import { Col, Container, Image } from "react-bootstrap";
import Footer from "../Footer";

const Contact = () => {
  return (
    <>
      <Container className=" mt-5 w-75 " style={{ height: "100vh" }}>
        <div className="d-flex row border border-dark bg-secondary-subtle justify-content-evenly p-5">
          <Col md={12} lg={6} className="">
            <Image
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
              src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Col>
          <Col className="align-self-center" md={12} lg={6}>
            <h3>Contact Details</h3>
            <div>
              Phone: <strong>351234567</strong>
            </div>
            <div>
              Email: <strong> iolavoro@mail.com</strong>
            </div>
          </Col>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default Contact;

import { Card, Col, Container, Row } from "react-bootstrap";

const Duty = () => {
  return (
    <>
      <div className="display-5 mb-4" style={{ color: "green" }}>
        Why choose us?
      </div>

      <Container className="h-50 mb-4 d-flex">
        <Row className="d-flex justify-content-evenly gy-5">
          <Col xs={12} lg={5}>
            <Card className="border-0 ">
              <Card.Body>
                <Card.Title style={{ color: "green" }}>WE KEEP THINGS SIMPLE</Card.Title>
                <Card.Text>
                  There will always be a place in the world for traditional high cost tax preparers. If you prefer a tax
                  preparer with an expensive office on a triple-A location, we know lots of firms that would be happy to
                  charge you for the privilege. Embracing technology as a tool to improve our service, we are fast and
                  efficient.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="border-0" xs={12} lg={5}>
            <Card className="border-0 ">
              <Card.Body>
                <Card.Title style={{ color: "green" }}>OUR FLAT FEE STRUCTURE</Card.Title>
                <Card.Text>
                  Unexpected bills can be frustrating and cause dissatisfaction. That’s why we publish our rates. For
                  most projects, we offer flat-fee service. There’s no guess work – you know exactly how much the entire
                  project will cost. If we end up spending more time than anticipated, you won’t owe anything extra.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="border-0" xs={12} lg={5}>
            <Card className="border-0 ">
              <Card.Body>
                <Card.Title style={{ color: "green" }}>OUR EXPERIENCE</Card.Title>
                <Card.Text>
                  Our team of experienced tax professionals are here to help anyone dealing with the tax system. Our
                  clients include people living abroad, foreigners investing in abroad. and financial advisors seeking
                  help with P.Iva. estate and gift tax-related questions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="border-0" xs={12} lg={5}>
            <Card className="border-0 ">
              <Card.Body>
                <Card.Title style={{ color: "green" }}>WE CARE</Card.Title>
                <Card.Text>
                  When you contact us with a question, we’ll respond within one business day. IoLavoro Tax Services is
                  built to provide smart, flexible, and client-focused Italian tax services.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Duty;

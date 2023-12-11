import { Button, Col, Container, Image, Row } from "react-bootstrap";

const SingleCollaborator = () => {
  return (
    <Container>
      <Row className="d-flex">
        <Col md={3} lg={3}>
          <Image
            style={{ height: "150px" }}
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
          />
        </Col>
        <Col md={3} className=" justify-content-start ">
          <div className="">
            <h3 className="d-flex mt-0 ms-0">Name</h3>
           {/*  <div className="w-100">
              dfvhADKafnfn,.AFNKdm,fgn ejebgfvJ,DCKdnfkjb.kudghfkjDFJbkbgf FMBSJBFBSbvMSMBGFJBSFMNGBA,
              SFJBGNQBSFJAF,BVFSHDVFJBGHQRJGLNQETJGHQKERNRGLQERGH.JETLKGHQKERNGTKJ.QHERKJNGQKERHKGQ 
                <Button className="ms-0">Contact Me</Button>
            </div> */}

            
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleCollaborator;

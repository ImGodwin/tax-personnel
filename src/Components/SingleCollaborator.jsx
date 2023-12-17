import { useEffect } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllPersonnel } from "../redux/action";

const SingleCollaborator = () => {
  //const param = useParams();

  const taxPersonnelArray = useSelector(state => state.personnel.personnelArr);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPersonnel());
    console.log("mounted");
  }, []);
  return (
    <Container>
      <Row className="">
        {taxPersonnelArray.map(singleCollaborator => (
          <Col key={singleCollaborator.id} md={3} lg={3}>
            <Image style={{ height: "150px" }} src={singleCollaborator.image} />
          </Col>
        ))}

        <Col md={3} className=" justify-content-start ">
          <h3 className="d-flex mt-0 ms-0">Name</h3>
          <div>
            <p className="">dfvhADKafnfn,.AFNKdm,fgn ejebgfvJ,</p>
          </div>
          <Button className="ms-0">Contact Me</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleCollaborator;

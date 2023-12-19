import { useEffect } from "react";
import { Card, CardImg, Col, Container, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllPersonnel } from "../redux/action";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const SingleCollaborator = () => {
  const location = useLocation();
  //console.log(location.search);

  const params = useParams();
  console.log(params, "the params");

  const queryParams = new URLSearchParams(location.search);
  //const cityId = queryParams.get("cityId");
  const cityId = params.id;

  const token = useSelector(state => state.user.token);
  const taxPersonnelArray = useSelector(state => state.personnel.personnelArr);
  //console.log("tax", taxPersonnelArray[0]);
  const dispatch = useDispatch();

  const filteredTaxPersonnel = taxPersonnelArray.filter(personnel => {
    return cityId && cityId === "all" ? personnel : cityId ? personnel.city.id === cityId : [];
  });

  useEffect(() => {
    dispatch(getAllPersonnel(token));
    console.log("mounted");
  }, []);
  return (
    <Container>
      <Row className="">
        {cityId && filteredTaxPersonnel.length > 0 ? (
          filteredTaxPersonnel.map(singleCollaborator => (
            <>
              <Card key={singleCollaborator.id}>
                <Card.Header>Financial Advisor in: {singleCollaborator.cityName}</Card.Header>
                <Col md={3} lg={3}>
                  <CardImg style={{ height: "150px" }} src={singleCollaborator.image} />
                  {/* <Image style={{ height: "150px" }} src={singleCollaborator.image} /> */}
                </Col>
                <Col md={3} className=" justify-content-start ">
                  <Card.Body>
                    <Card.Title>{singleCollaborator.name}</Card.Title>
                    <Card.Text>{singleCollaborator.address}</Card.Text>
                    <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                      <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">{singleCollaborator.name}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <h5>{singleCollaborator.address}</h5>
                        <p>{singleCollaborator.telephone}</p>
                        <p>{singleCollaborator.email}</p>
                        <p>{singleCollaborator.piva}</p>
                      </Modal.Body>
                    </Modal>
                  </Card.Body>
                </Col>
              </Card>
            </>
          ))
        ) : (
          <div>No city found</div>
        )}
      </Row>
    </Container>
  );
};

export default SingleCollaborator;

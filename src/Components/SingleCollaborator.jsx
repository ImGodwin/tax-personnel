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
              <Card className="mb-3 d-flex" key={singleCollaborator.id}>
                <Card.Header>
                  <strong> Financial Advisor in: {singleCollaborator.cityName}</strong>
                </Card.Header>
                <Row>
                  <Col className="d-flex" md={5} lg={3}>
                    <CardImg className="align-self-center" style={{ height: "150px" }} src={singleCollaborator.image} />
                    {/* <Image style={{ height: "150px" }} src={singleCollaborator.image} /> */}
                  </Col>
                  <Col md={5} lg={7}>
                    <Card.Body>
                      <Card.Text>
                        <div>
                          Name: <strong>{singleCollaborator.name}</strong>
                        </div>

                        <div>
                          Address: <strong>{singleCollaborator.address}</strong>
                        </div>
                        <div>
                          Phone Num: <strong>{singleCollaborator.telephone}</strong>
                        </div>
                        <div>
                          Email: <strong>{singleCollaborator.email}</strong>
                        </div>
                        <div>
                          Partita Iva: <strong>{singleCollaborator.piva}</strong>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
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

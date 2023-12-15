import { useEffect } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCities } from "../redux/action";

const City = () => {
  const cityArray = useSelector(state => state.city.content);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCities());
  });
  return (
    <Container className="mb-5 ">
      {cityArray.map(singleCity => (
        <Row xs={12} md={8} lg={8} className="d-flex justify-content-evenly gy-5">
          <Col key={singleCity.id}>
            <Link to={"/collaborators"}>
              <Image style={{ height: "150px" }} className="rounded" src={singleCity.avatar} />
            </Link>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default City;

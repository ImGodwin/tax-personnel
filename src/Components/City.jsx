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
    console.log("mounted");
  }, []);
  return (
    <Container className="mb-5 ">
      <Row xs={12} md={8} lg={8} className="d-flex justify-content-evenly gy-5">
        {cityArray.map(singleCity => (
          <Col key={singleCity.id}>
            <Link to={`/collaborators/${singleCity.latitude}/${singleCity.longitude}`}>
              <Image style={{ height: "150px" }} className="rounded" src={singleCity.avatar} />
            </Link>
            <div style={{ color: "green" }} className="mt-2">
              {singleCity.name}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default City;

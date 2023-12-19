import { useEffect } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllCities } from "../redux/action";

const Cities = () => {
  const cityArray = useSelector(state => state.city.content);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllCities());
    console.log(cityArray[0]);
  }, []);
  return (
    <Container className="mb-5 ">
      <Link to={`/collaborators/all`}>View All</Link>
      <Row xs={12} md={8} lg={8} className="d-flex justify-content-evenly gy-5">
        {cityArray.map(({ id, latitude, longitude, avatar, name }) => (
          <Col key={id}>
            <Link to={`/collaborators/${id}?lat=${latitude}&lng=${longitude}`}>
              <Image style={{ height: "150px" }} className="rounded" src={avatar} />
            </Link>
            <div style={{ color: "green" }} className="mt-2">
              {name}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cities;

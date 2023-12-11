import { Container, Image } from "react-bootstrap";

const CityImage = () => {
  return (
    <Container d-flex className="mb-5 ms-0 me-0">
      <Image
        style={{ height: "500px", objectFit: "cover" }}
        src="https://plus.unsplash.com/premium_photo-1661903125488-45354aea2d27?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </Container>
  );
};

export default CityImage;

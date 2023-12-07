import { Carousel, Image } from "react-bootstrap";

const AboveTheFold = () => {
  return (
    <Carousel fluid="md" fade className="mb-5">
      <Carousel.Item>
        <span>
          <h1>Open a Partita Iva</h1>
        </span>
        <Image
          style={{ height: "500px", width: "100%", objectFit: "cover" }}
          src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          text="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          style={{ height: "500px", width: "100%", objectFit: "cover" }}
          src="https://images.unsplash.com/photo-1573164574397-dd250bc8a598?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          text="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default AboveTheFold;

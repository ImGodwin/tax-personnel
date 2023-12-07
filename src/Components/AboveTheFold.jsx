import { Carousel, Image } from "react-bootstrap";

const AboveTheFold = () => {
  return (
    <Carousel fluid="md" fade className="mb-5">
      <Carousel.Item>
        <Carousel.Caption>
          <span>
            <h1 style={{ height: "250px", fontWeight: "bolder" }}>We have a pension plan for you</h1>
          </span>
        </Carousel.Caption>
        <Image
          style={{ height: "500px", width: "100%", objectFit: "cover" }}
          src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          text="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          style={{ height: "500px", width: "100%", objectFit: "cover" }}
          src="https://images.unsplash.com/photo-1580377968103-84cadc052dc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          text="Third slide"
        />
        <Carousel.Caption>
          <span>
            <h1 style={{ height: "250px", fontWeight: "bolder" }}>Because you matter</h1>
          </span>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default AboveTheFold;

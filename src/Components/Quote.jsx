import { Card } from "react-bootstrap";

const Quote = () => {
  return (
    <Card className="border border-0 mx-5 mb-5">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ color: "green" }}> Paying Tax is not a punishment, it is a responsibility </p>
          <footer className="blockquote-footer">
            Chris Matthews <cite title="Source Title">azquotes.com</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default Quote;

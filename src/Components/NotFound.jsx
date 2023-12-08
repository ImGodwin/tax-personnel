import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = props => {
  return (
    <div className={`text-center ${props.spacings}`}>
      <h1 className="display-4">{props.mainText}</h1>
      <p>
        Page does not exist, <Link to="/">click me</Link>
      </p>

      <Link to="/">
        <Button variant={props.btnVariant || "warning"}>Return to Homepage</Button>
      </Link>
    </div>
  );
};
export default NotFound;

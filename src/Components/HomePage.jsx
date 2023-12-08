import { Stack } from "react-bootstrap";
import AboveTheFold from "./AboveTheFold";
import MapAndCity from "./MapAndCity";
import Quote from "./Quote";

const HomePage = () => {
  return (
    <Stack>
      <AboveTheFold />
      <Quote />
      <MapAndCity />
    </Stack>
  );
};

export default HomePage;

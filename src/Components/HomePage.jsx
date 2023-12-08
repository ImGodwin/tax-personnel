import { Stack } from "react-bootstrap";
import AboveTheFold from "./AboveTheFold";
import MapAndCity from "./MapAndCity";
import Quote from "./Quote";
import Duty from "./Duty";
import Footer from "./Footer";
import CityIntroduction from "./CityIntroduction";

const HomePage = () => {
  return (
    <Stack>
      <AboveTheFold />
      <Duty />
      <Quote />
      <CityIntroduction />
      <MapAndCity />
      <Footer />
    </Stack>
  );
};

export default HomePage;

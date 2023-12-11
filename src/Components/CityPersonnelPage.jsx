import { Stack } from "react-bootstrap";
import CityImage from "./CityImage";
import PersonnelPage from "./PersonnelPage";
import AboveTheFold from "./AboveTheFold";
import Footer from "./Footer";

const CityPersonnel = () => {
  return (
    <Stack>
      <AboveTheFold />
      <PersonnelPage />
      <Footer />
    </Stack>
  );
};

export default CityPersonnel;

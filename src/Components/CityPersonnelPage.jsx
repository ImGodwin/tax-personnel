import { Stack } from "react-bootstrap";
import PersonnelPage from "./PersonnelPage";
import AboveTheFold from "./AboveTheFold";
import Footer from "./Footer";
import CityName from "./CityName";

const CityPersonnel = () => {
  return (
    <Stack>
      <AboveTheFold />
      <CityName />
      <PersonnelPage />
      <Footer />
    </Stack>
  );
};

export default CityPersonnel;

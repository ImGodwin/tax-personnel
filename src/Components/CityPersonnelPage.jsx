import { Stack } from "react-bootstrap";
import PersonnelPage from "./PersonnelPage";
import AboveTheFold from "./AboveTheFold";
import Footer from "./Footer";
import Collaborators from "./Collaborators";

const CityPersonnel = () => {
  return (
    <Stack>
      <AboveTheFold />
      <Collaborators />
      <PersonnelPage />
      <Footer />
    </Stack>
  );
};

export default CityPersonnel;

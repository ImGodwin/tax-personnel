//{`https://maps.google.com/maps?q=${lat},${lon}&z=${zoom}&output=embed`}

import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const PersonnelMap = () => {
  const select = useSelector(state => state.user.user);
  // st stephen green

  const zoom = 15; // 15 is ideal
  //const position = { lat: 41.9028, lng: 12.4964 };

  return (
    <Container className="w-100">
      <iframe
        src={`https://maps.google.com/maps?q=${select.latitude},${select.logitude}&z=${zoom}&output=embed`}
        title="google map"
      ></iframe>
    </Container>
  );
};

export default PersonnelMap;

//{`https://maps.google.com/maps?q=${lat},${lon}&z=${zoom}&output=embed`}

import React from "react";
import { Container } from "react-bootstrap";

const PersonnelMap = () => {
  // st stephen green
  const lat = 53.338741;
  const lon = -6.261563;
  const zoom = 16; // 15 is ideal
  //const position = { lat: 41.9028, lng: 12.4964 };

  return (
    <Container className="w-100">
      <iframe src={`https://maps.google.com/maps?q=${lat},${lon}&z=${zoom}&output=embed`} title="google map"></iframe>
    </Container>
  );
};

export default PersonnelMap;

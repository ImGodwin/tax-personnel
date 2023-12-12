import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const GoogleMap = () => {
  const position = { lat: 41.9028, lng: 12.4964 };

  return (
    <APIProvider apiKey={"AIzaSyAagwjxacnMsp2PQFdb2hLzuU1v4en9cWM"}>
      <Map center={position} zoom={10}>
        <Marker position={position} />
      </Map>
    </APIProvider>
  );
};

export default GoogleMap;

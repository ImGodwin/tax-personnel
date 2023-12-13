import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const GoogleMap = () => {
  const position = { lat: 41.9028, lng: 12.4964 };

  return (
    <APIProvider apiKey={`${process.env.REACT_APP_GOOGLE_API_MAP_KEY}`}>
      <Map center={position} zoom={10}>
        <Marker position={position} />
      </Map>
    </APIProvider>
  );
};

export default GoogleMap;

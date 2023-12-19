import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const GoogleMap = props => {
  const { position } = props;
  const actualPosition = position ? position : { lat: 41.9028, lng: 12.4964 };
  console.log("this is the position", actualPosition);
  const { lat, lng } = actualPosition;

  return (
    <APIProvider apiKey={`${process.env.REACT_APP_GOOGLE_API_MAP_KEY}`}>
      <Map center={{ lat: Number(lat), lng: Number(lng) }} zoom={12}>
        <Marker position={{ lat: Number(lat), lng: Number(lng) }} />
      </Map>
    </APIProvider>
  );
};

export default GoogleMap;

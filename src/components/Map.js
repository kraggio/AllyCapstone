// import React from "react";
// import { GoogleMap, withScriptjs, withGoogleMap } from "@react-google-maps/api";

// function Map() {
//   return (
//     <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{ lat: 35.227085, lng: -80.843124 }}
//     />
//   );
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));

// // export default function App() {}
// function MyMap() {
//   return (
//     <div style={{ width: `50vw`, height: `50vh` }}>
//       <WrappedMap
//         googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
//         loadingElement={<div style={{ height: "50%" }} />}
//         containerElement={<div style={{ height: "50%" }} />}
//         mapElement={<div style={{ height: "50%" }} />}
//       />
//     </div>
//   );
// }
// export default Map;

import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "750px",
  height: "750px",
  //   width: '50%',
  //   height: '50%'
};

const center = {
  lat: 35.227085,
  lng: -80.843124,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCmerW4uPw0labgmZvgFpVxvQtzKB1Ridc",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default MyComponent;

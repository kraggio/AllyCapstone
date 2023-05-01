

import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";


const containerStyle = {
  width: "600px",
  height: "600px",
  //   width: '50%',
  //   height: '50%'
};

const defaultCenter = {
  lat: 35.227085,
  lng: -80.843124,
};

const markers = [
  {
    name: "Rising Now",
    location: {
      lat: 35.21804,
      lng: -80.83756,
    },
  },
  {
    name: "Life Connections",
    location: {
      lat: 35.233269,
      lng: -80.826286,
    },
  },
  {
    name: "Soul Beauty",
    location: {
      lat: 35.2079085,
      lng: -81.164247,
    },
  },
  {
    name: "Another Chance",
    location: {
      lat: 35.2590065,
      lng: -80.8464455,
    },
  },
  {
    name: "Generational Wealth",
    location: {
      lat: 35.2283853,
      lng: -80.861957,
    },
  },
  {
    name: "Talented Girls",
    location: {
      lat: 35.1603894,
      lng: -80.9255155,
    },
  },
];

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCmerW4uPw0labgmZvgFpVxvQtzKB1Ridc",
  });

  const [map, setMap] = React.useState(null);
  const [center, setCenter] = React.useState(defaultCenter);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    // const bounds = new window.google.maps.LatLngBounds(defaultCenter);
    // map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleMarkerClick = (marker) => {
    setCenter(marker.location);
    map.setZoom(10);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={marker.location}
          title={marker.name}
          onClick={() => handleMarkerClick(marker)}
        />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default MyComponent;
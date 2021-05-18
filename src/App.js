import "./App.css";
import React, { useState } from "react";
import { AttributionControl, MapContainer } from "react-leaflet";
import { CRS } from "leaflet";
import EventComponent from "./components/EventComponent";
import MapElements from "./components/markers/MapElements";
const App = () => {
  //Change this to match the highest number tile you generated
  const ZOOM_LEVELS = 7;
  //Change this to the zoom level you wish to start on
  const STARTING_ZOOM = 2;
  //Change this to the focal point of your map
  const CENTER_POINT = [0, 0];

  const [currentZoom, setZoomLevel] = useState(STARTING_ZOOM);
  const updateZoom = (newZoomLevel) => setZoomLevel(newZoomLevel);

  const [coords, setCoords] = useState([0, 0]);
  const updateCoords = (coords) => setCoords(coords);
  return (
    <div className="App">
      <MapContainer
        center={CENTER_POINT}
        minZoom={1}
        zoom={currentZoom}
        scrollWheelZoom={true}
        style={{ height: window.innerHeight, width: window.innerWidth }}
        crs={CRS.Simple}
        maxZoom={ZOOM_LEVELS}
        attributionControl={false}
      >
        <MapElements zoom={currentZoom} coords={coords} />
        <EventComponent updateZoom={updateZoom} updateCoords={updateCoords} />
        <AttributionControl
          position={"bottomright"}
          prefix={"Icons from Game-icons.net"}
        />
      </MapContainer>
    </div>
  );
};

export default App;

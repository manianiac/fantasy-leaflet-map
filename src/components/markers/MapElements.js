import {
  LayerGroup,
  LayersControl,
  Marker,
  Tooltip,
  Polyline,
  TileLayer,
} from "react-leaflet";
import {
  CAVE,
  CITY,
  DUNGEON,
  FARM,
  FORT,
  PORTAL,
  TOWN,
  UNKNOWN,
  VILLAGE,
} from "../consts";
import { markers } from "../../data/markers";
import { borders } from "../../data/borders";
import MapMarker from "./MapMarker";

const MapElements = ({ zoom, coords }) => {
  let civilization = [];
  let wilderness = [];
  markers.forEach((marker, index) => {
    switch (marker.type) {
      case CITY:
      case VILLAGE:
      case TOWN:
      case FORT:
      case FARM:
        civilization.push(MapMarker({ marker, zoom, index }));
        break;
      case PORTAL:
      case DUNGEON:
      case CAVE:
      case UNKNOWN:
        wilderness.push(MapMarker({ marker, zoom, index }));
        break;
      default:
        console.error("Invalid Location Type");
    }
  });
  return (
    <LayersControl position="topright">
      <LayersControl.BaseLayer checked name="Basemap">
        <TileLayer url="tiles/{z}/{x}/{y}.png" noWrap={true} />
      </LayersControl.BaseLayer>
      <LayersControl.Overlay checked name="Borders" id="Borders">
        <LayerGroup>
          <Polyline
            positions={borders}
            pathOptions={{ color: "white", dashArray: "4" }}
          />
        </LayerGroup>
      </LayersControl.Overlay>
      <LayersControl.Overlay
        checked
        name="Civilized Locations"
        id="CivilizedLocations"
      >
        <LayerGroup>{civilization}</LayerGroup>
      </LayersControl.Overlay>
      <LayersControl.Overlay
        checked
        name="Wilderness Locations"
        id="WildernessLocations"
      >
        <LayerGroup>{wilderness}</LayerGroup>
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Click Location" id="ClickLocation">
        {coords !== [] ? (
          <Marker position={coords}>
            <Tooltip>
              {coords[0]},{coords[1]}
            </Tooltip>
          </Marker>
        ) : null}
      </LayersControl.Overlay>
    </LayersControl>
  );
};
export default MapElements;

import { Marker, Popup, Tooltip } from "react-leaflet";

import { determineIcon } from "./icons/Icons";

const MapMarker = ({ marker, zoom, index }) => {
  const { name, type, location, description, link, major } = { ...marker };
  let icon = determineIcon({ type, major }, zoom);

  return !!icon ? (
    <Marker position={location} icon={icon} id={index + name}>
      {!!name ? <Tooltip>{name}</Tooltip> : null}
      {!!description ? (
        <Popup>
          {description}
          <br />
          {!!link ? (
            <a href={link} target="_blank" rel="noreferrer">
              Wiki Page
            </a>
          ) : (
            ""
          )}
        </Popup>
      ) : null}
    </Marker>
  ) : null;
};

export default MapMarker;

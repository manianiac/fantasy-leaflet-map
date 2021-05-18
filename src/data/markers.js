import {
  // CAVE,
  CITY,
  // DUNGEON,
  // FORT,
  PORTAL,
  // TOWN,
  UNKNOWN,
  // VILLAGE,
} from "../components/consts";
export const markers = [
  {
    name: "Test City",
    type: CITY,
    location: [-90, 128],
    description: "",
    link: "",
    major: false,
  },
  {
    name: "X mark",
    type: UNKNOWN,
    location: [-91, 128],
    description: "We're Here",
    link: "",
    major: false,
  },
  {
    name: "",
    type: PORTAL,
    location: [-92, 128],
    description: "Test",
    link: "https://google.com",
    major: false,
  },
];

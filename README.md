# What is this

This project allows someone to create a responsive virtual map, with less effort than I went through. Requires NPM, and is built with React, Leaflet, and Game-Icons

There is a running version of this located at https://manianiac.github.io/naidaru-map/

# Setup

1. Included are the tiles from a Dungeons and Dragons campaign setting of mine, but you should replace them with your own tiles. I used https://github.com/commenthol/gdal2tiles-leaflet to turn my \~16000 x \~12000 pixel map into tiles.
2. After creating your tiles, update the 'ZOOM_LEVELS' variable in 'App.js' with the maximum zoom level(This is the highest number in your tiles directory).
   2a. There are other configuration variables at the top as well, but they are less important to getting the map up and running.
3. Run 'npm install;npm start' to start a local server, letting you see your map.
   3a. In the Layers settings, there is a option to see the 'Click Location' as a pin on the map. Use this to find the map coordinates that Leaflet has assigned.

# Adding Data

To add a new Location(be it a City, a Cave, or something Unknown), you can add it to the 'data/markers.js' file. There are some dummy locations included as an example of the formatting expected.

To add a new Border, you can do the same with the 'data/borders.js' file. If you edit this file while the local server is running, it should automatically update to show where your borders are being drawn.

# Improvements

- [ ] Implement a better way to add Borders
- [ ] Implement a better way to add Locations
- [ ] Implement a way to add Roads

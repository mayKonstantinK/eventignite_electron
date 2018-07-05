// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var y_down = -0.000008926;
var x_right = 0.000009211;

var event_map_marker_x = 1940;
var event_map_marker_y = 5650;

var event_map_width = 9960;
var event_map_height = 9960;

var exCoords = {
  "coordX1Y1": [
    "4798",
    "1851"
],
"coordX2Y1": [
    "4830",
    "1851"
],
"coordX1Y2": [
    "4798",
    "1925"
],
"coordX2Y2": [
    "4830",
    "1925"
]
};

var coords = [
  [Number(exCoords.coordX1Y1[0])*y_down, Number(exCoords.coordX1Y1[1])*x_right],
  [Number(exCoords.coordX1Y2[0])*y_down, Number(exCoords.coordX1Y2[1])*x_right],
  [Number(exCoords.coordX2Y1[0])*y_down, Number(exCoords.coordX2Y1[1])*x_right],
  [Number(exCoords.coordX2Y2[0])*y_down, Number(exCoords.coordX2Y2[1])*x_right]
];

var mymap = L.map('mapid', {
  attributionControl: false,
  zoomControl: false,
  minZoom: 14,
  maxZoom: 39
}).setView([y_down * event_map_height / 2, x_right * event_map_width/2], 14);

L.control.zoom({
  position:'topright'
}).addTo(mymap);

var imageBounds = [[0.0, 0.0], [y_down * event_map_height, x_right * event_map_width]];
var imgUrl = 'https://image.ibb.co/danAZy/cphi_china_18_floorplan.jpg';

L.imageOverlay(imgUrl, imageBounds).addTo(mymap);

// define rectangle geographical bounds
var bounds = [[-0.01, 0.0], [-0.01, 0.01]];
// create an orange rectangle
L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(mymap);
// zoom the map to the rectangle bounds
mymap.fitBounds(bounds);
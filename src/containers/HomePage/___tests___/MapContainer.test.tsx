import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { GeoJson } from "../../../types/geoJson";
import MapContainer from "../MapContainer";
import { render } from "@testing-library/react";

let container: any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const geoJsonData: GeoJson = {
  type: "MultiPolygon",
  coordinates: [
    [
      [
        [6.610821795, 46.515356291],
        [6.610787201, 46.515292256],
        [6.610690044, 46.515110006],
        [6.610563569, 46.515148845],
        [6.610473753, 46.515176437],
        [6.610208366, 46.515257893],
        [6.610099795, 46.515123238],
        [6.610123439, 46.515076991],
        [6.610333727, 46.5150026],
        [6.610548276, 46.514913665],
        [6.610753593, 46.514814947],
        [6.610949016, 46.514706981],
        [6.611133367, 46.514590207],
        [6.611404283, 46.514407772],
        [6.611408359, 46.514405355],
        [6.6114125, 46.514403001],
        [6.611416705, 46.514400702],
        [6.611420988, 46.514398466],
        [6.611425334, 46.514396294],
        [6.611429745, 46.514394185],
        [6.61143422, 46.51439213],
        [6.611438746, 46.514390148],
        [6.611443336, 46.514388229],
        [6.611447977, 46.514386374],
        [6.611452683, 46.514384582],
        [6.611457439, 46.514382863],
        [6.611462234, 46.514381206],
        [6.611467092, 46.514379622],
        [6.611471989, 46.514378111],
        [6.611476675, 46.514376751],
        [6.61148131, 46.514375318],
        [6.611485906, 46.514373822],
        [6.611490452, 46.514372263],
        [6.611494947, 46.514370632],
        [6.611499403, 46.514368937],
        [6.611503808, 46.514367179],
        [6.611508149, 46.514365357],
        [6.611512426, 46.514363472],
        [6.611516652, 46.514361524],
        [6.611520814, 46.514359512],
        [6.611524911, 46.514357437],
        [6.611528957, 46.514355307],
        [6.611532926, 46.514353123],
        [6.611536817, 46.514350876],
        [6.611540657, 46.514348574],
        [6.61154442, 46.514346217],
        [6.611548106, 46.514343806],
        [6.611551714, 46.51434134],
        [6.611555245, 46.51433882],
        [6.611558711, 46.514336246],
        [6.611562087, 46.514333625],
        [6.611565386, 46.51433096],
        [6.611568594, 46.514328248],
        [6.611571724, 46.514325482],
        [6.611727297, 46.514565931],
        [6.611741166, 46.514562253],
        [6.611948561, 46.514949428],
        [6.611972384, 46.515002139],
        [6.610821795, 46.515356291],
      ],
    ],
  ],
};

const buildingGeoJsonData: GeoJson = {
  type: "MultiPolygon",
  coordinates: [
    [
      [
        [6.610821795, 46.515356291],
        [6.610787201, 46.515292256],
        [6.610690044, 46.515110006],
        [6.610563569, 46.515148845],
        [6.610473753, 46.515176437],
        [6.610208366, 46.515257893],
        [6.610099795, 46.515123238],
        [6.610123439, 46.515076991],
        [6.610333727, 46.5150026],
        [6.610548276, 46.514913665],
        [6.610753593, 46.514814947],
        [6.610949016, 46.514706981],
        [6.611133367, 46.514590207],
        [6.611404283, 46.514407772],
        [6.611408359, 46.514405355],
        [6.6114125, 46.514403001],
        [6.611416705, 46.514400702],
        [6.611420988, 46.514398466],
        [6.611425334, 46.514396294],
        [6.611429745, 46.514394185],
        [6.61143422, 46.51439213],
        [6.611438746, 46.514390148],
        [6.611443336, 46.514388229],
        [6.611447977, 46.514386374],
        [6.611452683, 46.514384582],
        [6.611457439, 46.514382863],
        [6.611462234, 46.514381206],
        [6.611467092, 46.514379622],
        [6.611471989, 46.514378111],
        [6.611476675, 46.514376751],
        [6.61148131, 46.514375318],
        [6.611485906, 46.514373822],
        [6.611490452, 46.514372263],
        [6.611494947, 46.514370632],
        [6.611499403, 46.514368937],
        [6.611503808, 46.514367179],
        [6.611508149, 46.514365357],
        [6.611512426, 46.514363472],
        [6.611516652, 46.514361524],
        [6.611520814, 46.514359512],
        [6.611524911, 46.514357437],
        [6.611528957, 46.514355307],
        [6.611532926, 46.514353123],
        [6.611536817, 46.514350876],
        [6.611540657, 46.514348574],
        [6.61154442, 46.514346217],
        [6.611548106, 46.514343806],
        [6.611551714, 46.51434134],
        [6.611555245, 46.51433882],
        [6.611558711, 46.514336246],
        [6.611562087, 46.514333625],
        [6.611565386, 46.51433096],
        [6.611568594, 46.514328248],
        [6.611571724, 46.514325482],
        [6.611727297, 46.514565931],
        [6.611741166, 46.514562253],
        [6.611948561, 46.514949428],
        [6.611972384, 46.515002139],
        [6.610821795, 46.515356291],
      ],
    ],
  ],
};

const scales = { floorHeight: 1, floorNumber: 1, lotCoverage: 100 };

it("renders with data", () => {
  render(
    <MapContainer
      geoJsonData={geoJsonData}
      buildingGeoJsonData={buildingGeoJsonData}
      scales={scales}
    />,
    container
  );

  expect(container).toMatchSnapshot();
});
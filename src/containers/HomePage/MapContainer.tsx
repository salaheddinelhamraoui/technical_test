import { useState, useEffect, FC } from "react";
import ReactMapGL from "react-map-gl";
import DeckGL, { GeoJsonLayer, GeoJsonLayerProps } from "deck.gl/typed";

import { Scales } from "../../types/scales";

interface MapContainerProps {
  geoJsonData: any;
  scales: Scales;
  buildingGeoJsonData: any;
}

const MapContainer: FC<MapContainerProps> = ({
  geoJsonData,
  scales,
  buildingGeoJsonData,
}) => {
  const [viewport, setViewport] = useState({
    latitude: 46.469095495,
    longitude: 6.82386387,
    zoom: 15,
    pitch: 45,
    bearing: 0,
  });

  const [layers, setLayers] = useState<GeoJsonLayer[]>([]);

  useEffect(() => {
    if (geoJsonData) {
      const geoJsonLayerProps: GeoJsonLayerProps = {
        id: "",
        data: geoJsonData as String,
        extruded: true,
        elevationScale: true,
        getElevation: 0,
        transitions: {
          elevationScale: {
            duration: 1000,
            type: "interpolation",
          },
        },
        filled: true,
        wireframe: true,
        pickable: true,
        visible: true,
        opacity: 1,
        getFillColor: [221, 241, 235],
        getLineWidth: 4,
      };

      var floors: GeoJsonLayer[] = [];

      for (let i = 0; i < scales.floorNumber; i++) {
        floors.push(
          new GeoJsonLayer({
            data: buildingGeoJsonData as String,
            extruded: true,
            getElevation: scales.floorHeight * i + i,
            transitions: {
              elevationScale: {
                duration: 1000,
                type: "interpolation",
              },
            },
            filled: true,
            wireframe: true,
            pickable: true,
            visible: true,
            opacity: 0.2,
            getFillColor: [255, 237, 191],
            getLineColor: [0, 0, 0],
            getLineWidth: 5,
          })
        );
      }
      const geoJsonLayer = new GeoJsonLayer(geoJsonLayerProps);

      setLayers([geoJsonLayer, ...floors]);
      setViewport({
        ...viewport,
        latitude: geoJsonData.coordinates[0][0][0][1],
        longitude: geoJsonData.coordinates[0][0][0][0],
      });
    }
  }, [geoJsonData, scales, buildingGeoJsonData]);

  return (
    <div>
      <div style={{ height: "100vh", width: "50vw", position: "relative" }}>
        <DeckGL initialViewState={viewport} controller={true} layers={layers}>
          <ReactMapGL
            width={500}
            mapStyle="mapbox://styles/mapbox/navigation-night-v1"
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          />
        </DeckGL>
      </div>
    </div>
  );
};

export default MapContainer;

import * as turf from "@turf/turf";
import { GeoJson } from "../../types/geoJson";

export const getLandArea = (coordinates: number[][][]): number => {
  const polygon = turf.polygon(coordinates);
  const area = turf.area(polygon);
  return area;
};

export const scalePolygon = (
  polygon: GeoJson,
  scaleFactor: number
): GeoJson => {
  var poly = turf.polygon(polygon.coordinates[0]);

  var scaledPoly = turf.transformScale(poly, scaleFactor / 100, {
    origin: "center",
  });

  return {
    type: "MultiPolygon",
    coordinates: [scaledPoly.geometry.coordinates],
  };
};

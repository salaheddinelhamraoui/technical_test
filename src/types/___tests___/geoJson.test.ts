import { GeoJson } from "../geoJson";

describe("GeoJson interface", () => {
  it("should have a type property of type string", () => {
    const geoJson: GeoJson = {
      type: "Polygon",
      coordinates: [
        [
          [
            [0, 0],
            [0, 1],
            [1, 1],
            [1, 0],
            [0, 0],
          ],
        ],
      ],
    };
    expect(typeof geoJson.type).toBe("string");
  });

  it("should have a coordinates property of type number[][][][]", () => {
    const geoJson: GeoJson = {
      type: "Polygon",
      coordinates: [
        [
          [
            [0, 0],
            [0, 1],
            [1, 1],
            [1, 0],
            [0, 0],
          ],
        ],
      ],
    };
    expect(Array.isArray(geoJson.coordinates)).toBe(true);
    expect(Array.isArray(geoJson.coordinates[0])).toBe(true);
    expect(Array.isArray(geoJson.coordinates[0][0])).toBe(true);
    expect(Array.isArray(geoJson.coordinates[0][0][0])).toBe(true);
    expect(typeof geoJson.coordinates[0][0][0][0]).toBe("number");
    expect(typeof geoJson.coordinates[0][0][0][1]).toBe("number");
  });
});

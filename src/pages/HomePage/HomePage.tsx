import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import MapContainer from "../../containers/HomePage/MapContainer";
import LeftSideBarContainer from "../../containers/HomePage/LeftSideBarContainer";
import RightSideBarContainer from "../../containers/HomePage/RightSideBarContainer";
import { Scales } from "../../types/scales";
import { GeoJson } from "../../types/geoJson";
import { scalePolygon } from "../../utils/statistiques/statistiques";

const HomePage = () => {
  const [scales, setScales] = useState<Scales>({
    lotCoverage: 70,
    floorNumber: 5,
    floorHeight: 10,
  });

  const [geoJsonData, setGeoJsonData] = useState<GeoJson | null>(null);

  const [buildingGeoJsonData, setBuildingGeoJsonData] =
    useState<GeoJson | null>();

  useEffect(() => {
    if (scales.lotCoverage && geoJsonData && geoJsonData.coordinates) {
      setBuildingGeoJsonData(scalePolygon(geoJsonData, scales.lotCoverage));
    }
  }, [scales.lotCoverage, geoJsonData]);

  const handleScalesChange = (
    event: Event,
    newValue: number | number[],
    keyValue: String
  ) => {
    if (typeof newValue === "number") {
      switch (keyValue) {
        case "lotCoverage":
          setScales({ ...scales, lotCoverage: newValue });
          break;
        case "floorNumber":
          setScales({ ...scales, floorNumber: newValue });
          break;
        case "floorHeight":
          setScales({ ...scales, floorHeight: newValue });
          break;
        default:
          break;
      }
    }
  };

  const handleFileRead = (e: ProgressEvent<FileReader>) => {
    const content = e.target?.result as string;
    setGeoJsonData(JSON.parse(content));
  };

  const handleUploadGEOJSONFile = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.onchange = (event) => {
      const reader = new FileReader();
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];
      if (file) {
        reader.onloadend = handleFileRead;
        reader.readAsText(file);
      }
    };
    input.click();
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs>
        <LeftSideBarContainer
          scales={scales}
          handleScalesChange={handleScalesChange}
          handleUploadGEOJSONFile={handleUploadGEOJSONFile}
        />
      </Grid>
      <Grid item xs={6}>
        <MapContainer
          geoJsonData={geoJsonData}
          scales={scales}
          buildingGeoJsonData={buildingGeoJsonData}
        />
      </Grid>

      <Grid item xs>
        <RightSideBarContainer
          landCoordinates={geoJsonData?.coordinates}
          buildingCoordinates={buildingGeoJsonData?.coordinates}
          scales={scales}
        />
      </Grid>
    </Grid>
  );
};

export default HomePage;

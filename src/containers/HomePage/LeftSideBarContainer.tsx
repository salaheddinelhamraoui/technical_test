import { FC } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SliderComponent from "../../components/SliderComponent";
import { Scales } from "../../types/scales";

interface LeftSideBarContainerProps {
  scales: Scales;
  handleScalesChange: (
    event: Event,
    newValue: number | number[],
    keyValue: String
  ) => void;
  handleUploadGEOJSONFile: () => void;
}

const LeftSideBarContainer: FC<LeftSideBarContainerProps> = ({
  scales,
  handleScalesChange,
  handleUploadGEOJSONFile,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ mt: 4 }}
    >
      <Button variant="outlined" onClick={handleUploadGEOJSONFile}>
        Load GEOJSON
      </Button>

      <SliderComponent
        heading="Lot Coverage"
        keyValue="lotCoverage"
        max={100}
        sliderValue={scales.lotCoverage}
        handleSliderValueChange={handleScalesChange}
      />
      <SliderComponent
        heading="Floor Number"
        keyValue="floorNumber"
        max={100}
        sliderValue={scales.floorNumber}
        handleSliderValueChange={handleScalesChange}
      />
      <SliderComponent
        heading="Floor Height"
        keyValue="floorHeight"
        max={100}
        sliderValue={scales.floorHeight}
        handleSliderValueChange={handleScalesChange}
      />
    </Box>
  );
};

export default LeftSideBarContainer;

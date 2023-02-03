import { FC, ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

export interface SliderComponentProps {
  heading?: ReactNode;
  keyValue: String;
  sliderValue: number | number[];
  handleSliderValueChange: (
    event: Event,
    newValue: number | number[],
    key: String
  ) => void;
  max: number;
}

const SliderComponent: FC<SliderComponentProps> = ({
  heading,
  keyValue,
  sliderValue,
  handleSliderValueChange,
  max,
}) => {
  return (
    <Box sx={{ width: "250px", mt: 8 }}>
      <Typography id="non-linear-slider" gutterBottom>
        {heading} : {sliderValue}
      </Typography>

      <Slider
        defaultValue={50}
        aria-label="Default"
        valueLabelDisplay="auto"
        max={max}
        value={sliderValue}
        onChange={(event, newValue) => {
          handleSliderValueChange(event, newValue, keyValue);
        }}
      />
    </Box>
  );
};

export default SliderComponent;

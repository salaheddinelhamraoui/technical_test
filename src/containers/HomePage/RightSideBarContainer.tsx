import { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { getLandArea } from "../../utils/statistiques/statistiques";
import { Scales } from "../../types/scales";

interface RightSideBarContainerProps {
  landCoordinates?: number[][][][];
  buildingCoordinates?: number[][][][];
  scales: Scales;
}

const RightSideBarContainer: FC<RightSideBarContainerProps> = ({
  landCoordinates,
  buildingCoordinates,
  scales,
}) => {
  return (
    <Box display="flex" flexDirection="column" sx={{ mt: 4, ml: 4 }}>
      <Typography id="non-linear-slider" gutterBottom variant="h5">
        Statistiques
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Typography id="non-linear-slider" gutterBottom variant="subtitle1">
          Land Area (
          {landCoordinates ? getLandArea(landCoordinates[0]).toFixed(2) : 0} m2)
        </Typography>
        <Typography id="non-linear-slider" gutterBottom variant="subtitle1">
          Building Area ({" "}
          {buildingCoordinates
            ? getLandArea(buildingCoordinates[0]).toFixed(2)
            : 0}{" "}
          m2)
        </Typography>
        <Typography id="non-linear-slider" gutterBottom variant="subtitle1">
          Building Floor Area ({" "}
          {buildingCoordinates
            ? getLandArea(buildingCoordinates[0]).toFixed(2)
            : 0}{" "}
          m2)
        </Typography>
        <Typography id="non-linear-slider" gutterBottom variant="subtitle1">
          Volume ({" "}
          {buildingCoordinates
            ? (
                getLandArea(buildingCoordinates[0]) *
                scales.floorHeight *
                scales.floorNumber
              ).toFixed(2)
            : 0}{" "}
          m3)
        </Typography>
        <Typography id="non-linear-slider" gutterBottom variant="subtitle1">
          Building Height (
          {(scales.floorHeight * scales.floorNumber).toFixed(2)}
          m)
        </Typography>
      </Box>
    </Box>
  );
};

export default RightSideBarContainer;

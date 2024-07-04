import { Slider } from "@mui/material";
import { Box } from "@mui/material";

interface ProgressBarProps {
    progressPercentage: number;
    setProgressPercentage: (progressPercentage: number) => void;
}

const ProgressBar = (props : ProgressBarProps) => {
  return (
    <Box sx={{height: "100%", width: "100%", display: "flex", flexDirection: "row", justifyContent: "center"}}>
      <Slider 
        value={props.progressPercentage} 
        onChange={(event, newValue) => {props.setProgressPercentage(newValue as number)}}
        size="small"
        aria-label="Progress"
        sx={{width: '98%'}}
      />
    </Box>
  );
};

export default ProgressBar;

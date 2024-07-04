import { Slider } from "@mui/material";
import { Box } from "@mui/material";

interface ProgressBarProps {
  progressPercentage: number;
  setProgressPercentage: (progressPercentage: number) => void;
}



const ProgressBar = (props: ProgressBarProps) => {
  const styles = {
    sliderStyle: {
      width: '98%',
      color: 'black',
      '& .MuiSlider-thumb': {
        backgroundColor: 'black', // Change the thumb color
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
          boxShadow: '0px 0px 0px 8px rgba(0, 0, 0, 0.16)', // Change the glow color
        },
      },
      '& .MuiSlider-track': {
        backgroundColor: 'black',
      },
      '& .MuiSlider-rail': {
        backgroundColor: '#B0B0B0',
      },

    }
  }
  return (
    <Box sx={{ height: "100%", width: "100%", display: "flex", flexDirection: "row", justifyContent: "center" }}>
      <Slider
        value={props.progressPercentage}
        onChange={(event, newValue) => { props.setProgressPercentage(newValue as number) }}
        size="small"
        aria-label="Progress"
        sx={styles.sliderStyle}
      />
    </Box>
  );
};

export default ProgressBar;

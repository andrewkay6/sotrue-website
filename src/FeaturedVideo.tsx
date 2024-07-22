// import { CardMedia, Card, Box } from "@mui/material";
import { Box } from "@mui/material";
const FeaturedVideo = () => {
  const styles = {
    videoContainer: {
      height: "60%",
      width: "70%",
      maxWidth: "800px",

    },
  };
  return (
    <Box sx={styles.videoContainer}>
      <iframe width="100%" 
      height="100%" 
      src="https://www.youtube.com/embed/6y3n0871JMY?si=dVGJcrwvJLVi8NYY" 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen></iframe>
    </Box>
  );
};

export default FeaturedVideo;

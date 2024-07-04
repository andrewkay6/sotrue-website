// import { CardMedia, Card, Box } from "@mui/material";
import { Box } from "@mui/material";
const FeaturedVideo = () => {
  const styles = {
    videoContainer: {
      height: "50%",
      width: "60%",
      maxWidth: "500px",

    },
  };
  return (
    <Box sx={styles.videoContainer}>
      {/* <Card>
        <CardMedia src="https://www.youtube.com/embed/WNs3AmnJGjE?si=36nN4UZ8mcyR-A7z"></CardMedia>
      </Card> */}

      <iframe width="100%" 
      height="100%" 
      src="https://www.youtube.com/embed/0dgRMRW9t_c?si=VAkr9f1cO6bCGGIe" 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen></iframe>
    </Box>
  );
};

export default FeaturedVideo;

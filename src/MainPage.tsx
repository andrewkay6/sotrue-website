import { Box, Typography } from "@mui/material";
import FeaturedVideo from "./FeaturedVideo";

const MainPage = () => {
    const styles = {
        pageContainer: {
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(176, 167, 178, 0.2)",
        },
    };
    return (
        <Box sx={styles.pageContainer}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Featured Video
            </Typography>
            <FeaturedVideo />
        </Box>
    );
};
export default MainPage;

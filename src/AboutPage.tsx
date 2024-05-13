import { Typography } from "@mui/material";
import { Box } from "@mui/material";
const AboutPage = () => {
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
            <Typography variant="h2">About Us</Typography>
            <Typography>We're a band based out of Hamilton Ontario.</Typography>
            <Box></Box>
        </Box>
    );
};

export default AboutPage;

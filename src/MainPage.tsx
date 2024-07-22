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
        },
        titleContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "rgb(176, 167, 178)",
            border: "1px solid black",
            margin: '10px',
        },
    };
    return (
        <Box sx={styles.pageContainer}>
            <Box sx={styles.titleContainer}>
                <Typography variant="h4" sx={{ fontWeight: "700", padding: '10px', fontStyle: 'italic' }}>
                    FEATURED VIDEO
                </Typography>
            </Box>
            
            <FeaturedVideo />
        </Box>
    );
};
export default MainPage;

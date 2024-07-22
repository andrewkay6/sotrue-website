import { Box, Typography } from "@mui/material";
import { tShirtImages } from "./Images";
const MerchPage = () => {
    const styles = {
        pageContainer: {
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        productsContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            maxHeight: '800px',
            height: '70%',
            width: '100%',
            maxWidth: '800px',
        },
        productTitleContainer : {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "rgb(176, 167, 178)",
            border: "1px solid black",
            margin: '10px',
            fontWeight: '800,'

        },
        productContainer: {
            // border: '1px solid black',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: 'rgba(176, 167, 178, 0.4)',
            },
        }
    }
    return (
    <Box sx={styles.pageContainer}>
        <Box sx={styles.productsContainer}>
            <Box sx={styles.productContainer}>
                <Box sx={styles.productTitleContainer}>
                    <Typography variant="h3" sx={{fontWeight: '700', fontStyle: 'italic'}}>TSHIRTS</Typography>
                </Box>
                <Box component="img" src ={tShirtImages[0].url} alt="tshirt" sx={{height: '200px'}}/>
            </Box>
            <Box sx={styles.productContainer}>
                <Box sx={styles.productTitleContainer}>
                    <Typography variant="h3" sx={{fontWeight: '700', fontStyle: 'italic'}}>BANDANAS</Typography>
                </Box>
                <Box component="img" src ={tShirtImages[1].url} alt="bandana" sx={{height: '200px'}}/>
            </Box>
        </Box>
    </Box>
    );
}

export default MerchPage;
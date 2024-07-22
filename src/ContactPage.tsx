import { Typography, Box } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YoutubeIcon from '@mui/icons-material/YouTube';
import { FACEBOOK_LINK, INSTAGRAM_LINK, YOUTUBE_LINK, EMAIL } from "./Constants";

const ContactPage = () => {
    const styles = {
        icon: {
            cursor: "pointer",
            fontSize: "40px",
        },
        pageContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100%",
            width: "100%",
        },
        contactInfoContainer: {
            border: "1px solid black",
            backgroundColor: "#6e6471",
            maxWidth: "800px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
        }
    }
    const openLinkInNewTab = (link: string) => {
        window.open(link, "_blank");
    }
    return (
        <Box sx={styles.pageContainer}>
            <Box sx={styles.contactInfoContainer}>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop:'10px', paddingBottom: '10px'}}>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                        Social Media
                    </Typography>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <FacebookIcon sx={styles.icon} onClick={() => { openLinkInNewTab(FACEBOOK_LINK) }} />
                        <InstagramIcon sx={styles.icon} onClick={() => { openLinkInNewTab(INSTAGRAM_LINK) }} />
                        <YoutubeIcon sx={styles.icon} onClick={() => { openLinkInNewTab(YOUTUBE_LINK) }} />
                    </Box>

                </Box>
                <Box sx = {{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop:'10px', paddingBottom: '10px'}}>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                        Email
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        {EMAIL}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );

}

export default ContactPage;
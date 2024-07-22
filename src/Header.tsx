import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YoutubeIcon from '@mui/icons-material/YouTube';
import { FACEBOOK_LINK, INSTAGRAM_LINK, YOUTUBE_LINK } from "./Constants";
interface HeaderProps {
  navMenuClick: () => void;
}
const Header = (props: HeaderProps) => {
  const navigate = useNavigate();

  const openLinkInNewTab = (link: string) => {
    window.open(link, "_blank");
  }
  const styles = {
    headerContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: "#6e6471",
      border: "1px solid black",
      boxSizing: "border-box",
    },
    headerFont: {
      color: "Black",
      fontFamily: "Arial",
      fontWeight: "900",
      fontSize: "40px",
      fontStyle: "italic",
      cursor: "pointer",
      textAlign: "center",
      // backgroundColor: "#d3ccd4",
    },
    navMenuButtonContainer: {
      height: "48px",
      width: "48px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      marginLeft: "10px",
      flex: 1,
    },
    navMenuButton: {
      cursor: "pointer",
    },
    socialMediaIcons: {
      cursor: "pointer",
      fontSize: "30px",
      marginLeft: "2px",
      marginRight: "2px",
    },
    socialMediaLinksContainer: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
    },
  };
  return (
    <Box sx={styles.headerContainer}>
      <Box sx={styles.navMenuButtonContainer}>
        <Box sx={styles.navMenuButton} onClick={props.navMenuClick}>
          <MenuIcon sx={{ transform: "scale(1.5)" }} />
        </Box>
      </Box>

      <Typography 
        sx={styles.headerFont}
        onClick={() => {
          navigate("/");
        }}
        >
          SO TRUE
        </Typography>
      <Box sx={styles.socialMediaLinksContainer}>
        <FacebookIcon sx={styles.socialMediaIcons} onClick={() => {openLinkInNewTab(FACEBOOK_LINK)}}/>
        <InstagramIcon sx={styles.socialMediaIcons} onClick={() => {openLinkInNewTab(INSTAGRAM_LINK)}}/>
        <YoutubeIcon sx={styles.socialMediaIcons} onClick={() => {openLinkInNewTab(YOUTUBE_LINK)}}/>
      </Box>
    </Box>
  );
};

export default Header;

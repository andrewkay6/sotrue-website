import { Drawer, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useNavigate} from "react-router-dom";

interface NavMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const NavMenu = (props: NavMenuProps) => {
  const navigate = useNavigate();

  const styles = {
    navMenuContainer: {
      backgroundColor: "rgb(198, 191, 200)",
      height: "100%",
      minWidth: "200px",
      width: "100%",
      border: "1px solid black",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
    },
    allLinksContainer: {
      backgroundColor: "rgb(198, 191, 200)",
      height: "100%",
      minWidth: "200px",
      width: "100%",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
    },
    linkContainer: {
      color: "black",
      fontFamily: "Arial",
      fontWeight: "700",
      fontSize: "20px",
      fontStyle: "italic",
      textDecoration: "none",
      cursor: "pointer",
      paddingTop: "5px",
      paddingBottom: "5px",
    },
    logoFont : {
      color: "Black",
      fontFamily: "Arial",
      fontWeight: "900",
      fontSize: "25px",
      fontStyle: "italic",
    }
  };

  return (
    <Drawer open={props.isOpen} onClose={() => props.setIsOpen(false)}>
      
      <Box sx={styles.navMenuContainer}>
      <Typography sx={styles.logoFont} onClick={() => {navigate("/")}}>SO TRUE</Typography>
        <Box sx={styles.allLinksContainer}>
          <Box sx={styles.linkContainer} onClick={() => { navigate("/") }}>Home</Box>     
          <Box sx={styles.linkContainer} onClick={() => { navigate("/contact") }}>Contact</Box>
          {/* <Box sx={styles.linkContainer} onClick={() => { navigate("/song-picker")}}>Song Picker</Box> */}
          <Box sx={styles.linkContainer} onClick={() => { navigate("/upcoming-events")}}>Upcoming Events</Box>
          <Box sx={styles.linkContainer} onClick={() => { navigate("/merch")}}>Merch</Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default NavMenu;

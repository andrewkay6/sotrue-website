import { Drawer, Typography } from "@mui/material";
import { Box } from "@mui/material";
// import { useNavigate } from "react-router-dom";
interface NavMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const NavMenu = (props: NavMenuProps) => {
  // const navigate = useNavigate();
  const styles = {
    navMenuContainer: {
      backgroundColor: "rgb(198, 191, 200)",
      height: "100%",
      minWidth: "200px",
      width: "50%",
      border: "1px solid black",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      // justifyContent: "space-evenly",
    },
    linkContainer: {
      color: "black",
      fontFamily: "Arial",
      fontWeight: "700",
      fontSize: "20px",
      fontStyle: "italic",
      textDecoration: "none",
      cursor: "pointer",
    },
    comingSoonContainer: {
      color: "black",
      fontFamily: "Arial",
      fontWeight: "700",
      fontSize: "20px",
      fontStyle: "italic",
      textDecoration: "none",
      // cursor: "pointer",
    }
  };

  return (
    <Drawer open={props.isOpen} onClose={() => props.setIsOpen(false)}>
      <Box sx={styles.navMenuContainer}>
        {/* <Box sx={styles.linkContainer } onClick={() => {navigate("/")}}>Home</Box>
        <Box sx={styles.linkContainer}onClick={() => {navigate("/about")}}>About</Box>
        <Box sx={styles.linkContainer}onClick={() => {navigate("/links")}}>Links</Box>
        <Box sx={styles.linkContainer}onClick={() => {navigate("/music")}}>Music</Box>
        <Box sx={styles.linkContainer} onClick={() => {navigate("/merch")}}>Merch</Box>
        <Box sx={styles.linkContainer} onClick={() => {navigate("/contact")}}>Contact</Box> */}
        <Typography sx={styles.comingSoonContainer}>
          Links Coming Soon!
        </Typography>
      </Box>
    </Drawer>
  );
};

export default NavMenu;

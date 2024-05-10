import { Drawer } from "@mui/material";
import { Box } from "@mui/material";
interface NavMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const NavMenu = (props: NavMenuProps) => {
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
    linkFont : {
        color: "black",
        fontFamily: "Arial",
        fontWeight: "700",
        fontSize: "20px",
        fontStyle: "italic",
        textDecoration: "none",
    },
  };

  return (
    <Drawer open={props.isOpen} onClose={() => props.setIsOpen(false)}>
      <Box sx={styles.navMenuContainer}>
        {/* <Box>Links</Box> */}
        <Box sx={styles.linkFont}>Home</Box>
        <Box sx={styles.linkFont}>About</Box>
        <Box sx={styles.linkFont}>Links</Box>
        <Box sx={styles.linkFont}>Music</Box>
        <Box sx={styles.linkFont}>Merch</Box>
        <Box sx={styles.linkFont}>Contact</Box>
      </Box>
    </Drawer>
  );
};

export default NavMenu;

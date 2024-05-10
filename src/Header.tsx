import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
interface HeaderProps {
  navMenuClick: () => void;
}
const Header = (props: HeaderProps) => {
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
      // backgroundColor: "#d3ccd4",
    },
    navMenuButton: {
      height: "48px",
      width: "48px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    },
  };
  return (
    <Box sx={styles.headerContainer}>
      <Box sx={styles.navMenuButton} onClick={props.navMenuClick}>
        <MenuIcon sx={{ transform: "scale(1.5)" }} />
      </Box>

      <Typography sx={styles.headerFont}>So True</Typography>
      <Box />
    </Box>
  );
};

export default Header;


import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavMenu from "./NavMenu";
import AudioPlayer from "./AudioPlayer";
import Header from "./Header";
import { Box } from "@mui/material";
import MainPage from "./MainPage";
import { useState } from "react";
import { HashRouter, Routes, Route} from "react-router-dom";

function App() {
  const theme = createTheme({
  });
  const styles = {
    appContainer: {
      height: '100vh',
      backgroundImage: 'url("../public/tile.png")',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }
  }
  const navMenuClick = () => {
    if (!isNavMenuOpen) {
      setIsNavMenuOpen(true);
    }
  }
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  return (

      <Box sx={styles.appContainer} >
        <Header navMenuClick={() => {navMenuClick()}}/>
        <NavMenu isOpen={isNavMenuOpen} setIsOpen={setIsNavMenuOpen} />
        <HashRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />     
            <Route path="/about" element={<MainPage />} />
            <Route path="/contact" element={<MainPage />} />
            <Route path="/music" element={<MainPage />} />
          </Routes>
        </HashRouter>
        
        <AudioPlayer />
      </Box>

  );
}

export default App;

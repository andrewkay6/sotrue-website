
import "./App.css";
import NavMenu from "./NavMenu";
import AudioPlayer from "./AudioPlayer";
import Header from "./Header";
import { Box } from "@mui/material";
// import MainPage from "./MainPage";
import { useState } from "react";
import MainPage from "./MainPage";
// import { Routes, Route} from "react-router-dom";
// import ContactPage from "./ContactPage";
// import AboutPage from "./AboutPage";
// import MerchPage from "./MerchPage";
// import LinksPage from "./LinksPage";
// import MusicPage from "./MusicPage";

function App() {
  const styles = {
    appContainer: {
      height: '100vh',
      backgroundImage: 'url("/tile.png")',
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
          <MainPage />
          {/* <Routes>
            <Route path="/" element={<MainPage />} />     
            <Route path="/about" element={<AboutPage />} />
            <Route path="/links" element={<LinksPage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/merch" element={<MerchPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
         */}
        
        <AudioPlayer />
      </Box>

  );
}

export default App;

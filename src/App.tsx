
import "./App.css";
import NavMenu from "./NavMenu";
import AudioPlayer from "./AudioPlayer";
import Header from "./Header";
import { Box } from "@mui/material";
// import MainPage from "./MainPage";
import { useState } from "react";
import MainPage from "./MainPage";
import { Routes, Route} from "react-router-dom";
import ContactPage from "./ContactPage";
import { songs } from "./Songs";
function App() {
  const styles = {
    appContainer: {
      height: '100%',
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
  const getRandomSongIndex = () => {
    return Math.floor(Math.random() * songs.length);
  }
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [currentSong, setCurrentSong] = useState(songs[getRandomSongIndex()]);
  // setCurrentSong(songs[0])
  return (

      <Box sx={styles.appContainer} >
        <Header navMenuClick={() => {navMenuClick()}}/>
        <NavMenu isOpen={isNavMenuOpen} setIsOpen={setIsNavMenuOpen} />
          <Routes>
             <Route path="/" element={<MainPage />} />     
            <Route path="/contact" element={<ContactPage /> } />
          </Routes>
        
        <AudioPlayer currentSong={currentSong}/>
      </Box>

  );
}

export default App;

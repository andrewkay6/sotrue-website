
import "./App.css";
import NavMenu from "./NavMenu";
import AudioPlayer from "./AudioPlayer";
import Header from "./Header";
import { Box } from "@mui/material";
import { useState } from "react";
import MainPage from "./MainPage";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./ContactPage";
import { songs } from "./Songs";
import UpcomingEventsPage from "./UpcomingEventsPage";
import MerchPage from "./MerchPage";

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
  const [currentSongIndex, setCurrentSongIndex] = useState(getRandomSongIndex());
  return (

    <Box sx={styles.appContainer} >
      <Header navMenuClick={() => { navMenuClick() }} />
      <NavMenu isOpen={isNavMenuOpen} setIsOpen={setIsNavMenuOpen} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/upcoming-events" element={<UpcomingEventsPage />} />
        <Route path="/merch" element={<MerchPage/>} />
      </Routes>

      <AudioPlayer
        currentSong={songs[currentSongIndex]}
        handleNextSong={() => { setCurrentSongIndex((currentSongIndex + 1) % songs.length) }}
        handlePreviousSong={() => { setCurrentSongIndex((currentSongIndex - 1) % songs.length) }} />
    </Box>

  );
}

export default App;

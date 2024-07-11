import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import { Song } from "./Songs";
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { Typography } from "@mui/material";
interface AudioPlayerProps {
    currentSong: Song;
    handleNextSong: () => void;
    handlePreviousSong: () => void;
}
const AudioPlayer = (props: AudioPlayerProps) => {
    const styles = {
        audioPlayerContainer: {
            border: "1px solid black",
            boxSizing: "border-box",
            color: "black",
            height: "10%",
            // width: "100%",
            display: "flex",
            flexDirection: "row",
            fontFamily: "Arial",
            backgroundColor: "#6e6471",
            fontWeight: "700",
            justifyContent: "center",
        },
        skipIcon: {
            fontSize: "30px",
            cursor: "pointer",
        },
        nowPlayingTitle: {
            fontFamily: "Arial",
            backgroundColor: "#6e6471",
            fontWeight: "700",
            justifyContent: "center",
            paddingLeft: "5px",
            paddingRight: "5px",
        },
        playButton: {
            backgroundColor: "transparent",
            color: "black",
            border: "1px solid black",
            borderRadius: "50%",
            padding: "20px",
            cursor: "pointer"
        },
        albumArtContainer: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxHeight: "100%",
            '&:hover': {
                filter: "brightness(0.8)"
            },
            cursor: "pointer"
        },
        controlsContainer: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "80%",
        },
        overlay: {
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            opacity: "0",
            transition: "0.5s ease",
            cursor: "pointer",
            userSelect: "none",
            '&:hover': {
                opacity: "1"
            }
        },
        isNotPlaying: {
            opacity: "1"
        }
    }
    const [songProgress, setSongProgress] = useState(0);
    useEffect(() => {
        const player = document.getElementById('player') as HTMLAudioElement;
        player.addEventListener('timeupdate', () => {
            setSongProgress(player.currentTime);
        })
    }, [])
    const getSongLength = () => {
        const player = document.getElementById('player') as HTMLAudioElement;
        if (player && player.duration) {
            return player.duration;
        }
        return 0;
    }
    const getSongProgress = () => {
        const player = document.getElementById('player') as HTMLAudioElement;
        const songLength = getSongLength();
        if (player && player.currentTime && songLength !== 0) {
            return player.currentTime / songLength * 100;
        }
        return 0;
    }

    const setPlayerProgress = (newProgress: number) => {
        const player = document.getElementById('player') as HTMLAudioElement;
        console.log(newProgress / 100 * player.duration)
        if (player) {
            player.currentTime = newProgress / 100 * player.duration;
        }
    }


    const play = () => {
        const player = document.getElementById('player') as HTMLAudioElement;
        player.play();
    }
    const convertTimeToDisplay = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    const pause = () => {
        const player = document.getElementById('player') as HTMLAudioElement;
        player.pause();
    }

    const albumClick = () => {
        const player = document.getElementById('player') as HTMLAudioElement;
        if (player === null) {
            return;
        }
        if (player.paused) {
            play();
        } else {
            pause();
        }
    }
    const isPlaying = () => {
        const player = document.getElementById('player') as HTMLAudioElement;
        if (player === null) {
            return false;
        }
        return !player.paused && !player.ended;
    }

    return (
        <Box sx={styles.audioPlayerContainer}>
            <Box sx={{ position: "relative" }}>
                <Box
                    sx={styles.albumArtContainer}
                    component="img"
                    src="/album.png"

                />
                <Box sx={isPlaying() ? { ...styles.overlay } : { ...styles.overlay, ...styles.isNotPlaying }} onClick={() => { albumClick() }} > {isPlaying() ? 'Pause' : 'Play'}</Box>
            </Box>

            <Box sx={styles.controlsContainer}>
                <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                    <SkipPreviousIcon sx={styles.skipIcon} onClick={props.handlePreviousSong}/>
                    <Typography sx={styles.nowPlayingTitle}>
                        {props.currentSong.title}
                    </Typography>
                    <SkipNextIcon sx={styles.skipIcon} onClick={props.handleNextSong}/>
                </Box>

                <audio id="player" src={props.currentSong.url} />
                <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "5px" }}>
                        {convertTimeToDisplay(songProgress)}
                    </Box>
                    <ProgressBar progressPercentage={getSongProgress()} setProgressPercentage={(newPercentage) => { setPlayerProgress(newPercentage) }} />
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "5px" }}>
                        {convertTimeToDisplay(getSongLength())}
                    </Box>
                </Box>
            </Box>
        </Box>

    );
}

export default AudioPlayer;
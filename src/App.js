// App.js
import React, { useRef } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import SonUpload from './TypeShit/SonUpload';
import MusicPlayer from './MusicPlayer';
import theme from "./Theme";

function App() {
  const musicRef = useRef(null);
  const videoRefs = useRef([]); // shared between pages

  // ✅ Control functions
  const stopMusic = () => {
    if (musicRef.current) {
      musicRef.current.pause();
    }
  };

  const resumeMusic = () => {
    if (musicRef.current) {
      musicRef.current.play().catch(() => {});
    }
  };

  const stopAllVideos = () => {
    videoRefs.current.forEach((video) => {
      if (video) video.pause();
    });
  };

  return (
    <div className="cursor">
      <MuiThemeProvider theme={theme}>
     

        <Routes>
          <Route path="/" element={<SonUpload />} />

        </Routes>

        {/* ✅ MusicPlayer is global */}
        <MusicPlayer ref={musicRef} stopAllVideos={stopAllVideos} />
      </MuiThemeProvider>
    </div>
  );
}

export default App;

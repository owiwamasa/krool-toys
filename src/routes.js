import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutPage from "./pages/About";
import Home from "./pages/Home";
import LogoGif from "./assets/Final-Gif.gif";
import ProjectPage from "./pages/Project";
import { KroolProvider } from "./context";

const RouteProvider = () => {
  const [loading, setLoading] = useState(true);

  const useScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  };

  useScrollToTop();

  useEffect(() => {
    if (!loading) return;
    setTimeout(() => {
      setLoading(false);
    }, [3000]);
  }, [loading]);

  if (loading) {
    return (
      <Box
        onClick={() => setLoading(false)}
        sx={{
          width: "100%",
          height: "800px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={LogoGif} width="500px" height="300px" alt="logo" />
        <Typography
          sx={{
            fontFamily: "PixelTimesNewRoman",
            fontSize: "32px",
          }}
        >
          Loading ...
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <KroolProvider>
        <Routes onUpdate={() => window.scrollTo(0, 0)}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>
      </KroolProvider>
    </Box>
  );
};
export default RouteProvider;

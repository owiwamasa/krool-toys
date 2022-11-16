import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutPage from "./pages/About";
import Home from "./pages/Home";
import { request } from "graphql-request";
import { ABOUT_PAGE, ALL_PROJECTS } from "./gql";
import LogoGif from "./assets/Final-Gif.gif";
import ProjectPage from "./pages/Project";

const RouteProvider = () => {
  const [loading, setLoading] = useState(true);
  const [aboutUs, setAboutUs] = useState();
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState();
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

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

  useEffect(() => {
    const fetchAboutUs = async () => {
      const { aboutUsPages } = await request({
        url: process.env.REACT_APP_HYGRAPH_URL,
        document: ABOUT_PAGE,
        requestHeaders: {
          Authorization: `Bearer ${process.env.REACT_APP_HYGRAPH_API_TOKEN}`,
        },
      });

      setAboutUs(aboutUsPages[0]);
    };

    const fetchProjects = async () => {
      const { projects } = await request({
        url: process.env.REACT_APP_HYGRAPH_URL,
        document: ALL_PROJECTS,
        requestHeaders: {
          Authorization: `Bearer ${process.env.REACT_APP_HYGRAPH_API_TOKEN}`,
        },
      });

      setProjects(projects);
      setSelectedProject(projects[0]);
    };

    fetchAboutUs();
    fetchProjects();
  }, []);

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
            fontFamily: "MessyWritingPixel",
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
      <Routes onUpdate={() => window.scrollTo(0, 0)}>
        <Route
          path="/"
          element={
            <Home
              projects={projects}
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
              selectedProjectIndex={selectedProjectIndex}
              setSelectedProjectIndex={setSelectedProjectIndex}
            />
          }
        />
        <Route path="/about" element={<AboutPage aboutUs={aboutUs} />} />
        <Route
          path="/projects/:id"
          element={<ProjectPage projects={projects} />}
        />
      </Routes>
    </Box>
  );
};
export default RouteProvider;

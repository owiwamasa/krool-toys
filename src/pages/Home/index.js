import React, { useContext } from "react";
import { Box } from "@mui/material";
import ProjectPile from "../../components/ProjectPile";
import Genie from "../../components/Genie";
import ProjectList from "../../components/ProjectList";
import { theme } from "../../MuiStyling";
import AboutUsButton from "../../components/AboutUsButton";
import { KroolContext } from "../../context";

const Home = () => {
  const {
    projects,
    selectedProject,
    setSelectedProject,
    selectedProjectIndex,
    setSelectedProjectIndex,
  } = useContext(KroolContext);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
        padding: "12px",
      }}
    >
      <Box
        sx={{
          [theme.breakpoints.up("md")]: {
            display: "none",
          },
          minWidth: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <AboutUsButton />
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          overflow: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          scrollbarWidth: "none",
          marginBottom: "5%",
          [theme.breakpoints.up("md")]: {
            maxHeight: "950px",
          },
          [theme.breakpoints.down("md")]: {
            height: "100%",
            marginTop: "8px",
          },
        }}
      >
        <ProjectList
          projects={projects}
          setSelectedProject={setSelectedProject}
          selectedProjectIndex={selectedProjectIndex}
          setSelectedProjectIndex={setSelectedProjectIndex}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            position: "sticky",
            top: "1%",
            [theme.breakpoints.down("md")]: {
              width: "20%",
              display: "none",
            },
          }}
        >
          <AboutUsButton />
          <ProjectPile
            project={selectedProject}
            selectedProjectIndex={selectedProjectIndex}
          />
        </Box>
      </Box>
      <Genie />
    </Box>
  );
};

export default Home;

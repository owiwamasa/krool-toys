import React from "react";
import { Box } from "@mui/material";
import ProjectPile from "../../components/ProjectPile";
import Genie from "../../components/Genie";
import ProjectList from "../../components/ProjectList";
import { theme } from "../../MuiStyling";
import AboutUsButton from "../../components/AboutUsButton";

const Home = ({
  projects,
  selectedProject,
  setSelectedProject,
  selectedProjectIndex,
  setSelectedProjectIndex,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          overflow: "scroll",
          marginBottom: "5%",
          [theme.breakpoints.up("md")]: {
            maxHeight: "950px",
          },
          [theme.breakpoints.down("md")]: {
            height: "100%",
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

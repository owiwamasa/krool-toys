import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { InstagramEmbed } from "react-social-media-embed";
import { ALL_PROJECTS, GENIE_TEXT } from "../../gql";
import { request } from "graphql-request";
import ContactForm from "../../components/ContactForm";
import ProjectPile from "../../components/ProjectPile";
import Genie from "../../components/Genie";
import ProjectList from "../../components/ProjectList";
import { theme } from "../../MuiStyling";
import AboutUsButton from "../../components/AboutUsButton";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [genieText, setGenieText] = useState("");
  const [selectedProject, setSelectedProject] = useState();
  useEffect(() => {
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

    const fetchGenieText = async () => {
      const { genieTexts } = await request({
        url: process.env.REACT_APP_HYGRAPH_URL,
        document: GENIE_TEXT,
        requestHeaders: {
          Authorization: `Bearer ${process.env.REACT_APP_HYGRAPH_API_TOKEN}`,
        },
      });

      setGenieText(genieTexts[0].text);
    };
    fetchGenieText();
    fetchProjects();
  }, []);

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
          <ProjectPile project={selectedProject} />
        </Box>
      </Box>
      <Genie genieText={genieText} />
      <Typography
        sx={{
          marginTop: "10px",
          fontFamily: "PixelTimesNewRoman",
          width: "90%",
          fontSize: "22vw",
          lineHeight: "18vw",
          whiteSpace: "nowrap",
          marginBottom: "30px",
        }}
      >
        Krool Toys
      </Typography>
    </Box>
  );
};

export default Home;

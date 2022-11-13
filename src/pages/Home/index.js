import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { InstagramEmbed } from "react-social-media-embed";
import { ALL_PROJECTS } from "../../gql";
import { request } from "graphql-request";
import ContactForm from "../../components/ContactForm";
import ProjectPile from "../../components/ProjectPile";

const Home = () => {
  const [projects, setProjects] = useState([]);
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
    };

    fetchProjects();
  }, []);

  return (
    <Box>
      <ProjectPile projects={projects} />
      {/* {projects.map((project) => (
        <Box key={project.id}>
          <Typography>{project.title}</Typography>
          <img src={project.featuredMedia.url} alt="featured" />
          {project.instagramUrl &&
            project.instagramUrl.map((url) => (
              <Box
                key={url}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <InstagramEmbed url={url} width={328} captioned />
              </Box>
            ))}
        </Box>
      ))} */}
    </Box>
  );
};

export default Home;

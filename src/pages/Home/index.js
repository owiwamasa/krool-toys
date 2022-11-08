import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { InstagramEmbed } from "react-social-media-embed";
import { ALL_PROJECTS } from "../../gql";
import { request } from "graphql-request";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

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

  console.log(projects);

  return (
    <Box>
      {projects.map((project) => (
        <Box key={project.id}>
          <h1>{project.title}</h1>
          <img src={project.featuredMedia.url} alt="featured" />
          {project.instagramUrl &&
            project.instagramUrl.map((url) => (
              <div
                key={url}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <InstagramEmbed url={url} width={328} captioned />
              </div>
            ))}
        </Box>
      ))}
    </Box>
  );
};

export default Home;

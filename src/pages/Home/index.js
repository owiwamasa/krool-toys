import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import { InstagramEmbed } from "react-social-media-embed";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/projects?populate=*", {
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_STRAPI_API_TOKEN,
        },
      })
      .then(({ data }) => setProjects(data.data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }
  console.log(projects);

  return (
    <Box>
      {projects.map((project) => (
        <Box key={project.id}>
          <h1>{project.attributes.title}</h1>
          <img
            src={`http://localhost:1337${project.attributes.featuredMedia.data.attributes.url}`}
            alt="featured"
          />
          {project.attributes.instagram && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <InstagramEmbed
                url={project.attributes.instagram}
                width={328}
                captioned
              />
            </div>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Home;

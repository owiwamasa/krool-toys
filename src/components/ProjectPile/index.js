import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Image } from "mui-image";
import "./index.css";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

const ProjectPile = ({ projects }) => {
  const [currentIndex, setcurrentIndex] = useState(0);

  const classNameGenerator = (index) => {
    if (index % 3 === 0 || index === 0) {
      return "image-left";
    } else if (index % 3 === 1) {
      return "image-right";
    } else {
      return "image-even";
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "80%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          onClick={() => setcurrentIndex(currentIndex - 1)}
          disabled={currentIndex === 0}
          sx={{
            color: "black",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <WestIcon />
        </Button>
        <Box
          sx={{
            marginTop: "-60px",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "0",
            height: "800px",
            width: "520px",
            overflow: "clip",
          }}
        >
          <Box
            sx={{
              display: "relative",
              height: "550px",
            }}
          >
            {projects.map((project, index) => (
              <Image
                key={index}
                className={classNameGenerator(index)}
                src={project?.featuredMedia?.url}
                width="450px"
                height="650px"
                duration={2000}
                style={{
                  opacity: index < currentIndex ? 0 : 1,
                  top: `${-100 * index}%`,
                  zIndex: `${-index}`,
                }}
              />
            ))}
          </Box>
        </Box>
        <Button
          onClick={() => setcurrentIndex(currentIndex + 1)}
          disabled={currentIndex === projects.length - 1}
          sx={{
            color: "black",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <EastIcon />
        </Button>
      </Box>
      <Typography
        sx={{
          fontFamily: "PixelTimesNewRoman",
          fontSize: "60px",
        }}
      >
        {projects[currentIndex]?.title}
      </Typography>
    </Box>
  );
};

export default ProjectPile;

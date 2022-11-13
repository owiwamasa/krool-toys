import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Image } from "mui-image";
import "./index.css";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { styled } from "@mui/system";

const NavButton = styled(Button)(() => ({
  color: "black",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

const ProjectPile = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(0);

  const classNameGenerator = (index) => {
    if (index % 3 === 0 || index === 0) {
      return "image-left";
    } else if (index % 3 === 1) {
      return "image-even";
    } else {
      return "image-right";
    }
  };

  useEffect(() => {
    if (opacity >= 1) return;

    const fadeTimeout = setInterval(() => {
      if (opacity < 1) {
        setOpacity(opacity + 0.1);
      }
    }, 100);

    return () => clearInterval(fadeTimeout);
  }, [opacity]);

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
          width: "60%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <NavButton
          disableRipple
          onClick={() => {
            setCurrentIndex(currentIndex - 1);
            setOpacity(0);
          }}
          disabled={currentIndex === 0}
        >
          <WestIcon />
        </NavButton>
        <Box
          sx={{
            marginTop: "-80px",
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
                duration={1000}
                style={{
                  opacity: index < currentIndex ? 0 : 1,
                  top: `${-100 * index}%`,
                  zIndex: `${-index}`,
                }}
              />
            ))}
          </Box>
        </Box>
        <NavButton
          disableRipple
          onClick={() => {
            setCurrentIndex(currentIndex + 1);
            setOpacity(0);
          }}
          disabled={currentIndex === projects.length - 1}
        >
          <EastIcon />
        </NavButton>
      </Box>
      <Typography
        sx={{
          marginTop: "10px",
          fontFamily: "PixelTimesNewRoman",
          fontSize: "60px",
          opacity: opacity,
        }}
      >
        {projects[currentIndex]?.title}
      </Typography>
    </Box>
  );
};

export default ProjectPile;

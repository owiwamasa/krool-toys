import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Image } from "mui-image";
import "./index.css";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { styled } from "@mui/system";
import { theme } from "../../MuiStyling";

const NavButton = styled(Button)(() => ({
  color: "black",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

const ProjectPile = ({ project }) => {
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

  useEffect(() => {
    setCurrentIndex(0);
    setOpacity(0);
  }, [project]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        top: "5%",
        [theme.breakpoints.down("xl")]: {
          marginTop: "10%",
        },
        [theme.breakpoints.down("lg")]: {
          marginTop: "25%",
        },
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
      }}
    >
      <Box
        sx={{
          width: "35vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "0",
            height: "38vw",
            width: "35vw",
            maxHeight: "650px",
            overflow: "clip",
          }}
        >
          <Box
            sx={{
              display: "relative",
              height: "50vw",
            }}
          >
            {project?.media.map((media, index) => (
              <Image
                key={index}
                className={classNameGenerator(index)}
                id="image"
                src={media.url}
                duration={1000}
                style={{
                  opacity: index < currentIndex ? 0 : 1,
                  top: `${-100 * index}%`,
                  zIndex: `${-index}`,
                  width: "30vw",
                  height: "35vw",
                  maxWidth: "600px",
                  maxHeight: "650px",
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <Typography
        sx={{
          marginTop: "10px",
          fontFamily: "PixelTimesNewRoman",
          fontSize: "4vw",
          opacity: opacity,
          whiteSpace: "nowrap",
        }}
      >
        {project?.title}
      </Typography>
      <Box sx={{ display: "flex" }}>
        <NavButton
          disableRipple
          onClick={() => {
            setCurrentIndex(currentIndex - 1);
          }}
          disabled={currentIndex === 0}
        >
          <WestIcon sx={{ fontSize: "2.5vw" }} />
        </NavButton>
        <NavButton
          disableRipple
          onClick={() => {
            setCurrentIndex(currentIndex + 1);
          }}
          disabled={currentIndex === project?.media.length - 1}
        >
          <EastIcon sx={{ fontSize: "2.5vw" }} />
        </NavButton>
      </Box>
    </Box>
  );
};

export default ProjectPile;

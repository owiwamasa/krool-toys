import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { Image } from "mui-image";
import "./index.css";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { styled } from "@mui/system";
import { theme } from "../../MuiStyling";
import { useNavigate } from "react-router-dom";

const NavButton = styled(Button)(() => ({
  color: "black",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

const ProjectPile = ({ project, selectedProjectIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const navigate = useNavigate();

  const classNameGenerator = (index) => {
    if (index % 3 === 0 || index === 0) {
      return "image-even";
    } else if (index % 3 === 1) {
      return "image-left";
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
        marginTop: "8%",
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
          width: "40vw",
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
            height: "45vw",
            width: "100%",
            maxHeight: "710px",
            overflow: "clip",
            [theme.breakpoints.up(1700)]: {
              height: "650px",
            },
          }}
        >
          <Box
            sx={{
              display: "relative",
              height: "50vw",
              [theme.breakpoints.up(1700)]: {
                height: "550px",
              },
            }}
          >
            {project?.featuredMedia.map((media, index) => (
              <Image
                showLoading={true}
                onClick={() =>
                  navigate(`/projects/${selectedProjectIndex + 1}`)
                }
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
                  maxWidth: "500px",
                  maxHeight: "550px",
                  border: "1px solid black",
                  boxShadow: "14px 10px 20px rgb(0,0,0,0.45)",
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", marginTop: "-5%" }}>
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
          disabled={currentIndex === project?.featuredMedia.length - 1}
        >
          <EastIcon sx={{ fontSize: "2.5vw" }} />
        </NavButton>
      </Box>
    </Box>
  );
};

export default ProjectPile;

import { Typography, Box } from "@mui/material";
import React from "react";
import { theme } from "../../MuiStyling";
import { useNavigate } from "react-router-dom";

const ProjectList = ({
  projects,
  setSelectedProject,
  selectedProjectIndex,
  setSelectedProjectIndex,
}) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        paddingLeft: "3vw",
        minWidth: "50%",
        [theme.breakpoints.down("md")]: {
          width: "70%",
        },
        [theme.breakpoints.down("sm")]: {
          width: "90%",
        },
      }}
    >
      {projects.map((project, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "flex-end",
            [theme.breakpoints.down("sm")]: {
              marginBottom: "3%",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "2vw",
              whiteSpace: "nowrap",
              lineHeight: "5vw",
              marginRight: "1vw",
              [theme.breakpoints.down("xl")]: {
                fontSize: "3vw",
                lineHeight: "7vw",
              },
              [theme.breakpoints.down("md")]: {
                fontSize: "3vw",
                lineHeight: "6vw",
                alignSelf: "flex-start",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "20px",
                lineHeight: "48px",
                alignSelf: "flex-start",
                marginRight: "2.5vw",
              },
            }}
          >
            -
          </Typography>
          <Typography
            onClick={() => navigate(`/projects/${index + 1}`)}
            onMouseEnter={() => {
              setSelectedProject(project);
              setSelectedProjectIndex(index);
            }}
            sx={{
              fontFamily:
                selectedProjectIndex === index ? "PixelTimesNewRoman" : "Inter",
              fontSize: selectedProjectIndex === index ? "5vw" : "4vw",
              lineHeight: "5vw",
              [theme.breakpoints.down("xl")]: {
                fontSize: selectedProjectIndex === index ? "6vw" : "5vw",
                lineHeight: "6vw",
              },
              [theme.breakpoints.down("md")]: {
                fontSize: selectedProjectIndex === index ? "8.5vw" : "7vw",
                lineHeight: "8.5vw",
              },
              [theme.breakpoints.down("sm")]: {
                fontFamily: "Inter",
                fontSize: "48px",
                lineHeight: "48px",
                whiteSpace: "normal",
              },
              "&:hover": {
                fontFamily: "PixelTimesNewRoman",
                fontSize: "5vw",
                [theme.breakpoints.down("xl")]: {
                  fontSize: selectedProjectIndex === index ? "6vw" : "5vw",
                  lineHeight: "6vw",
                },
                [theme.breakpoints.down("md")]: {
                  fontSize: "8.5vw",
                  lineHeight: "8.5vw",
                },
                [theme.breakpoints.down("sm")]: {
                  fontFamily: "Inter",
                  fontSize: "48px",
                  lineHeight: "48px",
                  whiteSpace: "normal",
                },
              },
            }}
          >
            {project?.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ProjectList;

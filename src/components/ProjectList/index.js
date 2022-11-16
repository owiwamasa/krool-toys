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
          minWidth: "70%",
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
              marginBottom: "2%",
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
              [theme.breakpoints.down("md")]: {
                fontSize: "3vw",
                lineHeight: "6vw",
                alignSelf: "flex-start",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "20px",
                lineHeight: "28px",
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
                selectedProjectIndex === index ? "MessyWritingPixel" : "Inter",
              fontSize: selectedProjectIndex === index ? "5vw" : "4vw",
              whiteSpace: "nowrap",
              lineHeight: "5vw",
              [theme.breakpoints.down("md")]: {
                fontSize: selectedProjectIndex === index ? "7vw" : "6vw",
                lineHeight: "7vw",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: selectedProjectIndex === index ? "9vw" : "32px",
                lineHeight: selectedProjectIndex === index ? "8vw" : "36px",
                whiteSpace: "normal",
              },
              "&:hover": {
                fontFamily: "MessyWritingPixel",
                fontSize: "5vw",
                [theme.breakpoints.down("md")]: {
                  fontSize: "7vw",
                  lineHeight: "7vw",
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: "9vw",
                  lineHeight: "8vw",
                },
              },
            }}
          >
            {project.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ProjectList;

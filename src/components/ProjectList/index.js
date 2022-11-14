import { Typography, Box } from "@mui/material";
import React from "react";
import { theme } from "../../MuiStyling";

const ProjectList = ({ projects, setSelectedProject }) => {
  return (
    <Box
      sx={{
        paddingLeft: "3vw",
        // [theme.breakpoints.up("sm")]: {
        //   width: "50%",
        // },
        // [theme.breakpoints.down("sm")]: {
        //   width: "300px",
        // },
      }}
    >
      {[...projects, ...projects, ...projects, ...projects].map(
        (project, index) => (
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
                lineHeight: "4vw",
                marginRight: "1vw",
                [theme.breakpoints.down("md")]: {
                  fontSize: "3vw",
                  lineHeight: "6vw",
                  alignSelf: "flex-start",
                },
              }}
            >
              {index < 9 ? `0${index + 1}` : index + 1}
            </Typography>
            <Typography
              onMouseEnter={() => setSelectedProject(project)}
              sx={{
                fontFamily: "Inter",
                fontSize: "4vw",
                whiteSpace: "nowrap",
                lineHeight: "5vw",
                [theme.breakpoints.down("md")]: {
                  fontSize: "6vw",
                  lineHeight: "7vw",
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: "7vw",
                  lineHeight: "8vw",
                  whiteSpace: "normal",
                },
                "&:hover": {
                  fontFamily: "PixelTimesNewRoman",
                  fontSize: "5vw",
                  [theme.breakpoints.down("md")]: {
                    fontSize: "8vw",
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
        )
      )}
    </Box>
  );
};

export default ProjectList;

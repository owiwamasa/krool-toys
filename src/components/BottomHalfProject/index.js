import React from "react";
import { Box, Typography } from "@mui/material";
import { theme } from "../../MuiStyling";

const BottomHalfProject = ({ project }) => {
  return (
    <Box
      sx={{
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginTop: "7%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            className="bottom-image"
            data-aos="slide-up"
            src={project?.featuredMedia[2].url}
            alt="project"
            style={{
              border: "1px solid black",
              boxShadow: "14px 10px 20px rgb(0,0,0,0.25)",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            className="bottom-image"
            data-aos="slide-left"
            src={project?.otherMedia[0].url}
            alt="project"
            style={{
              border: "1px solid black",
              boxShadow: "14px 10px 20px rgb(0,0,0,0.25)",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginTop: "7%",
        }}
      >
        <Box
          sx={{
            display: "column",
            justifyContent: "flex-start",
            width: "50%",
          }}
        >
          <Box
            data-aos="slide-right"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              className="bottom-image"
              src={project?.otherMedia[1].url}
              alt="project"
              style={{
                border: "1px solid black",
                boxShadow: "14px 10px 20px rgb(0,0,0,0.25)",
                objectFit: "cover",
                transform: "rotate(-10deg)",
              }}
            />
          </Box>
          <Box
            data-aos="slide-up"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              className="bottom-image"
              src={project?.otherMedia[2].url}
              alt="project"
              style={{
                border: "1px solid black",
                boxShadow: "14px 10px 20px rgb(0,0,0,0.25)",
                objectFit: "cover",
                transform: "rotate(10deg)",
              }}
            />
          </Box>
        </Box>
        <Typography
          data-aos="flip-right"
          dangerouslySetInnerHTML={{
            __html: project?.description.text.split("\\n").join("<br/><br/>"),
          }}
          sx={{
            fontFamily: "Inter",
            fontSize: "1.8vw",
            lineHeight: "2.2vw",
            width: "40%",
            [theme.breakpoints.down("sm")]: {
              fontSize: "16px",
              lineHeight: "16px",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default BottomHalfProject;

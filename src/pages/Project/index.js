import React, { useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Image } from "mui-image";
import { theme } from "../../MuiStyling";
import Marquee from "react-fast-marquee";

const ProjectPage = ({ projects }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const project = projects[Number(id) - 1];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2vw 4vw 10vw 4vw",
        [theme.breakpoints.down("sm")]: {
          padding: "4vw 1vw 3vw 6vw",
        },
      }}
    >
      <Button
        disableRipple
        onClick={() => navigate("/")}
        sx={{
          alignSelf: "flex-end",
          fontFamily: "PixelTimesNewRoman",
          fontSize: "5.5vw",
          height: "4vw",
          color: "black",
          "&:hover": { backgroundColor: "transparent" },
        }}
      >
        X
      </Button>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Image
          alt="project"
          src={project.featuredMedia[0].url}
          shift="top"
          duration={1500}
          style={{
            width: "55vw",
            height: "65vw",
            maxWidth: "550px",
            maxHeight: "650px",
            border: "1px solid black",
            boxShadow: "14px 10px 20px rgb(0,0,0,0.6)",
            transform: "rotate(-10deg)",
          }}
        />
        <Typography
          data-aos="fade-in"
          sx={{
            fontFamily: "PixelTimesNewRoman",
            fontSize: "6vw",
            lineHeight: "5vw",
            paddingBottom: "8%",
            width: "60%",
            textAlign: "right",
            paddingRight: "8%",
          }}
        >
          {project.title}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginTop: "-4%",
        }}
      >
        <Typography
          data-aos="flip-right"
          sx={{
            fontFamily: "PixelTimesNewRoman",
            fontSize: "3vw",
            padding: "8% 3% 7% 0",
            width: "60%",
            textAlign: "left",
          }}
        >
          {project.subtitle.text}
        </Typography>
        <Image
          alt="project"
          src={project.featuredMedia[1].url}
          shift="bottom"
          duration={1500}
          style={{
            width: "55vw",
            height: "65vw",
            maxWidth: "550px",
            maxHeight: "650px",
            border: "1px solid black",
            boxShadow: "14px 10px 20px rgb(0,0,0,0.6)",
            transform: "rotate(10deg)",
          }}
        />
      </Box>
      <Marquee gradient={false} speed={30} style={{ marginTop: "10%" }}>
        {Array(20)
          .fill("x")
          .map((item, index) => (
            <Typography
              key={index}
              sx={{
                fontFamily: "PixelTimesNewRoman",
                fontSize: "5vw",
                marginRight: "2vw",
                color: "#DC159D",
              }}
            >
              {`${project.title} x`}
            </Typography>
          ))}
      </Marquee>
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
            data-aos="slide-up"
            src={project.featuredMedia[2].url}
            alt="project"
            style={{
              width: "40vw",
              height: "40vw",
              maxWidth: "550px",
              maxHeight: "650px",
              border: "1px solid black",
              boxShadow: "14px 10px 20px rgb(0,0,0,0.6)",
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
            data-aos="slide-left"
            src={project.otherMedia[0].url}
            alt="project"
            style={{
              width: "40vw",
              height: "40vw",
              maxWidth: "550px",
              maxHeight: "650px",
              border: "1px solid black",
              boxShadow: "14px 10px 20px rgb(0,0,0,0.6)",
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
          sx={{ display: "column", justifyContent: "flex-start", width: "50%" }}
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
              src={project.otherMedia[1].url}
              alt="project"
              style={{
                width: "40vw",
                height: "40vw",
                maxWidth: "550px",
                maxHeight: "650px",
                border: "1px solid black",
                boxShadow: "14px 10px 20px rgb(0,0,0,0.6)",
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
              src={project.otherMedia[2].url}
              alt="project"
              style={{
                width: "40vw",
                height: "40vw",
                maxWidth: "550px",
                maxHeight: "650px",
                border: "1px solid black",
                boxShadow: "14px 10px 20px rgb(0,0,0,0.6)",
                objectFit: "cover",
                transform: "rotate(10deg)",
              }}
            />
          </Box>
        </Box>
        <Typography
          data-aos="flip-right"
          sx={{
            fontFamily: "PixelTimesNewRoman",
            fontSize: "3vw",
            lineHeight: "3.5vw",
            width: "40%",
          }}
        >
          {project.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectPage;

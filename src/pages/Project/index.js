import React, { useEffect, useContext } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Image } from "mui-image";
import { theme } from "../../MuiStyling";
import Marquee from "react-fast-marquee";
import ProjectPageNavigation from "../../components/ProjectPageNavigation";
import "./index.css";
import { KroolContext } from "../../context";

const ProjectPage = () => {
  const { projects } = useContext(KroolContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const project = projects[Number(id) - 1];
  const prevProject = projects[Number(id) - 2] && projects[Number(id) - 2];
  const nextProject = projects[Number(id)] && projects[Number(id)];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box
      key={project?.id}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100%",
        overflow: "hidden",
        padding: "2vw 4vw 4vw 4vw",
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
          src={project?.featuredMedia[0].url}
          shift="top"
          duration={1500}
          style={{
            width: "55vw",
            height: "65vw",
            maxWidth: "550px",
            maxHeight: "650px",
            border: "1px solid black",
            boxShadow: "14px 10px 20px rgb(0,0,0,0.45)",
            transform: "rotate(-10deg)",
          }}
        />
        <Typography
          data-aos="fade-in"
          sx={{
            fontFamily: "PixelTimesNewRoman",
            fontSize: "6vw",
            lineHeight: "6vw",
            paddingBottom: "8%",
            width: "60%",
            textAlign: "right",
            paddingRight: "8%",
            [theme.breakpoints.down("lg")]: {
              paddingLeft: "10%",
            },
          }}
        >
          {project?.title}
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
          dangerouslySetInnerHTML={{
            __html: project?.subtitle.text.split("\\n").join("<br/><br/>"),
          }}
          sx={{
            fontFamily: "PixelTimesNewRoman",
            fontSize: "3vw",
            lineHeight: "3.5vw",
            padding: "10% 3% 7% 6%",
            width: "60%",
            textAlign: "left",
            textTransform: "capitalize",
            [theme.breakpoints.down("sm")]: {
              fontSize: "16px",
              lineHeight: "20px",
            },
          }}
        />
        <Image
          alt="project"
          src={project?.featuredMedia[1].url}
          shift="bottom"
          duration={1500}
          style={{
            width: "55vw",
            height: "65vw",
            maxWidth: "550px",
            maxHeight: "650px",
            border: "1px solid black",
            boxShadow: "14px 10px 20px rgb(0,0,0,0.45)",
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
                fontFamily: "MessyWritingPixel",
                fontSize: "5vw",
                marginRight: "2vw",
                color: "#F90502",
              }}
            >
              {`${project?.title} x`}
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
          [theme.breakpoints.down("sm")]: {
            width: "110%",
          },
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
              boxShadow: "14px 10px 20px rgb(0,0,0,0.45)",
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
              boxShadow: "14px 10px 20px rgb(0,0,0,0.45)",
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
              className="bottom-image"
              src={project?.otherMedia[1].url}
              alt="project"
              style={{
                border: "1px solid black",
                boxShadow: "14px 10px 20px rgb(0,0,0,0.45)",
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
                boxShadow: "14px 10px 20px rgb(0,0,0,0.45)",
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
            fontSize: "2vw",
            lineHeight: "2.5vw",
            width: "40%",
            [theme.breakpoints.down("sm")]: {
              fontSize: "18px",
              lineHeight: "18px",
            },
          }}
        />
      </Box>
      <ProjectPageNavigation
        id={id}
        nextProject={nextProject}
        prevProject={prevProject}
      />
    </Box>
  );
};

export default ProjectPage;

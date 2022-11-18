import { Box, Typography } from "@mui/material";
import Image from "mui-image";
import React from "react";
import { theme } from "../../MuiStyling";

const BottomProjectImagesSlide = ({ project }) => {
  const images = [project.featuredMedia[2], ...project.otherMedia];
  return (
    <Box
      sx={{
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          display: "none",
        },
      }}
    >
      <Box
        sx={{
          overflowX: "scroll",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          flexWrap: "nowrap",
          height: "320px",
          marginBottom: "20px",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          scrollbarWidth: "none",
        }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.url}
            style={{
              border: "1px solid black",
              boxShadow: "14px 10px 20px rgb(0,0,0,0.25)",
              width: "200px",
              height: "250px",
              marginRight: "30px",
              scrollSnapAlign: "start",
            }}
          />
        ))}
      </Box>
      <Typography
        dangerouslySetInnerHTML={{
          __html: project?.description.text.split("\\n").join("<br/><br/>"),
        }}
        sx={{
          fontFamily: "Inter",
          width: "90%",
          paddingLeft: "20px",
          fontSize: "14px",
          lineHeight: "14px",
          minHeight: "60px",
        }}
      />
    </Box>
  );
};

export default BottomProjectImagesSlide;

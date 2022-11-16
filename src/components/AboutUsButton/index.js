import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { theme } from "../../MuiStyling";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUsButton = () => {
  const navigate = useNavigate();

  const goToAboutPage = () => {
    navigate("/about");
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box
      data-aos="flip-right"
      sx={{
        alignSelf: "flex-end",
        display: "flex",
        justifyContent: "flex-start",
        padding: "5px 40px 0 0 ",
        [theme.breakpoints.down("md")]: {
          justifyContent: "center",
          padding: "0 0 0 20px",
          marginRight: "20px",
        },
      }}
    >
      <Button
        disableRipple
        onClick={() => goToAboutPage()}
        sx={{
          fontFamily: "Inter",
          fontSize: "2.4vw",
          lineHeight: "3vw",
          textTransform: "capitalize",
          whiteSpace: "nowrap",
          color: "black",
          "&:hover": {
            backgroundColor: "transparent",
            fontFamily: "MessyWritingPixel",
            fontSize: "2.8vw",
            lineHeight: "3vw",
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: "20px",
            "&:hover": {
              backgroundColor: "transparent",
              fontFamily: "MessyWritingPixel",
              fontSize: "20px",
            },
          },
        }}
      >
        Krool Toys
      </Button>
    </Box>
  );
};

export default AboutUsButton;

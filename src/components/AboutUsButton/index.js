import { Box, Button } from "@mui/material";
import React from "react";
import { theme } from "../../MuiStyling";
import { useNavigate } from "react-router-dom";

const AboutUsButton = () => {
  const navigate = useNavigate();

  const goToAboutPage = () => {
    navigate("/about");
  };
  return (
    <Box
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
          fontFamily: "PixelTimesNewRoman",
          fontSize: "2.8vw",
          textTransform: "capitalize",
          whiteSpace: "nowrap",
          color: "black",
          "&:hover": {
            backgroundColor: "transparent",
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: "20px",
          },
        }}
      >
        Krools Toys
      </Button>
    </Box>
  );
};

export default AboutUsButton;

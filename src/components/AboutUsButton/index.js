import { Box, Button } from "@mui/material";
import React from "react";

const AboutUsButton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        padding: "20px 40px 0 0 ",
      }}
    >
      <Button
        disableRipple
        sx={{
          fontFamily: "PixelTimesNewRoman",
          fontSize: "40px",
          textTransform: "capitalize",
          color: "black",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        Krools Toys
      </Button>
    </Box>
  );
};

export default AboutUsButton;

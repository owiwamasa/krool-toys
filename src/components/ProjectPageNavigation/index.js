import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { theme } from "../../MuiStyling";

const ProjectPageNavigation = ({ nextProject, prevProject, id }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "12%",
        minWidth: "90%",
        [theme.breakpoints.down("sm")]: {
          minWidth: "100%",
        },
      }}
    >
      {prevProject ? (
        <Button
          disableRipple
          onClick={() => navigate(`/projects/${Number(id) - 1}`)}
          sx={{
            fontFamily: "Inter",
            fontSize: "3vw",
            color: "black",
            whiteSpace: "nowrap",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "transparent",
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "14px",
              lineHeight: "20px",
            },
          }}
        >
          <WestIcon sx={{ marginRight: "10%", fontSize: "3vw" }} />
          {prevProject.title}
        </Button>
      ) : (
        <div></div>
      )}
      {nextProject ? (
        <Button
          disableRipple
          onClick={() => navigate(`/projects/${Number(id) + 1}`)}
          sx={{
            fontFamily: "Inter",
            fontSize: "3vw",
            color: "black",
            whiteSpace: "nowrap",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "transparent",
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "14px",
              lineHeight: "20px",
            },
          }}
        >
          {nextProject.title}
          <EastIcon sx={{ marginLeft: "10%", fontSize: "3vw" }} />
        </Button>
      ) : (
        <div></div>
      )}
    </Box>
  );
};

export default ProjectPageNavigation;

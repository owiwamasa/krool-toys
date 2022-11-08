import { Box } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const NavLabels = [
  { title: "Recent Work", url: "/recent-work" },
  { title: "Archive", url: "/archive" },
  { title: "About", url: "/about" },
  { title: "Email", url: "mailto: email@email.com" },
];

const Navigation = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        padding: "40px 60px 0 0 ",
      }}
    >
      <Box
        sx={{
          width: "40%",
          display: "flex",
          justifyContent: "space-between",
          "& a:-webkit-any-link": {
            color: "black",
            textDecoration: "none",
          },
        }}
      >
        {NavLabels.map((label) => (
          <NavLink key={label.title} to={label.url}>
            {label.title}
          </NavLink>
        ))}
      </Box>
    </Box>
  );
};

export default Navigation;

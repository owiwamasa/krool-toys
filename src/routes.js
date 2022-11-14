import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const RouteProvider = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Box>
  );
};
export default RouteProvider;

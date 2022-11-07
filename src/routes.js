import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";

const RouteProvider = () => {
  return (
    <Box>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Box>
  );
};
export default RouteProvider;

import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import AboutUsButton from "./components/AboutUsButton";
import Home from "./pages/Home";

const RouteProvider = () => {
  return (
    <Box>
      <AboutUsButton />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Box>
  );
};
export default RouteProvider;

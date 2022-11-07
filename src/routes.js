import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const RouteProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
export default RouteProvider;

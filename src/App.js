import RouteProvider from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <RouteProvider />
    </Router>
  );
};

export default App;

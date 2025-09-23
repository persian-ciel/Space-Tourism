import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/pages/home";
import Destination from "./components/pages/destination/Index";

function App() {
  const location = useLocation(); // gives current URL

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home activePath={location.pathname} />} />
        <Route path="/destination" element={<Destination activePath={location.pathname} />} />
      </Routes>
    </>
  );
}

export default App;

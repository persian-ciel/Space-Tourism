import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/pages/home";
import Destination from "./components/pages/destination/Index";
import Crew from "./components/pages/crew/Index";

function App() {
  const location = useLocation(); 

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home activePath={location.pathname} />} />
        <Route path="/destination" element={<Destination activePath={location.pathname} />} />
        <Route path="/Crew" element={<Crew activePath={location.pathname} />} />
      </Routes>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Case1.jsx";
import Case2Page from "../pages/Case2.jsx";
import Case3Page from "../pages/Case3.jsx";
import Case4Page from "../pages/Case4.jsx";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case2" element={<Case2Page />} />
      <Route path="/case3" element={<Case3Page />} />
      <Route path="/case4" element={<Case4Page />} />
    </Routes>
  </Router>
);

export default AppRoutes;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import SkillList from "./pages/SkillList";
import PostSkill from "./pages/PostSkill";
import JobResources from "./pages/JobResources";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<SkillList />} />
        <Route path="/post" element={<PostSkill />} />
        <Route path="/resources" element={<JobResources />} />
      </Routes>
    </Router>
  );
}

export default App;

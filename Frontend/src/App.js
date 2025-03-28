import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Leaderboard from "./components/Leaderboard";
import LandingPage from "./components/LandingPage";
import AISuggestions from "./components/AISuggestions";
function App() {
  return (
    <Router>
      <div >
        <Routes>

          <Route path="/leaderboard" element={<AISuggestions />} />
        </Routes>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <div className="App">
      <Router>
        <Routes>
          {/* HOME  SEARCH BUTTON */}
          <Route path="/" element={<Home/>} />
          {/* Search Page (Results)  */}
          <Route path="/search" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

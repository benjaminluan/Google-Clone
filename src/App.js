import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
function App() {
  return (
    // BEM
    <div className="App">
      <Router>
        <Routes>
          {/* HOME  SEARCH BUTTON */}
          <Route path="/" element={<Home/>} />
          {/* Search Page (Results)  */}
          <Route path="/search" element={<SearchPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

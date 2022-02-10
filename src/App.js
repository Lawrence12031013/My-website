import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import "./style/style.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About me";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/My-website" element={<Homepage />} />
        <Route path="/About" element={<About me />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

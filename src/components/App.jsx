import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Login from "./Login";

function App() {
  return(
  <BrowserRouter>
  <NavBar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
  </Routes>
  </BrowserRouter>
  )
 
}

ReactDOM.render(<App />, document.getElementById("root"));
import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import DashBoard from "./Components/DashBoard"

function App() {
  return (
    <>
    <Router>
    <Header/>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<DashBoard/>}/>
      <Route exact path="/interface" element={<DashBoard/>}/>
      <Route exact path="/components" element={<DashBoard/>}/>
      <Route exact path="/pages" element={<DashBoard/>}/>
      <Route exact path="/forms" element={<DashBoard/>}/>
      <Route exact path="/gallery" element={<DashBoard/>}/>
      <Route exact path="/documentation" element={<DashBoard/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;

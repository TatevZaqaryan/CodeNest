import React from "react";
import {   Routes, Route} from "react-router-dom";
import Home from "./Home";
import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Courses-section/Courses";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import About from "./About";

const App = () => {
  return (
    <>
    
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} /> Home page
        <Route path="/About" element={<AboutUs/>} /> {/* About page */}
        <Route path="/Courses" element={<Courses/>} /> {/* Courses page */}
        {/* <Route path="/" element={<Blog />} /> Blog page */}
      </Routes>
      <Footer/>
   
  </>
  )

}
export default App;

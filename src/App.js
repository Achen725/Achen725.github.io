import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Preloader";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Hobbies from "./components/Hobbies/Hobbies";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

    const [load, upadateLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        upadateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);


  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/hobbies" element={<Hobbies />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

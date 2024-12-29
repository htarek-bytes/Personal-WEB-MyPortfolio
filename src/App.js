import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
    return (
        <div className="bg-spaceBlack text-white font-techno">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
        </div>
    );
};

export default App;

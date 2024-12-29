import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full bg-spaceGray text-white py-4 z-20">
            <ul className="flex justify-center space-x-8">
                <li><Link to="hero" smooth duration={500}>Home</Link></li>
                <li><Link to="about" smooth duration={500}>About</Link></li>
                <li><Link to="projects" smooth duration={500}>Projects</Link></li>
                <li><Link to="contact" smooth duration={500}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;

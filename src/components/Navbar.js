import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";

export default function Navbar() {
    const [navBackground, setNavBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setNavBackground(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full top-0 z-20 transition-all duration-500 ${
                navBackground
                    ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 shadow-lg"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo / Personal Branding */}
                <div className="flex items-center space-x-6">
                    <h1 className="text-3xl font-bold text-neonBlue flex">
                        <span className="text-white">trk.Init(</span>
                        <span className="text-neonBlue animate-pulse">Portfolio</span>
                        <span className="text-white">)</span>
                    </h1>
                    <p className="text-white text-sm ml-4 pl-5">Tarek Hireche | BsC. Computer Science</p> {/* Added margin left */}
                </div>

                {/* Navigation Links */}
                <div className="flex space-x-8 text-white text-lg font-mono">
                    {[
                        { id: "hero", label: "Home" },
                        { id: "about", label: "About" },
                        { id: "services", label: "Services" },
                        { id: "portfolio", label: "Portfolio" },
                        { id: "contact", label: "Contact" },
                    ].map((link) => (
                        <Link
                            key={link.id}
                            to={link.id}
                            smooth
                            duration={500}
                            className="cursor-pointer hover:text-neonBlue hover:glow-transition transition-all duration-300"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}

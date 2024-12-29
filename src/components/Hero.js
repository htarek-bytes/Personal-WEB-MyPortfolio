import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section id="hero" className="h-screen flex flex-col justify-center items-center text-center relative z-10">
            <motion.h1
                className="text-6xl font-extrabold text-neonBlue glow"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
            >
                Welcome to My Universe
            </motion.h1>
            <p className="mt-4 text-xl text-neonPurple">
                A passionate engineer exploring the intersection of technology and creativity.
            </p>
        </section>
    );
};

export default Hero;

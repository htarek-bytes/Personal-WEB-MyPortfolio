import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.section
            id="about"
            className="py-16 px-8 bg-spaceGray text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-3xl font-bold text-center text-neonBlue">About Me</h2>
            <p className="mt-4 text-center max-w-2xl mx-auto">
                I am a passionate developer exploring the intersection of technology and creativity, building futuristic web applications.
            </p>
        </motion.section>
    );
};

export default About;

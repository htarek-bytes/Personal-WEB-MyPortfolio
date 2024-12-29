import React from "react";
import { motion } from "framer-motion";

const projects = [
    { title: "Project A", description: "An AI-based application." },
    { title: "Project B", description: "A space exploration simulation." },
    { title: "Project C", description: "A futuristic UI design system." },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-8 bg-spaceGray">
            <h2 className="text-4xl font-bold text-center text-neonGreen">Projects</h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="p-6 border border-gray-700 rounded-lg shadow-lg bg-spaceBlack hover:scale-105 transition-transform"
                        whileHover={{ scale: 1.1 }}
                    >
                        <h3 className="text-2xl font-semibold text-neonPink">{project.title}</h3>
                        <p className="mt-2 text-gray-400">{project.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

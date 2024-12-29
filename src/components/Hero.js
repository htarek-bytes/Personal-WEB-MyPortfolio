import { motion } from 'framer-motion';
import { Link } from 'react-scroll';  // To enable smooth scroll functionality

export default function Hero() {
    return (
        <section
            id="hero"
            className="h-screen bg-gradient-radial text-white flex items-center justify-center"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="text-center max-w-2xl"
            >
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    Hi,I am <span className="font-extrabold mb-6 glow">Tarek.</span>
                </h1>
                <p className="text-lg md:text-xl mb-8">
                    aka <span className="text-neonGreen glow animate-neonPulse">trk </span>
                    and this... is my <span className="text-neonBlue glow animate-neonPulse">portfolio.</span>
                </p>

                {/* Button with smooth scroll functionality */}
                <Link
                    to="about"  // Link to the About section
                    smooth={true}  // Enable smooth scrolling
                    duration={500}  // Scroll duration
                    offset={-70}  // Optional: offset for top navigation bar
                >
                    <motion.button
                        className="bg-neonBlue text-deepSpace px-6 py-3 rounded-md shadow-neon hover:shadow-neon hover:bg-neonGreen transition duration-300 ease-in-out mt-8"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <span className="font-extrabold">
                            trk.Show(
                            <span
                                className="text-white text-xl animate-pulse"
                                style={{
                                    textShadow: "0 0 4px rgba(0, 255, 255, 0.5), 0 0 8px rgba(0, 255, 255, 0.5)"
                                }}
                            >
                                AboutMe
                            </span>
                            )
                        </span>
                    </motion.button>
                </Link>
            </motion.div>
        </section>
    );
}

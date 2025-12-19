import { motion } from 'framer-motion';
import { useState, useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import translations from '../translations';
import BinarySnow from './BinarySnow';

export default function Hero() {
    const [showConsole, setShowConsole] = useState(false);
    const { language } = useContext(LanguageContext);

    const handleClick = () => {
        const messageElement = document.getElementById('stalking-message');

        // Show the console and hide the secret message initially
        setShowConsole(true);
        messageElement.classList.add('hidden');

        // Simulate the fake process (trigger message after 1 second)
        setTimeout(() => {
            // Show the secret (fun) message
            messageElement.classList.remove('hidden');

            // Keep it visible briefly, then scroll to About
            setTimeout(() => {
                document
                    .getElementById('about')
                    .scrollIntoView({ behavior: 'smooth', block: 'start' });

                // Hide the console and message after
                setShowConsole(false);
                messageElement.classList.add('hidden');
            }, 1000);
        }, 1000);
    };

    return (
        <section
            id="hero"
            className="min-h-screen bg-gradient-radial text-white flex flex-col items-center justify-center relative overflow-hidden"
        >

            {/* Render the BinarySnow on top */}
            <BinarySnow />

            {/* Fake console (slides in from right) */}
            <motion.div
                id="fake-console"
                initial={{ opacity: 0, x: '100%' }}
                animate={{
                    opacity: showConsole ? 1 : 0,
                    x: showConsole ? 0 : '100%',
                }}
                transition={{ duration: 0.3 }}
                className="
          absolute top-1/2 -translate-y-1/2 right-0
          w-11/12 sm:w-1/3 max-w-sm
          bg-spaceGray text-white p-4
          border-2 border-neonBlue z-50
          shadow-lg
        "
            >
                <div className="text-left text-white">
                    <div className="text-lg sm:text-xl mb-4 font-bold neon-highlight-green">
                        {language === 'en' ? 'Injecting Hook...' : 'Injection de Hook...'}
                    </div>
                    <div className="text-base sm:text-lg font-mono">
                        {language === 'en'
                            ? 'Running function...'
                            : 'Exécution de la fonction...'}
                    </div>
                    <div
                        id="stalking-message"
                        className="mt-6 hidden text-lg sm:text-xl font-bold neon-highlight-red"
                    >
                        {language === 'en'
                            ? 'Happy stalking time!'
                            : 'Bon stalking time!'}
                    </div>
                </div>
            </motion.div>

            {/* Main hero content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="text-center px-4 sm:px-6 max-w-2xl z-10 relative"
            >
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
                    {translations[language].hero.greeting}{' '}
                    <span className="font-extrabold glow">Tarek</span>
                </h1>

                <div className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 relative inline-block w-full">
                    <div className="mb-6">
  <span className="inline-block bg-neonGreen text-black font-semibold text-sm sm:text-base px-4 py-2 rounded-full animate-pulse shadow-md">
    {language === 'en'
        ? 'Available for a Fall or winter 2025 internship'
        : 'Disponible pour un stage à l’automne ou hiver 2025'}
  </span>
                    </div>

                    <span>
            {translations[language].hero.aka}{' '}
              <span className="text-neonGreen glow animate-neonPulse">
              soymyo{' '}
            </span>
              {translations[language].hero.portfolio}
              <span className="text-neonBlue glow animate-neonPulse">
              {' '}
                  portfolio.
            </span>
          </span>
                </div>

                <motion.button
                    onClick={handleClick}
                    className="
            bg-neonBlue text-deepSpace
            px-4 py-2 sm:px-6 sm:py-3
            rounded-md shadow-neon hover:shadow-neon
            hover:bg-neonGreen transition duration-300
            ease-in-out font-extrabold
          "
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
                >
                    trk.Show(
                    <span
                        className="text-white text-lg sm:text-xl animate-pulse"
                        style={{
                            textShadow:
                                '0 0 4px rgba(0, 255, 255, 0.5), 0 0 8px rgba(0, 255, 255, 0.5)',
                        }}
                    >
            {language === 'en' ? 'AboutMe' : 'ÀPropos'}
          </span>
                    )
                </motion.button>
            </motion.div>
        </section>
    );
}

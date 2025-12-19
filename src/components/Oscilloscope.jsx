import React, { useEffect, useRef } from 'react';

const Oscilloscope = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationId;
        let time = 0;

        // Standard oscilloscope graticule is usually 10 horizontal div by 8 vertical div
        const numDivisionsX = 10;
        const numDivisionsY = 8;

        const resize = () => {
            if (containerRef.current) {
                // Ensure high resolution on retina displays if needed,
                // but for CRT look, standard res is often fine.
                canvas.width = containerRef.current.clientWidth;
                canvas.height = 300;
            }
        };
        window.addEventListener('resize', resize);
        resize();

        // 1. NEW: Draws a realistic Tektronix-style graticule with subdivisions
        const drawGrid = () => {
            const width = canvas.width;
            const height = canvas.height;
            const centerX = width / 2;
            const centerY = height / 2;
            const pixelsPerDivX = width / numDivisionsX;
            const pixelsPerDivY = height / numDivisionsY;

            ctx.strokeStyle = 'rgba(0, 51, 0, 0.5)'; // More subtle, semi-transparent grid
            ctx.lineWidth = 1;
            ctx.beginPath();

            // Draw major vertical lines
            for (let i = 0; i <= numDivisionsX; i++) {
                const x = i * pixelsPerDivX;
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
            }
            // Draw major horizontal lines
            for (let i = 0; i <= numDivisionsY; i++) {
                const y = i * pixelsPerDivY;
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
            }
            ctx.stroke();

            // Draw Center Axes with Tick Marks (Subdivisions)
            ctx.strokeStyle = 'rgba(0, 51, 0, 0.8)'; // Slightly brighter for center axes
            ctx.lineWidth = 1.5;
            ctx.beginPath();

            // Center Y axis
            ctx.moveTo(centerX, 0);
            ctx.lineTo(centerX, height);
            // Center X axis
            ctx.moveTo(0, centerY);
            ctx.lineTo(width, centerY);
            ctx.stroke();

            // Draw Ticks on Center axes
            ctx.lineWidth = 1;
            ctx.beginPath();
            const tickSize = 5;
            const subDivs = 5; // 5 ticks per division

            // Ticks along horizontal center
            for (let i = 0; i <= numDivisionsX; i++) {
                const majorX = i * pixelsPerDivX;
                for(let j=1; j<subDivs; j++) {
                    const tickX = majorX + (j * (pixelsPerDivX/subDivs));
                    ctx.moveTo(tickX, centerY - tickSize/2);
                    ctx.lineTo(tickX, centerY + tickSize/2);
                }
            }

            // Ticks along vertical center
            for (let i = 0; i <= numDivisionsY; i++) {
                const majorY = i * pixelsPerDivY;
                for(let j=1; j<subDivs; j++) {
                    const tickY = majorY + (j * (pixelsPerDivY/subDivs));
                    ctx.moveTo(centerX - tickSize/2, tickY);
                    ctx.lineTo(centerX + tickSize/2, tickY);
                }
            }
            ctx.stroke();
        };

        // 2. NEW: Adds a subtle vignette effect to mimic curved CRT glass
        const drawCRTBackground = () => {
            // Create a radial gradient for a slight vignette effect
            const gradient = ctx.createRadialGradient(
                canvas.width / 2, canvas.height / 2, 0, // Inner circle center/radius
                canvas.width / 2, canvas.height / 2, canvas.width * 0.6 // Outer circle center/radius
            );
            // Center is slightly lighter greenish-black
            gradient.addColorStop(0, 'rgba(10, 20, 10, 1)');
            // Corners are deeply black
            gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');

            // We use fillRect with globalAlpha to create the trail effect over time
            ctx.globalCompositeOperation = 'source-over';
            ctx.fillStyle = gradient;
            // This opacity controls the "decay" speed of the phosphor trails.
            // Lower = longer trails.
            ctx.globalAlpha = 0.2;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = 1.0; // Reset alpha for next draws
        }


        const animate = () => {
            // Keep speed consistent with your provided code
            time += 0.05;

            // 1. Draw the CRT background (handles fading trails)
            drawCRTBackground();

            // 2. Draw the static Grid on top of background
            drawGrid();

            // 3. Draw the Signal
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#39ff14'; // Phosphor Green
            // Increase shadow blur slightly for more "bloom"
            ctx.shadowBlur = 8;
            ctx.shadowColor = '#39ff14';
            // Use lighter composite operation to make overlapping parts of the wave glow brighter
            ctx.globalCompositeOperation = 'lighter';

            ctx.beginPath();
            for (let x = 0; x < canvas.width; x++) {

                // 3. NEW: Add a tiny bit of random "analog noise" to the signal
                const noise = (Math.random() - 0.5) * 3;

                const y = canvas.height / 2 +
                    Math.sin(x * 0.01 + time * 2) * 40 +
                    Math.sin(x * 0.02 + time) * 20 +
                    noise; // Add noise here

                if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
            }
            ctx.stroke();

            // Reset settings for next frame
            ctx.shadowBlur = 0;
            ctx.globalCompositeOperation = 'source-over';

            animationId = requestAnimationFrame(animate);
        };

        animate();
        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        // Added a subtle inner shadow to the container for depth
        <div ref={containerRef} className="relative w-full border-2 border-gray-800 bg-crt-black rounded-lg overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] opacity-90 hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-2 left-2 text-[10px] text-phosphor-green font-bold z-10 pointer-events-none">CH1: 2V/div <br/> T: 500us</div>
            <div className="absolute top-2 right-2 text-[10px] text-system-cyan font-bold z-10 pointer-events-none">TRIG: AUTO</div>
            <canvas ref={canvasRef} className="block" />
        </div>
    );
};

export default Oscilloscope;
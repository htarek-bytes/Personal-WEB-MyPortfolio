import React, { useState, useEffect } from 'react';
import Oscilloscope from './components/Oscilloscope';
import HexCard from './components/HexCard';

function App() {
    const [booting, setBooting] = useState(true);

    useEffect(() => {
        // Quick boot sequence
        setTimeout(() => setBooting(false), 1500);
    }, []);

    if (booting) {
        return (
            <div className="h-screen w-full bg-crt-black flex flex-col justify-end p-8 font-mono text-phosphor-green text-sm">
                <p>>> BIOS DATE 01/05/2026 14:22:51 VER 1.0.4</p>
                <p>>> DETECTING USER IDENTITY... [TAREK HIRECHE]</p>
                <p>>> LOADING KERNEL MODULES... [DONE]</p>
                <p className="animate-pulse">_</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-crt-black bg-grid-pattern bg-[size:30px_30px] p-4 md:p-12 relative z-10 text-gray-300 flex flex-col">

            {/* HEADER */}
            <header className="flex justify-between items-end border-b-2 border-gray-800 pb-6 mb-12">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 bg-phosphor-green rounded-full animate-pulse"></span>
                        <span className="text-phosphor-green text-xs font-mono tracking-widest">SYSTEM_USER: ROOT</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter glow-text mb-2">
                        TAREK HIRECHE
                    </h1>
                    <p className="text-system-cyan text-sm md:text-base font-mono">
                        >> SYSTEMS ENGINEER // COMPILERS // REVERSE_ENGINEERING
                    </p>
                </div>
                <div className="text-right hidden md:block font-mono">
                    <div className="text-xs text-alert-amber mb-1">VOLTAGE: 3.3V [STABLE]</div>
                    <div className="text-xs text-gray-500">MODE: KERNEL_SPACE</div>
                </div>
            </header>

            {/* MAIN GRID */}
            <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-grow">

                {/* LEFT COLUMN: VISUALS & CORE WORK (8 cols) */}
                <div className="lg:col-span-8 space-y-12">

                    {/* OSCILLOSCOPE */}
                    <section>
                        <div className="flex items-center justify-between mb-4 font-mono">
                            <h2 className="text-gray-500 text-xs tracking-[0.2em]">/// SIGNAL_ANALYSIS ///</h2>
                            <span className="text-phosphor-green text-xs">● ONLINE</span>
                        </div>
                        <Oscilloscope />
                        <div className="mt-6 border-l-2 border-phosphor-green pl-4">
                            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                                Specializing in <strong className="text-white">computational efficiency</strong>, <strong className="text-white">language design</strong>, and <strong className="text-white">hardware interaction</strong>.
                                I dismantle complex systems to optimize memory, latency, and instruction cycles.
                            </p>
                        </div>
                    </section>

                    {/* REAL PROJECTS */}
                    <section>
                        <h2 className="text-gray-500 text-xs tracking-[0.2em] mb-6 font-mono">/// CORE_DUMPS (PROJECTS) ///</h2>
                        <div className="space-y-6">

                            {/* PROJECT 1: ZIG MEMORY MANAGER */}
                            <HexCard
                                title="Zig-Memory-Allocator"
                                size="8KB"
                                date="2025"
                                tags={['ZIG', 'MEMORY_MGMT', 'STACKS']}
                            >
                                Low-level memory management implementation in Zig. Engineered custom stack structures ("Pile")
                                and recycling logic to optimize resource allocation without garbage collection overhead.
                                <br/><span className="text-system-cyan text-xs mt-2 block">>> SOURCE: github.com/SmilingAustrich/UdeM-IFT2035-HM2</span>
                            </HexCard>

                            {/* PROJECT 2: MIPS ASSEMBLY */}
                            <HexCard
                                title="MIPS-Matrix-Validator"
                                size="12KB"
                                date="2024"
                                tags={['ASSEMBLY', 'MIPS32', 'REGISTERS']}
                            >
                                (Magic Square) Direct hardware manipulation algorithm written in MIPS Assembly.
                                Validates 4x4 integer matrices by managing stack frames and register allocation manually.
                                <br/><span className="text-system-cyan text-xs mt-2 block">>> SOURCE: github.com/SmilingAustrich/UdeM-IFT1227-D3</span>
                            </HexCard>

                            {/* PROJECT 3: GIRARD INTERPRETER (PROLOG) */}
                            <HexCard
                                title="System-F-Integrator"
                                size="32KB"
                                date="2025"
                                tags={['PROLOG', 'COMPILERS', 'LAMBDA_CALC']}
                            >
                                (Girard Interpreter) A robust polymorphic type checker and interpreter for System F implemented in Scryer Prolog.
                                Handles alpha-equivalence, capture-avoiding substitution, and beta-reduction for Church numerals.
                                <br/><span className="text-system-cyan text-xs mt-2 block">>> SOURCE: github.com/SmilingAustrich/UdeM-IFT2035-HM3</span>
                            </HexCard>

                            {/* PROJECT 4: HOSPITAL SYSTEM */}
                            <HexCard
                                title="Clinical-Cluster-Manager"
                                size="120MB"
                                date="2024"
                                tags={['JAVA', 'POSTGRES', 'DOCKER']}
                            >
                                (Hospital Montreal) Distributed system for managing patient registries.
                                Deployed via Docker containers with a PostgreSQL backend for high-availability data persistence.
                                <br/><span className="text-system-cyan text-xs mt-2 block">>> SOURCE: github.com/SmilingAustrich/UdeM-IFT2935-Project</span>
                            </HexCard>

                        </div>
                    </section>
                </div>

                {/* RIGHT COLUMN: SIDEBAR (4 cols) */}
                <div className="lg:col-span-4 space-y-8 font-mono">

                    {/* ABOUT ME SECTION */}
                    <div className="bg-crt-panel border border-gray-800 p-6">
                        <h3 className="text-white font-bold border-b border-gray-700 pb-2 mb-4 text-xs">
                            >> SYS_ADMIN_BIO
                        </h3>
                        <p className="text-sm text-gray-300 leading-relaxed mb-6">
                            Third-year Computer Science student at UdeM. Passionate about <strong>decomposing complex systems</strong> and understanding the physical layer.
                            <br /><br />
                            Currently focused on Windows internals, memory safety, and bridging the gap between high-level logic and hardware.
                        </p>

                        <div className="text-xs space-y-2 border-t border-gray-800 pt-4">
                            <div className="flex justify-between">
                                <span className="text-gray-500">DEGREE_STATUS:</span>
                                <span className="text-phosphor-green">EXPECTED 2026</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">LANG_PACK_1:</span>
                                <span className="text-white">ENGLISH [NATIVE]</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">LANG_PACK_2:</span>
                                <span className="text-white">FRENCH [NATIVE]</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">LANG_PACK_3:</span>
                                <span className="text-white">ARABIC [NATIVE]</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">LANG_PACK_4:</span>
                                <span className="text-white">SPANISH [LOADING...]</span>
                            </div>
                            <div className="flex justify-between mt-2 pt-2 border-t border-gray-800">
                                <span className="text-gray-500">INTERESTS:</span>
                                <span className="text-system-cyan">HARDWARE, CHESS, MATH</span>
                            </div>
                        </div>
                    </div>

                    {/* COURSEWORK & TOOLS */}
                    <div className="bg-crt-panel border border-gray-800 p-6">
                        <h3 className="text-white font-bold border-b border-gray-700 pb-2 mb-4 text-xs">
                            >> KNOWLEDGE_BASE
                        </h3>
                        {/* Coursework List */}
                        <div className="mb-4">
                            <span className="text-gray-500 text-xs block mb-2">RELEVANT_COURSEWORK:</span>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-gray-900 border border-gray-700 text-[10px] text-gray-300">OPERATING SYSTEMS</span>
                                <span className="px-2 py-1 bg-gray-900 border border-gray-700 text-[10px] text-gray-300">COMPUTER ARCHITECTURE</span>
                                <span className="px-2 py-1 bg-gray-900 border border-gray-700 text-[10px] text-gray-300">MICROPROCESSORS</span>
                                <span className="px-2 py-1 bg-gray-900 border border-gray-700 text-[10px] text-gray-300">COMPILER DESIGN</span>
                            </div>
                        </div>
                        {/* Tools List */}
                        <div>
                            <span className="text-gray-500 text-xs block mb-2">DEBUG_SUITE:</span>
                            <ul className="space-y-1 text-xs text-system-cyan font-bold">
                                <li>> GDB / x64dbg</li>
                                <li>> RE / PATCHING</li>
                                <li>> BASIC HOOKING</li>
                            </ul>
                        </div>
                    </div>

                    {/* SKILLS */}
                    <div className="bg-crt-panel border border-gray-800 p-6">
                        <h3 className="text-white font-bold border-b border-gray-700 pb-2 mb-4 text-xs">
                            >> MODULE_STATUS
                        </h3>
                        <ul className="space-y-3 text-xs">
                            <li className="flex justify-between text-gray-400"><span>ZIG LANG</span> <span className="text-phosphor-green">OPTIMIZED</span></li>
                            <li className="w-full bg-gray-800 h-1 mb-2"><div className="bg-phosphor-green h-1 w-full"></div></li>

                            <li className="flex justify-between text-gray-400"><span>ASSEMBLY (MIPS)</span> <span className="text-phosphor-green">READY</span></li>
                            <li className="w-full bg-gray-800 h-1 mb-2"><div className="bg-phosphor-green h-1 w-[90%]"></div></li>

                            <li className="flex justify-between text-gray-400"><span>PROLOG / LOGIC</span> <span className="text-alert-amber">READY</span></li>
                            <li className="w-full bg-gray-800 h-1 mb-2"><div className="bg-alert-amber h-1 w-[75%]"></div></li>

                            <li className="flex justify-between text-gray-400"><span>C++</span> <span className="text-phosphor-green">READY</span></li>
                            <li className="w-full bg-gray-800 h-1 mb-2"><div className="bg-phosphor-green h-1 w-[90%]"></div></li>

                            <li className="flex justify-between text-gray-400"><span>JAVA / SQL</span> <span className="text-system-cyan">LOADED</span></li>
                            <li className="w-full bg-gray-800 h-1 mb-2"><div className="bg-system-cyan h-1 w-[80%]"></div></li>
                        </ul>
                    </div>

                    {/* CONTACT SECTION */}
                    <div className="bg-black border border-gray-800 p-6">
                        <h3 className="text-system-cyan font-bold mb-4 text-xs">
                            >> ESTABLISH_UPLINK
                        </h3>
                        <div className="space-y-4 text-xs">
                            <a href="mailto:tarik.hireche@engineer.com" className="block group">
                                <span className="text-gray-500 block mb-1">EMAIL_PROTOCOL:</span>
                                <span className="text-white group-hover:text-phosphor-green transition-colors">
                    tarik.hireche@engineer.com
                  </span>
                            </a>
                            <a href="https://github.com/SmilingAustrich" target="_blank" rel="noreferrer" className="block group">
                                <span className="text-gray-500 block mb-1">GIT_REPOSITORY:</span>
                                <span className="text-white group-hover:text-phosphor-green transition-colors">
                    github.com/htarek-bytes
                  </span>
                            </a>
                            <a href="https://www.linkedin.com/in/hirechetarek" target="_blank" rel="noreferrer" className="block group">
                                <span className="text-gray-500 block mb-1">LINKED_NET:</span>
                                <span className="text-white group-hover:text-phosphor-green transition-colors">
                    linkedin.com/in/htarek
                  </span>
                            </a>
                        </div>
                    </div>

                    {/* DEDICATED RESUME MODULE */}
                    <div className="border-2 border-phosphor-green bg-phosphor-green/5 p-4 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-2 opacity-30">
                            <span className="text-[10px] text-phosphor-green">V 3.0.4</span>
                        </div>
                        <h3 className="text-phosphor-green font-bold text-xs mb-3">>> ACCESS_DATASHEET</h3>
                        <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-[12px] text-gray-400 mb-4 font-mono">
                            <div>FILE: <span className="text-gray-300">TAREK_RESUME.PDF</span></div>
                            <div>SIZE: <span className="text-gray-300">142 KB</span></div>
                            <div>TYPE: <span className="text-gray-300">READ_ONLY</span></div>
                            <div>PERM: <span className="text-phosphor-green animate-pulse">PUBLIC</span></div>
                        </div>
                        <a href="/resume.pdf" target="_blank" className="block w-full bg-phosphor-green text-black font-bold text-center py-3 text-xs hover:bg-white transition-colors tracking-widest">
                            > EXECUTE_FILE_TRANSFER
                        </a>
                    </div>

                    {/* USER SPACE (Other Projects) */}
                    <div className="bg-black border border-gray-800 p-4 text-xs text-gray-500 mt-8">
                        <div className="mb-2 border-b border-gray-800 pb-1">/var/www/user_space/applications</div>
                        <ul className="space-y-2">
                            <li className="hover:text-white cursor-pointer transition-colors flex items-center group">
                                <span className="text-system-cyan mr-2 group-hover:animate-pulse">./</span>
                                MaVille-City-Manager <span className="ml-2 text-gray-600">// Java, Quarkus</span>
                            </li>
                            <li className="hover:text-white cursor-pointer transition-colors flex items-center group">
                                <span className="text-system-cyan mr-2 group-hover:animate-pulse">./</span>
                                Sudoku-Solver-Engine <span className="ml-2 text-gray-600">// Python, Tkinter</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </main>

            {/* SYSTEM FOOTER */}
            <footer className="mt-12 pt-6 border-t border-gray-800 text-center text-[15gipx] text-gray-600 font-mono">
                <p>LAST_COMPILED: {new Date().toLocaleDateString()} // SHELL_VERSION: ZSH_5.9</p>
                <p>UNAUTHORIZED_ACCESS_IS_PROHIBITED</p>
            </footer>
        </div>
    );
}

export default App;
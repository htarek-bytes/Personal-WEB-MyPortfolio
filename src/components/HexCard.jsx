import React from 'react';

const HexCard = ({ title, size, date, children, tags = [] }) => {
    return (
        <div className="group font-mono text-sm bg-crt-panel border border-gray-800 p-5 hover:border-phosphor-green transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-1000 ease-in-out"></div>
            <div className="flex justify-between border-b border-gray-800 pb-2 mb-4 text-xs text-gray-500 font-bold tracking-wider">
                <span>MEM_ADDR: 0x{Math.floor(Math.random()*65535).toString(16).toUpperCase().padStart(4, '0')}</span>
                <span>{size}</span>
                <span>{date}</span>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-4">
                <div className="hidden md:block text-gray-700 text-xs select-none space-y-1 font-mono opacity-50">
                    <div>0000</div><div>0010</div><div>0020</div><div>0030</div>
                </div>
                <div>
                    <h3 className="text-xl text-white font-bold mb-2 group-hover:text-phosphor-green transition-colors glow-text">{title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-4 text-xs md:text-sm">{children}</p>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, i) => (
                            <span key={i} className="px-2 py-1 text-[10px] border border-gray-700 text-system-cyan uppercase tracking-wider bg-black/50">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HexCard;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, Terminal, Mail } from 'lucide-react';

const Navbar = () => {
    const [hoveredTab, setHoveredTab] = useState(null);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show if scrolling up OR at the very top
            // Hide if scrolling down AND not at the top
            if (currentScrollY < 10) {
                setIsVisible(true);
            } else {
                setIsVisible(currentScrollY < lastScrollY);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const navItems = [
        { id: 'home', label: 'Home', href: '#home', icon: Home, color: 'text-cyan-400 hover:text-cyan-300' },
        { id: 'work', label: 'Work', href: '#experience', icon: Briefcase, color: 'text-orange-400 hover:text-orange-300' },
        { id: 'labs', label: 'Labs', href: '#projects', icon: Terminal, color: 'text-green-400 hover:text-green-300' },
        { id: 'contact', label: 'Contact', href: '#contact', icon: Mail, color: 'text-rose-400 hover:text-rose-300' },
    ];

    return (
        <AnimatePresence>
            <motion.div
                className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none"
                initial={{ y: 0, opacity: 1 }}
                animate={{
                    y: isVisible ? 0 : -100,
                    opacity: isVisible ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
            >
                <nav className="flex items-center gap-6 px-12 py-3 rounded-full bg-black/50 border border-white/10 backdrop-blur-2xl shadow-2xl w-[90%] max-w-5xl justify-between pointer-events-auto">
                    {navItems.map((tab) => (
                        <a
                            key={tab.id}
                            href={tab.href}
                            onMouseEnter={() => setHoveredTab(tab.id)}
                            onMouseLeave={() => setHoveredTab(null)}
                            className={`relative px-6 py-3 text-base font-bold transition-colors flex items-center gap-3 ${tab.color}`}
                        >
                            {hoveredTab === tab.id && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-white/10 rounded-full"
                                    transition={{ type: "spring", duration: 0.6 }}
                                />
                            )}
                            <tab.icon size={20} className="relative z-10" />
                            <span className="relative z-10">{tab.label}</span>
                        </a>
                    ))}
                </nav>
            </motion.div>
        </AnimatePresence>
    );
};

export default Navbar;

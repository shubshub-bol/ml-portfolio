import React, { useState } from 'react';
import { Linkedin, Github, Mail, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const [copied, setCopied] = useState(false);
    const email = "sy247792@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer id="contact" className="bg-black py-20 px-6 lg:px-20 border-t border-white/10 flex flex-col items-center text-center">

            <div className="relative group mb-12">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h2 className="relative text-7xl md:text-9xl font-black text-white tracking-tighter uppercase z-10">
                    HIRE ME<span className="text-cyan">.</span>
                </h2>
            </div>

            <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-16 inline-flex items-center gap-3 px-8 py-3 bg-white/5 border border-white/10 hover:border-cyan/50 rounded-full group transition-all hover:bg-cyan/5"
            >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-mono text-sm tracking-widest text-grey group-hover:text-cyan transition-colors">
                    [ VIEW_RESUME_V9.0 ]
                </span>
            </a>

            <div className="flex flex-col items-center gap-8 mb-16 w-full max-w-2xl">
                <button
                    onClick={handleCopy}
                    className="group relative w-full md:w-auto px-8 py-4 bg-[#111] hover:bg-white border border-white/20 rounded-full flex items-center justify-center gap-4 transition-all duration-300"
                >
                    <Mail className="text-grey group-hover:text-red-600 transition-colors" />
                    <span className="text-xl text-white group-hover:text-black font-mono transition-colors">
                        {email}
                    </span>
                    <div className="ml-2 w-6 h-6 flex items-center justify-center">
                        {copied ? (
                            <Check size={20} className="text-green-500" />
                        ) : (
                            <Copy size={20} className="text-grey group-hover:text-black" />
                        )}
                    </div>
                    {copied && (
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="absolute -top-10 bg-white text-black text-xs font-bold px-2 py-1 rounded"
                        >
                            Copied!
                        </motion.span>
                    )}
                </button>

                <div className="flex gap-8">
                    <a href="https://www.linkedin.com/in/shubham-yadav-ds/" target="_blank" rel="noopener noreferrer" className="text-grey hover:text-[#0077b5] transition-colors">
                        <Linkedin size={32} />
                    </a>
                    <a href="https://github.com/shubshub-bol" target="_blank" rel="noopener noreferrer" className="text-grey hover:text-white transition-colors">
                        <Github size={32} />
                    </a>
                </div>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-grey text-sm font-mono">
                <p>&copy; 2025 Shubham Yadav. All systems nominal.</p>
                <p>Bangalore, Karnataka</p>
            </div>
        </footer>
    );
};

export default Footer;

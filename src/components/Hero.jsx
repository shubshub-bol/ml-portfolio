import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen bg-black flex flex-col lg:flex-row items-center justify-center relative overflow-hidden pt-20">

            {/* Background Effects - Removed for pure black */}
            {/* <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none z-10"></div> */}
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none"></div> */}

            <div className="container mx-auto px-6 h-full flex flex-col lg:flex-row items-center relative z-20">

                {/* Left Column: Name */}
                <div className="lg:w-1/3 flex flex-col justify-center items-center lg:items-end text-center lg:text-right">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter">
                            SHUBHAM<br />
                            YADAV
                        </h1>
                        {/* Hidden spacer to balance height with right column for perfect alignment */}
                        <p className="font-mono text-sm max-w-xs opacity-0 pointer-events-none hidden lg:block text-right ml-auto mt-6">
                            Building intelligent systems &<br /> robust RAG pipelines.
                        </p>
                    </motion.div>
                </div>

                {/* Center Column: Image */}
                <div className="lg:w-1/3 h-[50vh] lg:h-[80vh] flex items-end justify-center relative -mx-10 lg:mx-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="w-full h-full flex items-end justify-center relative"
                    >
                        {/* Solid black fade to blend image background seamlessly - Adjusted to be bottom only */}
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-20"></div>

                        <img
                            src={profileImg}
                            alt="Shubham Yadav"
                            className="h-full w-auto max-w-none object-contain relative z-10 mix-blend-normal"
                            style={{
                                maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
                                WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)'
                            }}
                        />
                    </motion.div>
                </div>

                {/* Right Column: Role */}
                <div className="lg:w-1/3 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 leading-[0.9] tracking-tighter mb-6">
                            ML<br />
                            ENGINEER
                        </h1>
                        <p className="text-grey font-mono text-sm max-w-xs">
                            Building intelligent systems &<br /> robust RAG pipelines.
                        </p>


                    </motion.div>
                </div>

            </div>

        </section>
    );
};

export default Hero;

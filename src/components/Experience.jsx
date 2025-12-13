import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Code } from 'lucide-react';

const Experience = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // The line fills up as we scroll
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const events = [
        {
            year: "2018 - 2022",
            title: "B.Tech in Electronics & Comm.",
            org: "Bansal Institute",
            desc: "CGPA: 8.6/10. Foundation in electronics and signal processing.",
            icon: GraduationCap,
            color: "text-blue-500",
            borderColor: "group-hover:border-blue-500",
            shadowColor: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
            side: "right",
            status: "COMPLETED"
        },
        {
            year: "Present",
            title: "Fresher",
            org: "Open to Opportunities",
            desc: "Aspiring Data Scientist & AI Engineer with a strong foundation in Machine Learning and Deep Learning. Ready to join immediately.",
            icon: Code,
            color: "text-emerald-400",
            borderColor: "group-hover:border-emerald-400",
            shadowColor: "group-hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]",
            side: "left",
            status: "AVAILABLE"
        }
    ];

    return (
        <section ref={containerRef} id="experience" className="py-40 relative px-4 overflow-hidden bg-black/50">
            {/* Background Mesh */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>

            {/* Center Heading */}
            <div className="text-center mb-32 relative z-10">
                <div className="inline-block border text-center border-white/10 px-6 py-2 rounded-full backdrop-blur-md bg-white/5 mb-4">
                    <span className="text-cyan font-mono text-sm tracking-widest uppercase">// SYSTEM_LOGS</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">Career Timeline</h2>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Central Line Background */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden lg:block"></div>

                {/* Animated Line Progress */}
                <motion.div
                    style={{ height: lineHeight }}
                    className="absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-cyan via-blue-500 to-purple-500 -translate-x-1/2 origin-top hidden lg:block shadow-[0_0_20px_rgba(0,240,255,0.5)]"
                />

                <div className="space-y-24 lg:space-y-40">
                    {events.map((item, index) => (
                        <div key={index} className={`flex flex-col lg:flex-row items-center justify-between w-full group ${item.side === 'left' ? 'lg:flex-row-reverse' : ''}`}>

                            {/* Empty space for opposite side */}
                            <div className="w-full lg:w-5/12 hidden lg:block"></div>

                            {/* Center Node */}
                            <div className="relative z-10 p-2 lg:-mx-4 my-8 lg:my-0">
                                <div className={`relative w-16 h-16 bg-[#0a0a0a] border border-white/10 rounded-xl rotate-45 flex items-center justify-center ${item.borderColor} transition-all duration-500 shadow-2xl z-20 group-hover:rotate-90 group-hover:scale-110`}>
                                    {/* Inner non-rotated icon container */}
                                    <div className="-rotate-45 group-hover:-rotate-90 transition-transform duration-500">
                                        <item.icon size={24} className={`text-white/60 group-hover:text-white transition-colors`} />
                                    </div>
                                    {/* Tech Borders */}
                                    <div className="absolute -inset-1 border border-dashed border-white/20 rounded-xl -z-10 animate-spin-slow"></div>
                                </div>
                            </div>

                            {/* Content Card */}
                            <div className="w-full lg:w-5/12 text-center lg:text-left">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    whileHover={{ scale: 1.02 }}
                                    className={`p-8 border border-white/5 bg-white/5 backdrop-blur-xl relative overflow-hidden rounded-2xl group-hover:border-white/20 transition-all duration-300 ${item.side === 'left' ? 'lg:text-right' : ''}`}
                                >
                                    {/* Tech corners */}
                                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                    {/* Header */}
                                    <div className={`flex items-center gap-3 mb-4 ${item.side === 'left' ? 'lg:flex-row-reverse' : ''} justify-center lg:justify-start`}>
                                        <span className="font-mono text-xs text-cyan bg-cyan/10 px-2 py-1 rounded border border-cyan/20">
                                            {item.year}
                                        </span>
                                        <div className="h-[1px] w-12 bg-white/10"></div>
                                        <span className={`text-[10px] font-mono tracking-widest text-white/40 ${item.status === 'CURRENT_V9.0' ? 'text-green-400 animate-pulse' : ''}`}>
                                            [{item.status}]
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">{item.title}</h3>
                                    <h4 className="text-lg text-white/60 font-mono mb-6 flex items-center gap-2 justify-center lg:justify-start lg:flex-row-reverse">
                                        {item.side === 'left' ? (
                                            <>{item.org}<span className="text-cyan">@</span></>

                                        ) : (
                                            <><span className="text-cyan">@</span>{item.org}</>
                                        )}
                                    </h4>

                                    <p className="text-grey leading-relaxed border-t border-white/5 pt-4">
                                        {item.desc}
                                    </p>

                                    {/* Connector Line (Mobile hidden, Desktop visible) */}
                                    <div className={`hidden lg:flex items-center absolute top-1/2 w-8 lg:w-16 h-[1px] bg-gradient-to-r from-transparent via-cyan/50 to-transparent ${item.side === 'left' ? 'right-[-64px] flex-row-reverse' : 'left-[-64px]'}`}>
                                        <div className="w-2 h-2 bg-cyan rounded-full shadow-[0_0_10px_#00f0ff]"></div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

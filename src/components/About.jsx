import React from 'react';
import { Terminal, Cpu, Code2, Globe } from 'lucide-react';

const About = () => {
    return (
        <section className="py-32 px-6 lg:px-20 bg-black relative mb-20">

            {/* Section Header */}
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end gap-6 mb-12 border-b border-white/10 pb-6 max-w-7xl mx-auto">
                <h2 className="text-5xl lg:text-7xl font-black text-white leading-[0.8] tracking-tighter">
                    ABOUT<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-transparent">ME.</span>
                </h2>
                <div className="hidden md:block pb-2">
                    <span className="font-mono text-cyan text-xs tracking-widest border border-cyan/30 px-2 py-1 bg-cyan/5">
                        // SECURE_CONNECTION_ESTABLISHED
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">

                {/* Column 1: Minimal Bio (4 Cols) */}
                <div className="lg:col-span-12 xl:col-span-4 space-y-8">
                    <div className="p-8 border border-white/10 bg-[#0a0a0a] relative group overflow-hidden rounded-3xl">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                        <div className="absolute top-0 right-0 p-4 opacity-50">
                            <Terminal size={24} className="text-white/20" />
                        </div>

                        <h3 className="font-mono text-cyan text-sm tracking-wider mb-6 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-pulse"></span>
                            SYSTEM_IDENTITY
                        </h3>

                        <p className="text-white/70 leading-relaxed text-lg mb-6">
                            I am a <strong className="text-white">Machine Learning Engineer</strong> obsessed with building intelligent, scalable systems.
                            From optimizing RAG pipelines to deploying autonomous agents, I treat code as a craft and performance as a religion.
                        </p>
                        <p className="text-white/70 leading-relaxed text-lg">
                            Formerly finding my footing in electronics, I decoded my true passion in Data Science and never looked back.
                        </p>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 border border-white/10 bg-[#0a0a0a] text-center rounded-2xl">
                            <span className="block text-3xl font-bold text-white mb-1">Fresher</span>
                            <span className="text-xs font-mono text-grey uppercase">Experience</span>
                        </div>
                        <div className="p-4 border border-white/10 bg-[#0a0a0a] text-center rounded-2xl">
                            <span className="block text-3xl font-bold text-white mb-1">15+</span>
                            <span className="text-xs font-mono text-grey uppercase">Projects</span>
                        </div>
                    </div>
                </div>

                {/* Column 2: Tech & Focus (8 Cols) */}
                <div className="lg:col-span-12 xl:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* Focus Card */}
                    <div className="md:col-span-2 p-8 border border-white/10 bg-[#0a0a0a] relative group hover:border-cyan/30 transition-colors rounded-3xl">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/5 rounded-full blur-3xl group-hover:bg-cyan/10 transition-colors"></div>
                        <h3 className="font-mono text-white/50 text-sm tracking-wider mb-6 flex items-center gap-2">
                            <Cpu size={16} />
                            // CURRENT_DIRECTIVES
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Model Context Protocol",
                                    desc: "Building standardized interfaces for LLM-App communication.",
                                    color: "text-purple-400",
                                    border: "border-purple-500/30"
                                },
                                {
                                    title: "LLM Fine-tuning",
                                    desc: "Optimizing Llama & Mistral models for domain-specific accuracy.",
                                    color: "text-pink-400",
                                    border: "border-pink-500/30"
                                },
                                {
                                    title: "Autonomous Agents",
                                    desc: "Deploying multi-agent systems that plan, act, and self-correct.",
                                    color: "text-cyan-400",
                                    border: "border-cyan/30"
                                }
                            ].map((item, i) => (
                                <div key={i} className={`relative pl-4 border-l-2 ${item.border}`}>
                                    <h4 className={`font-bold text-lg mb-2 ${item.color}`}>{item.title}</h4>
                                    <p className="text-sm text-grey leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tech Stack - Scrolling or Static Grid */}
                    <div className="md:col-span-2 p-8 border border-white/10 bg-[#0a0a0a] relative rounded-3xl">
                        <h3 className="font-mono text-white/50 text-sm tracking-wider mb-6 flex items-center gap-2">
                            <Code2 size={16} />
                            // TECH_ARSENAL
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {['Python', 'TensorFlow', 'PyTorch', 'LangChain', 'OpenAI API', 'Docker', 'Kubernetes', 'FastAPI', 'React', 'AWS'].map((tech) => {
                                const techLogos = {
                                    'Python': "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
                                    'TensorFlow': "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg",
                                    'PyTorch': "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg",
                                    'Docker': "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
                                    'Kubernetes': "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg",
                                    'React': "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
                                    'AWS': "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
                                    'FastAPI': "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg",
                                    'OpenAI API': "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
                                    'LangChain': "https://upload.wikimedia.org/wikipedia/commons/5/53/LangChain_logo.png" // Fallback/community logo
                                };

                                return (
                                    <span key={tech} className="px-3 py-1 text-sm font-mono text-cyan bg-cyan/5 border border-cyan/20 rounded hover:bg-cyan/10 transition-colors cursor-default flex items-center gap-2">
                                        {techLogos[tech] && (
                                            <img
                                                src={techLogos[tech]}
                                                alt={tech}
                                                className={`w-4 h-4 object-contain ${['OpenAI API', 'LangChain'].includes(tech) ? 'brightness-0 invert' : ''
                                                    }`}
                                            />
                                        )}
                                        {tech}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Chintan GPT",
            desc: "Fine-tuned Llama-3.2 model to emulate DeepSeek-R1 reasoning capabilities. Utilized Unsloth framwork & QLoRA for efficient finetuning.",
            tags: ["Llama 3.2", "Unsloth", "QLoRA", "DeepSeek"],
            link: "https://github.com/shubshub-bol/chintan_gpt.git",
            featured: true
        },
        {
            title: "Ask AI YouTube Extension",
            desc: "Serverless in-browser RAG extension. Analyzes video content with 500ms latency using Gemini API & Vector Search.",
            tags: ["Chrome Extension", "Gemini API", "Vector Search"],
            link: "https://github.com/shubshub-bol/Integrating-AI-feature-in-youtube-chrome-extension-",
            featured: false
        },
        {
            title: "Thoughtful Chat Assistant",
            desc: "Interactive chatbot powered by Google Gemini with a custom Streamlit UI for seamless conversational AI experiences.",
            tags: ["Streamlit", "Gemini", "Python"],
            link: "https://github.com/shubshub-bol/thoughtful-chat-bot-",
            featured: false
        },
        {
            title: "Personality Prediction",
            desc: "Machine Learning classification model achieving 99% accuracy in analyzing behavioral features for personality insights.",
            tags: ["Scikit-learn", "Classification", "ML"],
            link: "https://github.com/shubshub-bol/personality_predication_model",
            featured: false
        },
        {
            title: "Flight Fare Prediction",
            desc: "Price forecasting model developed during my tenure at Rubixe. Predicts airfare trends with high precision.",
            tags: ["Regression", "Data Science", "Python"],
            link: "https://github.com/shubshub-bol/FlightFarePred",
            featured: false
        }
    ];

    return (
        <section id="projects" className="py-32 px-6 lg:px-20 bg-[#050505] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            <div className="mb-20 relative z-10">
                <div className="flex items-end gap-4 mb-4">
                    <h2 className="text-4xl lg:text-6xl font-black tracking-tighter text-black bg-white inline-block px-4 py-2 transform -skew-x-6">
                        ENGINEERED SYSTEMS
                    </h2>
                    <div className="hidden md:flex gap-1 mb-2">
                        <div className="w-2 h-8 bg-cyan/50 skew-x-12"></div>
                        <div className="w-2 h-8 bg-cyan/30 skew-x-12"></div>
                        <div className="w-2 h-8 bg-cyan/10 skew-x-12"></div>
                    </div>
                </div>
                <p className="text-grey font-mono text-lg max-w-2xl border-l-2 border-cyan/30 pl-4">
                    Selected works demonstrating capabilities in Generative AI, MLOps, and Full-Stack Engineering.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative p-8 bg-black/50 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-cyan transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] hover:-translate-y-1 flex flex-col justify-between overflow-hidden ${project.featured ? 'lg:col-span-2' : ''}`}
                    >
                        {/* Tech Accents */}
                        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                            <span className="font-mono text-xs text-cyan">SYS_00{index + 1}</span>
                        </div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/10 group-hover:border-cyan transition-colors"></div>

                        <div>
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-2xl font-bold text-white group-hover:text-cyan transition-colors flex items-center gap-2">
                                    {project.featured && <span className="w-2 h-2 bg-cyan rounded-full animate-pulse"></span>}
                                    {project.title}
                                </h3>
                                <Github className="text-grey group-hover:text-white transition-colors" size={24} />
                            </div>
                            <p className="text-grey mb-8 leading-relaxed text-sm md:text-base border-l border-white/5 pl-4 group-hover:border-cyan/30 transition-colors">
                                {project.desc}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tags.map((tag, i) => {
                                let logo = null;
                                if (tag.toLowerCase().includes('python')) {
                                    logo = "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg";
                                } else if (tag.toLowerCase().includes('llama')) {
                                    logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/800px-Meta-Logo.png";
                                }

                                return (
                                    <span key={i} className="text-xs font-mono text-white/60 bg-white/5 px-2 py-1 border border-white/5 group-hover:border-cyan/30 group-hover:text-cyan/80 transition-all flex items-center gap-1">
                                        {tag}
                                        {logo && <img src={logo} alt={tag} className="w-3 h-3 object-contain" />}
                                    </span>
                                );
                            })}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;

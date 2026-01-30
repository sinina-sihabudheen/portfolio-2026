import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-darker relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
                        <p className="text-slate-400">
                            A collection of projects I've built, ranging from full-stack applications to data-focused solutions.
                        </p>
                    </div>
                    <a href="#" className="text-primary hover:text-primary/80 font-semibold flex items-center gap-2 transition-colors">
                        View All Projects <ExternalLink className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group bg-dark border border-slate-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 shadow-xl shadow-black/20"
                        >
                            <div className="h-60 bg-slate-900 flex items-center justify-center relative overflow-hidden">
                                {/* Project Placeholder Image */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent group-hover:scale-110 transition-transform duration-500"></div>
                                <Folder className="w-16 h-16 text-slate-800 group-hover:text-primary/40 transition-colors" />

                                <div className="absolute top-4 right-4 flex gap-3">
                                    <a href={project.link} className="p-2 bg-darker/60 backdrop-blur-md rounded-full text-slate-300 hover:text-white hover:bg-primary transition-all">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a href={project.link} className="p-2 bg-darker/60 backdrop-blur-md rounded-full text-slate-300 hover:text-white hover:bg-primary transition-all">
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-primary text-xs font-bold uppercase tracking-widest">{project.type}</span>
                                    <div className="flex gap-2">
                                        {project.tech.slice(0, 3).map(t => (
                                            <span key={t} className="px-2 py-1 bg-slate-800 text-slate-400 text-[10px] rounded uppercase">{t}</span>
                                        ))}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-xs text-slate-500 font-medium">#{t.toLowerCase()}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

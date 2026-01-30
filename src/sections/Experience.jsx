import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-dark relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Experience Column */}
                    <div>
                        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                            <Briefcase className="text-primary w-8 h-8" />
                            Professional Experience
                        </h2>

                        <div className="space-y-12">
                            {portfolioData.experience.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative pl-8 border-l-2 border-slate-800 hover:border-primary/50 transition-colors group"
                                >
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-800 group-hover:bg-primary transition-colors"></div>

                                    <div className="mb-2 flex flex-wrap items-center gap-4">
                                        <span className="text-primary font-bold text-lg">{exp.role}</span>
                                        <span className="px-3 py-1 bg-slate-800 text-slate-400 text-xs rounded-full flex items-center gap-2">
                                            <Calendar className="w-3 h-3" /> {exp.period}
                                        </span>
                                    </div>
                                    <h4 className="text-slate-300 font-medium mb-3">{exp.company}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {exp.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                            <GraduationCap className="text-secondary w-8 h-8" />
                            Education & Programs
                        </h2>

                        <div className="grid grid-cols-1 gap-6">
                            {portfolioData.education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 bg-darker rounded-2xl border border-slate-800 hover:border-secondary/30 transition-all flex justify-between items-center group"
                                >
                                    <div>
                                        <h3 className="text-lg font-bold group-hover:text-secondary transition-colors">{edu.degree}</h3>
                                        <p className="text-slate-400 text-sm mt-1">{edu.institution}</p>
                                    </div>
                                    <span className="text-slate-500 font-mono text-sm">{edu.year}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;

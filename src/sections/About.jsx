import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const About = () => {
    return (
        <section id="about" className="py-24 bg-darker relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-slate-800 overflow-hidden relative group shadow-2xl shadow-primary/10">
                            <img
                                src={`${import.meta.env.BASE_URL}${portfolioData.personal.image}`}
                                alt={portfolioData.personal.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-darker/80 via-transparent to-transparent opacity-60"></div>
                            <div className="absolute bottom-6 left-6">
                                <p className="text-white font-bold text-xl drop-shadow-lg">{portfolioData.personal.name}</p>
                                <p className="text-primary text-sm font-medium drop-shadow-md">{portfolioData.personal.title}</p>
                            </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
                            <span className="w-12 h-1 bg-primary rounded-full"></span>
                            About Me
                        </h2>
                        <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                            <p>
                                {portfolioData.personal.about}
                            </p>
                            <div className="grid grid-cols-2 gap-6 pt-4">
                                <div>
                                    <p className="text-slate-500 text-sm uppercase tracking-wider mb-1">Location</p>
                                    <p className="text-white font-medium">{portfolioData.personal.location}</p>
                                </div>
                                <div>
                                    <p className="text-slate-500 text-sm uppercase tracking-wider mb-1">Education</p>
                                    <p className="text-white font-medium">B-TECH CS</p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8 flex gap-4">
                            <a
                                href={`${import.meta.env.BASE_URL}resume-new.pdf`}
                                download="Sinina_Sihabudheen_Resume.pdf"
                                className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg border border-white/10 transition-all font-semibold flex items-center gap-2"
                            >
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

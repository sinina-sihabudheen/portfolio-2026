import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
                        Available for new projects
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                        I'm <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">{portfolioData.personal.name}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        {portfolioData.personal.tagline}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold transition-all transform hover:scale-105 flex items-center gap-2 group shadow-lg shadow-primary/25"
                        >
                            View My Work
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all border border-slate-700"
                        >
                            Let's Talk
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
                onClick={() => document.getElementById('about').scrollIntoView()}
            >
                <ChevronDown className="w-8 h-8 text-slate-500" />
            </motion.div>
        </section>
    );
};

export default Hero;

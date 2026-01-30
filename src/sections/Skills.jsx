import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
    const categories = [...new Set(portfolioData.skills.map(s => s.category))];

    return (
        <section id="skills" className="py-24 bg-dark relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A comprehensive overview of my technical skills and the technologies I work with.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {portfolioData.skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-6 bg-darker/50 rounded-2xl border border-slate-800 hover:border-primary/30 transition-all group"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{skill.name}</h3>
                                <span className="text-primary text-sm font-mono">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="h-full bg-gradient-to-r from-primary to-secondary"
                                ></motion.div>
                            </div>
                            <p className="mt-3 text-slate-500 text-xs uppercase tracking-tighter">{skill.category}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

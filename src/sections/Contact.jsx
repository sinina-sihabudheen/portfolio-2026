import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-darker relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? Feel free to reach out through any of the channels below.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="flex items-start gap-5 p-6 bg-dark rounded-2xl border border-slate-800 hover:border-primary/30 transition-all">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-200">Email</h4>
                                <a href={`mailto:${portfolioData.personal.email}`} className="text-slate-400 hover:text-primary transition-colors">{portfolioData.personal.email}</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-5 p-6 bg-dark rounded-2xl border border-slate-800 hover:border-primary/30 transition-all">
                            <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-200">Phone</h4>
                                {portfolioData.personal.phones.map(phone => (
                                    <p key={phone} className="text-slate-400">{phone}</p>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-start gap-5 p-6 bg-dark rounded-2xl border border-slate-800 hover:border-primary/30 transition-all">
                            <div className="p-3 bg-accent/10 rounded-xl text-accent">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-200">Location</h4>
                                <p className="text-slate-400">{portfolioData.personal.location}</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 p-8 bg-dark border border-slate-800 rounded-3xl"
                    >
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Your Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-slate-200 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-slate-200 transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-medium text-slate-400">Message</label>
                                <textarea
                                    rows="5"
                                    className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-slate-200 transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>
                            <div className="md:col-span-2">
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group"
                                >
                                    Send Message
                                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

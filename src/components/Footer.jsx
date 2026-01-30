import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-darker py-12 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            {portfolioData.personal.name}
                        </span>
                        <p className="text-slate-500 text-sm mt-2">© 2026. All rights reserved.</p>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="p-3 bg-slate-900 text-slate-400 hover:text-primary rounded-full transition-all border border-slate-800">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-3 bg-slate-900 text-slate-400 hover:text-secondary rounded-full transition-all border border-slate-800">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href={`mailto:${portfolioData.personal.email}`} className="p-3 bg-slate-900 text-slate-400 hover:text-primary rounded-full transition-all border border-slate-800">
                            <Mail className="w-5 h-5" />
                        </a>
                        <a href="https://wa.me/919526997010" className="p-3 bg-slate-900 text-slate-400 hover:text-accent rounded-full transition-all border border-slate-800">
                            <MessageCircle className="w-5 h-5" />
                        </a>
                    </div>

                    <div className="text-slate-500 text-sm text-center md:text-right">
                        <p>Designed with ❤️</p>
                        <p className="mt-1">Built with React & Tailwind CSS</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

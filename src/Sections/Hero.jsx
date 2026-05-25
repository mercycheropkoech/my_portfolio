import { useEffect, useMemo, useState } from 'react';
import profileImage from '../assets/profile.svg';

const phrases = [
    'Mercy, a Developer with a passion for crafting delightful user experiences.',
    'Accostommed with Machine Learning, Backend, and Web Development.',
    'Your go-to software enngineer for polished, user-focused web products.',
];

const Hero = () => {
    const [activePhrase, setActivePhrase] = useState(0);
    const stats = useMemo(
        () => [
            { label: 'Years of coding', value: '4+' },
            { label: 'Main stack', value: 'React' },
            { label: 'Focus', value: 'UX-driven software' },
        ],
        []
    );

    useEffect(() => {
        const interval = window.setInterval(() => {
            setActivePhrase((current) => (current + 1) % phrases.length);
        }, 2800);
        return () => window.clearInterval(interval);
    }, []);

    return (
        <section id="home" className="relative overflow-hidden py-24">
            <div className="container mx-auto px-6 flex flex-col-reverse gap-16 lg:flex-row lg:items-center">
                <div className="max-w-2xl text-center lg:text-left">
                    <p className="mb-5 inline-flex items-center rounded-full bg-[#f9a8d4]/90 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#9d174d] shadow-sm animate-fade-in">
                        Computer Science Graduate
                    </p>
                    <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[#500724]">
                        {phrases[activePhrase].split(' ').map((word, idx) => (
                            <span key={idx} className="inline-block overflow-hidden">
                                <span className="block animate-slide-up">{word}&nbsp;</span>
                            </span>
                        ))}
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-[#6f2141] animate-fade-in delay-150">
                        I build polished web products with React, Tailwind, and clean UI. Currently focused on software engineering and creating joyful digital experiences.
                    </p>
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center rounded-full bg-[#ec4899] px-7 py-3 text-base font-semibold text-white shadow-lg shadow-pink-300 transition duration-200 hover:bg-[#db2777]"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-full border border-[#ec4899] bg-white/90 px-7 py-3 text-base font-semibold text-[#500724] transition duration-200 hover:bg-[#fce7f3]"
                        >
                            Let’s Talk
                        </a>
                    </div>
                    <div className="mt-12 grid gap-4 sm:grid-cols-3">
                        {stats.map((item) => (
                            <div key={item.label} className="rounded-3xl border border-[#fbcfe8] bg-white/90 p-6 shadow-sm shadow-pink-100 hover:-translate-y-1 hover:shadow-lg transition-transform duration-300">
                                <p className="text-3xl font-bold text-[#be185d]">{item.value}</p>
                                <p className="mt-2 text-sm text-[#6f2141]">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mx-auto flex w-full max-w-xl items-center justify-center">
                    <div className="relative flex h-80 w-80 items-center justify-center rounded-full bg-gradient-to-br from-[#f9a8d4] via-[#fbcfe8] to-[#fed7e2] p-6 shadow-[0_30px_80px_rgba(236,72,153,0.18)] animate-float">
                        <div className="absolute inset-8 rounded-full bg-white/70 blur-3xl" />
                        <div className="relative flex h-full w-full items-center justify-center rounded-full bg-[#fff] border border-[#fbcfe8] shadow-xl overflow-hidden">
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

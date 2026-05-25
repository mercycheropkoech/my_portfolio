const contributions = [
    'Built reusable UI components and polished page layouts.',
    'Optimized apps for performance, accessibility, and responsiveness.',
    'Translated requirements into maintainable React solutions.',
];

const skills = ['JavaScript', 'React', 'Tailwind CSS', 'Git + CI', 'Figma', 'TypeScript'];

const About = () => {
    return (
        <section id="about" className="py-24">
            <div className="container mx-auto px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm uppercase tracking-[0.3em] text-[#be185d]">About Me</p>
                    <h2 className="mt-4 text-4xl font-bold text-[#500724]">Software engineering with a thoughtful, polished edge.</h2>
                    <p className="mt-6 text-lg leading-8 text-[#6f2141]">
                        I’m a Computer Science graduate currently building professional software solutions. I love turning product ideas into beautiful, maintainable web experiences with a clear user focus.
                    </p>
                </div>

                <div className="mt-14 grid gap-6 lg:grid-cols-2">
                    <div className="rounded-[2rem] border border-[#fbcfe8] bg-white/90 p-8 shadow-lg shadow-pink-100 transition-transform duration-300 hover:-translate-y-1">
                        <h3 className="text-2xl font-semibold text-[#500724]">What I do</h3>
                        <p className="mt-4 text-[#6f2141] leading-7">
                            I specialize in frontend development, UI design systems, and building software that feels fast, responsive, and polished on every screen.
                        </p>
                        <ul className="mt-6 space-y-3 text-[#6f2141]">
                            {contributions.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#ec4899]" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-[2rem] border border-[#fbcfe8] bg-white/90 p-8 shadow-lg shadow-pink-100 transition-transform duration-300 hover:-translate-y-1">
                        <h3 className="text-2xl font-semibold text-[#500724]">Skills & Tools</h3>
                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            {skills.map((skill) => (
                                <span key={skill} className="rounded-full bg-[#fce7f3] px-4 py-2 text-sm text-[#500724] transition hover:bg-[#ec4899] hover:text-white">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

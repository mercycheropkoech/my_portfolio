const timeline = [
    {
        role: 'Software Engineer',
        title: 'Building polished web solutions',
        details: 'Collaborated on frontend architecture, reusable component libraries, and accessible interactions in fast-moving projects.',
    },
    {
        role: 'Computer Science Graduate',
        title: 'Strong foundation in algorithms and systems',
        details: 'Trained to solve problems with precision and to turn requirements into reliable, scalable code.',
    },
    {
        role: 'Product-focused Developer',
        title: 'Designing meaningful interfaces',
        details: 'Delivered product-ready UI patterns that balance simplicity, performance, and visual polish.',
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-[#fff0f7]/70">
            <div className="container mx-auto px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm uppercase tracking-[0.3em] text-[#be185d]">Experience</p>
                    <h2 className="mt-4 text-4xl font-bold text-[#500724]">What I’ve built and where I’ve grown.</h2>
                </div>

                <div className="mt-14 space-y-6">
                    {timeline.map((item) => (
                        <div key={item.role} className="group rounded-[2rem] border border-[#fbcfe8] bg-white/90 p-7 shadow-lg shadow-pink-100 transition duration-300 hover:-translate-y-1 hover:border-[#ec4899]">
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#be185d] group-hover:text-[#db2777]">{item.role}</p>
                            <h3 className="mt-3 text-2xl font-semibold text-[#500724]">{item.title}</h3>
                            <p className="mt-4 text-[#6f2141] leading-7">{item.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

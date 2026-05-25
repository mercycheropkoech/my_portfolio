const projectList = [
    {
        title: 'Design System Landing',
        category: 'Product UI',
        description: 'A polished landing page built with responsive React components, elegant spacing, and strong visual hierarchy.',
        accent: 'Pink gradients & motion',
    },
    {
        title: 'Interactive Dashboard',
        category: 'App Interface',
        description: 'An experience-driven dashboard with modular cards, animated states, and user-friendly analytics layout.',
        accent: 'Data-driven interactions',
    },
    {
        title: 'Portfolio Refresh',
        category: 'Responsive Web',
        description: 'A clean portfolio template with smooth scrolling, subtle gradients, and a cohesive pink brand system.',
        accent: 'Modern component library',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm uppercase tracking-[0.3em] text-[#be185d]">Projects</p>
                    <h2 className="mt-4 text-4xl font-bold text-[#500724]">Work that shows polish and purpose.</h2>
                    <p className="mt-6 text-lg leading-8 text-[#6f2141]">
                        Real projects that demonstrate thoughtful UI, clean interactions, and solid engineering from concept to launch.
                    </p>
                </div>

                <div className="mt-14 grid gap-6 lg:grid-cols-3">
                    {projectList.map((project) => (
                        <article key={project.title} className="group rounded-[2rem] border border-[#fbcfe8] bg-white/90 p-7 shadow-lg shadow-pink-100 transition duration-300 hover:-translate-y-2 hover:border-[#ec4899] hover:bg-[#fff0f7]">
                            <span className="inline-flex rounded-full bg-[#fff0f7] px-3 py-1 text-sm font-semibold text-[#be185d] transition-colors duration-200 group-hover:bg-[#ec4899] group-hover:text-white">
                                {project.category}
                            </span>
                            <h3 className="mt-5 text-2xl font-semibold text-[#500724]">{project.title}</h3>
                            <p className="mt-4 text-[#6f2141] leading-7">{project.description}</p>
                            <p className="mt-6 text-sm font-semibold text-[#be185d]">{project.accent}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

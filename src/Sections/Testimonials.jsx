const reviews = [
    {
        quote: 'The end product was thoughtful, user-friendly, and delivered exactly how we imagined. Communication and execution were exceptional.',
        name: 'Product Manager',
    },
    {
        quote: 'A polished portfolio of work made with strong engineering and beautiful styling. The interface feels modern and effortless.',
        name: 'Team Lead',
    },
    {
        quote: 'The developer balanced product thinking with technical quality beautifully. Every interaction felt considered.',
        name: 'Design Partner',
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24">
            <div className="container mx-auto px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm uppercase tracking-[0.3em] text-[#be185d]">Testimonials</p>
                    <h2 className="mt-4 text-4xl font-bold text-[#500724]">Trusted by teams and clients who value quality.</h2>
                </div>

                <div className="mt-14 grid gap-6 lg:grid-cols-3">
                    {reviews.map((item) => (
                        <blockquote key={item.name} className="rounded-[2rem] border border-[#fbcfe8] bg-white/90 p-8 shadow-lg shadow-pink-100 transition duration-300 hover:-translate-y-1">
                            <p className="text-lg leading-8 text-[#6f2141]">“{item.quote}”</p>
                            <footer className="mt-6 text-sm font-semibold text-[#500724]">{item.name}</footer>
                        </blockquote>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

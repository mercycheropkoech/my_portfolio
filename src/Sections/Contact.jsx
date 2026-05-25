const methods = [
    { label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com' },
    { label: 'LinkedIn', value: 'Connect on LinkedIn', href: 'https://www.linkedin.com' },
    { label: 'GitHub', value: 'View code samples', href: 'https://github.com' },
];

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-[#fce7f3]/80">
            <div className="container mx-auto px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm uppercase tracking-[0.3em] text-[#be185d]">Contact</p>
                    <h2 className="mt-4 text-4xl font-bold text-[#500724]">Let’s build something beautiful together.</h2>
                    <p className="mt-6 text-lg leading-8 text-[#6f2141]">
                        I’m available for software engineering roles, freelance work, and product-focused collaborations. Reach out and let’s talk about your next project.
                    </p>
                </div>
                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {methods.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="group rounded-[2rem] border border-[#fbcfe8] bg-white/90 px-8 py-10 text-left shadow-lg shadow-pink-100 transition duration-300 hover:-translate-y-1 hover:border-[#ec4899] hover:bg-[#fff0f7]"
                        >
                            <p className="text-sm uppercase tracking-[0.3em] text-[#be185d]">{item.label}</p>
                            <p className="mt-4 text-xl font-semibold text-[#500724] group-hover:text-[#db2777]">{item.value}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;

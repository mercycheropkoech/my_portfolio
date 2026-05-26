import Button from "../Components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: 'about', label: 'About' },
  { href: 'projects', label: 'Projects' },
  { href: 'experience', label: 'Experience' },
  { href: 'testimonials', label: 'Testimonials' },
  { href: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.getElementById(link.href));
      for (const section of sections) {
        if (!section) continue;
        const top = section.getBoundingClientRect().top;
        if (top <= 120) setActive(section.id);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#f9a8d4]/90 backdrop-blur-md py-5 z-50 border-b border-[#fbcfe8] transition-all duration-300 shadow-sm shadow-pink-100">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-tight text-[#500724] transition hover:text-[#db2777]">
          MERCY CHEROP KOECH
        </a>

        <div className="hidden md:flex items-center gap-6">
          <div className="glass rounded-full px-3 py-2 flex items-center gap-3">
            {navLinks.map((link, index) => (
              <a
                href={`#${link.href}`}
                key={index}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  active === link.href ? 'bg-[#fce7f3] text-[#be185d]' : 'text-[#500724] hover:bg-[#fce7f3]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a href="#contact">
            <Button size="sm" className="shadow-sm shadow-pink-200">
              Contact Me
            </Button>
          </a>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#fbcfe8] bg-white/90 text-[#500724] shadow-sm shadow-pink-100 transition hover:bg-[#f9a8d4]"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#f9a8d4]/95 border-t border-[#fbcfe8] px-6 py-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((link, index) => (
              <a
                href={`#${link.href}`}
                key={index}
                onClick={() => setMenuOpen(false)}
                className={`rounded-full px-4 py-3 text-sm font-medium transition ${
                  active === link.href ? 'bg-[#fce7f3] text-[#be185d]' : 'text-[#500724] hover:bg-[#fce7f3]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              <Button size="sm" className="w-full text-center">
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

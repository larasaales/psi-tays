'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MessageCircle, Menu, X } from 'lucide-react';
import { THEME, WHATSAPP_LINK } from '@/lib/constants';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const isScrolled = scrolled || !isHome;

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/sobre', label: 'Sobre mim' },
    { href: '/servicos', label: 'Serviços' },
    { href: '/dbt', label: 'A DBT' },
    { href: '/atendimento', label: 'Atendimento' },
    { href: '/contato', label: 'Contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Typographic Logo */}
        <Link href="/" className="flex flex-col items-center justify-center -space-y-1">
          <h1 className="font-serif text-2xl md:text-3xl font-regular tracking-[0.15em] text-[#6D4958] uppercase m-0 leading-none">
            Tays Sales
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <div className="h-px w-6 bg-[#6F9288]"></div>
            <span className="font-sans text-[10px] md:text-xs tracking-[0.2em] text-[#6F9288] uppercase pt-1">
              Psicóloga
            </span>
            <div className="h-px w-6 bg-[#6F9288]"></div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex gap-6 text-sm font-medium text-gray-600">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`transition-colors hover:text-[#6D4958] ${pathname === link.href ? 'text-[#6D4958] border-b border-[#6D4958]' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full text-white text-sm font-medium transition-all hover:scale-105 shadow-md flex items-center gap-2"
            style={{ backgroundColor: THEME.primary }}
          >
            <MessageCircle size={18} />
            Agendar Sessão
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="lg:hidden text-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 lg:hidden flex flex-col p-6 space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-medium py-2 ${pathname === link.href ? 'text-[#6D4958]' : 'text-gray-600'}`}
              >
                {link.label}
              </Link>
            ))}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-3 rounded-full text-white text-center font-medium transition-all flex items-center justify-center gap-2"
              style={{ backgroundColor: THEME.primary }}
            >
              <MessageCircle size={20} />
              Agendar Sessão
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

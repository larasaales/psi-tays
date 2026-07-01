'use client';

import { useState } from 'react';
import { Phone, Mail, Copy, CheckCircle } from 'lucide-react';
import { THEME, WHATSAPP_LINK, CRP } from '@/lib/constants';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function Footer() {
  const [toastVisible, setToastVisible] = useState(false);

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('psitayssales@gmail.com');
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 2000);
  };

  return (
    <>
      <footer className="pt-20 pb-10 px-6 mt-10 relative overflow-hidden" style={{ backgroundColor: THEME.primary }}>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10"></div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 text-white/90 mb-16">
          <div className="space-y-6">
            <div className="flex flex-col">
              <h2 className="font-serif text-2xl font-regular tracking-[0.15em] text-white uppercase m-0 leading-none">
                Tays Sales
              </h2>
              <span className="font-sans text-[10px] tracking-[0.2em] text-[#A6C0B8] uppercase mt-2">
                Psicóloga • {CRP}
              </span>
            </div>
            <p className="max-w-sm text-white/70 leading-relaxed">
              Dedicada a ajudar você a encontrar equilíbrio, saúde emocional e qualidade de vida através da psicoterapia.
            </p>
          </div>
          
          <div className="space-y-6 md:justify-self-end">
            <h4 className="font-serif text-xl text-white">Contato Profissional</h4>
            <div className="space-y-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-green-500/20 group-hover:text-green-400 transition-colors">
                  <Phone size={18} />
                </div>
                (85) 99251-1285
              </a>
              <div className="flex items-center gap-3 group">
                <a href="mailto:psitayssales@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Mail size={18} />
                  </div>
                  psitayssales@gmail.com
                </a>
                <button
                  onClick={copyEmail}
                  className="ml-2 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors text-white/70 hover:text-white"
                  title="Copiar E-mail"
                  aria-label="Copiar E-mail"
                >
                  <Copy size={14} />
                </button>
              </div>
              <a href="https://instagram.com/psitayssales" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
                @psitayssales
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Tays Sales. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Toast Notification */}
      <AnimatePresence>
        {toastVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 bg-gray-900 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3"
          >
            <CheckCircle size={18} className="text-green-400" />
            <span className="text-sm font-medium">E-mail copiado!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
        </span>
        <MessageCircle size={32} />
      </motion.a>
    </>
  );
}

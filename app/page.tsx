'use client';

import { motion } from 'motion/react';
import { MessageCircle, Heart, Brain, Calendar, ShieldCheck, ArrowRight, Phone, Mail, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Design tokens mimicking the provided logo colors
const THEME = {
  primary: '#6D4958',   // Plum / Deep Rose
  secondary: '#6F9288', // Sage green
  surface: '#F4ECEF',   // Soft background for sections
};

// WhatsApp Configs
const WHATSAPP_NUMBER = "5585992511285";
const DEFAULT_MSG = encodeURIComponent('Olá! Vim através do site e gostaria de agendar uma sessão ou saber mais sobre os atendimentos.');
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MSG}`;
const CRP = "CRP 11/13592";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Typographic Logo */}
          <div className="flex flex-col items-center justify-center -space-y-1">
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
          </div>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6 text-sm font-medium text-gray-600">
              <Link href="#sobre" className="hover:text-[#6D4958] transition-colors">Sobre mim</Link>
              <Link href="#servicos" className="hover:text-[#6D4958] transition-colors">Serviços</Link>
              <Link href="#atendimento" className="hover:text-[#6D4958] transition-colors">Atendimento</Link>
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
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center text-center">
        {/* Abstract Background Blobs */}
        <div className="absolute top-0 right-0 -z-10 translate-x-1/2 -translate-y-1/4 w-[600px] h-[600px] rounded-full blur-[100px] opacity-20" style={{ backgroundColor: THEME.secondary }}></div>
        <div className="absolute top-20 left-0 -z-10 -translate-x-1/3 w-[500px] h-[500px] rounded-full blur-[100px] opacity-20" style={{ backgroundColor: THEME.primary }}></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <span className="inline-block py-1.5 px-4 rounded-full text-xs font-semibold tracking-wider text-[#6F9288] bg-[#6F9288]/10 border border-[#6F9288]/20">
            TERAPIA COMPORTAMENTAL DIALÉTICA (DBT)
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#333] leading-tight">
            Priorize o seu <span style={{ color: THEME.primary }}>bem-estar</span> e transforme a sua história.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Um espaço seguro, ético e acolhedor para você compreender suas emoções, lidar com a ansiedade e construir uma vida com mais significado.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-white text-lg font-medium transition-all hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-3 group"
              style={{ backgroundColor: THEME.primary }}
            >
              <MessageCircle className="group-hover:animate-bounce" />
              Falar com Tays no WhatsApp
            </a>
            <a 
              href="#sobre"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-[#6D4958] bg-white border border-[#6D4958]/20 hover:bg-[#6D4958]/5 text-lg font-medium transition-all flex items-center justify-center"
            >
              Conhecer mais
            </a>
          </div>
        </motion.div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20 md:py-28 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="font-serif text-3xl md:text-4xl text-[#333] mb-4">Serviços Oferecidos</h3>
            <p className="text-gray-600 text-lg">Um espaço seguro e profissional para o seu desenvolvimento emocional.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Psicoterapia Individual */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-3xl bg-[#FCFCFB] border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#6D4958]/5 rounded-bl-full -z-0"></div>
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 relative z-10 text-[#6D4958]">
                <Heart size={28} />
              </div>
              <h4 className="text-2xl font-serif text-[#333] mb-6 relative z-10">Psicoterapia Individual</h4>
              
              <div className="space-y-6 relative z-10 text-gray-600">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6D4958]"></div>
                    O que abrange
                  </h5>
                  <p className="leading-relaxed">
                    Um espaço de escuta qualificada e acolhimento estruturado, focado na exploração das suas emoções, pensamentos e padrões de comportamento.
                  </p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6D4958]"></div>
                    Para quem é indicado
                  </h5>
                  <p className="leading-relaxed">
                    Pessoas que buscam autoconhecimento ou que estão enfrentando ansiedade, depressão, estresse crônico, processos de luto, dificuldades em relacionamentos ou momentos de transição de vida.
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6D4958]"></div>
                    Quais os benefícios
                  </h5>
                  <p className="leading-relaxed">
                    Promove regulação emocional, alívio  do sofrimento psicológico, desenvolvimento de recursos internos e, consequentemente, uma maior qualidade de vida e bem-estar geral.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Treinamento de Habilidades Individual */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 md:p-10 rounded-3xl bg-[#FCFCFB] border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#6F9288]/10 rounded-bl-full -z-0"></div>
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 relative z-10 text-[#6F9288]">
                <Brain size={28} />
              </div>
              <h4 className="text-2xl font-serif text-[#333] mb-6 relative z-10">Treinamento de Habilidades</h4>
              
              <div className="space-y-6 relative z-10 text-gray-600">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6F9288]"></div>
                    O que abrange
                  </h5>
                  <p className="leading-relaxed">
                    Um acompanhamento focado no ensino e treino prático de estratégias comportamentais e cognitivas para lidar com desafios diários de forma efetiva.
                  </p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6F9288]"></div>
                    Para quem é indicado
                  </h5>
                  <p className="leading-relaxed">
                    Pessoas que precisam desenvolver habilidades de regulação emocional, tolerância ao mal-estar e relações interpessoais. Muito indicado também de forma complementar.
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6F9288]"></div>
                    Quais os benefícios
                  </h5>
                  <p className="leading-relaxed">
                    Mune você de um repertório sólido para lidar com crises através do aumento no controle de impulsos, melhoria nos relacionamentos e capacidade de agir em meio à desregulação.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-16 text-center">
             <a  href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-medium transition-all hover:-translate-y-1 shadow-lg" style={{ backgroundColor: THEME.primary }}>
               <MessageCircle size={20} />
               Agendar uma Avaliação
             </a>
             <p className="mt-6 text-sm text-gray-500">
               Em conformidade com o Código de Ética Profissional do Psicólogo (CFP).
             </p>
          </div>
        </div>
      </section>

      {/* Sobre Mim Section */}
      <section id="sobre" className="py-20 md:py-28 px-6" style={{ backgroundColor: THEME.surface }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
          >
            {/* Elegant Image Frame placeholder */}
            <div className="aspect-[4/5] md:aspect-square rounded-tl-[100px] rounded-br-[100px] overflow-hidden relative shadow-xl">
              <div className="absolute inset-0 bg-[#6D4958]/10 mix-blend-overlay z-10 w-full h-full"></div>
              <Image 
                src="https://picsum.photos/seed/therapy2/800/1000" // Placeholder, in reality would be her photo
                alt="Psicóloga Tays Sales"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg p-6 z-20">
              <div className="text-center">
                <span className="block text-xl font-serif text-[#6D4958]">+5</span>
                <span className="block text-[10px] font-sans text-gray-500 uppercase tracking-wider font-semibold">Anos de<br/>Experiência</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h3 className="font-serif text-3xl md:text-5xl text-[#333]">Muito prazer, eu sou a Tays.</h3>
            <p className="text-lg text-[#6F9288] font-medium tracking-wide">
              Psicóloga Clínica • {CRP}
            </p>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                Acredito no poder transformador da escuta ativa e do acolhimento. Meu objetivo como psicóloga é proporcionar a você um espaço onde você possa ser vulnerável sem julgamentos.
              </p>
              <p>
                Trabalho com práticas embasadas e atuais, ajudando meus pacientes a trilharem um caminho de autoconhecimento, regulação emocional e maior qualidade de vida pessoal e profissional.
              </p>
            </div>
            <div className="pt-6">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-medium transition-all hover:-translate-y-1 shadow-md"
                style={{ backgroundColor: THEME.secondary }}
              >
                <Calendar size={20} />
                Agendar Horário
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Informações de Atendimento */}
      <section id="atendimento" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h3 className="font-serif text-3xl md:text-4xl text-[#333]">Como funcionam os atendimentos?</h3>
          
          <div className="grid sm:grid-cols-2 gap-8 text-left">
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col h-full">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-[#6D4958] shadow-sm">
                <Clock size={24} />
              </div>
              <h4 className="text-xl font-serif text-[#333] mb-3">Duração e Modalidade</h4>
              <p className="text-gray-600 flex-grow">As sessões têm duração média de 1 hora. Os atendimentos podem ser online para todo o Brasil ou presenciais em Fortaleza.</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col h-full">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-[#6F9288] shadow-sm">
                <Brain size={24} />
              </div>
              <h4 className="text-xl font-serif text-[#333] mb-3">Abordagem</h4>
              <p className="text-gray-600 flex-grow">Os atendimentos são fundamentados na Terapia Comportamental Dialética (DBT), unindo aceitação e mudança para ajudar você a regular emoções intensas e construir uma vida com mais sentido.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contato */}
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
              <a href="mailto:psitayssales@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail size={18} />
                </div>
                psitayssales@gmail.com
              </a>
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
    </main>
  );
}

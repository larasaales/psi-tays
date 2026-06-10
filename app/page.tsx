'use client';

import { motion } from 'motion/react';
import { MessageCircle, Heart, Brain, Calendar, ShieldCheck, ArrowRight, Phone, Mail, Clock, Leaf, Activity, Shield, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, FormEvent, ChangeEvent } from 'react';

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

  // Contact Form State
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Format phone output as (XX) XXXXX-XXXX as the user types
  const formatTelefone = (value: string) => {
    const digits = value.replace(/\D/g, '');
    
    if (digits.length === 0) return '';
    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formatted = formatTelefone(e.target.value);
    setFormData(prev => ({ ...prev, telefone: formatted }));
  };

  // Submit contact message to API route
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.telefone || !formData.mensagem) {
      setStatus('error');
      setResponseMsg('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setStatus('loading');
    setResponseMsg('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setResponseMsg(data.message || 'Mensagem enviada com sucesso!');
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          mensagem: '',
        });
      } else {
        setStatus('error');
        setResponseMsg(data.error || 'Ocorreu um erro ao enviar sua mensagem.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setResponseMsg('Não foi possível conectar ao servidor. Verifique sua conexão de rede ou entre em contato diretamente pelo WhatsApp.');
    }
  };

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
              <Link href="#dbt" className="hover:text-[#6D4958] transition-colors">A DBT</Link>
              <Link href="#atendimento" className="hover:text-[#6D4958] transition-colors">Atendimento</Link>
              <Link href="#contato" className="hover:text-[#6D4958] transition-colors">Contato</Link>
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h3 className="font-serif text-3xl md:text-4xl text-[#333] mb-4">Serviços Oferecidos</h3>
            <p className="text-gray-600 text-lg">Um acompanhamento ético, especializado e pautado na ciência para o seu desenvolvimento emocional.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Psicoterapia Individual */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-[2rem] bg-[#FCFCFB] border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#6D4958]/5 rounded-bl-full -z-0"></div>
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 relative z-10 text-[#6D4958]">
                <Heart size={28} />
              </div>
              <h4 className="text-2xl md:text-3xl font-serif text-[#333] mb-6 relative z-10">Psicoterapia Individual</h4>
              
              <div className="space-y-8 relative z-10 text-gray-600">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2.5 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6D4958]/80"></div>
                    O que é e como funciona
                  </h5>
                  <p className="leading-relaxed">
                    É um processo terapêutico dinâmico e personalizado, focado em compreender padrões de pensamento, regular sentimentos intensos e curar feridas emocionais. As sessões ocorrem semanalmente, em um ambiente confidencial, seguro e acolhedor, onde você é livre para expressar suas angústias sem qualquer julgamento.
                  </p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2.5 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6D4958]/80"></div>
                    Para quem é indicado
                  </h5>
                  <p className="leading-relaxed">
                    Indicado para quem enfrenta sofrimento emocional (como ansiedade, estresse severo, tristeza recorrente, fobias ou luto), vive conflitos em seus relacionamentos afetivos, profissionais ou familiares, passa por transições desafiadoras de vida, ou para quem simplesmente busca autoconhecimento profundo.
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-800 mb-2.5 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6D4958]/80"></div>
                    Quais os benefícios
                  </h5>
                  <p className="leading-relaxed">
                    Proporciona autonomia na tomada de decisões, alívio significativo da ansiedade, superação de traumas do passado e o desenvolvimento de uma relação mais compassiva e saudável com você mesmo.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Treinamento de Habilidades DBT Individual */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 md:p-12 rounded-[2rem] bg-[#FCFCFB] border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#6F9288]/10 rounded-bl-full -z-0"></div>
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 relative z-10 text-[#6F9288]">
                <Brain size={28} />
              </div>
              <h4 className="text-2xl md:text-3xl font-serif text-[#333] mb-6 relative z-10">Treinamento de Habilidades DBT</h4>
              
              <div className="space-y-8 relative z-10 text-gray-600">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2.5 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6F9288]/80"></div>
                    O que é e como funciona
                  </h5>
                  <p className="leading-relaxed">
                    Um acompanhamento focado no ensino prático e estruturado de ferramentas comportamentais baseadas na Terapia Comportamental Dialética. O objetivo principal é te equipar com recursos concretos para responder aos desafios do cotidiano de forma efetiva, mantendo o controle das suas reações.
                  </p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2.5 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6F9288]/80"></div>
                    Os 4 Pilares Desenvolvidos
                  </h5>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm mt-3 pt-1">
                    <div className="bg-white p-3 rounded-xl border border-gray-100">
                      <strong className="text-gray-800 block text-xs tracking-wider uppercase mb-1">Mindfulness</strong>
                      Ancoragem no agora para acalmar a mente e diminuir pensamentos ruminantes.
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-gray-100">
                      <strong className="text-gray-800 block text-xs tracking-wider uppercase mb-1">Tolerância ao Mal-estar</strong>
                      Métodos para atravessar momentos de crise aguda sem agir impulsivamente.
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-gray-100">
                      <strong className="text-gray-800 block text-xs tracking-wider uppercase mb-1">Regulação Emocional</strong>
                      Estratégias para identificar e modular a intensidade de sentimentos dolorosos.
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-gray-100">
                      <strong className="text-gray-800 block text-xs tracking-wider uppercase mb-1">Efetividade Interpessoal</strong>
                      Como colocar limites, dizer &apos;não&apos; de forma segura e nutrir conexões saudáveis.
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-800 mb-2.5 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6F9288]/80"></div>
                    Quais os benefícios
                  </h5>
                  <p className="leading-relaxed">
                    Você conquista um repertório sólido para gerenciar crises diárias, controle de reações impetuosas, melhora visível nos relacionamentos e estabilidade geral no humor.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-16 text-center"
          >
             <a  href="#contato" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-medium transition-all hover:scale-105 active:scale-95 shadow-lg" style={{ backgroundColor: THEME.primary }}>
               <Calendar size={20} />
               Agendar uma Avaliação por E-mail
             </a>
             <p className="mt-6 text-sm text-gray-500">
               Todos os procedimentos são conduzidos seguindo estritamente as diretrizes do Código de Ética Profissional do Psicólogo (CFP).
             </p>
          </motion.div>
        </div>
      </section>

      {/* O que é a DBT Section */}
      <section id="dbt" className="py-20 md:py-28 px-6 bg-[#FCFCFB] border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block py-1.5 px-4 rounded-full text-xs font-semibold tracking-wider text-[#6D4958] bg-[#6D4958]/10 border border-[#6D4958]/20 mb-4">
              ABORDAGEM CLÍNICA
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-[#333] mb-6">O que é a Terapia Comportamental Dialética (DBT)?</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              A DBT é uma terapia baseada em evidências que une duas perspectivas fundamentais: a <strong>aceitação</strong> da realidade e das emoções no momento presente, e a <strong>mudança</strong> de comportamentos que geram sofrimento. O objetivo central não é apenas reduzir sintomas, mas ajudar você a construir uma &apos;vida que valha a pena ser vivida&apos;.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Leaf className="w-6 h-6" style={{ color: THEME.secondary }} />,
                title: "Mindfulness",
                desc: "Habilidades para ancorar no momento presente, observando e participando da realidade sem se apegar a julgamentos ou ao passado."
              },
              {
                icon: <Shield className="w-6 h-6" style={{ color: THEME.secondary }} />,
                title: "Tolerância ao Mal-Estar",
                desc: "Ferramentas práticas para sobreviver a crises e a momentos de dor intensa sem agir por impulso ou piorar a situação."
              },
              {
                icon: <Activity className="w-6 h-6" style={{ color: THEME.secondary }} />,
                title: "Regulação Emocional",
                desc: "Estratégias para entender a função das emoções, diminuir a vulnerabilidade e modificar sentimentos incapacitantes."
              },
              {
                icon: <Users className="w-6 h-6" style={{ color: THEME.secondary }} />,
                title: "Efetividade Interpessoal",
                desc: "Aprender a nutrir relacionamentos mais saudáveis, pedir o que precisa e impor limites, preservando o seu autorrespeito."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FCFCFB] border border-gray-100 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-serif text-[#333] mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Mim Section */}
      <section id="sobre" className="py-20 md:py-28 px-6" style={{ backgroundColor: THEME.surface }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 relative"
          >
            {/* Elegant Image Frame placeholder */}
            <div className="aspect-[4/5] md:aspect-square rounded-tl-[100px] rounded-br-[100px] overflow-hidden relative shadow-xl">
              <div className="absolute inset-0 bg-[#6D4958]/10 mix-blend-overlay z-10 w-full h-full"></div>
              <Image 
                src="/perfil.jpeg"
                alt="Psicóloga Tays Sales"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
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
              <p className="font-medium text-gray-800">
                Certificada pelo Behavioral Tech Institute (BTECH) e DBT Brasil, no Treinamento Intensivo em DBT.
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
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl md:text-4xl text-[#333]"
          >
            Como funcionam os atendimentos?
          </motion.h3>
          
          <div className="grid sm:grid-cols-2 gap-8 text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-[#6D4958] shadow-sm">
                <Clock size={24} />
              </div>
              <h4 className="text-xl font-serif text-[#333] mb-3">Duração e Modalidade</h4>
              <p className="text-gray-600 flex-grow">As sessões têm duração média de 1 hora. Os atendimentos podem ser online para todo o Brasil ou presenciais em Fortaleza.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="p-8 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-[#6F9288] shadow-sm">
                <Brain size={24} />
              </div>
              <h4 className="text-xl font-serif text-[#333] mb-3">Abordagem</h4>
              <p className="text-gray-600 flex-grow">Os atendimentos são fundamentados na Terapia Comportamental Dialética (DBT), unindo aceitação e mudança para ajudar você a regular emoções intensas e construir uma vida com mais sentido.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section id="contato" className="py-20 md:py-28 px-6 bg-[#FCFCFB] border-t border-gray-100 relative">
        <div className="absolute inset-0 bg-[#F4ECEF]/10 pointer-events-none -z-10"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
          {/* Coluna de Informações / Texto de Apoio */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <span className="inline-block py-1.5 px-4 rounded-full text-xs font-semibold tracking-wider text-[#6D4958] bg-[#6D4958]/10 border border-[#6D4958]/20">
                AGENDE SUA CONSULTA
              </span>
              <h3 className="font-serif text-3xl md:text-5xl text-[#333] leading-tight">
                Vamos dar o primeiro passo <span style={{ color: THEME.primary }}>juntos</span>?
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Escolher iniciar a terapia é um ato sincero de coragem e autocuidado. Se ficou alguma dúvida sobre o funcionamento dos atendimentos ou se quiser verificar a disponibilidade de novos horários, sinta-se à vontade para preencher o formulário ao lado de forma totalmente sigilosa.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm space-y-6"
            >
              <h4 className="font-serif text-xl text-[#333]">O que acontece após enviar?</h4>
              <ul className="space-y-4 text-gray-600 text-sm">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#6F9288]/10 flex items-center justify-center text-[#6F9288] shrink-0 font-bold text-xs">1</div>
                  <p>Tays Sales receberá os seus dados diretamente em seu e-mail profissional de forma confidencial e segura.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#6F9288]/10 flex items-center justify-center text-[#6F9288] shrink-0 font-bold text-xs">2</div>
                  <p>Ela analisará pessoalmente sua solicitação e entrará em contato em até 24h úteis via WhatsApp ou e-mail.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#6F9288]/10 flex items-center justify-center text-[#6F9288] shrink-0 font-bold text-xs">3</div>
                  <p>A partir daí, vocês agendarão a melhor data para a sua sessão inicial de psicoterapia ou treinamento.</p>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Coluna do Formulário de Contato */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-white p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-xl relative overflow-hidden"
            >
              {/* Decorative detail */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#6D4958] to-[#6F9288]"></div>

              <h4 className="text-2xl font-serif text-[#333] mb-6">Formulário de Contato</h4>

              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-500 border border-green-200">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  <div className="space-y-2">
                    <h5 className="font-serif text-2xl text-gray-800">Mensagem Enviada!</h5>
                    <p className="text-gray-600 max-w-md mx-auto">
                      {responseMsg || "Obrigado por seu contato! Suas informações foram enviadas diretamente ao e-mail da psicóloga Tays Sales. Logo mais você receberá uma resposta."}
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-6 py-2.5 rounded-full text-[#6D4958] border border-[#6D4958]/25 hover:bg-[#6D4958]/5 text-sm font-medium transition-colors"
                    >
                      Enviar outro contato
                    </button>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-full text-white text-sm font-medium transition-all shadow-md flex items-center gap-2 hover:scale-105"
                      style={{ backgroundColor: THEME.secondary }}
                    >
                      <MessageCircle size={16} />
                      Chamar no WhatsApp agora
                    </a>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-red-50 text-red-700 text-sm border border-red-100 flex gap-3 items-start"
                    >
                      <div className="shrink-0 mt-0.5">⚠️</div>
                      <p>{responseMsg}</p>
                    </motion.div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Nome */}
                    <div className="space-y-2">
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-700 font-sans">
                        Nome Completo <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData(prev => ({ ...prev, nome: e.target.value }))}
                        placeholder="Ex: Maria de Souza"
                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6D4958]/30 focus:border-[#6D4958] bg-[#FCFCFB] text-gray-800 transition-all text-sm font-sans"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-sans">
                        E-mail <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="Ex: maria@provedor.com"
                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6D4958]/30 focus:border-[#6D4958] bg-[#FCFCFB] text-gray-800 transition-all text-sm font-sans"
                      />
                    </div>
                  </div>

                  {/* Telefone */}
                  <div className="space-y-2">
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 font-sans font-sans">
                      Telefone / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      required
                      value={formData.telefone}
                      onChange={handlePhoneChange}
                      placeholder="Ex: (85) 99999-9999"
                      maxLength={15}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6D4958]/30 focus:border-[#6D4958] bg-[#FCFCFB] text-gray-800 transition-all text-sm font-sans"
                    />
                    <p className="text-[11px] text-gray-400 font-sans">Insira seu número com DDD de preferência.</p>
                  </div>

                  {/* Mensagem */}
                  <div className="space-y-2">
                    <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 font-sans">
                      Como podemos te ajudar? (Mensagem) <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      rows={4}
                      value={formData.mensagem}
                      onChange={(e) => setFormData(prev => ({ ...prev, mensagem: e.target.value }))}
                      placeholder="Conte-nos brevemente o motivo do seu contato..."
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6D4958]/30 focus:border-[#6D4958] bg-[#FCFCFB] text-gray-800 transition-all text-sm resize-none font-sans"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 px-6 rounded-full text-white font-medium transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-sm cursor-pointer font-sans"
                    style={{ backgroundColor: THEME.primary }}
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      "Enviar Mensagem por E-mail"
                    )}
                  </button>
                  <p className="text-center text-[11px] text-gray-400 mt-4 font-sans">
                    Seus dados pessoais compartilhados são protegidos com sigilo e confidencialidade.
                  </p>
                </form>
              )}
            </motion.div>
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

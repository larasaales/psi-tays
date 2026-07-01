'use client';

import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import { THEME, WHATSAPP_LINK, CRP } from '@/lib/constants';

export default function SobrePage() {
  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-28" style={{ backgroundColor: THEME.surface }}>
      <section className="px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 relative"
          >
            {/* Elegant Image Frame */}
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h1 className="font-serif text-4xl md:text-5xl text-[#333]">Muito prazer, eu sou a Tays.</h1>
            <p className="text-lg md:text-xl text-[#6F9288] font-medium tracking-wide">
              Psicóloga Clínica • {CRP}
            </p>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                Acredito no poder transformador da escuta ativa e do acolhimento. Meu objetivo como psicóloga é proporcionar a você um espaço onde você possa ser vulnerável sem julgamentos.
              </p>
              <p>
                Trabalho com práticas embasadas e atuais, ajudando meus pacientes a trilharem um caminho de autoconhecimento, regulação emocional e maior qualidade de vida pessoal e profissional.
              </p>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <p className="font-medium text-gray-800 text-base">
                  Certificada pelo Behavioral Tech Institute (BTECH) e DBT Brasil, no Treinamento Intensivo em DBT.
                </p>
              </div>
            </div>
            <div className="pt-6">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-medium transition-all hover:-translate-y-1 shadow-md hover:shadow-lg"
                style={{ backgroundColor: THEME.secondary }}
              >
                <Calendar size={20} />
                Agendar Horário
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

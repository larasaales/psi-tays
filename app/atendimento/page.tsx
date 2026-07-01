'use client';

import { motion } from 'motion/react';
import { Clock, Brain, Calendar } from 'lucide-react';
import { THEME, WHATSAPP_LINK } from '@/lib/constants';

export default function AtendimentoPage() {
  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-28">
      <section className="px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full text-xs font-semibold tracking-wider text-[#6D4958] bg-[#6D4958]/10 border border-[#6D4958]/20 mb-4">
              INFORMAÇÕES ÚTEIS
            </span>
            <h1 className="font-serif text-3xl md:text-5xl text-[#333]">Como funcionam os atendimentos?</h1>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 gap-8 text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="p-8 md:p-10 rounded-[2rem] bg-gray-50 border border-gray-100 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 text-[#6D4958] shadow-sm">
                <Clock size={32} />
              </div>
              <h4 className="text-2xl font-serif text-[#333] mb-4">Duração e Modalidade</h4>
              <p className="text-gray-600 flex-grow text-lg leading-relaxed">
                As sessões têm duração média de 1 hora. Os atendimentos podem ser realizados de forma <strong>online</strong>, atendendo pacientes de todo o Brasil e do exterior, ou <strong>presencialmente</strong> em Fortaleza - CE.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="p-8 md:p-10 rounded-[2rem] bg-gray-50 border border-gray-100 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 text-[#6F9288] shadow-sm">
                <Brain size={32} />
              </div>
              <h4 className="text-2xl font-serif text-[#333] mb-4">Abordagem</h4>
              <p className="text-gray-600 flex-grow text-lg leading-relaxed">
                Os atendimentos são fundamentados na Terapia Comportamental Dialética (DBT), unindo aceitação e mudança para ajudar você a regular emoções intensas, melhorar seus relacionamentos e construir uma vida com mais sentido.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="pt-12"
          >
             <a href="/contato" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-medium transition-all hover:scale-105 active:scale-95 shadow-lg text-lg" style={{ backgroundColor: THEME.primary }}>
               <Calendar size={20} />
               Verificar Disponibilidade de Horários
             </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

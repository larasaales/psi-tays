'use client';

import { motion } from 'motion/react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { THEME, WHATSAPP_LINK } from '@/lib/constants';

export default function Home() {
  return (
    <div className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center text-center relative overflow-hidden min-h-screen">
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
            Agendar Sessão via WhatsApp
          </a>
          <Link 
            href="/sobre"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-[#6D4958] bg-white border border-[#6D4958]/20 hover:bg-[#6D4958]/5 text-lg font-medium transition-all flex items-center justify-center"
          >
            Conhecer mais
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-24 grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto w-full"
      >
        <Link href="/servicos" className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all text-left flex flex-col h-full">
          <h3 className="font-serif text-xl text-[#333] mb-3 group-hover:text-[#6D4958] transition-colors">Serviços Oferecidos</h3>
          <p className="text-gray-600 text-sm flex-grow">Psicoterapia individual e treinamento de habilidades DBT para o seu desenvolvimento emocional.</p>
          <div className="mt-4 flex items-center gap-2 text-[#6D4958] text-sm font-medium">
            Saiba mais <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
        
        <Link href="/dbt" className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all text-left flex flex-col h-full">
          <h3 className="font-serif text-xl text-[#333] mb-3 group-hover:text-[#6F9288] transition-colors">A Abordagem DBT</h3>
          <p className="text-gray-600 text-sm flex-grow">Entenda como a Terapia Comportamental Dialética pode ajudar a regular emoções intensas.</p>
          <div className="mt-4 flex items-center gap-2 text-[#6F9288] text-sm font-medium">
            Saiba mais <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
        
        <Link href="/atendimento" className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all text-left flex flex-col h-full">
          <h3 className="font-serif text-xl text-[#333] mb-3 group-hover:text-[#6D4958] transition-colors">Como funciona</h3>
          <p className="text-gray-600 text-sm flex-grow">Informações sobre duração, modalidades online e presencial, e formato das sessões.</p>
          <div className="mt-4 flex items-center gap-2 text-[#6D4958] text-sm font-medium">
            Saiba mais <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </motion.div>
    </div>
  );
}


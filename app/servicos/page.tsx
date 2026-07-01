'use client';

import { motion } from 'motion/react';
import { Heart, Brain, Calendar } from 'lucide-react';
import { THEME } from '@/lib/constants';

export default function ServicosPage() {
  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-28">
      <section className="px-6 bg-[#FCFCFB] relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h1 className="font-serif text-4xl md:text-5xl text-[#333] mb-6">Serviços Oferecidos</h1>
            <p className="text-gray-600 text-lg">Um acompanhamento ético, especializado e pautado na ciência para o seu desenvolvimento emocional.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Psicoterapia Individual */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 md:p-12 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#6D4958]/5 rounded-bl-full -z-0"></div>
              <div className="w-16 h-16 rounded-2xl bg-[#FCFCFB] shadow-sm flex items-center justify-center mb-8 relative z-10 text-[#6D4958]">
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-8 md:p-12 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#6F9288]/10 rounded-bl-full -z-0"></div>
              <div className="w-16 h-16 rounded-2xl bg-[#FCFCFB] shadow-sm flex items-center justify-center mb-8 relative z-10 text-[#6F9288]">
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
                    <div className="bg-[#FCFCFB] p-3 rounded-xl border border-gray-100">
                      <strong className="text-gray-800 block text-xs tracking-wider uppercase mb-1">Mindfulness</strong>
                      Ancoragem no agora para acalmar a mente e diminuir pensamentos ruminantes.
                    </div>
                    <div className="bg-[#FCFCFB] p-3 rounded-xl border border-gray-100">
                      <strong className="text-gray-800 block text-xs tracking-wider uppercase mb-1">Tolerância ao Mal-estar</strong>
                      Métodos para atravessar momentos de crise aguda sem agir impulsivamente.
                    </div>
                    <div className="bg-[#FCFCFB] p-3 rounded-xl border border-gray-100">
                      <strong className="text-gray-800 block text-xs tracking-wider uppercase mb-1">Regulação Emocional</strong>
                      Estratégias para identificar e modular a intensidade de sentimentos dolorosos.
                    </div>
                    <div className="bg-[#FCFCFB] p-3 rounded-xl border border-gray-100">
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
             <a href="/contato" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-medium transition-all hover:scale-105 active:scale-95 shadow-lg" style={{ backgroundColor: THEME.primary }}>
               <Calendar size={20} />
               Agendar uma Avaliação por E-mail
             </a>
             <p className="mt-6 text-sm text-gray-500">
               Todos os procedimentos são conduzidos seguindo estritamente as diretrizes do Código de Ética Profissional do Psicólogo (CFP).
             </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

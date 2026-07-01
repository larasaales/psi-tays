'use client';

import { motion } from 'motion/react';
import { Leaf, Shield, Activity, Users } from 'lucide-react';
import { THEME } from '@/lib/constants';

export default function DbtPage() {
  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-28">
      <section className="px-6 bg-[#FCFCFB] relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block py-1.5 px-4 rounded-full text-xs font-semibold tracking-wider text-[#6D4958] bg-[#6D4958]/10 border border-[#6D4958]/20 mb-4">
              ABORDAGEM CLÍNICA
            </span>
            <h1 className="font-serif text-3xl md:text-5xl text-[#333] mb-6">O que é a Terapia Comportamental Dialética (DBT)?</h1>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
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
                className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#FCFCFB] border border-gray-100 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h4 className="text-xl font-serif text-[#333] mb-4">{item.title}</h4>
                <p className="text-gray-600 text-base leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { THEME, WHATSAPP_LINK } from '@/lib/constants';

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setResponseMsg(data.message || 'Mensagem enviada com sucesso!');
        setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
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
    <div className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#FCFCFB] min-h-[80vh]">
      <section className="px-6 relative">
        <div className="absolute inset-0 bg-[#F4ECEF]/10 pointer-events-none -z-10"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <span className="inline-block py-1.5 px-4 rounded-full text-xs font-semibold tracking-wider text-[#6D4958] bg-[#6D4958]/10 border border-[#6D4958]/20">
                AGENDE SUA CONSULTA
              </span>
              <h1 className="font-serif text-3xl md:text-5xl text-[#333] leading-tight">
                Vamos dar o primeiro passo <span style={{ color: THEME.primary }}>juntos</span>?
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Escolher iniciar a terapia é um ato sincero de coragem e autocuidado. Se ficou alguma dúvida sobre o funcionamento dos atendimentos ou se quiser verificar a disponibilidade de novos horários, sinta-se à vontade para preencher o formulário ao lado de forma totalmente sigilosa.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-white p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-xl relative overflow-hidden"
            >
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

                  <div className="space-y-2">
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 font-sans">
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
                  </div>

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
    </div>
  );
}

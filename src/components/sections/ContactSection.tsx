'use client';

import { useState } from 'react';
import { useForm } from '@/hooks/useForm';
import SchedulingModal from '@/components/common/SchedulingModal';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    values,
    errors,
    isSubmitting,
    submitMessage,
    handleChange,
    handleSubmit,
  } = useForm<ContactFormData>(
    { name: '', email: '', phone: '', message: '' },
    async (data) => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar');
      }
    }
  );

  return (
    <>
      <SchedulingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <section id="contato" className="md:py-20 py-16 bg-white border-t border-brand-gray/10">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between md:gap-12 gap-8">
          {/* Left - Heading */}
          <div className="flex-1">
            <h2 className="text-4xl lg:text-7xl font-bold text-brand-dark-gray mb-6 tracking-tight leading-none">
              Seu próximo nível <br />
              <span className="highlight">é uma decisão.</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-start sm:items-center md:gap-8 gap-4 text-xs font-bold uppercase tracking-widest text-text-tertiary mt-8">
              <a href="mailto:contato@pedrolucena.com" className="hover:text-brand-orange transition-colors">
                contato@pedrolucena.com
              </a>
              <span className="hidden sm:block opacity-20 text-xs">•</span>
              <a href="tel:+5582982150582" className="hover:text-brand-orange transition-colors">
                +55 82 98215.0582
              </a>
            </div>
          </div>

          {/* Right - CTA Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-16 py-6 bg-brand-dark-gray text-white rounded-full font-bold text-sm uppercase tracking-widest shadow-xl hover:bg-brand-orange transition-all shrink-0"
          >
            Iniciar Consultoria
          </button>
        </div>

        {/* Form Section (Hidden for now, can be enabled) */}
        {/* Uncomment to show form
        <div className="mt-20">
          <form onSubmit={handleSubmit} className="max-w-md">
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Seu nome"
                className="w-full px-4 py-3 border border-brand-gray rounded-lg focus:outline-none focus:border-brand-orange transition-colors"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Seu email"
                className="w-full px-4 py-3 border border-brand-gray rounded-lg focus:outline-none focus:border-brand-orange transition-colors"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              <input
                type="tel"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                placeholder="Seu telefone"
                className="w-full px-4 py-3 border border-brand-gray rounded-lg focus:outline-none focus:border-brand-orange transition-colors"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                placeholder="Sua mensagem"
                rows={5}
                className="w-full px-4 py-3 border border-brand-gray rounded-lg focus:outline-none focus:border-brand-orange transition-colors"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn btn-primary disabled:opacity-50"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>

              {submitMessage && (
                <p className={`text-sm ${submitMessage.includes('sucesso') ? 'text-green-500' : 'text-red-500'}`}>
                  {submitMessage}
                </p>
              )}
            </div>
          </form>
        </div>
        */}
      </div>
    </section>
    </>
  );
}

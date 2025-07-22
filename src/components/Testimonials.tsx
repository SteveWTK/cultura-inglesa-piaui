// src/components/Testimonials.tsx
"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: "1",
    name: "Paulo Silva",
    role: "Estudante Adulto",
    content:
      "A Cultura Inglesa mudou minha vida profissional. Em 2 anos consegui a certificação Cambridge e uma promoção na empresa. Os professores são excepcionais!",
    rating: 5,
    image: "/images/testimonials/testimonial-1.jpeg",
  },
  {
    id: "2",
    name: "Davi Santos",
    role: "Pai de aluno",
    content:
      "Minha filha de 8 anos adora as aulas! Ela chegou em casa cantando músicas em inglês desde a primeira semana. O método é realmente eficaz para crianças.",
    rating: 5,
    image: "/images/testimonials/testimonial-2.jpg",
  },
  {
    id: "3",
    name: "Estevão Costa",
    role: "Profissional de TI",
    content:
      "Precisava do inglês para trabalhar com equipes internacionais. Em 18 meses já estava participando de reuniões em inglês com confiança. Recomendo!",
    rating: 5,
    image: "/images/testimonials/testimonial-3.jpeg",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O que nossos alunos dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Histórias reais de sucesso de quem escolheu a Cultura Inglesa para
            transformar seu futuro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <Quote className="h-4 w-4 text-white" fill="currentColor" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-6 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                &quot;{testimonial.content}&quot;
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-primary-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Seja o próximo caso de sucesso!
            </h3>
            <p className="text-xl text-blue-100 mb-6">
              Junte-se a milhares de alunos que já transformaram suas vidas com
              a Cultura Inglesa
            </p>
            <button
              onClick={() => {
                const formSection = document.getElementById("matriculas");
                formSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Garantir Minha Vaga Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

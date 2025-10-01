
import React, { useState } from 'react';
import { personas } from '../constants.ts';
import type { Persona } from '../types.ts';

const PersonasSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(personas[0].id);

  const activePersona = personas.find(p => p.id === activeTab) as Persona;

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-slab text-3xl sm:text-4xl font-bold text-[#BF917F]">
            Uma Plataforma, Múltiplas Visões
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            A operação é pensada para atender às necessidades de cada ator do ecossistema escolar, funcionando como um manual para o sucesso.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto -mx-6 px-6 md:px-0 md:-mx-0 md:w-1/4">
            {personas.map((persona) => (
              <button
                key={persona.id}
                onClick={() => setActiveTab(persona.id)}
                className={`flex-shrink-0 md:w-full text-left p-4 rounded-lg transition-all duration-300 ${
                  activeTab === persona.id
                    ? 'bg-[#ffa400] text-white shadow-lg'
                    : 'hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <persona.icon className="w-6 h-6" />
                  <span className="font-bold text-md">{persona.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="md:w-3/4">
            <div className="bg-gray-50 p-8 rounded-xl shadow-inner">
              <h3 className="font-slab text-2xl font-bold text-[#ff595a]">
                {activePersona.title}
              </h3>
              <p className="mt-2 text-gray-700">{activePersona.description}</p>
              <ul className="mt-6 space-y-3">
                {activePersona.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonasSection;
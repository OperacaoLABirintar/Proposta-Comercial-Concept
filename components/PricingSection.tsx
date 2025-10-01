import React from 'react';
import { pricingPlans } from '../constants.ts';
import type { PricingPlan } from '../types.ts';

const PricingCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => {
  return (
    <div
      className="group rounded-xl p-8 border bg-white border-gray-200 shadow-lg transition-all duration-300 w-full flex flex-col justify-center text-center h-full hover:bg-[#BF917F] hover:border-[#BF917F] hover:shadow-2xl hover:scale-105 cursor-pointer"
    >
      <h3 className="font-slab text-2xl font-bold text-[#ff595a] transition-colors duration-300 group-hover:text-white">
        {plan.frequency}
      </h3>
      <div className="mt-4">
        <span className="text-4xl font-bold text-[#BF917F] transition-colors duration-300 group-hover:text-white">
          {plan.price}
        </span>
        <span className="ml-1 text-gray-500 transition-colors duration-300 group-hover:text-gray-300">
          /mês
        </span>
      </div>
    </div>
  );
};

const PricingSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-slab text-3xl sm:text-4xl font-bold text-[#BF917F]">
            Investimento
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Precificação flexível e transparente, pensada para se adaptar à rotina de cada família e garantir a sustentabilidade do projeto.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-screen-xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="flex">
              <PricingCard plan={plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
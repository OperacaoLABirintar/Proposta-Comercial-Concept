// FIX: Import 'React' to make the React namespace available for type definitions.
import React from 'react';

export interface Axe {
  title: string;
  subtitle: string;
  details: { title: string; description: string }[];
}

export interface PricingPlan {
  frequency: string;
  price: string;
  description: string;
  features: string[];
  isFeatured: boolean;
}

// FIX: Added Persona interface for use in PersonasSection component.
export interface Persona {
  id: string;
  title: string;
  icon: React.FC<{ className?: string }>;
  description: string;
  benefits: string[];
}

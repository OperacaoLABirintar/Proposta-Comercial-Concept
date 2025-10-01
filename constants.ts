// FIX: Import persona icons and Persona type to define personas constant.
import {
  EducatorIcon,
  FamilyIcon,
  ManagementIcon,
  MarketingIcon,
  PedagogicalIcon,
} from './components/icons/PersonaIcons';
import type { Axe, PricingPlan, Persona } from './types';

export const COLORS = {
  goiaba: '#ff595a',
  laranja: '#ffa400',
  areia: '#f4f0e8',
  chocolate: '#BF917F', // Darker for text
  preto: '#000000',
};

// FIX: Added personas constant to be used by PersonasSection component.
export const personas: Persona[] = [
  {
    id: 'management',
    title: 'Gestão Escolar',
    icon: ManagementIcon,
    description: 'Centralize a gestão do extracurricular, otimizando a operação e garantindo uma oferta alinhada ao projeto pedagógico da escola.',
    benefits: [
      'Visão 360º das atividades e engajamento dos alunos.',
      'Redução da carga operacional na coordenação.',
      'Curadoria de educadores e atividades de alta qualidade.',
      'Relatórios e dashboards para tomada de decisão estratégica.',
    ],
  },
  {
    id: 'pedagogical',
    title: 'Coordenação Pedagógica',
    icon: PedagogicalIcon,
    description: 'Fortaleça o currículo com experiências que desenvolvem habilidades socioemocionais, criativas e motoras de forma integrada e coerente.',
    benefits: [
      'Acompanhamento do desenvolvimento individual dos alunos.',
      'Alinhamento dos eixos pedagógicos com a BNCC.',
      'Formação continuada para os educadores parceiros.',
      'Criação de projetos interdisciplinares e significativos.',
    ],
  },
    {
    id: 'marketing',
    title: 'Marketing e Comunicação',
    icon: MarketingIcon,
    description: 'Encante e engaje as famílias com uma comunicação transparente e profissional, destacando os diferenciais da escola.',
    benefits: [
      'Plataforma de inscrição e comunicação com as famílias.',
      'Material de divulgação profissional (fotos, vídeos, textos).',
      'Criação de eventos e workshops para a comunidade.',
      'Fortalecimento da marca e posicionamento da escola.',
    ],
  },
  {
    id: 'educator',
    title: 'Educador Empreendedor',
    icon: EducatorIcon,
    description: 'Conecte-se a uma rede de escolas e famílias, focando no que você faz de melhor: educar e inspirar através da sua paixão.',
    benefits: [
      'Acesso a uma agenda de aulas em escolas parceiras.',
      'Suporte na gestão financeira e administrativa.',
      'Desenvolvimento profissional e troca com outros educadores.',
      'Visibilidade e reconhecimento do seu trabalho.',
    ],
  },
  {
    id: 'family',
    title: 'Família',
    icon: FamilyIcon,
    description: 'Ofereça aos seus filhos experiências ricas e seguras no ambiente escolar, acompanhando seu desenvolvimento de perto.',
    benefits: [
      'Diversidade de atividades em um só lugar.',
      'Flexibilidade de horários e planos.',
      'Comunicação direta e transparente sobre as atividades.',
      'Certeza de educadores qualificados e um ambiente seguro.',
    ],
  },
];

export const axes: Axe[] = [
  {
    title: 'Quintal Vivo',
    subtitle: 'Brincar Livre e Heurístico',
    details: [
      { title: 'Exploração do Espaço Natural', description: 'Subir em árvores, brincar com terra, areia e pedras; observar insetos, aves e plantas.' },
      { title: 'Objetos Não Estruturados', description: 'Cestos de tesouros, tecidos coloridos, sementes, conchas, galhos e troncos.' },
      { title: 'Culinária Simples ao Ar Livre', description: '"Comidinhas de quintal" e preparo de receitas em fogareiro ou forno de barro.' },
      { title: 'Rituais de Observação', description: 'Roda de escuta do vento, do canto dos pássaros, do som da chuva.' },
      { title: 'Oficinas Sensoriais', description: 'Tintas naturais com urucum, açafrão; massinhas caseiras com farinha e corantes vegetais.' },
    ],
  },
  {
    title: 'Corpo em Movimento',
    subtitle: 'Expressão e Consciência Corporal',
    details: [
      { title: 'Circo', description: 'Acrobacias leves, equilíbrio, malabares com lenços.' },
      { title: 'Práticas Esportivas Lúdicas', description: 'Jogos cooperativos, circuitos motores e brincadeiras com objetos estruturados.' },
      { title: 'Dança e Percussão', description: 'Uso de instrumentos simples e movimentos rítmicos circulares.' },
    ],
  },
  {
    title: 'Cultura e Ritmo',
    subtitle: 'Tradições e Musicalidade',
    details: [
      { title: 'Brincadeiras Musicais', description: 'Valorização de tradições, cantos, ritmos e brincadeiras brasileiras (Ciclos da Cultura Popular/Matrizes Étnicas).' },
    ],
  },
  {
    title: 'Fazeres Manuais',
    subtitle: 'Criatividade e Concentração',
    details: [
      { title: 'Cerâmica', description: 'Modelagem de animais, objetos da natureza e figuras do cotidiano em argila.' },
      { title: 'Pães Artesanais', description: 'Preparo de pães e bolachinhas coletivos, ritual do fazer e compartilhar.' },
    ],
  },
  {
    title: 'Imaginação e Interioridade',
    subtitle: 'Narrativas e Plena Atenção',
    details: [
      { title: 'Contação de Histórias', description: 'Narrativas com fantoches, teatro de sombras, histórias da natureza e da infância.' },
      { title: 'Mindfulness', description: 'Jogos de respiração, atenção plena lúdica, posturas inspiradas em animais.' },
    ],
  },
  {
    title: 'Cidade e Cultura Viva',
    subtitle: 'Território e Memória',
    details: [
      { title: 'Cozinhas e Infâncias', description: 'Preparo de receitas simples ligadas à cultura e memórias familiares.' },
      { title: 'Projeto CidadeVamos', description: 'Passeios curtos pelo entorno, cartografias afetivas, mapeamento de praças e caminhos.' },
    ],
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    frequency: '1x por semana (2h)',
    price: 'R$ 348',
    description: 'Ideal para experimentar e complementar a rotina.',
    features: ['1 atividade semanal', 'Flexibilidade total', 'Acesso à comunidade'],
    isFeatured: false,
  },
  {
    frequency: '2x por semana (4h)',
    price: 'R$ 626',
    description: 'O mais popular para um desenvolvimento equilibrado.',
    features: ['2 atividades semanais', 'Desconto progressivo', 'Acompanhamento pedagógico'],
    isFeatured: false,
  },
  {
    frequency: '3x por semana (6h)',
    price: 'R$ 887',
    description: 'Para uma imersão rica e diversificada.',
    features: ['3 atividades semanais', 'Melhor custo-benefício', 'Prioridade em eventos'],
    isFeatured: false,
  },
  {
    frequency: '4x por semana (8h)',
    price: 'R$ 1113',
    description: 'Mais tempo para explorar e aprofundar os interesses.',
    features: ['4 atividades semanais', 'Imersão ampliada', 'Projetos de longo prazo'],
    isFeatured: false,
  },
  {
    frequency: '5x por semana (10h)',
    price: 'R$ 1392',
    description: 'A experiência integral completa, todos os dias.',
    features: ['5 atividades semanais', 'Imersão total', 'Portfólio individualizado'],
    isFeatured: false,
  },
];
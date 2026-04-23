import type { HubApp, AppCategoryDef } from '../types/app';

export const appCategories: AppCategoryDef[] = [
  {
    id: 'laboratorio',
    label: 'Sistemas de Laboratorio',
    description: 'Plataformas para gestión clínica y diagnóstica',
    iconName: 'Microscope',
    color: 'green',
  },
  {
    id: 'administrativo',
    label: 'Sistemas Administrativos',
    description: 'Herramientas de gestión, facturación y operaciones',
    iconName: 'BarChart2',
    color: 'blue',
  },
  {
    id: 'especial',
    label: 'Proyectos Especiales',
    description: 'Iniciativas estratégicas e innovación institucional',
    iconName: 'Sparkles',
    color: 'violet',
  },
];

export const hubApps: HubApp[] = [
  // Sistemas de Laboratorio
  {
    title: 'Pathsys',
    description: 'Gestión integral para procesos de patología y diagnóstico especializado.',
    iconName: 'Microscope',
    href: 'https://lime-pathsys-frontend.onrender.com/login',
    accent: 'brand',
    badge: 'Disponible',
    category: 'laboratorio',
  },
  {
    title: 'Dermopat',
    description: 'Gestión clínica y diagnóstica para estudios de dermatopatología.',
    iconName: 'Stethoscope',
    href: 'http://localhost:3000/',
    accent: 'brand',
    badge: 'Disponible',
    category: 'laboratorio',
  },
  {
    title: 'Enterprises',
    description: 'Gestión empresarial y administración de entidades vinculadas al laboratorio.',
    iconName: 'Building2',
    href: '#',
    accent: 'brand',
    badge: 'Próximamente',
    category: 'laboratorio',
  },

  // Sistemas Administrativos
  {
    title: 'Biotech',
    description: 'Administración de muestras y flujos de trabajo para laboratorios especializados.',
    iconName: 'Activity',
    href: '#',
    accent: 'secondary',
    badge: 'Próximamente',
    category: 'administrativo',
  },
  {
    title: 'Billmed',
    description: 'Facturación y gestión financiera de los servicios del laboratorio.',
    iconName: 'Receipt',
    href: '#',
    accent: 'secondary',
    badge: 'Próximamente',
    category: 'administrativo',
  },
  {
    title: 'Calendary',
    description: 'Agendamiento y gestión de citas para los servicios del laboratorio.',
    iconName: 'Calendar',
    href: '#',
    accent: 'secondary',
    badge: 'Próximamente',
    category: 'administrativo',
  },
  {
    title: 'LivingLab',
    description: 'Espacio de innovación y experimentación para el desarrollo de soluciones en salud.',
    iconName: 'Video',
    href: '#',
    accent: 'secondary',
    badge: 'Próximamente',
    category: 'administrativo',
  },

  // Proyectos Especiales
  {
    title: 'Symphony',
    description: 'Plataforma central de orquestación y gestión integrada de los módulos del laboratorio.',
    iconName: 'Database',
    href: '#',
    accent: 'brand',
    badge: 'Próximamente',
    category: 'especial',
  },
  {
    title: 'PDET',
    description: 'Gestión y seguimiento de iniciativas estratégicas en territorios priorizados.',
    iconName: 'Map',
    href: '#',
    accent: 'brand',
    badge: 'Próximamente',
    category: 'especial',
  },
  {
    title: 'ContigoAntioquia',
    description: 'Seguimiento y vigilancia del estado de salud de la población en Antioquia.',
    iconName: 'HeartHandshake',
    href: 'http://localhost:3001/',
    accent: 'brand',
    badge: 'Disponible',
    category: 'especial',
  },
];

export const getAppsByCategory = (categoryId: string) =>
  hubApps.filter((app) => app.category === categoryId);

import type { HubApp } from '../types/app';

export const hubApps: HubApp[] = [
  {
    title: 'Pathsys',
    description: 'Gestión integral para procesos de patología y diagnóstico especializado.',
    iconName: 'Microscope',
    href: 'https://lime-pathsys-frontend.onrender.com/login',
    accent: 'brand',
    badge: 'Disponible',
  },
  {
    title: 'Dermopat',
    description: 'Gestión clínica y diagnóstica para estudios de dermatopatología.',
    iconName: 'Stethoscope',
    href: 'http://localhost:3000/',
    accent: 'secondary',
    badge: 'Disponible',
  },
  {
    title: 'ContigoAntioquia',
    description: 'Seguimiento y vigilancia del estado de salud de la población en todo el departamento de Antioquia.',
    iconName: 'HeartHandshake',
    href: 'http://localhost:3001/',
    accent: 'brand',
    badge: 'Disponible',
  },
  {
    title: 'Entreprises',
    description: 'Administración de muestras y flujos de trabajo para laboratorios especializados.',
    iconName: 'Dna',
    href: '#',
    accent: 'brand',
    badge: 'Próximamente',
  },
  {
    title: 'EquipControl',
    description: 'Control de equipos biomédicos, mantenimiento y trazabilidad documental.',
    iconName: 'Monitor',
    href: '#',
    accent: 'secondary',
    badge: 'Próximamente',
  },
  {
    title: 'PEDT',
    description: 'Gestión y seguimiento de iniciativas estratégicas en territorios priorizados.',
    iconName: 'Map',
    href: '#',
    accent: 'secondary',
    badge: 'Próximamente',
  },
];

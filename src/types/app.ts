export type AppAccent = 'brand' | 'secondary';
export type AppBadge = 'Disponible' | 'Próximamente';
export type AppCategory = 'laboratorio' | 'administrativo' | 'especial';

export interface HubApp {
  title: string;
  description: string;
  iconName: string;
  href: string;
  accent: AppAccent;
  badge: AppBadge;
  category: AppCategory;
}

export interface AppCategoryDef {
  id: AppCategory;
  label: string;
  description: string;
  iconName: string;
  color: 'green' | 'blue' | 'violet';
}

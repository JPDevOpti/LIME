export type AppAccent = 'brand' | 'secondary';
export type AppBadge = 'Disponible' | 'Próximamente';

export interface HubApp {
  title: string;
  description: string;
  iconName: string;
  href: string;
  accent: AppAccent;
  badge: AppBadge;
}

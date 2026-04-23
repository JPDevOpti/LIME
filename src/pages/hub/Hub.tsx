import {
  Microscope,
  Stethoscope,
  Map,
  HeartHandshake,
  ArrowRight,
  Lock,
  Calendar,
  Activity,
  Database,
  Building2,
  Receipt,
  Video,
  BarChart2,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { hubApps, appCategories, getAppsByCategory } from '../../data/apps';
import type { HubApp, AppCategoryDef } from '../../types/app';

const iconComponents: Record<string, React.ElementType> = {
  Microscope,
  Stethoscope,
  Map,
  HeartHandshake,
  Calendar,
  Activity,
  Database,
  Building2,
  Receipt,
  Video,
  BarChart2,
  Sparkles,
};

// Color schemes per category
const categoryStyles = {
  green: {
    header: 'text-emerald-300',
    headerBorder: 'border-emerald-500/30',
    headerBg: 'bg-emerald-500/10',
    iconBg: 'bg-emerald-500/20 text-emerald-300',
    divider: 'bg-gradient-to-r from-emerald-500/50 to-transparent',
    cardIcon: 'from-emerald-600 to-teal-500',
    cardAccent: 'hover:border-emerald-400/40 hover:shadow-2xl hover:shadow-emerald-500/10',
    cardAction: 'text-emerald-600',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    accentBar: 'from-emerald-500 to-teal-400',
  },
  blue: {
    header: 'text-sky-300',
    headerBorder: 'border-sky-500/30',
    headerBg: 'bg-sky-500/10',
    iconBg: 'bg-sky-500/20 text-sky-300',
    divider: 'bg-gradient-to-r from-sky-500/50 to-transparent',
    cardIcon: 'from-secondary-600 to-sky-500',
    cardAccent: 'hover:border-sky-400/40 hover:shadow-2xl hover:shadow-sky-500/10',
    cardAction: 'text-secondary-600',
    badge: 'bg-sky-50 text-sky-700 border-sky-200',
    accentBar: 'from-secondary-500 to-sky-400',
  },
  violet: {
    header: 'text-violet-300',
    headerBorder: 'border-violet-500/30',
    headerBg: 'bg-violet-500/10',
    iconBg: 'bg-violet-500/20 text-violet-300',
    divider: 'bg-gradient-to-r from-violet-500/50 to-transparent',
    cardIcon: 'from-violet-600 to-indigo-500',
    cardAccent: 'hover:border-violet-400/40 hover:shadow-2xl hover:shadow-violet-500/10',
    cardAction: 'text-violet-600',
    badge: 'bg-violet-50 text-violet-700 border-violet-200',
    accentBar: 'from-violet-500 to-indigo-400',
  },
};

const unavailableCard = {
  cardIcon: 'from-slate-400 to-slate-500',
  badge: 'bg-slate-100 text-slate-500 border-slate-200',
  accentBar: 'from-slate-300 to-slate-400',
};

function AppCard({ app, color }: { app: HubApp; color: 'green' | 'blue' | 'violet' }) {
  const isAvailable = app.badge === 'Disponible';
  const isInternal = app.href.startsWith('/');
  const Icon = iconComponents[app.iconName];
  const scheme = categoryStyles[color];

  const iconGradient = isAvailable ? scheme.cardIcon : unavailableCard.cardIcon;
  const badgeCls = isAvailable ? scheme.badge : unavailableCard.badge;
  const accentBar = isAvailable ? scheme.accentBar : unavailableCard.accentBar;

  const inner = (
    <>
      <div className={`absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl bg-gradient-to-r ${accentBar}`} />

      <div className="flex items-start justify-between">
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${iconGradient} text-white shadow-md`}>
          <Icon className="h-5 w-5" />
        </div>
        <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${badgeCls}`}>
          {!isAvailable && <Lock className="h-2.5 w-2.5" />}
          {app.badge}
        </span>
      </div>

      <div className="mt-4 flex-1">
        <h3 className="text-[14px] font-bold text-slate-900 leading-snug">{app.title}</h3>
        <p className="mt-1.5 text-[12px] leading-relaxed text-slate-500">{app.description}</p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100">
        {isAvailable ? (
          <span className={`inline-flex items-center gap-1.5 text-[12px] font-semibold ${scheme.cardAction}`}>
            Abrir aplicación
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        ) : (
          <span className="text-[11px] font-medium text-slate-400">Disponible próximamente</span>
        )}
      </div>
    </>
  );

  const base = 'group relative flex min-h-[190px] flex-col rounded-2xl border border-slate-200/80 bg-white p-5 transition-all duration-300 overflow-hidden';
  const availableCls = `cursor-pointer hover:-translate-y-1 hover:shadow-xl ${scheme.cardAccent}`;
  const disabledCls = 'cursor-default';

  if (!isAvailable) {
    return <div className={`${base} ${disabledCls}`} aria-disabled="true">{inner}</div>;
  }
  if (isInternal) {
    return <Link to={app.href} className={`${base} ${availableCls}`}>{inner}</Link>;
  }
  return <a href={app.href} target="_blank" rel="noopener noreferrer" className={`${base} ${availableCls}`}>{inner}</a>;
}

function CategorySection({ category }: { category: AppCategoryDef }) {
  const apps = getAppsByCategory(category.id);
  const styles = categoryStyles[category.color];
  const Icon = iconComponents[category.iconName];
  const available = apps.filter((a) => a.badge === 'Disponible').length;

  return (
    <section className="mb-10">
      {/* Category header */}
      <div className={`mb-4 flex items-center gap-3 rounded-xl border ${styles.headerBorder} ${styles.headerBg} px-4 py-3`}>
        <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${styles.iconBg}`}>
          <Icon className="h-4 w-4" />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className={`text-sm font-bold tracking-wide ${styles.header}`}>{category.label}</h2>
          <p className="text-[11px] text-white/40 mt-0.5">{category.description}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[11px] text-white/40">{apps.length} apps</span>
          {available > 0 && (
            <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold ${styles.badge}`}>
              {available} activa{available > 1 ? 's' : ''}
            </span>
          )}
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {apps.map((app) => (
          <AppCard key={app.title} app={app} color={category.color} />
        ))}
      </div>
    </section>
  );
}

export function Hub() {
  const totalAvailable = hubApps.filter((a) => a.badge === 'Disponible').length;

  return (
    <div className="relative flex min-h-screen flex-col font-sans">
      <img
        src="/Images/ImagenLaboratorio.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-20 h-full w-full object-cover blur-sm scale-105"
      />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-br from-brand-900/90 via-emerald-950/85 to-brand-900/90" />

      <Header />

      {/* Page header */}
      <section className="relative z-10 px-5 pt-12 pb-8 text-center sm:pt-16 lg:px-8">
<h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Nuestras aplicaciones
        </h1>
        <p className="mx-auto mt-2 max-w-md text-sm text-white/50">
          {totalAvailable} aplicación{totalAvailable !== 1 ? 'es' : ''} disponible{totalAvailable !== 1 ? 's' : ''} · {hubApps.length} en total
        </p>
      </section>

      {/* Categorized content */}
      <main className="relative z-10 mx-auto w-full max-w-6xl flex-1 px-5 pb-16 sm:px-8">
        {appCategories.map((cat) => (
          <CategorySection key={cat.id} category={cat} />
        ))}
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

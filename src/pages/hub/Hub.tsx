import {
  Microscope,
  Dna,
  Stethoscope,
  Monitor,
  Map,
  Layers,
  HeartHandshake,
  ArrowRight,
  Lock,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { hubApps } from '../../data/apps';
import type { HubApp } from '../../types/app';

const iconComponents: Record<string, React.ElementType> = {
  Microscope,
  Dna,
  Stethoscope,
  Monitor,
  Map,
  Layers,
  HeartHandshake,
};

function AppCard({ app }: { app: HubApp }) {
  const isAvailable = app.badge === 'Disponible';
  const isInternal = app.href.startsWith('/');
  const Icon = iconComponents[app.iconName];

  const badgeCls = isAvailable
    ? 'border-brand-200 bg-brand-50 text-brand-700'
    : 'border-secondary-100 bg-secondary-50/70 text-secondary-600';

  const actionCls = 'text-brand-700 group-hover:text-brand-800';

  const iconWrapCls = isAvailable
    ? 'bg-gradient-to-br from-brand-600 to-emerald-600 shadow-brand-600/25'
    : 'bg-gradient-to-br from-secondary-600 to-secondary-500 shadow-secondary-600/25';

  const inner = (
    <>
      <div className="flex items-start justify-between">
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-lg ${iconWrapCls}`}>
          <Icon className="h-5 w-5" />
        </div>
        <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${badgeCls}`}>
          {!isAvailable && <Lock className="h-2.5 w-2.5" />}
          {app.badge}
        </span>
      </div>

      <div className="mt-auto pt-6">
        <h3 className="text-lg font-bold text-slate-900 transition-colors">{app.title}</h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600">{app.description}</p>
      </div>

      {isAvailable ? (
        <div className={`mt-5 flex items-center gap-2 text-sm font-semibold transition-colors ${actionCls}`}>
          Abrir
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      ) : (
        <div className="mt-5 h-5" />
      )}
    </>
  );

  const base = 'group relative flex min-h-[220px] flex-col rounded-2xl border p-5 transition-all duration-300';
  const glassAvailable = 'border-slate-200 bg-white hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-2xl hover:shadow-emerald-500/10';
  const glassDisabled = 'border-slate-200 bg-white cursor-default';

  if (!isAvailable) {
    return (
      <div className={`${base} ${glassDisabled}`} aria-disabled="true">
        {inner}
      </div>
    );
  }

  if (isInternal) {
    return <Link to={app.href} className={`${base} ${glassAvailable}`}>{inner}</Link>;
  }

  return <a href={app.href} className={`${base} ${glassAvailable}`}>{inner}</a>;
}

export function Hub() {
  return (
    <div className="relative flex min-h-screen flex-col font-sans">
      <img
        src="/Images/ImagenLaboratorio.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-br from-brand-900/90 via-emerald-950/85 to-brand-900/90" />

      <Header />

      <section className="relative z-10 px-6 pt-14 pb-6 text-center sm:pt-20 sm:pb-8 lg:px-8">
        <h1 className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
          Nuestras aplicaciones
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
          Accede a cada módulo del laboratorio desde un solo lugar.
        </p>
      </section>

      <main className="relative z-10 mx-auto w-full max-w-6xl flex-1 px-5 pb-28 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hubApps.map((app) => (
            <AppCard key={app.title} app={app} />
          ))}
        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

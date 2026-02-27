import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { LaboratoryService } from '../../../types/service';

interface ServiceHeroProps {
  service: LaboratoryService;
  icon: JSX.Element;
}

export function ServiceHero({ service, icon }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-16 sm:py-20">
      <div className="absolute inset-0">
        <img
          src="/Images/ImagenLaboratorio.jpg"
          alt={service.title}
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/70 via-brand-900/85 to-brand-900" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-brand-200 hover:text-white transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          Volver al inicio
        </Link>

        <div className="mt-6 flex items-center gap-4 text-white">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20">
            {icon}
          </div>
          <div>
            <p className="text-sm uppercase tracking-wider text-brand-200">Servicio de laboratorio</p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{service.title}</h1>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-slate-200 leading-7">{service.overview}</p>
      </div>
    </section>
  );
}

import { Microscope, FlaskConical, Activity, TestTube, Dna, Wind, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { laboratoryServices } from '../../../data/services';

const iconBySlug: Record<string, JSX.Element> = {
  patologia: <Microscope className="h-7 w-7" />,
  hematologia: <FlaskConical className="h-7 w-7" />,
  'citometria-de-flujo': <Activity className="h-7 w-7" />,
  farmacologia: <TestTube className="h-7 w-7" />,
  toxicologia: <FlaskConical className="h-7 w-7" />,
  genetica: <Dna className="h-7 w-7" />,
  cedir: <Wind className="h-7 w-7" />
};

const accentBySlug: Record<string, string> = {
  patologia: 'from-brand-600 to-brand-700',
  hematologia: 'from-secondary-600 to-secondary-700',
  'citometria-de-flujo': 'from-brand-600 to-brand-700',
  farmacologia: 'from-secondary-600 to-secondary-700',
  toxicologia: 'from-brand-600 to-brand-700',
  genetica: 'from-secondary-600 to-secondary-700',
  cedir: 'from-brand-600 to-brand-700'
};

export function ServicesGrid() {
  return (
    <section id="servicios" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-brand-50/50 blur-3xl opacity-50 rounded-full" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700 ring-1 ring-inset ring-brand-700/10 mb-6">
            Nuestros servicios
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl leading-[1.1]">
            <span className="bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-transparent">
              Oferta integral
            </span>
            <br />
            de laboratorio especializado
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
            Brindamos una amplia gama de servicios de laboratorio orientados a la 
            <span className="font-semibold text-slate-900"> medicina personalizada y de precisión</span>.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {laboratoryServices.map((service) => (
            <Link
              key={service.title}
              to={`/servicios/${service.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-slate-300/80 bg-slate-100/90 p-6 transition-all hover:bg-brand-50/80 hover:shadow-lg hover:-translate-y-1"
            >
              <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${accentBySlug[service.slug]} opacity-0 transition-opacity group-hover:opacity-100`} />
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${accentBySlug[service.slug]} text-white shadow-sm`}>
                {iconBySlug[service.slug]}
              </div>
              <h3 className="font-bold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{service.shortDescription}</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-600">
                Ver detalle
                <ChevronRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

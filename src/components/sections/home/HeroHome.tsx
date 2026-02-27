import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HeroHome() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-900">
      <div className="absolute inset-0">
        <img
          src="/Images/ImagenLaboratorio.jpg"
          alt="Laboratorio LIME"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/50 via-brand-900/70 to-brand-900/90" />
      </div>

      <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-brand-600/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-secondary-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1920px] px-2 pt-14 pb-24 sm:px-4 sm:pt-20 sm:pb-32 lg:px-6">
        <div className="mx-auto max-w-[1400px] text-center">
          <h1 className="text-[clamp(2rem,5.2vw,5.8rem)] font-bold tracking-tight text-white leading-[1.04]">
            <span className="bg-gradient-to-r from-brand-200 to-brand-300 bg-clip-text text-transparent">
              Laboratorio Integrado de Medicina Especializada
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl max-w-2xl mx-auto">
            Prestador de servicios de medicina personalizada o de precisión,
            que integra la investigación clínica y biomédica para garantizar
            que cada paciente tenga el tratamiento adecuado.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-900/40 transition-all hover:bg-brand-500 hover:shadow-xl hover:-translate-y-0.5"
            >
              Conocer servicios
              <ChevronRight className="h-4 w-4" />
            </a>
            <Link
              to="/resultados"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-7 py-3.5 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur-sm transition-all hover:bg-white/20 hover:-translate-y-0.5"
            >
              Mis resultados
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L60 68.7C120 57 240 35 360 28.3C480 22 600 30 720 38.3C840 47 960 55 1080 51.7C1200 48 1320 33 1380 25.3L1440 18V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="#f8fafc"/>
        </svg>
      </div>
    </section>
  );
}

import { ArrowRight, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutHome() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">Quiénes somos</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              ¿Qué es LIME y en qué consiste?
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              LIME es un laboratorio orientado a la medicina de precisión. Su enfoque
              integra la atención, el diagnóstico especializado y la investigación
              biomédica para apoyar decisiones clínicas personalizadas en beneficio
              de los pacientes.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Articulado con la Universidad de Antioquia y el Hospital Alma Máter,
              LIME reúne capacidades científicas y tecnológicas de última generación
              para ofrecer servicios de laboratorio de alta complejidad con un
              enfoque centrado en el ser humano.
            </p>
            <Link
              to="/hub"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
            >
              Explorar nuestras aplicaciones
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/Images/Resonador.png"
                alt="Equipo de diagnóstico por imagen del laboratorio"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-5 shadow-lg ring-1 ring-slate-100">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-brand-50 p-2.5">
                  <Building2 className="h-6 w-6 text-brand-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">7+</p>
                  <p className="text-xs text-slate-500">Áreas especializadas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

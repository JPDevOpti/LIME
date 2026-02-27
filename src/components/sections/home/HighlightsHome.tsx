import { Stethoscope, Shield, Users } from 'lucide-react';

const highlights = [
  {
    icon: <Stethoscope className="h-8 w-8" />,
    title: 'Medicina de precisión',
    description: 'Tratamientos diseñados a la medida de cada paciente gracias a la investigación clínica y biomédica.'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Respaldo académico',
    description: 'Articulados con la Universidad de Antioquia y el Hospital Alma Máter para garantizar excelencia.'
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Equipo multidisciplinario',
    description: 'Profesionales especializados comprometidos con el bienestar y la salud de nuestros pacientes.'
  }
];

export function HighlightsHome() {
  return (
    <section className="relative -mt-1 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3 -mt-10 relative z-10">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-slate-200/80 bg-white p-7 shadow-md transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 transition-colors group-hover:from-brand-600 group-hover:to-brand-700 group-hover:text-white">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Video, HeartHandshake, Map, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const initiatives = [
  {
    icon: <Video className="h-7 w-7" />,
    tag: 'Primer hospital digital de América Latina',
    title: 'Living Lab Telesalud',
    description:
      'Ecosistema de innovación abierta de la Facultad de Medicina de la UdeA que combina tecnología y salud. Presta servicios de telemedicina 24/7 en diversas especialidades, permitiendo que personas en zonas remotas — como el Chocó o San Andrés — reciban atención especializada sin desplazarse a Medellín.',
    features: [
      'Telemedicina 24/7 en múltiples especialidades',
      'Analítica de datos en salud',
      'Teleasistencia domiciliaria',
    ],
    accent: 'violet' as const,
    href: '/app-hub',
    cta: 'Acceder a LivingLab',
  },
  {
    icon: <HeartHandshake className="h-7 w-7" />,
    tag: 'Estrategia territorial',
    title: 'Contigo Antioquia',
    description:
      'Iniciativa de Telesalud liderada por la Gobernación de Antioquia en alianza con la UdeA. Conecta a médicos generales de los municipios con especialistas de la ciudad en tiempo real para evitar remisiones innecesarias a Medellín, reducir gastos de bolsillo y fortalecer los hospitales de primer nivel.',
    features: [
      'Respaldo especializado en tiempo real',
      'Cobertura en hospitales municipales',
      'Reducción de remisiones innecesarias',
    ],
    accent: 'green' as const,
    href: '/app-hub',
    cta: 'Acceder a Contigo Antioquia',
  },
  {
    icon: <Map className="h-7 w-7" />,
    tag: 'Posconflicto y desarrollo rural',
    title: 'Proyecto PDET',
    description:
      'Los Programas de Desarrollo con Enfoque Territorial son instrumentos del Acuerdo de Paz para transformar los municipios más afectados por el conflicto y la pobreza. La UdeA participa activamente en subregiones PDET de Antioquia —Urabá, Bajo Cauca y Norte— llevando proyectos de salud, educación y desarrollo rural.',
    features: [
      'Cierre de brechas campo–ciudad',
      'Salud rural y reactivación económica',
      'Iniciativas priorizadas por las comunidades',
    ],
    accent: 'amber' as const,
    href: '/app-hub',
    cta: 'Acceder al módulo PDET',
  },
];

const accentStyles = {
  violet: {
    tag: 'bg-violet-50 text-violet-700 ring-violet-200',
    icon: 'from-violet-600 to-indigo-500',
    bar: 'bg-gradient-to-r from-violet-500 to-indigo-400',
    dot: 'bg-violet-400',
    feature: 'text-slate-600',
    cta: 'text-violet-700 hover:text-violet-900',
  },
  green: {
    tag: 'bg-brand-50 text-brand-700 ring-brand-200',
    icon: 'from-brand-600 to-emerald-500',
    bar: 'bg-gradient-to-r from-brand-500 to-emerald-400',
    dot: 'bg-brand-400',
    feature: 'text-slate-600',
    cta: 'text-brand-700 hover:text-brand-900',
  },
  amber: {
    tag: 'bg-amber-50 text-amber-700 ring-amber-200',
    icon: 'from-amber-500 to-orange-500',
    bar: 'bg-gradient-to-r from-amber-400 to-orange-400',
    dot: 'bg-amber-400',
    feature: 'text-slate-600',
    cta: 'text-amber-700 hover:text-amber-900',
  },
};

export function InitiativesSection() {
  return (
    <section className="relative bg-[#012345]">
      {/* Top wave — white shape overlapping from ServicesGrid */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 0H1440V18L1380 25.3C1320 33 1200 48 1080 51.7C960 55 840 47 720 38.3C600 30 480 22 360 28.3C240 35 120 57 60 68.7L0 80V0Z" fill="white"/>
        </svg>
      </div>

      <div className="py-24 sm:py-32">
        {/* Glow blobs */}
        <div className="absolute top-1/4 left-0 h-96 w-96 rounded-full bg-violet-600/8 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-brand-600/8 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white/70 ring-1 ring-inset ring-white/20 mb-6">
              Proyectos e iniciativas
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl leading-[1.1]">
              Innovación con{' '}
              <span className="bg-gradient-to-r from-brand-300 to-emerald-300 bg-clip-text text-transparent">
                impacto territorial
              </span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/50">
              Desde el primer hospital digital de América Latina hasta programas de desarrollo en territorios de posconflicto, el ecosistema LIME conecta la ciencia con las comunidades que más lo necesitan.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-6 lg:grid-cols-3">
            {initiatives.map((item) => {
              const s = accentStyles[item.accent];
              return (
                <article
                  key={item.title}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  {/* Top accent bar */}
                  <div className={`h-1 w-full ${s.bar}`} />

                  <div className="flex flex-1 flex-col p-7">
                    {/* Tag */}
                    <span className={`inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold ring-1 ring-inset mb-5 ${s.tag}`}>
                      {item.tag}
                    </span>

                    {/* Icon + Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${s.icon} text-white shadow-md`}>
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-[13.5px] leading-relaxed text-slate-500 flex-1">
                      {item.description}
                    </p>

                    {/* Features */}
                    <ul className="mt-5 space-y-1.5 border-t border-slate-100 pt-4">
                      {item.features.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <span className={`inline-block h-1.5 w-1.5 shrink-0 rounded-full ${s.dot}`} />
                          <span className={`text-[12px] font-medium ${s.feature}`}>{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      to={item.href}
                      className={`mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold transition-colors ${s.cta}`}
                    >
                      {item.cta}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom wave — blends into slate-50 (ContactSection bg) */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 80L60 68.7C120 57 240 35 360 28.3C480 22 600 30 720 38.3C840 47 960 55 1080 51.7C1200 48 1320 33 1380 25.3L1440 18V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="#f8fafc"/>
        </svg>
      </div>
    </section>
  );
}

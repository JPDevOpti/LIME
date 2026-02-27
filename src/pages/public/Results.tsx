import { Microscope, FlaskConical, Activity, TestTube, Dna, Wind, ExternalLink, Stethoscope } from 'lucide-react';
import { PageWrapper } from '../../components/layout/PageWrapper';

interface LabResultLink {
  slug: string;
  title: string;
  description: string;
  icon: JSX.Element;
  portalUrl: string | null;
  contactEmail: string;
}

const labResultLinks: LabResultLink[] = [
  {
    slug: 'patologia',
    title: 'Patología',
    description: 'Resultados de biopsias, citologías y estudios histopatológicos.',
    icon: <Microscope className="h-6 w-6" />,
    portalUrl: 'https://lime-pathsys-frontend.onrender.com/login',
    contactEmail: 'vanessa.santiago@udea.edu.co',
  },
  {
    slug: 'dermatopatologia',
    title: 'Dermatopatología',
    description: 'Resultados de estudios histopatológicos de piel y tejidos dérmicos.',
    icon: <Stethoscope className="h-6 w-6" />,
    portalUrl: 'http://localhost:3000/',
    contactEmail: 'lime@udea.edu.co',
  },
  {
    slug: 'hematologia',
    title: 'Hematología',
    description: 'Hemogramas, perfiles de coagulación y estudios hematológicos.',
    icon: <FlaskConical className="h-6 w-6" />,
    portalUrl: null,
    contactEmail: 'lime@udea.edu.co',
  },
  {
    slug: 'citometria-de-flujo',
    title: 'Citometría de flujo',
    description: 'Reportes de inmunofenotipificación y análisis de poblaciones celulares.',
    icon: <Activity className="h-6 w-6" />,
    portalUrl: null,
    contactEmail: 'lime@udea.edu.co',
  },
  {
    slug: 'farmacologia',
    title: 'Farmacología',
    description: 'Monitorización de niveles plasmáticos y perfiles farmacológicos.',
    icon: <TestTube className="h-6 w-6" />,
    portalUrl: null,
    contactEmail: 'lime@udea.edu.co',
  },
  {
    slug: 'toxicologia',
    title: 'Toxicología',
    description: 'Tamizajes toxicológicos y confirmaciones de sustancias.',
    icon: <FlaskConical className="h-6 w-6" />,
    portalUrl: null,
    contactEmail: 'lime@udea.edu.co',
  },
  {
    slug: 'genetica',
    title: 'Genética',
    description: 'Pruebas genéticas moleculares y paneles dirigidos.',
    icon: <Dna className="h-6 w-6" />,
    portalUrl: null,
    contactEmail: 'lime@udea.edu.co',
  },
  {
    slug: 'cedir',
    title: 'CEDIR',
    description: 'Resultados de pruebas de infecciones respiratorias.',
    icon: <Wind className="h-6 w-6" />,
    portalUrl: null,
    contactEmail: 'lime@udea.edu.co',
  },
];

export function Results() {
  return (
    <PageWrapper>
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
            <h1 className="text-[clamp(2rem,4vw,4.5rem)] font-bold tracking-tight text-white leading-[1.04]">
              <span className="bg-gradient-to-r from-brand-200 to-brand-300 bg-clip-text text-transparent">
                Consulta de resultados
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl max-w-2xl mx-auto">
              Accede a los resultados de tus exámenes a través de los portales de cada área de laboratorio.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 68.7C120 57 240 35 360 28.3C480 22 600 30 720 38.3C840 47 960 55 1080 51.7C1200 48 1320 33 1380 25.3L1440 18V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="#f8fafc"/>
          </svg>
        </div>
      </section>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 pb-16 pt-8 lg:px-8 -mt-2">
        <div className="grid gap-4 sm:grid-cols-2">
          {labResultLinks.map((lab) => (
            <div
              key={lab.slug}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    {lab.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{lab.title}</h3>
                    <p className="mt-0.5 text-xs text-slate-500">{lab.description}</p>
                  </div>
                </div>

                {lab.portalUrl ? (
                  <span className="flex-shrink-0 rounded-full border border-brand-200 bg-brand-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-700">
                    Disponible
                  </span>
                ) : (
                  <span className="flex-shrink-0 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Por correo
                  </span>
                )}
              </div>

              <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                {lab.portalUrl ? (
                  <a
                    href={lab.portalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                  >
                    Ver resultados
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : (
                  <a
                    href={`mailto:${lab.contactEmail}?subject=Solicitud de resultados - ${lab.title}`}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
                  >
                    Solicitar por correo
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </PageWrapper>
  );
}

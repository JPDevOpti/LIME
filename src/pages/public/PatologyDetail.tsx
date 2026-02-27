import {
  Microscope,
  ChevronLeft,
  CircleDollarSign,
  Mail,
  User,
  Calendar,
  Award,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageWrapper } from '../../components/layout/PageWrapper';

export function PatologyDetail() {
  return (
    <PageWrapper>
      <div className="relative bg-brand-900 py-10 sm:py-14">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/Images/ImagenLaboratorio.jpg"
            alt="Pathology Lab"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-200 hover:text-white transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Volver al inicio
          </Link>

          <div className="mt-4 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Departamento de Patología
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              80 años de labores ininterrumpidas y de aportes a la formación, la investigación y la atención integral de pacientes.
            </p>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8 flex-1">
        <div className="mb-16 -mt-24 relative z-10 bg-white rounded-xl shadow-xl p-8 border border-slate-100">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Información de Contacto</h2>
              <div className="mt-4 flex items-center gap-3 text-slate-600">
                <User className="h-5 w-5 text-brand-600" />
                <span className="font-medium">Jefe: Vanessa Santiago Pacheco</span>
              </div>
              <div className="mt-2 flex items-center gap-3 text-slate-600">
                <Mail className="h-5 w-5 text-brand-600" />
                <a href="mailto:vanessa.santiago@udea.edu.co" className="hover:text-brand-700 transition-colors">
                  vanessa.santiago@udea.edu.co
                </a>
              </div>
            </div>
            <div className="bg-brand-50 px-6 py-4 rounded-lg border border-brand-100">
              <div className="text-brand-800 font-semibold">Estadísticas Históricas</div>
              <div className="mt-2 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-2xl font-bold text-brand-600">+15.000</div>
                  <div className="text-xs text-brand-700">Necropsias</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-brand-600">+650.000</div>
                  <div className="text-xs text-brand-700">Especímenes Quirúrgicos</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="h-6 w-6 text-brand-600" />
                <h2 className="text-3xl font-bold text-slate-900">Nuestra Historia</h2>
              </div>
              <div className="prose prose-slate max-w-none text-slate-600">
                <p>
                  El 5 de febrero de 1944, gracias a las gestiones del profesor <strong>Alfredo Correa Henao</strong>, comenzó la historia de esta disciplina en nuestra Facultad. El docente inició toda una carrera de aportes a la medicina local e internacional con la presentación de la primera conferencia de Patología Clínica (C.P.C.) en la Universidad de Antioquia el 24 de febrero de ese mismo año.
                </p>
                <p className="mt-4">
                  Hablar del Departamento de Patología es hablar de su fundador, el doctor Alfredo Correa Henao, una de las máximas figuras médicas de la región y el país. Fue él quien introdujo a Colombia las conferencias de patología clínica (CPC), un ejercicio didáctico fundamental para la correlación clínico-patológica.
                </p>
                <p className="mt-4">
                  En 1951, se consolidó la construcción del Instituto de Patología, gracias a un comodato por 99 años entregado por el Hospital Universitario San Vicente de Paúl. Esta edificación, ubicada en el Bloque 13 del Hospital San Vicente Fundación Medellín, permanece como testigo de nuestra historia.
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="h-6 w-6 text-brand-600" />
                <h2 className="text-3xl font-bold text-slate-900">Formación y Docencia</h2>
              </div>
              <div className="rounded-xl bg-slate-50 p-6 border border-slate-200">
                <p className="text-slate-600 mb-4">
                  Durante ocho décadas, este Departamento ha sido un pilar en la educación de estudiantes del pregrado de Medicina. Desde 1956, a través de la Especialización en Patología, ha liderado la formación de más de 130 especialistas de la región y el país.
                </p>
                <div className="flex items-start gap-4 mt-6 bg-white p-4 rounded-lg shadow-sm">
                  <Award className="h-8 w-8 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900">Acreditación de Alta Calidad</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      En 2023, el posgrado recibió la Acreditación en Alta Calidad otorgada por el Ministerio de Educación Nacional por un término de seis años.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Microscope className="h-6 w-6 text-brand-600" />
                <h2 className="text-3xl font-bold text-slate-900">Hitos y Logros</h2>
              </div>
              <div className="prose prose-slate max-w-none text-slate-600">
                <p>
                  Uno de los grandes logros fue la puesta en marcha del <strong>laboratorio de inmunohistoquímica</strong> en 1984, uno de los primeros de su tipo en el país. Liderado por la bacterióloga Beatriz Eugenia Vieco Duran y con el apoyo del doctor Walter León, este laboratorio permitió identificar la estirpe celular de tejidos y neoplasias, revolucionando el diagnóstico y tratamiento de pacientes.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Retos y Futuro</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <h3 className="font-bold text-brand-700 mb-2">Renovación Tecnológica</h3>
                  <p className="text-sm text-slate-600">Modernización necesaria para estar a la altura de los laboratorios de mayor prestigio y capacidad técnica del mundo.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <h3 className="font-bold text-brand-700 mb-2">Articulación LIME</h3>
                  <p className="text-sm text-slate-600">Integración y fortalecimiento con el Laboratorio Integrado de Medicina Especializada.</p>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-5">
            <img
              src="/Images/patologia.jpg"
              alt="Instituto de Patología - Universidad de Antioquia"
              className="w-full rounded-xl object-cover shadow-sm border border-slate-200"
            />
            <a
              href="#"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
            >
              <CircleDollarSign className="h-4 w-4" />
              Catálogo de precios
            </a>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Nuestro Equipo</h3>
              <p className="text-sm text-slate-600 mb-4">
                Un equipo multidisciplinario comprometido con la excelencia:
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                {['Patólogos', 'Residentes de patología', 'Bacteriólogas', 'Histotecnólogos y Citólogas', 'Tecnólogos en tanatopraxia'].map((role) => (
                  <li key={role} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-600 rounded-xl shadow-sm p-6 text-white">
              <blockquote className="italic text-brand-50 mb-4">
                "Somos un departamento esencial en el diagnóstico y tratamiento de los pacientes. Nos hemos encargado de formar a los patólogos de la ciudad y del país."
              </blockquote>
              <div className="font-bold text-sm">— Vanessa Santiago</div>
              <div className="text-xs text-brand-200">Jefe del Departamento</div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Legado</h3>
              <p className="text-sm text-slate-600">
                Grandes maestros han dejado su huella:
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Alfredo Correa Henao', 'Oscar Duque', 'Mario Robledo', 'Walter León', 'Emilio Bojanini'].map((name) => (
                  <span key={name} className="px-2 py-1 bg-white border border-slate-200 rounded text-xs text-slate-600">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}

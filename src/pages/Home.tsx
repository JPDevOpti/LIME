import { 
  Microscope,
  HeartHandshake,
  Dna,
  FileText,
  Monitor,
  Map
} from 'lucide-react';
import { AppCard } from '../components/AppCard';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Home() {
  const apps = [
    {
      title: "Pathsys",
      description: "Sistema de gestión integral para laboratorios de patología.",
      icon: <Microscope className="h-6 w-6" />,
      href: "/pathology",
      color: "bg-brand-600"
    },
    {
      title: "ContigoAntioquia",
      description: "Plataforma de atención y servicios de salud para la comunidad.",
      icon: <HeartHandshake className="h-6 w-6" />,
      href: "#",
      color: "bg-secondary-600"
    },
    {
      title: "Municipios PEDT",
      description: "Gestión y seguimiento de proyectos en municipios PEDT.",
      icon: <Map className="h-6 w-6" />,
      href: "#",
      color: "bg-brand-600"
    },
    {
      title: "Enterprises",
      description: "Gestión de muestras de genética, microbiología y biología molecular.",
      icon: <Dna className="h-6 w-6" />,
      href: "#",
      color: "bg-secondary-600"
    },
    {
      title: "EquipManage",
      description: "Administración centralizada de equipos de laboratorio, historial y documentación.",
      icon: <Monitor className="h-6 w-6" />,
      href: "http://localhost:3000",
      color: "bg-brand-600"
    },
    {
      title: "Documentación",
      description: "Repositorio central de documentación de todos los proyectos.",
      icon: <FileText className="h-6 w-6" />,
      href: "#",
      color: "bg-secondary-600"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />

      {/* Hero Section */}
      <div className="relative bg-brand-900 py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/Images/ImagenLaboratorio.jpg"
            alt="Laboratory Background"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/30" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Laboratorio Integrado de Medicina Especializada
            </h1>
            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-300">
              <p>
                Ofrecemos medicina de precisión e investigación clínica para tratamientos personalizados. Nuestros servicios incluyen patología, hematología, genética, toxicología y el Centro Especializado de Infecciones Respiratorias.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Apps Grid */}
      <main className="relative -mt-16 mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app, index) => (
            <AppCard key={index} {...app} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

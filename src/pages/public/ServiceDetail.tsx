import { Microscope, FlaskConical, Activity, TestTube, Dna, Wind } from 'lucide-react';
import { Navigate, useParams } from 'react-router-dom';
import { PageWrapper } from '../../components/layout/PageWrapper';
import { ServiceHero } from '../../components/sections/services/ServiceHero';
import { ServiceWhatYouFind } from '../../components/sections/services/ServiceWhatYouFind';
import { ServiceCosts } from '../../components/sections/services/ServiceCosts';
import { getServiceBySlug } from '../../data/services';

const iconBySlug: Record<string, JSX.Element> = {
  patologia: <Microscope className="h-8 w-8" />,
  hematologia: <FlaskConical className="h-8 w-8" />,
  'citometria-de-flujo': <Activity className="h-8 w-8" />,
  farmacologia: <TestTube className="h-8 w-8" />,
  toxicologia: <FlaskConical className="h-8 w-8" />,
  genetica: <Dna className="h-8 w-8" />,
  cedir: <Wind className="h-8 w-8" />
};

export function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <PageWrapper>
      <ServiceHero service={service} icon={iconBySlug[service.slug]} />

      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ServiceWhatYouFind items={service.whatYouFind} />
          </div>
          <ServiceCosts costs={service.costs} />
        </div>
      </main>
    </PageWrapper>
  );
}

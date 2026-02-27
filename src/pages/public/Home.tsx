import { PageWrapper } from '../../components/layout/PageWrapper';
import { HeroHome } from '../../components/sections/home/HeroHome';
import { HighlightsHome } from '../../components/sections/home/HighlightsHome';
import { AboutHome } from '../../components/sections/home/AboutHome';
import { ServicesGrid } from '../../components/sections/home/ServicesGrid';
import { ContactSection } from '../../components/sections/home/ContactSection';

export function Home() {
  return (
    <PageWrapper>
      <HeroHome />
      <HighlightsHome />
      <AboutHome />
      <ServicesGrid />
      <ContactSection />
    </PageWrapper>
  );
}

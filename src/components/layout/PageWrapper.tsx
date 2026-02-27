import { Header } from './Header';
import { Footer } from './Footer';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function PageWrapper({ children, className = 'min-h-screen bg-slate-50 font-sans flex flex-col' }: PageWrapperProps) {
  return (
    <div className={className}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

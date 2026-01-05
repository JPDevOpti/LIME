import { Instagram, Facebook, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="flex h-20 w-full items-center justify-center sm:justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex-1 hidden sm:block" aria-hidden="true" />

        <div className="flex items-center gap-6 sm:gap-8">
          <Link to="/">
            <img 
              src="/Images/Logo-LIME-NoFondo.webp" 
              alt="LIME" 
              className="h-12 w-auto object-contain"
            />
          </Link>
          <a
            href="https://www.udea.edu.co/wps/portal/udea/web/inicio"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block"
          >
            <img 
              src="/Images/Banner_UDEA.webp" 
              alt="Universidad de Antioquia" 
              className="h-12 w-auto object-contain"
            />
          </a>
          <a
            href="https://almamater.hospital/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block"
          >
            <img 
              src="/Images/Banner_HAMA.webp" 
              alt="Hospital Alma Máter" 
              className="h-10 w-auto object-contain"
            />
          </a>
        </div>

        <div className="flex-1 hidden sm:flex justify-end items-center gap-4">
          <a href="https://www.instagram.com/lime.udea/?hl=es" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-pink-600 transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="https://www.facebook.com/LIMEUdeA" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-700 transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors">
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}

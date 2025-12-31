import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AppCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  color?: string;
}

export const AppCard: React.FC<AppCardProps> = ({ title, description, icon, href, color = 'bg-brand-600' }) => {
  const isInternal = href.startsWith('/');
  const content = (
    <>
      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${color} text-white shadow-lg shadow-brand-500/20`}>
        {icon}
      </div>
      
      <h3 className="mb-2 text-xl font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">
        {title}
      </h3>
      
      <p className="mb-6 text-sm text-slate-500 leading-relaxed">
        {description}
      </p>
      
      <div className="mt-auto flex items-center text-sm font-medium text-brand-600 group-hover:text-brand-700">
        Acceder
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </>
  );

  const className = "group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1";

  if (isInternal) {
    return (
      <Link to={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {content}
    </a>
  );
};

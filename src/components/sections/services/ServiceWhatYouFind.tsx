import { ClipboardList } from 'lucide-react';

interface ServiceWhatYouFindProps {
  items: string[];
}

export function ServiceWhatYouFind({ items }: ServiceWhatYouFindProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <ClipboardList className="h-6 w-6 text-brand-600" />
        <h2 className="text-2xl font-bold text-slate-900">¿Qué puedes encontrar en este servicio?</h2>
      </div>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-slate-600">
            <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

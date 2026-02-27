import { CircleDollarSign, Info } from 'lucide-react';
import type { ServiceCostItem } from '../../../types/service';

interface ServiceCostsProps {
  costs: ServiceCostItem[];
}

export function ServiceCosts({ costs }: ServiceCostsProps) {
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <CircleDollarSign className="h-6 w-6 text-brand-600" />
        <h2 className="text-xl font-bold text-slate-900">Costos referenciales</h2>
      </div>

      <div className="space-y-4">
        {costs.map((cost) => (
          <div key={cost.concept} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-800">{cost.concept}</p>
            <p className="mt-1 text-brand-700 font-bold">{cost.value}</p>
            {cost.notes && <p className="mt-1 text-xs text-slate-500">{cost.notes}</p>}
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-brand-100 bg-brand-50 p-4 text-xs text-brand-800">
        <p className="flex items-start gap-2">
          <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
          Los costos son orientativos y pueden variar según el tipo de muestra,
          complejidad del estudio y cobertura del paciente.
        </p>
      </div>
    </aside>
  );
}

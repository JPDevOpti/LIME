import { MapPin, Phone, MessageCircle, Mail, Clock } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contacto" className="bg-slate-50 pt-12 pb-20 sm:pt-16 sm:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">Encuéntrenos</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Sede y contacto
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <article className="lg:col-span-1 rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 mb-5">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Nuestra sede</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Calle 64 #51 - 31. Hospital Alma Máter – Sede Ambulatoria (Prado).
              Bloque B, piso 2. Medellín, Antioquia.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
              <Clock className="h-4 w-4 text-brand-600" />
              Lunes a Viernes
            </div>
          </article>

          <article className="lg:col-span-2 rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Información de contacto</h3>
            <div className="grid gap-6 sm:grid-cols-3">
              <a
                href="tel:+573004768811"
                className="group flex flex-col items-center rounded-xl border border-slate-100 bg-slate-50 p-6 text-center transition-all hover:border-brand-200 hover:bg-brand-50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-600 mb-3 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-slate-400">Teléfono</span>
                <span className="mt-1 text-sm font-semibold text-slate-700">300 476 88 11</span>
              </a>

              <a
                href="https://wa.me/573022117890"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center rounded-xl border border-slate-100 bg-slate-50 p-6 text-center transition-all hover:border-green-200 hover:bg-green-50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 mb-3 transition-colors group-hover:bg-green-600 group-hover:text-white">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-slate-400">WhatsApp</span>
                <span className="mt-1 text-sm font-semibold text-slate-700">302 211 78 90</span>
                <span className="mt-0.5 text-xs text-slate-400">Citas dermatológicas</span>
              </a>

              <a
                href="mailto:lime@udea.edu.co"
                className="group flex flex-col items-center rounded-xl border border-slate-100 bg-slate-50 p-6 text-center transition-all hover:border-secondary-200 hover:bg-secondary-50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-100 text-secondary-600 mb-3 transition-colors group-hover:bg-secondary-600 group-hover:text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-slate-400">Email</span>
                <span className="mt-1 text-sm font-semibold text-slate-700">lime@udea.edu.co</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

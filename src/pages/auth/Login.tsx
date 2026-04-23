import { useState, type FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LogIn, Eye, EyeOff, AlertCircle } from 'lucide-react';

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleFieldChange() {
    if (error) setError('');
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Por favor completa todos los campos.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/app-hub');
    }, 900);
  }

  return (
    <div className="relative min-h-screen font-sans">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <img
          src="/Images/ImagenLaboratorio.jpg"
          alt="Fondo"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#001730]/85" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-10">
        {/* Logos */}
        <div className="mb-8 w-full max-w-2xl">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-12">
            <div className="transition-all duration-500 hover:scale-110 hover:-translate-y-1">
              <img
                src="/Images/Logo-LIME-NoFondo.webp"
                alt="Logo LIME"
                className="h-auto w-20 drop-shadow-xl brightness-0 invert sm:w-24"
              />
            </div>
            <div className="transition-all duration-500 hover:scale-110 hover:-translate-y-1">
              <img
                src="/Images/Banner_UDEA.webp"
                alt="Universidad de Antioquia"
                className="h-auto w-28 drop-shadow-xl brightness-0 invert sm:w-36"
              />
            </div>
            <div className="transition-all duration-500 hover:scale-110 hover:-translate-y-1">
              <img
                src="/Images/Banner_HAMA.webp"
                alt="Hospital Alma Máter"
                className="h-auto w-36 drop-shadow-xl brightness-0 invert sm:w-44"
              />
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white p-8 shadow-2xl transition-shadow duration-500 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          {/* Decorative blobs */}
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 opacity-40 blur-3xl" />
          <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-gradient-to-tr from-cyan-100 to-teal-100 opacity-40 blur-3xl" />

          <div className="relative z-10">
            {/* Title */}
            <div className="mb-7 text-center">
              <h1 className="text-5xl font-black tracking-widest text-gray-800 drop-shadow-sm">
                BIENVENIDO
              </h1>
              <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-emerald-500" />
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium text-neutral-700">
                  Correo electrónico / Número de documento
                </label>
                <input
                  id="email"
                  type="text"
                  autoComplete="username"
                  placeholder="correo@udea.edu.co o N.º de documento"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); handleFieldChange(); }}
                  className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="password" className="text-sm font-medium text-neutral-700">
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    placeholder="Ingrese su contraseña"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); handleFieldChange(); }}
                    className="w-full rounded-lg border border-neutral-300 bg-white py-2.5 pl-3.5 pr-10 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 transition-colors hover:text-neutral-600"
                    aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <div className="flex items-center gap-2 pt-0.5">
                <input
                  id="remember"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 cursor-pointer rounded border-neutral-300 accent-emerald-600"
                />
                <label htmlFor="remember" className="cursor-pointer select-none text-sm text-neutral-600">
                  Mantener sesión
                </label>
              </div>

              {/* Error */}
              {error && (
                <div role="alert" className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3">
                  <AlertCircle className="h-4 w-4 shrink-0 text-red-600 mt-0.5" />
                  <p className="text-sm font-medium text-red-800">{error}</p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                ) : (
                  <LogIn className="h-4 w-4" />
                )}
                {isSubmitting ? 'Ingresando...' : 'Ingresar'}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex flex-col items-center gap-3">
          <p className="text-center text-xs text-gray-400">
            © 2026 Portal LIME — Laboratorio Integrado de Medicina Especializada
          </p>
          <Link
            to="/"
            className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/50 hover:shadow-lg"
          >
            ← Volver a la página principal
          </Link>
        </div>
      </div>
    </div>
  );
}

import { 
  ShieldCheck, 
  MapPin, 
  History, 
  Package, 
  Truck, 
  Building2, 
  LineChart, 
  Cpu, 
  ChevronRight,
  CheckCircle2,
  Boxes,
  ClipboardList
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">C</div>
            <span className="text-xl font-bold tracking-tight text-slate-900">CleanCore<span className="text-brand-600">360</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#quienes-somos" className="hover:text-brand-600 transition-colors">¿Quiénes Somos?</a>
            <a href="#servicios" className="hover:text-brand-600 transition-colors">¿Qué Ofrecemos?</a>
            <a href="#cobertura" className="hover:text-brand-600 transition-colors">Cobertura</a>
            <a href="#diferencial" className="hover:text-brand-600 transition-colors">Valor Diferencial</a>
            <a href="#futuro" className="hover:text-brand-600 transition-colors">Innovación</a>
          </div>
          <button className="bg-brand-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-700 transition-all shadow-lg shadow-brand-200">
            Contactar
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10" />
          <Image 
            src="/hero-bg.png" 
            alt="CleanCore360 Professional Services" 
            fill 
            className="object-cover object-center opacity-40"
            priority
          />
        </div>
        
        <div className="section-padding relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" />
              Líderes en Gestión de Limpieza
            </div>
            <h1 className="heading-lg mb-6 leading-[1.1]">
              Soluciones Integrales en <span className="text-brand-600">Productos, Servicios</span> y Gestión Estratégica
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl">
              CleanCore360 transforma la limpieza tradicional en un proceso estratégico, profesional y tecnológico para múltiples sectores empresariales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#servicios" className="bg-brand-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-700 transition-all shadow-xl shadow-brand-200">
                Ver Soluciones <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#historia" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all text-center">
                Nuestra Historia
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Quiénes Somos? */}
      <section id="quienes-somos" className="section-padding">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">¿Quiénes Somos?</h2>
            <div className="space-y-4 text-muted">
              <p>
                CleanCore360 es una empresa mexicana con más de 10 años de experiencia, nacida en Pachuca, Hidalgo, donde inició operaciones como una jarcería enfocada en atender necesidades locales de limpieza.
              </p>
              <p>
                Gracias a la experiencia adquirida y una visión de crecimiento constante, hace 4 años trasladamos nuestras operaciones a EDOMEX, fortaleciendo nuestra capacidad operativa y estratégica.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-brand-600 mb-1">10+</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Años de Exp.</div>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-brand-600 mb-1">6+</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">En Hidalgo</div>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-brand-600 mb-1">4+</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">En Naucalpan</div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Cobertura Estratégica - Full Width Horizontal */}
      <section id="cobertura" className="bg-white py-12">
        <div className="section-padding">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 lg:p-16 text-white relative overflow-hidden border border-white/5 shadow-2xl">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[120px] -mr-64 -mt-64" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-widest mb-6">
                  <MapPin className="w-4 h-4" /> Alcance Regional
                </div>
                <h3 className="text-4xl font-bold mb-6">
                  Cobertura <span className="text-brand-400">Estratégica</span>
                </h3>
                <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                  Contamos con una red logística robusta para atender de manera eficiente la zona centro del país.
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
                  {[
                    'CDMX', 
                    'EDOMEX', 
                    'Toluca',
                    'Hidalgo', 
                    'Puebla', 
                    'Querétaro', 
                    'Morelos'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-brand-500/50 transition-all group">
                      <CheckCircle2 className="w-4 h-4 text-brand-400" />
                      <span className="text-slate-300 font-semibold text-sm tracking-tight">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="p-6 rounded-2xl bg-brand-500/10 border border-brand-500/20">
                  <p className="text-brand-100 leading-relaxed italic text-sm">
                    "Garantizamos tiempos de entrega competitivos y un servicio personalizado en cada una de nuestras rutas."
                  </p>
                </div>
              </div>

              <div className="w-full relative h-[350px] md:h-[500px] rounded-[2rem] overflow-hidden bg-slate-950/40 border border-white/5 shadow-inner flex items-center justify-center">
                <Image 
                  src="/mexico_full_map_coverage_1777423971052.png" 
                  alt="Mapa de Cobertura Total México CleanCore360" 
                  fill 
                  className="object-contain p-8"
                  priority
                />
                <div className="absolute top-6 right-6 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Zona Activa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historia (Timeline) */}
      <section id="historia" className="bg-white py-24">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Nuestra Historia</h2>
            <p className="text-slate-500 mt-2">De comercio local a solución empresarial regional</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                title: 'Inicio', 
                place: 'Pachuca, Hidalgo', 
                desc: 'Jarcería tradicional y atención personalizada.',
                icon: History
              },
              { 
                title: 'Expansión', 
                place: 'Fabricación Propia', 
                desc: 'Diversificación de catálogo y procesos estructurados.',
                icon: Boxes
              },
              { 
                title: 'Reubicación', 
                place: 'Naucalpan, EdoMéx', 
                desc: 'Mayor capacidad logística y conectividad metropolitana.',
                icon: Building2
              },
              { 
                title: 'Presente', 
                place: 'Enfoque Corporativo', 
                desc: 'Cobertura regional, procesos documentados y control operativo.',
                icon: LineChart
              }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="mb-6 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                <div className="text-brand-600 text-sm font-semibold mb-3">{item.place}</div>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ¿Qué Ofrecemos? */}
      <section id="servicios" className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">¿Qué Ofrecemos?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Soluciones integrales para oficinas, escuelas, fábricas, comercios y corporativos.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600 mb-6">
              <Package className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Productos</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Químicos de limpieza',
                'Jarcería',
                'Papelería higiénica',
                'Insumos institucionales',
                'Equipamiento',
                'Suministros especiales'
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-600 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Servicios & Logística</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Cotizaciones a medida',
                'Administración de pedidos',
                'Control documental',
                'Inventarios',
                'Entregas programadas',
                'Seguimiento de consumo'
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-600 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Valor Diferencial */}
      <section id="diferencial" className="bg-slate-900 py-24 text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-3xl" />
        <div className="section-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">Nuestro Valor Diferencial</h2>
            <p className="text-brand-400 text-xl font-medium mb-8 italic">"No competimos únicamente por precio. Competimos por soluciones, eficiencia y valor."</p>
            <p className="text-slate-400 leading-relaxed">
              Nuestra propuesta es convertirnos en **aliados estratégicos** para la gestión eficiente de sus recursos de limpieza.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Adaptabilidad', 
                desc: 'Opciones adaptadas a necesidades reales y distintos presupuestos.',
                image: '/adaptabilidad.png'
              },
              { 
                title: 'Trazabilidad', 
                desc: 'Historial y control de consumo con trazabilidad documental completa.',
                image: '/trazabilidad-route.png'
              },
              { 
                title: 'Eficiencia', 
                desc: 'Optimización de compras y servicio integral centralizado.',
                image: '/eficiencia.png'
              }
            ].map((item, i) => (
              <div key={i} className="group p-0 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden flex flex-col hover:border-brand-500/50 transition-all duration-500">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80" />
                </div>
                <div className="p-8 pt-6">
                  <h4 className="text-xl font-bold mb-4 text-brand-400 group-hover:text-brand-300 transition-colors">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovación y ERP */}
      <section id="futuro" className="section-padding overflow-hidden">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative border border-white/5 shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px] -mr-32 -mt-32" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-wider mb-6">
                <Cpu className="w-4 h-4" /> Innovación Tecnológica
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Transformación Digital: <span className="text-brand-400">Nuestro ERP Propio</span>
              </h2>
              <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                Estamos desarrollando un ecosistema digital diseñado para fortalecer la experiencia del cliente y optimizar nuestras operaciones de principio a fin.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {[
                  { title: 'Cotizaciones Digitales', desc: 'Respuesta inmediata y precisa.' },
                  { title: 'Inventario Real', desc: 'Stock siempre actualizado.' },
                  { title: 'Transparencia Total', desc: 'Trazabilidad en cada pedido.' },
                  { title: 'Historial Central', desc: 'Todos tus consumos en un lugar.' }
                ].map((item) => (
                  <div key={item.title} className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 text-brand-400">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="font-bold text-slate-100">{item.title}</span>
                    </div>
                    <span className="text-sm text-slate-500 ml-8">{item.desc}</span>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <ClipboardList className="w-6 h-6 text-brand-400" /> Procesos Documentados
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Control Administrativo',
                    'Seguimiento Comercial',
                    'Planeación Logística',
                    'Control de Inventario'
                  ].map((item) => (
                    <div key={item} className="p-3 bg-white/5 rounded-xl text-[10px] uppercase tracking-wider font-bold text-slate-400 border border-white/5">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-500/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-950 aspect-[4/3] lg:aspect-auto lg:h-[600px]">
                <Image 
                  src="/erp-preview.png" 
                  alt="CleanCore360 ERP Mockup" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-bold text-brand-400 uppercase tracking-widest mb-1">Próximo Lanzamiento</div>
                      <div className="text-lg font-bold">Portal del Cliente v2.0</div>
                    </div>
                    <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full animate-ping" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contacto */}
      <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
        <div className="section-padding">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">C</div>
                <span className="text-xl font-bold tracking-tight text-slate-900">CleanCore<span className="text-brand-600">360</span></span>
              </div>
              <p className="text-slate-500 max-w-sm mb-8">
                Evolución, cobertura y soluciones empresariales para un entorno más limpio, eficiente y profesional.
              </p>
            </div>
            
            <div className="text-right">
              <h4 className="font-bold text-slate-900 mb-4">¿Hacia Dónde Vamos?</h4>
              <p className="text-slate-500 mb-6 italic">
                "Ser una empresa líder en soluciones integrales de limpieza empresarial en la región centro del país."
              </p>
              <div className="flex justify-end gap-4">
                <span className="px-4 py-2 bg-slate-200 rounded-full text-xs font-bold text-slate-600">Fabricación</span>
                <span className="px-4 py-2 bg-slate-200 rounded-full text-xs font-bold text-slate-600">Distribución</span>
                <span className="px-4 py-2 bg-slate-200 rounded-full text-xs font-bold text-slate-600">Logística</span>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-400">© 2026 CleanCore360. Todos los derechos reservados. México.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

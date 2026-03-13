import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Heart,
  UserCheck,
  Award,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  ChevronRight,
  Menu,
  X,
  Star,
  Activity,
  ArrowUpRight,
  CheckCircle2,
  Play,
  Globe
} from 'lucide-react';
import { cn } from './lib/utils';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío (aquí iría la integración real con backend/WhatsApp)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Redirigir a WhatsApp con los datos del formulario
    const whatsappMessage = `Hola Marisela, mi nombre es ${formData.name}. Me interesa información sobre: ${formData.service}. ${formData.message ? 'Mensaje: ' + formData.message : ''}`;
    const whatsappUrl = `https://wa.me/526182758808?text=${encodeURIComponent(whatsappMessage)}`;

    setSubmitStatus('success');
    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);
    setFormData({ name: '', phone: '', service: '', message: '' });
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'VICOM', href: '#vicom' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-blue-500/30 selection:text-white">
      {/* Navbar */}
      <nav className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-500 border-b",
        isScrolled ? "bg-slate-950/80 backdrop-blur-xl border-white/10 py-4" : "bg-transparent border-transparent py-6"
      )}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4 group">
            <div className="flex flex-col items-center">
              <div className="bg-white p-1.5 rounded-sm shadow-md">
                <img src="/assets/logo_axa_full.jpg" alt="AXA Logo" className="h-10 w-auto" />
              </div>
            </div>
            <div className="w-px h-10 bg-white/20 hidden sm:block" />
            <div className="flex flex-col">
              <span className="text-xl font-orbitron font-black tracking-tighter text-red-600">VICOM</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-blue-400 font-bold leading-none">Seguros & Finanzas</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a 
              href="https://wa.me/526182758808" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-black uppercase tracking-widest rounded-full transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40"
            >
              Consultoría Gratis
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-[90vh] flex items-center pt-32 pb-32 overflow-hidden">
        {/* Real Hyperrealistic Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/hero_family.png" 
            alt="Family Protection" 
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="img-overlay-dark" />
        </div>

        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 z-1" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">25 Años de Excelencia en Durango</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-outfit font-black text-white leading-tight mb-8"
            >
              PROTEGE LO QUE MÁS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">IMPORTA CON VICOM</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Asesoría profesional de la mano de Marisela Nevarez, Agente Certificada AXA.
              Transformamos la seguridad de tu familia con soluciones a tu medida.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a 
                href="https://wa.me/526182758808" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-[0.2em] rounded-2xl transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 group"
              >
                Hablar con Marisela
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#servicios" 
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-[0.2em] rounded-2xl border border-white/10 transition-all flex items-center justify-center gap-3"
              >
                Ver Coberturas
                <ChevronRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Floating Icons Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-10 lg:left-32 w-20 h-20 glass-card flex items-center justify-center"
          >
            <Heart className="w-8 h-8 text-red-400" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-10 lg:right-32 w-20 h-20 glass-card flex items-center justify-center"
          >
            <Activity className="w-8 h-8 text-blue-400" />
          </motion.div>
        </div>
      </section>

      {/* Stats / Proof Section */}
      <section className="py-20 border-y border-white/5 bg-white/2 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Años Experiencia', value: '25+', icon: Clock },
              { label: 'Casos Exitosos', value: '2k+', icon: UserCheck },
              { label: 'Agente AXA', value: 'Certificada', icon: Award },
              { label: 'Atención', value: '24/7', icon: Heart },
            ].map((stat) => (
              <div key={stat.label} className="text-center group">
                <stat.icon className="w-6 h-6 text-blue-500 mx-auto mb-4 group-hover:scale-125 transition-transform" />
                <p className="text-3xl font-orbitron font-black text-white mb-1">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video / Corporate Presence Section */}
      <section className="py-32 relative overflow-hidden bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 uppercase tracking-tight">Presencia Corporativa</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Conoce más sobre el respaldo y la solidez que Marisela Nevarez y AXA brindan a cada uno de sus clientes.</p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-video glass-card overflow-hidden group shadow-2xl shadow-blue-600/10 border border-white/10"
            >
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/assets/video_corporate_3.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-8 left-8 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center animate-pulse">
                  <Play className="w-6 h-6 text-white fill-current" />
                </div>
                <div>
                   <p className="text-white font-black uppercase text-xs tracking-widest">Respaldo Integral</p>
                   <p className="text-slate-400 text-[10px] uppercase tracking-widest">Excelencia AXA</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VICOM Branding & Experience Section */}
      <section id="vicom" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              {/* Actual Photos of Marisela */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700"
                >
                  <img src="/assets/foto_marisela_1.jpg" alt="Marisela Nevarez Asesoría" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl -skew-y-3 hover:skew-y-0 transition-transform duration-700 translate-y-12"
                >
                  <img src="/assets/foto_marisela_2.jpg" alt="Marisela Nevarez AXA" className="w-full h-full object-cover" />
                </motion.div>
              </div>
              
              {/* Background Glow */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-red-600/20 rounded-full blur-[100px]" />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 uppercase leading-tight">
                EL PODER DE <br />
                <span className="text-red-600">BECOME (VICOM)</span>
              </h2>
              <div className="absolute -inset-4 bg-blue-600/20 rounded-[40px] blur-2xl" />
              <div className="relative glass-card p-12 aspect-square flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="mb-8 p-6 bg-blue-600 rounded-3xl rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  <Shield className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-4xl font-black mb-4">¿QUÉ ES VICOM?</h3>
                <p className="text-slate-400 leading-relaxed italic">
                  "Nuestro nombre proviene del inglés 'BECOME', que significa convertirse o transformarse. Representamos el profesionalismo, experiencia y confianza."
                </p>
                <div className="mt-8 flex gap-2">
                  <div className="w-1 h-1 bg-blue-500 rounded-full" />
                  <div className="w-8 h-1 bg-blue-500 rounded-full" />
                  <div className="w-1 h-1 bg-blue-500 rounded-full" />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-black text-blue-500 tracking-[0.3em] mb-4">FILOSOFÍA DE MARCA</h2>
              <h3 className="text-4xl lg:text-5xl font-outfit font-black text-white mb-8">EL PODER DE <br /> TRANSFORMAR EL FUTURO</h3>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                El icono de VICOM representa el vuelo de un ave hacia una estrella. Es el símbolo del crecimiento, la protección y las aspiraciones de cada cliente que confía en nosotros.
              </p>
              <ul className="space-y-4">
                {[
                  'Capacitación continua de asesores expertos.',
                  'Venta ética de seguros de alta calidad.',
                  'Atención personalizada con respaldo de AXA.',
                  'Compromiso total con la tranquilidad familiar.'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 group">
                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 transition-colors">
                      <CheckCircle2 className="w-3 h-3 text-blue-400 group-hover:text-white" />
                    </div>
                    <span className="text-slate-300 group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-32 bg-slate-900/40 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-sm font-black text-blue-500 tracking-[0.3em] mb-4">SOLUCIONES INTEGRALES</h2>
            <h3 className="text-4xl lg:text-5xl font-outfit font-black text-white">PROTECCIÓN 360°</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Seguros de Vida',
                desc: 'La tranquilidad de saber que los tuyos estarán protegidos pase lo que pase.',
                icon: Heart,
                features: ['Protección familiar', 'Proyectos de ahorro', 'Fallecimiento accidental'],
                img: '/assets/service_life.png'
              },
              {
                title: 'Gastos Médicos Mayories',
                desc: 'Acceso a la mejor atención médica en México y el extranjero con respaldo AXA.',
                icon: Activity,
                features: ['Red de hospitales', 'Cirugías especializadas', 'Atención 24/7'],
                img: '/assets/service_health.png'
              },
              {
                title: 'Educación y Retiro',
                desc: 'Asegura el futuro universitario de tus hijos o vive un retiro con total libertad.',
                icon: Star,
                features: ['Planes de ahorro', 'Deducibilidad fiscal', 'Metas financieras'],
                img: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800'
              }
            ].map((service) => (
              <div key={service.title} className="glass-card overflow-hidden group hover:border-blue-500/50 transition-all duration-300">
                <div className="h-48 overflow-hidden relative">
                   <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" />
                   <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors" />
                   <div className="absolute bottom-4 left-6 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center border border-white/20 shadow-lg">
                      <service.icon className="w-6 h-6 text-white" />
                   </div>
                </div>
                <div className="p-10 pt-8">
                  <h4 className="text-2xl font-black mb-4 text-white uppercase">{service.title}</h4>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">{service.desc}</p>
                  <div className="h-px bg-white/5 mb-6" />
                  <ul className="space-y-3">
                    {service.features.map(f => (
                      <li key={f} className="text-[10px] uppercase font-bold tracking-widest text-slate-500 flex items-center gap-2">
                         <span className="w-1 h-1 bg-blue-500 rounded-full" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="glass-card p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 -skew-x-12 translate-x-1/2" />
            
            <div className="grid lg:grid-cols-2 gap-20 relative">
              <div>
                <h2 className="text-sm font-black text-blue-500 tracking-[0.3em] mb-4">CONTACTO DIRECTO</h2>
                <h3 className="text-4xl lg:text-6xl font-outfit font-black text-white mb-8 italic">¿LISTO PARA <br /> ASEGURAR TU PAZ?</h3>
                <p className="text-slate-400 text-lg mb-12">
                  Marisela Nevarez te brindará una asesoría personalizada sin compromiso. Estamos ubicados en Durango, México, pero protegemos a familias en todo el país.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-blue-600 transition-colors">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Teléfono / WhatsApp</p>
                      <p className="text-xl font-black text-white">618 275 88 08</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-blue-600 transition-colors">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Ubicación</p>
                      <p className="text-xl font-black text-white">Durango, Dgo. México</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-md">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="text-[10px] uppercase font-black tracking-widest text-slate-500 mb-2 block">Nombre Completo</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-1 focus:ring-blue-500 outline-none text-white transition-all" 
                      placeholder="Ej. Juan Pérez" 
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-black tracking-widest text-slate-500 mb-2 block">WhatsApp de Contacto</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-1 focus:ring-blue-500 outline-none text-white transition-all" 
                      placeholder="618 ..." 
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-black tracking-widest text-slate-500 mb-2 block">Servicio de Interés</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 bg-slate-900 border border-white/10 rounded-xl focus:ring-1 focus:ring-blue-500 outline-none text-white transition-all"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="Seguros de Vida">Seguros de Vida</option>
                      <option value="Gastos Médicos">Gastos Médicos</option>
                      <option value="Auto / Hogar">Auto / Hogar</option>
                      <option value="Empresas">Empresas</option>
                    </select>
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-[0.3em] rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
                  </button>
                  {submitStatus === 'success' && (
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-xs text-emerald-400 text-center font-bold tracking-widest mt-4"
                    >
                      ¡REDIGIRIENDO A WHATSAPP!
                    </motion.p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-red-600" />
              <span className="text-2xl font-orbitron font-black text-red-600 tracking-widest">VICOM</span>
            </div>
            <p className="text-slate-500 text-[10px] uppercase tracking-[0.4em] font-medium">© 2026 Marisela Nevarez. Todos los derechos reservados.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://wa.me/526182758808" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-xl hover:bg-blue-600 transition-all group"
              title="Chat con Marisela"
            >
              <MessageCircle className="w-5 h-5 text-white" />
            </a>
            <a 
              href="https://axa.mx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-xl hover:bg-blue-600 transition-all group"
              title="Sitio Oficial AXA"
            >
              <Globe className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <a 
        href="https://wa.me/526182758808" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-emerald-500 hover:bg-emerald-400 text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-500/40 z-[200] group transition-all animate-bounce"
      >
        <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};

export default App;

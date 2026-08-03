import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Mail, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Zap, 
  Award, 
  Headset,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Camera,
  Ruler,
  ExternalLink,
  Quote,
  Maximize2,
  Columns,
  Shield,
  Sun,
  Grid,
  DoorOpen,
  Lock,
  Table,
  Layers,
  Wrench,
  Sparkles,
  Instagram,
  Facebook,
  Linkedin,
  ArrowUp,
  Droplets,
  FileText,
  Info,
  Star,
  Gem
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// --- Components ---

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-[100] pointer-events-none">
      <motion.div 
        className="h-full bg-gradient-to-r from-brand-blue to-blue-400 origin-left shadow-[0_0_10px_rgba(37,99,235,0.5)]"
        style={{ scaleX }}
      />
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled && !isMobileMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
          <a href="#home" className={`flex items-center transition-opacity hover:opacity-95 ${isScrolled && !isMobileMenuOpen ? 'text-brand-blue' : 'text-white'}`}>
            <span className="font-display font-black text-2xl tracking-[0.25em]">DUNO</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-colors hover:text-brand-blue ${isScrolled && !isMobileMenuOpen ? 'text-slate-600' : 'text-white/80 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/5519987212422" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-nav group"
            >
              Orçamento rápido
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden z-[80] p-2 rounded-full transition-colors relative ${
              isMobileMenuOpen 
                ? 'text-white hover:bg-white/10' 
                : isScrolled 
                  ? 'text-slate-900 hover:bg-slate-100' 
                  : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Outside nav to prevent backdrop-filter fixed positioning containing block bug */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Intensive Backdrop Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[60] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Smooth Slide-in Drawer */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[300px] bg-slate-900 text-white border-l border-slate-800 z-[70] md:hidden flex flex-col p-6 pt-20 shadow-2xl justify-between overflow-y-auto"
            >
              <div className="flex flex-col gap-5">
                <div className="border-b border-slate-800 pb-3">
                  <span className="font-display font-black text-xl tracking-[0.25em] text-blue-500">DUNO</span>
                  <div className="text-[10px] text-slate-400 mt-0.5 uppercase tracking-widest font-mono">ENGENHARIA DE VIDROS</div>
                </div>
                
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, idx) => (
                    <motion.a 
                      key={link.name} 
                      href={link.href} 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-base font-medium text-slate-200 hover:text-blue-400 py-2 border-b border-slate-800/50 transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <div className="text-[10px] text-center text-slate-500 font-mono">
                  SUPORTE E ENGENHARIA 100% CUMPRINDO ABNT
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-slate-950">
      {/* Banner Background with Parallax */}
      <motion.div 
        style={{ y: useTransform(useScroll().scrollYProgress, [0, 0.5], [0, 80]) }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img 
          src="images/bannerdesktop02.png" 
          alt="Banner Principal"
          className="hidden md:block w-full h-full object-cover scale-105"
          loading="lazy"
        />
        <img 
          src="images/bannermobile02.png" 
          alt="Banner Principal Mobile"
          className="block md:hidden w-full h-full object-cover scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Animated Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[130px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10 w-full flex flex-col items-center lg:items-start">
        <div className="max-w-4xl text-center lg:text-left flex flex-col items-center lg:items-start">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-md"
          >
            <Zap size={14} className="animate-pulse text-blue-400" />
            Alta Performance & Rigor Técnico ABNT
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-white tracking-tight"
          >
            Engenharia de Vidros <br className="hidden sm:inline" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 drop-shadow-sm">Alto Padrão</span> para sua obra
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 max-w-3xl leading-relaxed font-light"
          >
            Fechamentos, boxes, divisórias e espelhos planejados com precisão milimétrica a laser. Sua obra protegida de ponta a ponta com segurança certificada, garantia estrutural total de 1 ano e o acabamento impecável que seu imóvel de alto padrão merece.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start w-full"
          >
            <a 
              href="https://wa.me/5519987212422?text=Olá!%20Gostaria%20de%2520fazer%20um%2520orçamento%2520rápido%2520para%20meu%20projeto." 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp justify-center text-center text-md py-4 px-8 group font-semibold shadow-lg shadow-green-500/20 w-full sm:w-auto max-w-xs sm:max-w-none rounded-full"
            >
              Orçamento Grátis
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#servicos" 
              className="px-8 py-4 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all text-md font-semibold flex items-center justify-center gap-2 w-full sm:w-auto max-w-xs sm:max-w-none shadow-lg"
            >
              Ver Serviços
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Google review and cities served */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 border-t border-white/15 pt-8 w-full max-w-3xl"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex gap-0.5">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <span className="font-semibold text-slate-300">4.9/5 (450+ avaliações no Google)</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/10" />
            <div className="flex items-center gap-1.5 leading-none text-slate-400">
              <MapPin size={14} className="text-blue-500" />
              <span>SP Capital, ABC, Campinas, Valinhos e Região</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-slate-650 font-bold">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-blue-600 to-transparent"
        />
      </motion.div>
    </section>
  );
};

const About = () => {
  const values = [
    { title: 'Tradição técnica', desc: 'Duas décadas entregando precisão milimétrica em cada projeto realizado.', icon: <Award size={24} /> },
    { title: 'Compromisso real', desc: 'Prazos cumpridos à risca com logística própria e equipe altamente qualificada.', icon: <CheckCircle2 size={24} /> },
    { title: 'Materiais elite', desc: 'Trabalhamos apenas com vidros certificados e acessórios de alto padrão.', icon: <Gem size={24} /> },
    { title: 'Preço direto', desc: 'Economia real comprando direto de quem domina toda a engenharia do vidro.', icon: <Sparkles size={24} /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="sobre" className="section-padding bg-brand-dark text-white overflow-hidden relative">
      {/* Background Engineering Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>
      
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.08, 0.05]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/5 rounded-full blur-[100px]" 
      />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-6">
              <span className="w-8 h-px bg-blue-400" />
              Nossa Essência
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Engenharia <br />
              <span className="text-blue-400 italic">sem segredos.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-xl">
              Mais que uma vidraçaria, somos especialistas em transformar ambientes com transparência, segurança estrutural e design de alto padrão. Nossa abordagem é técnica, transparente e focada na excelência.
            </p>
            
            <div className="grid gap-8 mb-10">
              <div className="flex gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-all duration-500 group-hover:rotate-6">
                  <CheckCircle2 className="text-blue-400" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 group-hover:text-blue-400 transition-colors">Precisão que gera confiança</h4>
                  <p className="text-slate-400 leading-relaxed">A DUNO Engenharia nasceu da necessidade de um mercado que pedia mais que apenas instalação; pedia inteligência técnica aplicada ao vidro.</p>
                </div>
              </div>
              <div className="flex gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-all duration-500 group-hover:-rotate-6">
                  <CheckCircle2 className="text-blue-400" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 group-hover:text-blue-400 transition-colors">Foco no Resultado Final</h4>
                  <p className="text-slate-400 leading-relaxed">Hoje, com mais de 4.500 projetos realizados, nossa marca é sinônimo de segurança e acabamento fino para arquitetos e construtores.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            {/* Decorative element */}
            <div className="absolute -inset-4 bg-blue-500/5 blur-3xl rounded-full pointer-events-none" />
            
            {values.map((v, i) => (
              <motion.div 
                key={v.title}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
                  }
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px -10px rgba(37, 99, 235, 0.2)",
                  transition: { duration: 0.3 } 
                }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group relative overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className="text-6xl font-display font-black">0{i+1}</div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-500/30 transition-all">
                  {v.icon}
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-blue-400 transition-colors">{v.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Services = () => {
  const residentialServices = [
    { 
      title: 'Box para banheiro', 
      desc: 'Segurança absoluta e elegância máxima para seu momento de banho com trilhos ultra suaves e vidros certificados.', 
      img: 'images/vidracaria_servico_1.png',
      whatsappMsg: 'Olá! Gostaria de consultar o orçamento para instalação de Box para Banheiro sob medida.'
    },
    { 
      title: 'Janelas de vidro temperado', 
      desc: 'Mais isolamento termoacústico e alta resistência contra ventos fortes para a segurança total do seu lar.', 
      img: 'images/vidracaria_servico_2.png',
      whatsappMsg: 'Olá! Gostaria de um orçamento para Janelas de vidro temperado sob medida.'
    },
    { 
      title: 'Espelhos sob medida', 
      desc: 'Gere sensação de amplitude e luxo in qualquer cômodo com lapidação uniforme e reflexão sem distorções.', 
      img: 'images/vidracaria_servico_3.png',
      whatsappMsg: 'Olá! Gostaria de solicitar um orçamento para Espelhos sob medida de alta qualidade.'
    },
    { 
      title: 'Portas de vidro', 
      desc: 'Divida seus ambientes de forma inteligente mantendo a integração visual completa e movimento incrivelmente leve.', 
      img: 'images/vidracaria_servico_4.png',
      whatsappMsg: 'Olá! Gostaria de solicitar o orçamento para Portas de vidro sob medida.'
    }
  ];

  const commercialServices = [
    { 
      title: 'Fachadas de vidro', 
      desc: 'Sua empresa com imponência colossal e máximo bem-estar interno através de vidros com filtro de calor solar.', 
      img: 'images/fachada_de_vidro.png',
      whatsappMsg: 'Olá! Tenho interesse em um projeto corporativo para Fachada de vidro.'
    },
    { 
      title: 'Divisórias de vidro', 
      desc: 'Privacidade garantida para reuniões sigilosas mantendo o design do escritório amplo e iluminado de ponta a ponta.', 
      img: 'images/vidracaria_servico_6.png',
      whatsappMsg: 'Olá! Gostaria de realizar um orçamento para Divisórias de vidro corporativas.'
    },
    { 
      title: 'Corrimão e guarda-corpo', 
      desc: 'Garanta a proteção contra quedas com ancoragem técnica invisível e vidros blindados duplo laminados.', 
      img: 'images/vidracaria_servico_7.png',
      whatsappMsg: 'Olá! Gostaria de solicitar um orçamento para Corrimão e guarda-corpo de vidro.'
    },
    { 
      title: 'Coberturas em vidro', 
      desc: 'Aproveite as áreas externas o ano todo com vidros laminados inquebráveis e vedação 100% estanque contra chuvas.', 
      img: 'images/vidracaria_servico_8.png',
      whatsappMsg: 'Olá! Gostaria de orçar uma Cobertura em vidro moderna para área externa.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const renderServiceCard = (s: any) => (
    <motion.div 
      key={s.title}
      variants={itemVariants}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-2xl overflow-hidden border-2 border-blue-500 hover:border-blue-600 shadow-md shadow-blue-500/10 hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      <div className="relative h-48 bg-slate-900/5 p-3 flex items-center justify-center overflow-hidden">
        <img 
          src={s.img} 
          alt={s.title} 
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="absolute top-3 right-3 z-10">
          <div className="w-8 h-8 bg-white/40 backdrop-blur-md rounded-lg flex items-center justify-center text-slate-800 border border-white/50 shadow-sm">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-2 group-hover:text-brand-blue transition-colors">{s.title}</h3>
        <p className="text-slate-500 mb-4 text-xs leading-relaxed flex-grow">
          {s.desc}
        </p>
        
        <a 
          href={`https://wa.me/5519987212422?text=${encodeURIComponent(s.whatsappMsg)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp group justify-center py-2.5 text-xs font-semibold"
        >
          Pedir orçamento
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );

  return (
    <section id="servicos" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 blur-[120px] -z-0" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-600/5 blur-[120px] -z-0" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 text-brand-blue font-bold text-xs uppercase tracking-[0.3em] mb-4">
            <div className="w-8 h-px bg-brand-blue" />
            Nossos Serviços
            <div className="w-8 h-px bg-brand-blue" />
          </motion.div>
          <motion.h2 variants={itemVariants} className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Engenharia e Vidros Completos Para Você
          </motion.h2>
          <motion.p variants={itemVariants} className="text-slate-500 text-base leading-relaxed">
            Selecione a solução perfeita dividida entre projetos residenciais elegantes ou corporativos de alta performance.
          </motion.p>
        </div>

        {/* RESIDENTIAL CATEGORY (4 Cards) */}
        <div className="mb-16">
          <div className="flex items-center mb-8 border-b border-slate-200 pb-4">
            <h3 className="text-2xl font-display font-bold text-slate-800 tracking-tight">Projetos Residenciais</h3>
          </div>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {residentialServices.map(renderServiceCard)}
          </motion.div>
        </div>

        {/* COMMERCIAL CATEGORY (4 Cards) */}
        <div>
          <div className="flex items-center mb-8 border-b border-slate-200 pb-4">
            <h3 className="text-2xl font-display font-bold text-slate-800 tracking-tight">Projetos Comerciais</h3>
          </div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {commercialServices.map(renderServiceCard)}
          </motion.div>
        </div>

        {/* High Scale CTA */}
        <motion.div variants={itemVariants} className="mt-20 bg-brand-dark rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/20 skew-x-12 translate-x-1/4" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">Projetos em Alta Escala.</h3>
              <p className="text-slate-400 max-w-xl">Atendemos construtoras, escritórios e condomínios com equipe própria credenciada e rapidez comercial superior.</p>
            </div>
            <a 
              href="https://wa.me/5519987212422?text=Olá!%20Gostaria%20de%20solicitar%20um%20projeto%20corporativo%20de%20alta%20escala." 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp group rounded-full"
            >
              Falar Comercial
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const ProjectGallery = () => {
  return null;
};

const DeprecatedProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [activeFilter, setActiveFilter] = useState("Todos");

  const categories = ["Todos", "Residencial", "Corporativo", "Coberturas"];

  const projects = [
    {
      id: 1,
      title: "Residência Alphaville",
      category: "Residencial",
      desc: "Fechamento de sacada retrátil completo integrada ao living, proporcionando amplitude térmica e isolamento acústico inteligente.",
      img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800",
      specs: [
        "Vidro Laminado Temperado de 12mm de alta segurança",
        "Sistema Retrátil Pivotante em Alumínio Anodizado Especial",
        "Roldanas blindadas de inox 316 com rolamentos selados",
        "Vedação tripla com silicone Dow Corning e escovas de vedação",
        "Norma de Segurança: ABNT NBR 16259"
      ],
      client: "Fernanda & Roberto",
      location: "Alphaville, Santana de Parnaíba",
      feedback: "O fechamento da nossa sacada ficou espetacular! O isolamento acústico superou nossas expectativas e podemos usar o espaço o ano todo de forma segura."
    },
    {
      id: 2,
      title: "Guarda-Corpo Autoportante Infinity",
      category: "Residencial",
      desc: "Instalação de guarda-corpo de vidro autoportante em mezanino e escada helicoidal moderna, garantindo segurança sem barreiras visuais.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      specs: [
        "Vidro Laminado Extra-Clear de 16mm (8+8) temperado duplo PVB",
        "Perfil canal de alumínio embutido na estrutura do piso",
        "Fixação química robusta de alta ancoragem estrutural",
        "Cálculo estático para suportar cargas de impacto lateral intensas",
        "Norma de Segurança: ABNT NBR 14718"
      ],
      client: "Dr. Carlos Eduardo",
      location: "Itaim Bibi, São Paulo",
      feedback: "Excelente engenharia! O guarda-corpo autoportante ficou totalmente limpo visualmente e extremamente firme. Dá pra sentir a segurança no dia a dia."
    },
    {
      id: 3,
      title: "Divisórias Corporativas Faria Lima",
      category: "Corporativo",
      desc: "Divisórias acústicas de vidro piso-teto para salas de reunião e diretoria, com perfis minimalistas pretos.",
      img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800",
      specs: [
        "Vidros Laminados Acústicos Silence de 12mm",
        "Perfis estruturais em alumínio preto fosco texturizado",
        "Portas pivotantes de vidro com mola hidráulica oculta e fechadura magnética",
        "Atenuação acústica testada e certificada (RW de até 38dB)",
        "Passagem interna de fiação lógica e elétrica embutida no perfil"
      ],
      client: "HR Tech Solutions",
      location: "Av. Faria Lima, São Paulo",
      feedback: "Nossa nova sala de reunião ficou sensacional. O isolamento acústico é perfeito para nossas reuniões sigilosas, sem perder a transparência do espaço comercial."
    },
    {
      id: 4,
      title: "Espelho Integrado com LED Premium",
      category: "Residencial",
      desc: "Espelhos sob medida com iluminação de LED integrada indireta de alta eficiência e dimerização inteligente para banheiros e closets.",
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
      specs: [
        "Espelho de Cristal Cebrace Premium de 6mm com película de segurança",
        "Lapidação de alta precisão com acabamento em bisotê fino",
        "Fita de LED PRO com alto índice de reprodução de cor (IRC >90)",
        "Fonte chaveada Slim oculta com proteção IP67 contra umidade",
        "Estrutura traseira de alumínio anodizado para dissipamento de calor"
      ],
      client: "Mariana Alencar",
      location: "Cambuí, Campinas",
      feedback: "O espelho de LED do closet virou o ponto alto do meu quarto. A luz é incrível para maquiagem e fotos, a nitidez é perfeita!"
    },
    {
      id: 5,
      title: "Cobertura de Vidro Refletivo Solar",
      category: "Coberturas",
      desc: "Cobertura de vidro termoacústica em pergolado gourmet, aliando iluminação natural e conforto térmico superior.",
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
      specs: [
        "Vidro Laminado de Controle Solar Refletivo de 12mm (fator térmico alto)",
        "Bloqueia até 68% do calor gerado por fótons e barreira de 99% de UV",
        "Estrutura metálica tubular pesada com pintura eletrostática cinza espacial",
        "Sistemas contra vazamento com gaxetas de borracha EPDM vulcanizadas",
        "Proteção extra anti-impacto externa excelente auto-limpante"
      ],
      client: "Letícia M. (Arquiteta)",
      location: "Quinta da Baroneza, Bragança Paulista",
      feedback: "A escolha dos vidros refletivos permitiu aproveitar o espaço gourmet sob o sol forte sem sensação de abafamento. É perfeito!"
    },
    {
      id: 6,
      title: "Fachada de Vidro Glazing Monumental",
      category: "Corporativo",
      desc: "Projeto de pele de vidro (Structural Glazing) para a recepção de uma clínica médica de alto nível, integrando sofisticação e imponência.",
      img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800",
      specs: [
        "Vidros Laminados de Alta Performance Térmica de 14mm",
        "Fixação de alta tecnologia com silicone de cura neutra estrutural premium",
        "Logística pesada com guindaste para montagem rápida e milimétrica",
        "Vedação estanque contra chuvas tempestuosas e ventos fortes",
        "Norma Técnica Aplicada: ABNT NBR 10821"
      ],
      client: "Clínica Lumine",
      location: "Valinhos",
      feedback: "A fachada monumental tornou nossa clínica uma referência visual na região. Profissionalismo exemplar do início ao fim."
    }
  ];

  const filteredProjects = activeFilter === "Todos" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } }
  };

  return (
    <section id="projetos" className="section-padding bg-slate-900 text-white relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-[0.3em] mb-4">
            <span className="w-8 h-px bg-blue-400" />
            Galeria de Sucesso
            <span className="w-8 h-px bg-blue-400" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Engenharia Aplicada em <br />
            <span className="text-blue-400 italic font-light">Projetos Reais.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed font-light">
            Navegue por nossas principais obras e confira as especificações técnicas de cada solução planejada sob medida.
          </p>
        </div>

        {/* Categories Tab Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all ${
                activeFilter === cat
                  ? "bg-brand-blue text-white shadow-lg shadow-blue-500/25"
                  : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="group bg-white/5 border border-white/10 rounded-[32px] overflow-hidden cursor-pointer backdrop-blur-md hover:bg-white/10 hover:border-blue-500/30 transition-all duration-500 flex flex-col h-full"
            >
              <div className="relative h-72 overflow-hidden">
                <LazyLoadImage
                  src={project.img}
                  alt={project.title}
                  effect="blur"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  wrapperClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Expand Indicator Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-blue-600/30 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-500">
                  <div className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-sm">
                    Ver Detalhes Técnicos
                    <Maximize2 size={16} />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 text-blue-300 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                  {project.category}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                  <MapPin size={12} className="text-blue-400" />
                  {project.location}
                </p>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 font-light text-sm leading-relaxed mb-6 flex-grow">
                  {project.desc}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="text-xs text-blue-400 font-bold uppercase tracking-wider flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    Mais detalhes <ArrowRight size={14} />
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-blue-500 text-blue-500" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Rich Interactive Expansion Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-6 bg-slate-950/95 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-white/10 w-full max-w-5xl rounded-[40px] overflow-hidden shadow-2xl relative max-h-[90vh] md:max-h-[85vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 bg-slate-950/70 hover:bg-red-500/20 text-white hover:text-red-400 w-12 h-12 rounded-full flex items-center justify-center border border-white/10 transition-all pointer-events-auto"
              >
                <X size={24} />
              </button>

              <div className="overflow-y-auto flex-1 scrollbar-thin">
                <div className="grid md:grid-cols-2 h-full">
                  {/* Photo Side */}
                  <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden bg-slate-950">
                    <LazyLoadImage
                      src={selectedProject.img}
                      alt={selectedProject.title}
                      effect="blur"
                      className="w-full h-full object-cover"
                      wrapperClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-slate-900/10 md:to-slate-900" />
                    <div className="absolute bottom-6 left-6 z-10">
                      <span className="bg-blue-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                        {selectedProject.category}
                      </span>
                    </div>
                  </div>

                  {/* Info and Specs Side */}
                  <div className="p-8 md:p-12 flex flex-col justify-between space-y-8">
                    <div>
                      <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider mb-3">
                        <MapPin size={14} className="text-blue-500" />
                        {selectedProject.location}
                      </div>
                      <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                        {selectedProject.title}
                      </h3>
                      <p className="text-slate-300 font-light leading-relaxed text-base mb-8">
                        {selectedProject.desc}
                      </p>

                      {/* Technical Details */}
                      <div className="mb-8">
                        <h4 className="font-display font-semibold text-lg text-white mb-4 flex items-center gap-2">
                          <Wrench size={18} className="text-blue-400" />
                          Memória Técnica de Engenharia:
                        </h4>
                        <ul className="space-y-3">
                          {selectedProject.specs.map((spec, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                              <CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0" />
                              <span className="leading-relaxed">{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Client testimonial embedded right here */}
                      <div className="bg-white/5 border border-white/10 rounded-3xl p-6 relative">
                        <Quote className="absolute top-4 right-4 text-blue-500/10 w-12 h-12" />
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
                          ))}
                        </div>
                        <p className="italic text-slate-300 text-sm leading-relaxed mb-4">
                          "{selectedProject.feedback}"
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="text-xs font-bold text-white">
                            {selectedProject.client}
                          </div>
                          <div className="text-[10px] text-blue-400 uppercase tracking-widest font-black">
                            Cliente Verificado
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-6 border-t border-white/15">
                      <a
                        href={`https://wa.me/5519987212422?text=Olá,%20gostaria%20de%20um%20projeto%20espetacular%20semelhante%20ao%20"${encodeURIComponent(selectedProject.title)}"%20que%20vi%20no%20portfólio.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp w-full group flex items-center justify-center gap-2 rounded-full"
                      >
                        Pedir Orçamento
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const ServiceArea = () => {
  const cities = ["São Paulo (Capital)", "Campinas", "Valinhos", "Vinhedo", "Indaiatuba", "Paulínia", "Sumaré", "Hortolândia", "Americana", "Santa Bárbara d'Oeste"];
  
  return (
    <section className="section-padding bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Onde Atendemos</h2>
            <p className="text-slate-400 mb-6 text-base leading-relaxed">Logística própria para garantir rapidez e segurança no transporte de vidros em toda a macrometrópole paulista.</p>
            <div className="grid grid-cols-2 gap-4">
              {cities.map(c => (
                <div key={c} className="flex items-center gap-2 text-slate-300">
                  <MapPin size={16} className="text-blue-500" />
                  <span className="text-sm font-medium">{c}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-[40px] border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="text-blue-500" />
              Certificações Técnicas
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <CheckCircle2 className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">ABNT NBR 7199</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">Vidros na construção civil — Projeto, execução e aplicações seguras.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <CheckCircle2 className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Selo de Qualidade Inmetro</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">Garantia de resistência mecânica e segurança em vidros temperados.</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10 flex justify-around opacity-50 grayscale contrast-125">
                <div className="font-black text-2xl tracking-tighter">ABNT</div>
                <div className="font-black text-2xl tracking-tighter italic">INMETRO</div>
                <div className="font-black text-2xl tracking-tighter">NBR</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const MaintenanceTips = () => {
  const tips = [
    { icon: <Sparkles size={24} />, title: "Limpeza de Box", desc: "Use água morna e sabão neutro. Evite esponjas de aço para não riscar o vidro e comprometer a estética." },
    { icon: <Droplets size={24} />, title: "Vedações", desc: "Verifique o silicone anualmente para evitar infiltrações e o acúmulo de mofo nas bordas." },
    { icon: <Wrench size={24} />, title: "Roldanas", desc: "Se o vidro estiver pesado ou fazendo barulho, pode ser hora de lubrificar ou trocar as roldanas." },
  ];

  return (
    <section className="section-padding bg-slate-50">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Dicas de Manutenção</h2>
          <p className="text-slate-500">Aprenda a cuidar do seu vidro para que ele mantenha o brilho e a segurança por anos.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {tips.map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-blue-50 text-brand-blue rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-500">
                {t.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{t.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};



const Process = () => {
  const steps = [
    { title: 'Solicita orçamento', desc: 'Apenas um clique no botão de WhatsApp para falar com nossos técnicos especialistas de plantão.', icon: <MessageSquare size={32} />, step: '01' },
    { title: 'Medição gratuita', desc: 'Nossos consultores técnicos vão até o seu local fazer a medição milimétrica a laser com rapidez e sem compromisso.', icon: <Ruler size={32} />, step: '02' },
    { title: 'Instalação no prazo', desc: 'Sua instalação rápida e limpa executada por instaladores credenciados sob rígidas normas de segurança.', icon: <Wrench size={32} />, step: '03' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="section-padding bg-white overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">Orçamento em 3 passos simples</h2>
          <p className="text-slate-500 text-base">Praticidade e rapidez para tirar seu projeto do papel hoje mesmo.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-0" />
          
          {steps.map((s) => (
            <motion.div 
              key={s.title}
              variants={itemVariants}
              className="relative z-10 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center hover:shadow-xl transition-shadow duration-500"
            >
              <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-2xl flex items-center justify-center mx-auto mb-6 relative">
                {s.icon}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-blue text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {s.step}
                </div>
              </div>
              <h3 className="font-bold text-xl mb-3">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};


const Differentials = () => {
  const diffs = [
    { 
      title: 'Medição Gratuita', 
      desc: 'Consultores técnicos vão ao seu local fazer a medição milimétrica sem custo ou compromisso.', 
      icon: <Ruler className="text-blue-600 w-7 h-7" strokeWidth={1.5} /> 
    },
    { 
      title: 'Instalação com Garantia', 
      desc: 'Garantia técnica estrutural completa em todas as vedações, componentes e acabamentos.', 
      icon: <ShieldCheck className="text-blue-600 w-7 h-7" strokeWidth={1.5} /> 
    },
    { 
      title: 'Certificação ABNT', 
      desc: 'Segurança extrema baseada rigorosamente nas normas técnicas ABNT NBR 7199 de engenharia vidreira.', 
      icon: <Award className="text-blue-600 w-7 h-7" strokeWidth={1.5} /> 
    },
    { 
      title: 'Residencial & Comercial', 
      desc: 'Projetos de residência de alto luxo ou fechamentos corporativos e comerciais de alta performance.', 
      icon: <Columns className="text-blue-600 w-7 h-7" strokeWidth={1.5} /> 
    },
    { 
      title: 'Orçamento em até 2h', 
      desc: 'Agilidade corporativa incomparável para receber seu memorial técnico rápido sem perder tempo.', 
      icon: <Zap className="text-blue-600 w-7 h-7" strokeWidth={1.5} /> 
    },
  ];

  const activities = [
    { city: 'Campinas', service: 'box de banheiro' },
    { city: 'São Paulo (Vila Mariana)', service: 'fechamento de sacada' },
    { city: 'Valinhos', service: 'espelhos de cristal' },
    { city: 'Campinas (Cambuí)', service: 'divisória de vidro' },
    { city: 'Alphaville', service: 'guarda-corpo de vidro' },
    { city: 'Jundiaí', service: 'portas sob medida' },
    { city: 'Piracicaba', service: 'cobertura de vidro' }
  ];

  const [activityIndex, setActivityIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivityIndex((prev) => (prev + 1) % activities.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -25 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="diferenciais" className="py-16 bg-slate-50 relative overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <motion.div variants={itemVariants} className="relative flex flex-col justify-between h-full">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                Por que escolher a nossa engenharia?
              </h2>
              <p className="text-slate-600 text-sm mb-8 leading-relaxed">
                Combinamos a precisão técnica da ABNT com um atendimento focado na sua paz de espírito.
              </p>
              
              <div className="flex flex-col gap-y-5 mb-8 relative">
                {diffs.map((d) => (
                  <div key={d.title} className="flex gap-4 items-start group">
                    <div className="w-11 h-11 bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-slate-100 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-blue-100 group-hover:shadow-[0_8px_30px_rgba(37,99,235,0.06)]">
                      <div className="scale-90">{d.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 mb-1 leading-snug tracking-tight">{d.title}</h4>
                      <p className="text-xs text-slate-500 leading-normal font-normal">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <a 
                href="https://wa.me/5519987212422" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp group inline-flex rounded-full"
              >
                Garantir Projeto
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            className="bg-brand-dark rounded-3xl p-6 sm:p-8 md:p-10 text-white relative overflow-hidden flex flex-col justify-center h-full"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-transparent pointer-events-none" />
            <div className="relative z-10 w-full">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">PAZ DE ESPÍRITO <br /><span className="text-blue-400">estrutural.</span></h3>
              <p className="text-slate-300 italic text-xs md:text-sm mb-6 pb-2 border-b border-white/5">
                "Garantimos a segurança técnica absoluta e o acabamento impecável que seu imóvel de alto padrão merece."
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-950/40 border border-white/5 p-4 rounded-2xl flex items-center gap-4 hover:border-blue-500/25 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 shadow-inner">
                    <CheckCircle2 className="text-blue-400 w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg md:text-xl font-bold text-white tracking-tight leading-none mb-1">4.500+</div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold font-sans">Obras Efetuadas</div>
                  </div>
                </div>
                
                <div className="bg-slate-950/40 border border-white/5 p-4 rounded-2xl flex items-center gap-4 hover:border-blue-500/25 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 shadow-inner">
                    <MapPin className="text-blue-400 w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg md:text-xl font-bold text-white tracking-tight leading-none mb-1 font-sans">Capital & ABC</div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold font-sans">Logística Própria</div>
                  </div>
                </div>

                <div className="bg-slate-950/40 border border-white/5 p-4 rounded-2xl flex items-center gap-4 hover:border-blue-500/25 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 shadow-inner">
                    <ShieldCheck className="text-blue-400 w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg md:text-xl font-bold text-white tracking-tight leading-none mb-1">12 meses</div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold font-sans">Garantia Total</div>
                  </div>
                </div>

                <div className="bg-slate-950/40 border border-white/5 p-4 rounded-2xl flex items-center gap-4 hover:border-blue-500/25 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 shadow-inner">
                    <Award className="text-blue-400 w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg md:text-xl font-bold text-white tracking-tight leading-none mb-1">Rigoroso</div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold font-sans">Padrão NBR</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    { name: 'Ricardo Santos', role: 'Arquiteto (Divisórias de Vidro Corporativas)', text: 'A DUNO é minha parceira número um em projetos de alto padrão em São Paulo. A precisão técnica e o acabamento das divisórias de vidro são admiráveis.', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150', rating: 5 },
    { name: 'Ana Paula Lima', role: 'Proprietária (Box de Alto Padrão e Espelhos)', text: 'Fiquei maravilhada com o atendimento! Meu box para banheiro e o espelho do lavabo foram medidos a laser e instalados antes do prazo. Tudo impecável.', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150', rating: 5 },
    { name: 'Juliana Capellini', role: 'Proprietária (Fechamento de Sacada Retrátil)', text: 'Fechamos a sacada do nosso apartamento na Vila Mariana com vidro de 10mm. O trabalho de vedação acústica e de contenção contra chuvas fortes ficou espetacular, a equipe da DUNO é extremamente atenciosa e limpa.', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150', rating: 5 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="section-padding bg-slate-950 text-white relative overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-400/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-px bg-blue-500" />
            <span className="text-blue-400 font-bold text-xs uppercase tracking-[0.4em]">Experiências DUNO</span>
            <span className="w-8 h-px bg-blue-500" />
          </motion.div>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-3 leading-tight text-white">
            O Veredito de Quem Confia
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm font-normal leading-relaxed">
            Mais que instalações, entregamos a tranquilidade de um serviço executado com precisão milimétrica de quem é DUNO.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={t.name}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-3xl relative overflow-hidden flex flex-col h-full"
            >
              {/* Card Numbering */}
              <div className="absolute -top-3 -right-3 text-white/5 text-[80px] font-display font-black leading-none pointer-events-none group-hover:text-blue-500/10 transition-colors">
                0{idx + 1}
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-blue-500 text-blue-500" />
                ))}
              </div>
              
              <Quote className="text-blue-500/20 mb-4" size={32} />
              
              <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow italic font-light">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity" />
                  <LazyLoadImage 
                    src={t.img} 
                    alt={t.name} 
                    effect="blur"
                    className="w-12 h-12 rounded-xl object-cover relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500" 
                    wrapperClassName="w-12 h-12 rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-600 rounded-lg flex items-center justify-center border-2 border-slate-950 z-20">
                    <CheckCircle2 className="text-white w-2.5 h-2.5" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-white text-base leading-tight">{t.name}</h4>
                  <p className="text-[9px] uppercase tracking-[0.15em] text-blue-400 font-bold mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const TrustedBy = () => {
  const brands = ['Blindex', 'Cebrace', 'Guardian', 'Saint-Gobain', 'Udiaço', 'Ferragens 3000'];
  return (
    <div className="bg-white py-12 border-y border-slate-100 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6"
      >
        <p className="text-center text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold mb-8">Parceiros & Fornecedores de Elite</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale">
          {brands.map((brand, i) => (
            <motion.span 
              key={brand} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-xl md:text-2xl font-display font-black tracking-tighter hover:opacity-100 hover:grayscale-0 transition-all cursor-default"
            >
              {brand}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="contato" className="section-padding bg-white">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Canais de Comunicação
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            Fale diretamente com orçamentistas experientes. Projetos sob medida com acabamento padrão arquitetura de alto luxo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <motion.div variants={itemVariants} className="bg-brand-dark text-white p-8 rounded-3xl flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
              <Mail className="text-blue-400" />
            </div>
            <span className="text-xs uppercase tracking-widest text-slate-400 mb-1">E-mail Corporativo</span>
            <p className="font-bold">dunoengenharia.contato@gmail.com</p>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-brand-dark text-white p-8 rounded-3xl flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
              <Clock className="text-blue-400" />
            </div>
            <span className="text-xs uppercase tracking-widest text-slate-400 mb-1">Horário Operacional</span>
            <p className="font-bold">09:00 - 18:00</p>
            <p className="text-xs text-slate-400">Segunda a Sábado</p>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-brand-dark text-white p-8 rounded-3xl flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
              <MapPin className="text-blue-400" />
            </div>
            <span className="text-xs uppercase tracking-widest text-slate-400 mb-1">Localização</span>
            <p className="font-bold uppercase">Atendimento em Domicílio e Showroom</p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <h3 className="font-display text-3xl font-bold mb-6">O que ter <span className="text-brand-blue">em mãos?</span></h3>
            <p className="text-slate-600 mb-8">Para um orçamento técnico imediato, forneça as seguintes informações:</p>
            
            <div className="space-y-6">
              {[
                { id: '01', title: 'Medidas Gerais', desc: 'Largura e altura aproximadas do vão desejado.' },
                { id: '02', title: 'Evidência Visual', desc: 'Fotos do local facilitam a análise estrutural rápida.' },
                { id: '03', title: 'Configuração', desc: 'Cor de perfis e ferragens (Inox, Preto, Prata).' },
              ].map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-brand-blue shrink-0">
                    {item.id}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a 
                href="https://wa.me/5519987212422" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-whatsapp group rounded-full"
              >
                Falar Conosco
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50 relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197503123456!2d-46.652392!3d-23.564391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1713212345678!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
              <div className="absolute top-6 right-6 bg-white p-4 rounded-2xl shadow-xl max-w-[200px] pointer-events-none group-hover:opacity-0 transition-opacity">
                <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Unidade Técnica</div>
                <p className="text-sm font-bold leading-tight">Cobertura total em toda Grande SP & Interior.</p>
                <div className="flex items-center gap-1 mt-2 text-[10px] text-brand-blue font-bold">
                  <div className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-pulse" />
                  Atendimento Especializado
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: 'Vocês fazem medição em casa?', a: 'Sim! Realizamos a medição técnica em domicílio de forma 100% gratuita e sem nenhum compromisso. Um especialista de nossa equipe vai até o local com trenas e medidores a laser de alta precisão para garantir que cada centímetro do seu projeto fique perfeito.' },
    { q: 'Qual o prazo de entrega e instalação?', a: 'Para projetos padrão, como box de banheiro e espelhos sob medida, o prazo médio de instalação é de até 5 dias úteis após a medição final. Para fechamentos maiores ou sacadas, o prazo varia de 15 a 20 dias úteis.' },
    { q: 'O vidro temperado é mais resistente que o comum?', a: 'Com certeza. O vidro temperado passa por um tratamento térmico que o torna até 5 vezes mais resistente a choques mecânicos e térmicos. Além disso, em caso de quebra acidental, ele se fragmenta em pequenos pedaços arredondados não cortantes, garantindo absoluta proteção.' },
    { q: 'Atendem finais de semana?', a: 'Nossos técnicos e consultores estão disponíveis para atendimento e desenvolvimento de orçamentos rápidos via WhatsApp aos sábados também. As visitas para instalações e medições no seu endereço podem ser convenientemente agendadas para as manhãs de sábado.' },
    { q: 'Como solicitar um orçamento?', a: 'Solicitar o seu orçamento é extremamente simples e leva segundos! Basta clicar em qualquer um dos botões do WhatsApp distribuídos pelo site para falar com nossa equipe comercial rápida. Enviar uma foto do local ajudará a acelerar o retorno.' },
  ];

  return (
    <section className="section-padding bg-slate-50 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto px-6"
      >
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">Dúvidas Frequentes</h2>
          <p className="text-slate-500 text-base">Tudo o que você precisa saber antes de iniciar seu projeto.</p>
        </div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-800">{faq.q}</span>
                <ChevronRight className={`text-brand-blue transition-transform ${openIndex === i ? 'rotate-90' : ''}`} size={20} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 border-t border-slate-50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-500 mb-6 font-medium">Ainda tem alguma dúvida específica?</p>
          <a 
            href="https://wa.me/5519987212422" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp group rounded-full"
          >
            Tirar Dúvidas
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      <BackToTop />
      <motion.a 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/5519987212422"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group relative"
      >
        <div className="absolute right-full mr-3 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Falar com consultor
        </div>
        <FontAwesomeIcon icon={faWhatsapp} className="text-3xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </motion.a>
    </div>
  );
};

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="bg-white text-slate-900 p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-slate-100 transition-all border border-slate-100"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <span className="font-display font-black text-2xl tracking-[0.25em] text-blue-500">DUNO</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Especialistas em engenharia vidreira de alto desempenho. Precisão técnica em box, espelhos e projetos sob medida em São Paulo e Região.
            </p>
            <div className="flex gap-4">
              <motion.a 
                whileHover={{ scale: 1.1, backgroundColor: "#E1306C" }}
                whileTap={{ scale: 0.9 }}
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, backgroundColor: "#1877F2" }}
                whileTap={{ scale: 0.9 }}
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all"
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, backgroundColor: "#0A66C2" }}
                whileTap={{ scale: 0.9 }}
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all"
              >
                <Linkedin size={18} />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-500">Nossas especialidades</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#servicos" className="hover:text-white transition-colors">Box de banheiro</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Espelhos sob medida</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Janelas de vidro</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Troca de vidro quebrado</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Portas de vidro</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-500">Mapa do site</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#projetos" className="hover:text-white transition-colors">Projetos</a></li>
              <li><a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-500">Atendimento comercial</h4>
            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase text-slate-500 block mb-1">Telefone</span>
                <a href="tel:+5519987212422" className="text-xl font-bold hover:text-blue-400 transition-colors">(19) 98721-2422</a>
              </div>
              <a 
                href="https://wa.me/5519987212422" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp group rounded-full"
              >
                Pedir Orçamento
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold">
          <p>© 2026 DUNO Engenharia — Soluções em vidros de alto padrão. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <span>ABNT NBR</span>
            <span>Segurança Certificada</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const NichesGallery = () => {
  const niches = [
    { id: 1, title: "Especialidade 1", img: "images/nicho_1.png" },
    { id: 2, title: "Especialidade 2", img: "images/nicho_2.png" },
    { id: 3, title: "Especialidade 3", img: "images/nicho_3.png" },
    { id: 4, title: "Especialidade 4", img: "images/nicho_4.png" },
    { id: 5, title: "Especialidade 5", img: "images/nicho_5.png" },
    { id: 6, title: "Especialidade 6", img: "images/nicho_6.png" },
    { id: 7, title: "Especialidade 7", img: "images/nicho_7.png" },
    { id: 8, title: "Especialidade 8", img: "images/nicho_8.png" },
  ];

  return (
    <section id="nichos" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              Nossos <span className="text-blue-600">Projetos & Nichos</span>
            </h2>
            <p className="text-lg text-slate-600">
              Conheça os diferentes nichos e segmentos que atendemos com a nossa excelência e qualidade padrão.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {niches.map((nicho, index) => (
            <motion.div
              key={nicho.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-100"
            >
              <div className="h-[400px] overflow-hidden relative group">
                <img 
                  src={nicho.img} 
                  alt={nicho.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {nicho.title}
                  </h3>
                  <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen relative">
      <ScrollProgress />
      {/* Subtle Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      
      <Navbar />
      <main className="relative">
        {/* Global Floating Elements with Parallax */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <motion.div 
            style={{ y: useTransform(useScroll().scrollYProgress, [0, 1], [0, -200]) }}
            className="absolute top-[10%] left-[5%] w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"
          />
          <motion.div 
            style={{ y: useTransform(useScroll().scrollYProgress, [0, 1], [0, 300]) }}
            className="absolute top-[40%] right-[5%] w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"
          />
          <motion.div 
            style={{ y: useTransform(useScroll().scrollYProgress, [0, 1], [0, -400]) }}
            className="absolute bottom-[20%] left-[10%] w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
          />
        </div>

        <Hero />
        <About />
        <Services />
        <Process />
        <Differentials />
        <Testimonials />
        <ServiceArea />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scale, 
  ShieldCheck, 
  Users, 
  Briefcase, 
  Gavel, 
  Home, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  Star, 
  Menu, 
  X,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { cn } from './lib/utils';

// --- Types ---
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  caseType: string;
  message: string;
}

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Practice Areas', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "glass-nav py-3" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Scale className={cn("w-8 h-8", isScrolled ? "text-primary" : "text-primary")} />
          <span className={cn("text-2xl font-serif font-bold tracking-tight", isScrolled ? "text-primary" : "text-primary")}>
            BREVANT<span className="text-secondary">LEGAL</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium hover:text-secondary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm py-2 px-5">
            Book Consultation
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary text-center"
              >
                Book Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-secondary/20 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-semibold mb-6">
            <ShieldCheck className="w-4 h-4" />
            Trusted Legal Excellence
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-primary">
            Protecting Your <span className="italic text-secondary">Future</span> with Precision.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
            Brevant Legal provides elite legal counsel for individuals and small businesses. We navigate complex legal landscapes so you can focus on what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary flex items-center justify-center gap-2 group">
              Book a Consultation
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:+1234567890" className="btn-secondary flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-8 border-t border-gray-100 pt-8">
            <div>
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-gray-500">Years Experience</div>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div>
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-gray-500">Success Rate</div>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div>
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-gray-500">Clients Served</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200" 
              alt="Professional Legal Consultation" 
              className="w-full h-[600px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="absolute bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl z-20 border border-gray-100 max-w-xs">
            <div className="flex gap-1 text-secondary mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-sm italic text-gray-600">
              "Brevant Legal handled our corporate restructuring with absolute professionalism. Highly recommended."
            </p>
            <div className="mt-3 font-bold text-xs uppercase tracking-wider">— Sarah Jenkins, CEO</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const differentiators = [
    {
      title: "Elite Expertise",
      desc: "Our attorneys are leaders in their respective fields with decades of combined experience.",
      icon: <Scale className="w-6 h-6" />
    },
    {
      title: "Client-First Approach",
      desc: "We prioritize your goals and provide personalized strategies tailored to your unique needs.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Transparent Communication",
      desc: "No legal jargon. We keep you informed at every step with clear, honest updates.",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Brevant Legal?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine the resources of a large firm with the personalized attention of a boutique practice.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/5 text-primary rounded-lg flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PracticeAreas = () => {
  const services = [
    {
      title: "Corporate Law",
      desc: "Strategic counsel for business formation, contracts, and mergers.",
      who: "Startups & Established Enterprises",
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      title: "Civil Litigation",
      desc: "Aggressive representation in disputes, from breach of contract to torts.",
      who: "Individuals & Businesses",
      icon: <Gavel className="w-8 h-8" />
    },
    {
      title: "Family Law",
      desc: "Compassionate guidance through divorce, custody, and estate planning.",
      who: "Families in Transition",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Real Estate Law",
      desc: "Seamless handling of commercial and residential property transactions.",
      who: "Buyers, Sellers & Developers",
      icon: <Home className="w-8 h-8" />
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">Our Expertise</div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Comprehensive Legal Solutions</h2>
          </div>
          <a href="#contact" className="text-primary font-bold flex items-center gap-2 hover:text-secondary transition-colors group">
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-secondary transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:bg-secondary/10" />
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform origin-left">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.desc}</p>
              <div className="pt-6 border-t border-gray-50">
                <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">Target Audience</div>
                <div className="text-xs font-semibold text-primary">{service.who}</div>
              </div>
              <button className="mt-8 w-full py-3 text-xs font-bold uppercase tracking-widest border border-gray-200 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 border border-white rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 border border-secondary rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="order-2 lg:order-1">
          <div className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">About the Firm</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">A Legacy of Integrity and <span className="italic text-secondary">Unwavering</span> Advocacy.</h2>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            Founded on the principles of transparency and excellence, Brevant Legal was established to bridge the gap between high-stakes legal expertise and client-centered care.
          </p>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            We don't just practice law; we solve problems. Our mission is to provide peace of mind through rigorous strategy and relentless pursuit of our clients' best interests.
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="flex gap-4">
              <CheckCircle2 className="text-secondary w-6 h-6 shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Our Mission</h4>
                <p className="text-sm text-gray-400">To deliver world-class legal results with integrity.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="text-secondary w-6 h-6 shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Our Vision</h4>
                <p className="text-sm text-gray-400">To be the most trusted legal partner for growth.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200" 
              alt="Law Firm Office" 
              className="w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-secondary p-8 rounded-xl shadow-xl hidden md:block">
            <div className="text-4xl font-bold mb-1">100%</div>
            <div className="text-xs uppercase tracking-widest font-bold opacity-80">Client Commitment</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      num: "01",
      title: "Consultation",
      desc: "We begin with a deep dive into your situation to understand your goals and challenges."
    },
    {
      num: "02",
      title: "Evaluation",
      desc: "Our team conducts a thorough legal analysis to identify all potential risks and opportunities."
    },
    {
      num: "03",
      title: "Strategy",
      desc: "We develop a custom roadmap designed to achieve the most favorable outcome efficiently."
    },
    {
      num: "04",
      title: "Resolution",
      desc: "Our attorneys execute the strategy with precision, keeping you informed until the case is closed."
    }
  ];

  return (
    <section id="process" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">Our Process</div>
          <h2 className="text-4xl font-bold text-primary">How We Work For You</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.num} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gray-100 -ml-4 z-0" />
              )}
              <div className="relative z-10">
                <div className="text-6xl font-serif font-bold text-gray-50 mb-4">{step.num}</div>
                <h3 className="text-xl font-bold mb-3 text-primary">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    setIsSubmitted(true);
    // In a real app, send to API
  };

  return (
    <section id="contact" className="section-padding bg-muted">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Let's Discuss Your Case</h2>
          <p className="text-gray-600 text-lg mb-10">
            Don't navigate legal challenges alone. Contact us today for a confidential consultation and take the first step toward resolution.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-secondary shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</div>
                <div className="text-xl font-bold text-primary">+1 (555) 123-4567</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-secondary shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Email Us</div>
                <div className="text-xl font-bold text-primary">contact@brevantlegal.com</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-secondary shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Visit Us</div>
                <div className="text-xl font-bold text-primary">123 Legal Plaza, Suite 500<br />New York, NY 10001</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Message Sent Successfully</h3>
              <p className="text-gray-600">Our team will review your case and contact you within 24 hours.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-secondary font-bold underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
                  <input 
                    {...register("name", { required: true })}
                    className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition-colors"
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-xs text-red-500 mt-1">Required</span>}
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
                  <input 
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition-colors"
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-xs text-red-500 mt-1">Valid email required</span>}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Phone Number</label>
                  <input 
                    {...register("phone", { required: true })}
                    className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition-colors"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Case Type</label>
                  <select 
                    {...register("caseType", { required: true })}
                    className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition-colors appearance-none"
                  >
                    <option value="">Select a service</option>
                    <option value="corporate">Corporate Law</option>
                    <option value="litigation">Civil Litigation</option>
                    <option value="family">Family Law</option>
                    <option value="realestate">Real Estate Law</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Brief Case Summary</label>
                <textarea 
                  {...register("message", { required: true })}
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button type="submit" className="w-full btn-primary py-4 text-lg font-bold">
                Get Legal Help Now
              </button>
              <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest">
                By submitting, you agree to our privacy policy and terms of service.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Scale className="w-8 h-8 text-secondary" />
              <span className="text-2xl font-serif font-bold tracking-tight">
                BREVANT<span className="text-secondary">LEGAL</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Elite legal counsel for the modern world. We protect your future with precision, integrity, and unwavering advocacy.
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
                  <div className="w-4 h-4 bg-white/20 rounded-sm" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-secondary">Practice Areas</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Corporate Law</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Civil Litigation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Family Law</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Real Estate Law</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Estate Planning</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-secondary">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About the Firm</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Legal Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-secondary">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Stay updated with legal insights and firm news.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:outline-none focus:border-secondary w-full"
              />
              <button className="bg-secondary text-primary px-4 py-2 rounded font-bold text-xs uppercase">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-gray-500 font-bold">
          <div>© 2026 Brevant Legal. All Rights Reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
        
        <div className="mt-8 text-[9px] text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
          Disclaimer: The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-secondary/30">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <PracticeAreas />
        <AboutSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

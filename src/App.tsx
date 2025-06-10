import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Monitor, 
  Code2, 
  Cloud, 
  Shield, 
  Smartphone, 
  Brain,
  ChevronRight,
  Users,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Lightbulb,
  Zap,
  Award,
  Target
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['home', 'services', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { 
      icon: <Code2 className="w-12 h-12" />, 
      title: 'Custom Software Development', 
      description: 'Tailored solutions built with modern technologies to solve your unique business challenges',
      gradient: 'from-blue-500 to-purple-600'
    },
    { 
      icon: <Cloud className="w-12 h-12" />, 
      title: 'Cloud Solutions', 
      description: 'Scalable cloud infrastructure and migration services for optimal performance and cost efficiency',
      gradient: 'from-cyan-500 to-blue-600'
    },
    { 
      icon: <Shield className="w-12 h-12" />, 
      title: 'Cybersecurity', 
      description: 'Comprehensive security audits and implementation to protect your digital assets',
      gradient: 'from-green-500 to-teal-600'
    },
    { 
      icon: <Smartphone className="w-12 h-12" />, 
      title: 'Mobile Development', 
      description: 'Native and cross-platform mobile applications with intuitive user experiences',
      gradient: 'from-orange-500 to-red-600'
    },
    { 
      icon: <Brain className="w-12 h-12" />, 
      title: 'AI & Machine Learning', 
      description: 'Intelligent automation and data-driven insights to transform your business processes',
      gradient: 'from-purple-500 to-pink-600'
    },
    { 
      icon: <Monitor className="w-12 h-12" />, 
      title: 'IT Consulting', 
      description: 'Strategic technology consulting to align your IT infrastructure with business goals',
      gradient: 'from-indigo-500 to-blue-600'
    }
  ];

  const stats = [
    { icon: <Lightbulb className="w-8 h-8 text-blue-500" />, number: '24/7', label: 'Support Available' },
    { icon: <Zap className="w-8 h-8 text-blue-500" />, number: '100%', label: 'Project Success' },
    { icon: <Award className="w-8 h-8 text-blue-500" />, number: '5+', label: 'Years Expertise' },
    { icon: <Target className="w-8 h-8 text-blue-500" />, number: '50+', label: 'Solutions Delivered' }
  ];

  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const logoVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Navigation */}
      <motion.nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrollY > 50 ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" : "bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo Section */}
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <a href="/" className="flex items-center space-x-3">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  PP
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-gray-900">PurePixels</span>
                  <span className="text-sm text-blue-600 font-medium">Digital Solutions</span>
                </div>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "services", "about", "contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  className={`capitalize transition-all duration-300 px-3 py-2 rounded-md font-medium ${
                    activeSection === item
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 pt-2 pb-4 space-y-2 bg-white border-t border-gray-100 shadow-lg">
                {["home", "services", "about", "contact"].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md capitalize transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ x: 10 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        id="home" 
        className="pt-32 pb-20 px-4 relative overflow-hidden"
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
            >
              <motion.div
                className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6"
                variants={fadeInUp}
              >
                🚀 Innovative IT Solutions for Modern Businesses
              </motion.div>
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
                variants={fadeInUp}
              >
                Transforming Ideas into
                <motion.span 
                  className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  Digital Reality
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                variants={fadeInUp}
              >
                We deliver cutting-edge IT solutions that drive innovation, enhance efficiency, and accelerate your business growth in the digital age.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={fadeInUp}
              >
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today
                  <ChevronRight className="ml-2 h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Services
                </motion.a>
              </motion.div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 100, scale: 0.8 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Modern Technology Workspace"
                  className="rounded-2xl shadow-2xl"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-purple-600/20 rounded-2xl"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center"
                  animate={{ 
                    y: [-10, 10, -10],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Code2 className="w-8 h-8 text-blue-600" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Brain className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        id="services" 
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
        ref={servicesRef}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <motion.div
              className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4"
              variants={fadeInUp}
            >
              Our Expertise
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive IT Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end technology solutions tailored to your business needs
            </p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <motion.div
                  className="mt-4 text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  Learn more →
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white relative overflow-hidden"
        ref={aboutRef}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <motion.div
                className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
                variants={fadeInUp}
              >
                Why Choose Us
              </motion.div>
              <h2 className="text-4xl font-bold mb-8">
                Your Trusted Technology Partner
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                As a dynamic startup, we combine fresh perspectives with proven expertise to deliver innovative solutions that drive your business forward.
              </p>
              <div className="space-y-6">
                {[
                  'Agile development with rapid deployment cycles',
                  'Expert team with cutting-edge technology skills',
                  'Personalized service and dedicated project management',
                  'Cost-effective solutions without compromising quality',
                  '24/7 support and continuous optimization'
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start group"
                    variants={fadeInUp}
                    whileHover={{ x: 10 }}
                  >
                    <CheckCircle2 className="h-6 w-6 text-green-400 mr-4 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <p className="text-blue-100 text-lg">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="grid grid-cols-2 gap-6"
              ref={statsRef}
              variants={staggerContainer}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className="flex justify-center mb-4"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={statsInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div 
                    className="text-4xl font-bold text-white mb-2"
                    initial={{ opacity: 0 }}
                    animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  >
                    {stat.number}
                  </motion.div>
                  <motion.div 
                    className="text-blue-200 font-medium"
                    initial={{ opacity: 0 }}
                    animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <motion.div
              className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4"
              variants={fadeInUp}
            >
              Get In Touch
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? We're here to help you succeed.
            </p>
          </motion.div>
          <motion.div 
            className="max-w-2xl mx-auto"
            variants={staggerContainer}
          >
            <motion.form 
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
              variants={fadeInUp}
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <motion.div variants={fadeInUp}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 hover:border-blue-400"
                  />
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 hover:border-blue-400"
                  />
                </motion.div>
              </div>
              <motion.div className="mb-6" variants={fadeInUp}>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <input
                  type="text"
                  placeholder="Your Company Name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 hover:border-blue-400"
                />
              </motion.div>
              <motion.div className="mb-6" variants={fadeInUp}>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                <textarea
                  placeholder="Tell us about your project requirements..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 hover:border-blue-400 resize-none"
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                variants={fadeInUp}
              >
                Send Message
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="flex items-center mb-6 space-x-3"
                variants={logoVariants}
                initial="initial"
                whileHover="hover"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  PP
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold">PurePixels</span>
                  <span className="text-sm text-blue-400 font-medium">Digital Solutions</span>
                </div>
              </motion.div>
              <p className="text-gray-400 leading-relaxed">
                Transforming businesses through innovative technology solutions and exceptional service.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'Services', 'About', 'Contact'].map((item) => (
                  <motion.li 
                    key={item}
                    whileHover={{ x: 5 }}
                  >
                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                      <ChevronRight className="w-4 h-4 mr-1 opacity-0 hover:opacity-100 transition-opacity" />
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
              <ul className="space-y-3">
                {['Software Development', 'Cloud Solutions', 'Cybersecurity', 'Mobile Apps', 'AI Solutions', 'IT Consulting'].map((item) => (
                  <motion.li 
                    key={item}
                    whileHover={{ x: 5 }}
                  >
                    <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                      <ChevronRight className="w-4 h-4 mr-1 opacity-0 hover:opacity-100 transition-opacity" />
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-6 text-white">Contact Info</h3>
              <ul className="space-y-4 text-gray-400">
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-center"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Info@purepixeltechnologies.com
                </motion.li>
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-center"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  sales@purepixeltechnologies.com
                </motion.li>
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-center"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  +91 79030041257
                </motion.li>
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                  <div>
                    <div className="font-medium text-white mb-1">Purepixel Technologies Pvt Ltd</div>
                    <div>Jugal Hari Enclave, 3rd Floor</div>
                    <div>Karamtoli, Ranchi - 834008</div>
                    <div>Jharkhand, India</div>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div 
            className="border-t border-gray-800 mt-12 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-center md:text-left">
                &copy; {new Date().getFullYear()} PurePixel Technologies. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <motion.a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  Privacy Policy
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  Terms of Service
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default App;

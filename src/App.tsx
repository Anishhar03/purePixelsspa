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
  Globe,
  Zap,
  Award
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
    { icon: <Code2 className="w-12 h-12" />, title: 'Custom Software Development', description: 'Tailored solutions to meet your unique business needs' },
    { icon: <Cloud className="w-12 h-12" />, title: 'Cloud Solutions', description: 'Scalable and secure cloud infrastructure services' },
    { icon: <Shield className="w-12 h-12" />, title: 'Cybersecurity', description: 'Comprehensive security solutions for your digital assets' },
    { icon: <Smartphone className="w-12 h-12" />, title: 'Mobile Development', description: 'Native and cross-platform mobile applications' },
    { icon: <Brain className="w-12 h-12" />, title: 'AI & Machine Learning', description: 'Intelligent solutions for business automation' },
    { icon: <Monitor className="w-12 h-12" />, title: 'IT Consulting', description: 'Strategic technology consulting and planning' }
  ];

  const stats = [
    { icon: <Globe className="w-8 h-8 text-blue-500" />, number: '150+', label: 'Clients Worldwide' },
    { icon: <Zap className="w-8 h-8 text-blue-500" />, number: '200+', label: 'Projects Completed' },
    { icon: <Award className="w-8 h-8 text-blue-500" />, number: '15+', label: 'Years Experience' },
    { icon: <Users className="w-8 h-8 text-blue-500" />, number: '50+', label: 'Expert Team' }
  ];

  // const navVariants = {
  //   hidden: { y: -100, opacity: 0 },
  //   visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  // };

  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const logoVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <motion.nav
  className={fixed w-full z-50 transition-all duration-300 ${
    scrollY > 50 ? "bg-white/90 backdrop-blur-sm shadow-md" : "bg-transparent"
  }}
  initial="hidden"
  animate="visible"
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
          <motion.img
            src="/photos/logo.png"
            alt="PurePixels"
            className="h-16 w-auto transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <div className="flex flex-col leading-tight">
            {/* <span className="text-xl font-bold leading-none">PurePixels</span>
            <span className="text-xs text-blue-400 font-medium">
              Digital Solutions
            </span> */}
          </div>
        </a>
      </motion.div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        {["home", "services", "about", "contact"].map((item) => (
          <motion.a
            key={item}
            href={#${item}}
            className={capitalize transition-colors duration-200 ${
              activeSection === item
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            {item}
          </motion.a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden"
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
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {["home", "services", "about", "contact"].map((item) => (
            <motion.a
              key={item}
              href={#${item}}
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 capitalize"
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
        className="pt-32 pb-20 px-4"
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
            >
              <motion.h1 
                className="text-5xl font-bold text-gray-900 leading-tight mb-6"
                variants={fadeInUp}
              >
                Transforming Ideas into
                <motion.span 
                  className="text-blue-600 block"
                  animate={{ 
                    color: ['#2563EB', '#3B82F6', '#60A5FA', '#2563EB'],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  Digital Reality
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600 mb-8"
                variants={fadeInUp}
              >
                We deliver end-to-end IT solutions that drive innovation and accelerate your business growth.
              </motion.p>
              <motion.a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </motion.a>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 100 }}
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80"
                alt="Technology"
                className="rounded-lg shadow-2xl"
              />
              <motion.div
                className="absolute inset-0 bg-blue-600/20 rounded-lg"
                animate={{
                  opacity: [0, 0.2, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        id="services" 
        className="py-20 bg-gray-50"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to meet your business objectives
            </p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="text-blue-600 mb-4"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="py-20"
        ref={aboutRef}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose PurePixels?
              </h2>
              <div className="space-y-4">
                {[
                  'Expert team with diverse technical expertise',
                  'Proven track record of successful deliveries',
                  'Innovative solutions using cutting-edge technologies',
                  'Dedicated support and maintenance'
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start"
                    variants={fadeInUp}
                    whileHover={{ x: 10 }}
                  >
                    <CheckCircle2 className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" />
                    <p className="text-gray-600">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="grid grid-cols-2 gap-4"
              ref={statsRef}
              variants={staggerContainer}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300"
                  variants={fadeInUp}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={statsInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div 
                    className="text-3xl font-bold text-blue-600 mb-2"
                    initial={{ opacity: 0 }}
                    animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    {stat.number}
                  </motion.div>
                  <motion.div 
                    className="text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
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
        className="py-20 bg-gray-50"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Let's Start Your Project
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to transform your business? Get in touch with us today.
            </p>
          </motion.div>
          <motion.div 
            className="max-w-xl mx-auto"
            variants={staggerContainer}
          >
            <form className="space-y-6">
              <motion.div variants={fadeInUp}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="flex items-center mb-4 space-x-2"
                variants={logoVariants}
                initial="initial"
                whileHover="hover"
              >
                <div className="relative">
                <motion.img 
      src="/photos/logo.png" 
      alt="PurePixels" 
      className="h-14 w-auto transition-transform duration-300 ease-in-out hover:scale-110"
    />
                </div>
                {/* <div className="flex flex-col">
                  <span className="text-xl font-bold leading-none">PurePixels</span>
                  <span className="text-xs text-blue-400 font-medium">Digital Solutions</span>
                </div> */}
              </motion.div>
              <p className="text-gray-400">
                Transforming businesses through innovative technology solutions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'Services', 'About', 'Contact'].map((item) => (
                  <motion.li 
                    key={item}
                    whileHover={{ x: 5 }}
                  >
                    <a href={#${item.toLowerCase()}} className="text-gray-400 hover:text-white transition-colors duration-200">
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
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {['Software Development', 'Cloud Solutions', 'Cybersecurity', 'IT Consulting'].map((item) => (
                  <motion.li 
                    key={item}
                    whileHover={{ x: 5 }}
                  >
                    <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">
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
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <motion.li whileHover={{ x: 5 }}>Info@purepixeltechnologies.com</motion.li>
                <motion.li whileHover={{ x: 5 }}>sales@purepixeltechnologies.com</motion.li>
                <motion.li whileHover={{ x: 5 }}>79030041257</motion.li>
                <motion.li whileHover={{ x: 5 }}>Address -
                      Purepixel Technologies Pvt Ltd
                       Jugal Hari Enclave 
                        3rd Floor , Karamtoli, Ranchi
                          834008
                </motion.li>
              </ul>
            </motion.div>
          </div>
          <motion.div 
            className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p>&copy; {new Date().getFullYear()} PurePixel. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

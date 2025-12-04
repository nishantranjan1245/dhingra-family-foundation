import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Heart,
  Sparkles,
  ChevronRight
} from "lucide-react";

// Logo URLs
const LOGO_URL = "/images/logo.png";
const FOOTER_LOGO_URL = "/images/footer-logo.png";

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Page title mapping
  const pageTitles = {
    Home: "Dhingra Family Foundation – Together for a Better Tomorrow",
    Accessibility: "Accessibility - Dhingra Family Foundation",
    AssistiveDevices: "Assistive Devices - Dhingra Family Foundation",
    Inclusion: "Inclusion - Dhingra Family Foundation",
    About: "About Us - Dhingra Family Foundation",
    Contact: "Contact - Dhingra Family Foundation",
    Programs: "Programs - Dhingra Family Foundation",
    AccessibilityGuides: "Accessibility Guides - Dhingra Family Foundation",
    DevicesInfo: "Devices Info - Dhingra Family Foundation",
    InclusionTools: "Inclusion Tools - Dhingra Family Foundation",
    ResearchReports: "Research & Reports - Dhingra Family Foundation",
    BlogInsights: "Blog & Insights - Dhingra Family Foundation",
    Donate: "Donate - Dhingra Family Foundation",
    PrivacyPolicy: "Privacy Policy - Dhingra Family Foundation",
    TermsOfService: "Terms of Service - Dhingra Family Foundation",
    RefundPolicy: "Refund Policy - Dhingra Family Foundation",
    Disclaimer: "Disclaimer - Dhingra Family Foundation",
    Sitemap: "Sitemap - Dhingra Family Foundation",
    CookiesPolicy: "Cookies Policy - Dhingra Family Foundation"
  };

  useEffect(() => {
    document.title = pageTitles[currentPageName] || "Dhingra Family Foundation";
    // Scroll to top when page changes
    window.scrollTo(0, 0);
  }, [currentPageName]);

  const navLinks = [
    { name: "Home", page: "Home" },
    { name: "Accessibility", page: "Accessibility" },
    { name: "Assistive Devices", page: "AssistiveDevices" },
    { name: "Inclusion", page: "Inclusion" },
    { name: "About", page: "About" },
    { name: "Contact", page: "Contact" }
  ];

  const quickLinks = [
    { name: "Home", page: "Home" },
    { name: "Accessibility", page: "Accessibility" },
    { name: "Assistive Devices", page: "AssistiveDevices" },
    { name: "Inclusion", page: "Inclusion" },
    { name: "About", page: "About" },
    { name: "Contact", page: "Contact" }
  ];

  const resources = [
    { name: "Programs", page: "Programs" },
    { name: "Accessibility Guides", page: "AccessibilityGuides" },
    { name: "Devices Info", page: "DevicesInfo" },
    { name: "Inclusion Tools", page: "InclusionTools" },
    { name: "Research & Reports", page: "ResearchReports" },
    { name: "Blog / Insights", page: "BlogInsights" }
  ];

  const policies = [
    { name: "Privacy Policy", page: "PrivacyPolicy" },
    { name: "Terms of Service", page: "TermsOfService" },
    { name: "Refund Policy", page: "RefundPolicy" },
    { name: "Disclaimer", page: "Disclaimer" },
    { name: "Sitemap", page: "Sitemap" },
    { name: "Cookies Policy", page: "CookiesPolicy" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white shadow-lg shadow-red-500/5 border-b border-red-100/50" 
            : "bg-white"
        }`}
      >


        <div className="container mx-auto px-4 lg:px-12">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo with Animation */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                <img src={LOGO_URL} alt="Dhingra Family Foundation" className="w-14 h-14 object-contain relative z-10" />
              </motion.div>
              <div className="flex flex-col">
                <span className="font-bold bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent text-base sm:text-lg bg-[length:200%_auto] animate-gradient">
                  Dhingra Family Foundation India
                </span>
              </div>
            </Link>

            {/* Desktop Navigation with Enhanced Hover Effects */}
            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.page}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={createPageUrl(link.page)}
                    className={`relative px-5 py-2.5 text-base font-bold transition-all duration-300 rounded-full group ${
                      currentPageName === link.page 
                        ? "text-white" 
                        : "text-slate-700 hover:text-red-600"
                    }`}
                  >
                    {currentPageName === link.page && (
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 rounded-full -z-10 shadow-lg shadow-orange-500/30"
                        layoutId="activeNav"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                    {currentPageName !== link.page && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Animated CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link to={createPageUrl("Donate")}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-red-500 hover:from-red-600 hover:via-orange-600 hover:to-red-600 shadow-lg shadow-orange-500/30 bg-[length:200%_auto] hover:bg-right transition-all duration-500 group px-6 text-base font-bold">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Heart className="w-4 h-4 mr-2 text-white" fill="white" />
                    </motion.div>
                    <span>Donate Now</span>
                    <Sparkles className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </motion.div>
              </Link>
            </div>

            {/* Mobile Menu Button with Animation */}
            <motion.button
              className="lg:hidden p-2.5 text-orange-500 hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 rounded-xl transition-colors relative overflow-hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-7 h-7" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-7 h-7" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-red-100 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.page}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={createPageUrl(link.page)}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                          currentPageName === link.page 
                            ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-orange-500/20" 
                            : "text-slate-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronRight className={`w-4 h-4 ${currentPageName === link.page ? 'text-white' : 'text-slate-400'}`} />
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div 
                    className="mt-4 pt-4 border-t border-red-100"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link to={createPageUrl("Donate")} onClick={() => setMobileMenuOpen(false)}>
                      <Button className="w-full rounded-xl bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 shadow-lg shadow-orange-500/30 h-12">
                        <Heart className="w-4 h-4 mr-2 text-white" fill="white" />
                        Donate Now
                        <Sparkles className="w-3 h-3 ml-2" />
                      </Button>
                    </Link>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      
      {/* CSS for gradient animation */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        {/* Main Footer */}
        <div className="container mx-auto px-4 lg:px-12 py-16">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 lg:col-span-2">
              <Link to={createPageUrl("Home")} className="flex items-center gap-3 mb-6 group">
                <img src={FOOTER_LOGO_URL} alt="Dhingra Family Foundation" className="w-16 h-16 object-contain" />
                <div className="flex flex-col">
                <span className="font-bold bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent text-base sm:text-lg bg-[length:200%_auto] animate-gradient">
                  Dhingra Family Foundation India
                </span>
              </div>
              </Link>
              <p className="text-slate-400 mb-6 max-w-md">
                Dhingra Family Foundation India works to promote accessibility, disability inclusion, and equal participation through awareness and community engagement.
              </p>
              <div className="flex gap-3 mt-6">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 rounded-lg flex items-center justify-center transition-all group"
                  >
                    <Icon className="w-5 h-5 text-orange-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-span-1">
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.page}>
                    <Link
                      to={createPageUrl(link.page)}
                      className="text-slate-400 hover:text-red-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="col-span-1">
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <Link
                      to={createPageUrl(resource.page)}
                      className="text-slate-400 hover:text-red-400 transition-colors text-sm"
                    >
                      {resource.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div className="col-span-2 lg:col-span-1">
              <h3 className="font-semibold text-white mb-4">Contact Details</h3>
              <div className="space-y-4 text-slate-400">
                <div>
                  <p className="text-red-400 font-medium text-sm mb-1">Address</p>
                  <p className="text-sm leading-relaxed">
                    Shop No.2-7, Basement, Samrat Complex,<br />
                    Opp. New Bus Stand, Sehore,<br />
                    Madhya Pradesh – 466001, India
                  </p>
                </div>
                <div>
                  <p className="text-red-400 font-medium text-sm mb-1">Email</p>
                  <a href="mailto:info@dhingrafamilyfoundationindia.org" className="text-sm hover:text-red-400 transition-colors">
                    info@dhingrafamilyfoundationindia.org
                  </a>
                </div>
                <div>
                  <p className="text-red-400 font-medium text-sm mb-1">Phone</p>
                  <a href="tel:+917490874578" className="text-sm hover:text-red-400 transition-colors">
                    +91 74908 74578
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="">
          <div className="container mx-auto px-4 lg:px-12 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm">
                © 2025 Dhingra Family Foundation India — All Rights Reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {policies.map((policy, index) => (
                  <Link
                    key={index}
                    to={createPageUrl(policy.page)}
                    className="text-slate-400 hover:text-red-400 text-sm transition-colors"
                  >
                    {policy.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
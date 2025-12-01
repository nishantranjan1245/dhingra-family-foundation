import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Accessibility as AccessibilityIcon, 
  Building, 
  Train, 
  Home, 
  Briefcase, 
  Monitor, 
  Scale, 
  HeartHandshake,
  MessageCircle,
  Check,
  ArrowRight,
  ParkingCircle,
  Signpost,
  Volume2,
  Armchair,
  Lightbulb,
  Shield,
  BookOpen,
  Users
} from "lucide-react";

export default function Accessibility() {
  const whatIsAccessibility = [
    "Easy movement",
    "Safe surroundings",
    "Equal access to facilities",
    "Information accessibility",
    "Inclusive communication"
  ];

  const publicPlaceFeatures = [
    "Ramps & railings at building entrances",
    "Wide walkways for wheelchair use",
    "Clear signage in readable formats",
    "Accessible toilets with grab bars",
    "Parking spaces for persons with disabilities",
    "Barrier-free government offices, banks, markets & parks"
  ];

  const transportFeatures = [
    "Low-floor buses",
    "Bus stops with ramps and audio announcements",
    "Railway platforms with tactile indicators",
    "Priority seating",
    "Accessible metro stations",
    "Easy-to-reach ticket counters",
    "Safe boarding assistance"
  ];

  const homeFeatures = [
    "Ramps at entrances",
    "Non-slip flooring",
    "Wide doorways",
    "Grab bars in bathrooms",
    "Adjustable-height furniture",
    "Clear walking paths",
    "Adequate lighting"
  ];

  const workplaceFeatures = [
    "Step-free entrances",
    "Accessible desks",
    "Proper lighting",
    "Assistive technologies (screens, magnifiers)",
    "Clear walkways",
    "Accessible washrooms",
    "Emergency evacuation support",
    "Flexible working arrangements"
  ];

  const digitalFeatures = [
    "Text alternatives for images",
    "Screen-reader friendly websites",
    "High-contrast colours",
    "Large fonts",
    "Keyboard navigation",
    "Captions for videos",
    "Descriptive links"
  ];

  const rpwdAreas = [
    "Public buildings",
    "Transportation",
    "Information & communication",
    "Digital services",
    "Private establishments offering public services"
  ];

  const howWeHelp = [
    "Informational guides",
    "Awareness workshops",
    "Community-based accessibility evaluations",
    "Digital accessibility resources",
    "Assistive device awareness campaigns"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/images/image-6.jpg"
            alt="Accessibility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent" />
        </div>
        
        {/* Animated Shapes */}
        <motion.div 
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-40 w-48 h-48 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-2xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-sm font-semibold mb-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <AccessibilityIcon className="w-4 h-4" />
                Creating Barrier-Free Environments
              </motion.span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Accessibility for{" "}
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Everyone
                </span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Accessibility ensures that every individual—regardless of disability—can move, communicate, participate, and live with dignity. We provide clear, practical guidance to create barrier-free environments.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to={createPageUrl("AccessibilityGuides")}>
                  <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white rounded-full px-8 shadow-xl">
                    Explore Guides
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Section 1: What is Accessibility? */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-red-100/50 to-orange-100/50 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-0 w-72 h-72 bg-gradient-to-br from-yellow-100/40 to-red-100/40 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <AccessibilityIcon className="w-8 h-8 text-red-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">What is Accessibility?</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Accessibility means removing physical, architectural, social, and digital barriers that prevent people from participating fully in everyday life.
              </p>
              <p className="text-slate-700 font-medium mb-4">It includes:</p>
              <div className="space-y-3 mb-6">
                {whatIsAccessibility.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors cursor-pointer group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-7 h-7 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-500 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Check className="w-4 h-4 text-red-600 group-hover:text-white transition-colors" />
                    </motion.div>
                    <span className="text-slate-700">{item}</span>
                  </motion.div>
                ))}
              </div>
              <motion.p 
                className="text-slate-600 italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Our goal is to help people understand how small changes can create big improvements in independence and safety.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-br from-red-200/30 to-orange-200/30 rounded-3xl"
                animate={{ rotate: [0, 2, 0, -2, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <img 
                src="/images/image-6.jpg"
                alt="Accessibility concept"
                className="rounded-3xl shadow-2xl w-full relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Public Place Accessibility */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-10 right-10 w-20 h-20 border-2 border-orange-200 rounded-full"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-16 h-16 bg-orange-100 rounded-2xl opacity-50"
          animate={{ rotate: [0, 45, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              >
                <Building className="w-8 h-8 text-orange-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900">Public Place Accessibility</h2>
            </div>
            <p className="text-slate-600 mb-8">
              Public spaces should be designed for safe and comfortable access for everyone.
            </p>

            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-md mb-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <motion.div 
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-orange-50/50 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4 relative z-10">Key Areas:</h3>
              <div className="grid md:grid-cols-2 gap-4 relative z-10">
                {publicPlaceFeatures.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-orange-50 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-7 h-7 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Check className="w-4 h-4 text-orange-600" />
                    </motion.div>
                    <span className="text-slate-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="bg-orange-50 rounded-2xl p-6 border border-orange-100 hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -3 }}
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Guides Included:</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• How to make public buildings accessible</li>
                <li>• Accessibility checklist for community spaces</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Transport Accessibility */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute top-20 left-0 w-80 h-80 bg-gradient-to-br from-yellow-100/50 to-orange-100/50 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                animate={{ x: [0, 5, 0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Train className="w-8 h-8 text-yellow-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900">Transport Accessibility</h2>
            </div>
            <p className="text-slate-600 mb-8">
              Accessible transport helps people travel safely and independently.
            </p>

            <motion.div 
              className="bg-yellow-50 rounded-2xl p-8 border border-yellow-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <motion.div 
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4 relative z-10">Recommendations:</h3>
              <div className="grid md:grid-cols-2 gap-4 relative z-10">
                {transportFeatures.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-yellow-100/50 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-7 h-7 bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Check className="w-4 h-4 text-yellow-700" />
                    </motion.div>
                    <span className="text-slate-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Home Accessibility */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Floating Elements */}
        <motion.div 
          className="absolute bottom-20 right-10 w-24 h-24 border-2 border-red-200 rounded-2xl"
          animate={{ rotate: [0, 45, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              >
                <Home className="w-8 h-8 text-red-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900">Home Accessibility</h2>
            </div>
            <p className="text-slate-600 mb-8">
              Simple changes at home can greatly improve comfort, safety, and independence.
            </p>

            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-md mb-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <motion.div 
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-red-50/50 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4 relative z-10">Key Improvements:</h3>
              <div className="grid md:grid-cols-2 gap-4 relative z-10">
                {homeFeatures.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-7 h-7 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Check className="w-4 h-4 text-red-600" />
                    </motion.div>
                    <span className="text-slate-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="bg-red-50 rounded-2xl p-6 border border-red-100 hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -3 }}
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Guides:</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Home Accessibility Tips</li>
                <li>• Bathroom Safety & Accessibility</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Office & Workplace Accessibility */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-orange-100/50 to-yellow-100/50 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              >
                <Briefcase className="w-8 h-8 text-orange-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900">Office & Workplace Accessibility</h2>
            </div>
            <p className="text-slate-600 mb-8">
              Inclusive workplaces empower employees and ensure equal opportunities.
            </p>

            <motion.div 
              className="bg-orange-50 rounded-2xl p-8 border border-orange-100 mb-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <motion.div 
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4 relative z-10">Accessibility Essentials:</h3>
              <div className="grid md:grid-cols-2 gap-4 relative z-10">
                {workplaceFeatures.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-orange-100/50 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-7 h-7 bg-orange-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Check className="w-4 h-4 text-orange-700" />
                    </motion.div>
                    <span className="text-slate-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -3 }}
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Resources:</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Workplace Accessibility Checklist</li>
                <li>• Inclusive Hiring Guidelines</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Digital Accessibility */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-10 left-10 w-20 h-20 border-2 border-yellow-200 rounded-full"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-16 h-16 bg-yellow-100 rounded-2xl opacity-50"
          animate={{ rotate: [0, 45, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Monitor className="w-8 h-8 text-yellow-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900">Digital Accessibility</h2>
            </div>
            <p className="text-slate-600 mb-8">
              Digital platforms must be usable by all individuals.
            </p>

            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-md mb-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <motion.div 
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-yellow-50/50 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4 relative z-10">Examples:</h3>
              <div className="grid md:grid-cols-2 gap-4 relative z-10">
                {digitalFeatures.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-yellow-50 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-7 h-7 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Check className="w-4 h-4 text-yellow-600" />
                    </motion.div>
                    <span className="text-slate-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.p 
              className="text-slate-600 italic text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              This helps people with visual, audio, or cognitive disabilities access information easily.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Accessibility Rights in India */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Scale className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Accessibility Rights in India</h2>
            <p className="text-white/80 mb-8">
              The Rights of Persons with Disabilities (RPwD) Act mandates accessibility in:
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {rpwdAreas.map((area, index) => (
                <span key={index} className="px-4 py-2 bg-white/10 rounded-full text-sm">
                  {area}
                </span>
              ))}
            </div>

            <p className="text-white/70 mb-8">
              We simplify these laws to help families, communities, and organisations understand their responsibilities.
            </p>

            <Link to={createPageUrl("Inclusion")}>
              <Button size="lg" className="bg-white text-red-700 hover:bg-red-50 rounded-full">
                Learn More About Accessibility Rights
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 8: How We Help */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-red-100/50 to-pink-100/50 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-0 w-72 h-72 bg-gradient-to-br from-orange-100/40 to-red-100/40 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.div 
                className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <HeartHandshake className="w-10 h-10 text-red-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">How We Help</h2>
              <p className="text-slate-600">
                Dhingra Family Foundation India supports accessibility awareness through:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {howWeHelp.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3 p-4 bg-red-50 rounded-xl shadow-sm hover:shadow-lg hover:bg-red-100/70 transition-all duration-300 cursor-pointer group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -3 }}
                >
                  <motion.div 
                    className="w-8 h-8 bg-red-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-500 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Check className="w-4 h-4 text-red-700 group-hover:text-white transition-colors" />
                  </motion.div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link to={createPageUrl("AssistiveDevices")}>
                <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 rounded-full shadow-xl shadow-red-500/30 group px-8">
                    Explore Our Resources
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 9: Need Guidance? */}
      <section className="py-20 bg-gradient-to-br from-red-700 to-orange-700 relative overflow-hidden">
        {/* Animated Shapes */}
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 border-2 border-white/10 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white/15 rounded-2xl"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <motion.div 
              className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/30"
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <MessageCircle className="w-10 h-10" />
            </motion.div>
            <h2 className="text-3xl font-bold mb-4">Need Guidance?</h2>
            <motion.p 
              className="text-red-100 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              If you want to understand accessibility improvements for your home, workplace, or community — we're here to help with information and support.
            </motion.p>
            <Link to={createPageUrl("Contact")}>
              <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="bg-white text-red-700 hover:bg-red-50 rounded-full px-10 shadow-xl shadow-red-900/30 group">
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
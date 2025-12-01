import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  Monitor, 
  Briefcase, 
  Heart, 
  Wrench, 
  Megaphone,
  HeartHandshake,
  Check,
  ArrowRight,
  MessageCircle,
  Users,
  Settings
} from "lucide-react";

export default function InclusionTools() {
  const sections = [
    {
      icon: MessageSquare,
      title: "Communication Inclusion Tools",
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
      description: "Communication is at the heart of inclusion. These tools ensure that information reaches everyone clearly and respectfully.",
      heading: "Tools & Practices",
      items: [
        "Plain-language guides",
        "Visual aids & icons",
        "Sign language awareness basics",
        "Easy-to-read documents",
        "Captions for videos",
        "Text alternatives (ALT text)",
        "Audio descriptions",
        "Clear, respectful conversation techniques"
      ],
      benefits: ["Better understanding", "Equal participation", "Respectful interaction"]
    },
    {
      icon: Monitor,
      title: "Digital Inclusion Tools",
      color: "bg-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-100",
      description: "Digital inclusion ensures that websites, apps, and digital platforms can be used by people with all abilities.",
      heading: "Digital Inclusion Essentials",
      items: [
        "Screen readers (JAWS, NVDA)",
        "High contrast themes",
        "Adjustable text size",
        "Keyboard navigation",
        "ALT text for images",
        "Captioned videos",
        "Accessible PDF templates",
        "Colourblind-friendly design"
      ],
      benefits: ["Online readability", "Smooth navigation", "Accessibility for visually impaired users"]
    },
    {
      icon: Briefcase,
      title: "Workplace Inclusion Tools",
      color: "bg-amber-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-100",
      description: "Workplaces become inclusive when they provide equal comfort, access, and opportunities for employees with disabilities.",
      heading: "Tools for Inclusive Offices",
      items: [
        "Adjustable desks & ergonomic chairs",
        "Accessible workstations",
        "Assistive computer technologies",
        "Clear walkways & signage",
        "Inclusive hiring guidelines",
        "Sensitivity training resources",
        "Workplace accessibility checklists"
      ],
      benefits: ["Productivity", "Equal opportunities", "Comfortable work environment"]
    },
    {
      icon: Heart,
      title: "Behaviour & Social Inclusion Tools",
      color: "bg-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-100",
      description: "Respectful behaviour is a powerful tool for inclusion.",
      heading: "Tools & Practices",
      items: [
        "Disability etiquette guides",
        "Asking-before-helping rules",
        "Personal space awareness",
        "Inclusive body language",
        "Patience & active listening",
        "Social inclusion posters",
        "Community sensitization guides"
      ],
      benefits: ["Respect", "Dignity", "Positive community interaction"]
    },
    {
      icon: Wrench,
      title: "Accessibility Improvement Tools",
      color: "bg-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-100",
      description: "These tools help identify physical barriers in public, home, and office environments.",
      heading: "Useful Tools",
      items: [
        "Accessibility audit checklists",
        "Ramp slope guide",
        "Lighting & safety assessment",
        "Tactile path guidelines",
        "Signage placement standards",
        "Pathway width guidelines"
      ],
      benefits: ["Barrier-free movement", "Safety", "Environment improvement"]
    },
    {
      icon: Megaphone,
      title: "Inclusion Awareness Materials",
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100",
      description: "Awareness is one of the strongest tools for inclusion.",
      heading: "Awareness Resources",
      items: [
        "Posters & banners",
        "Inclusion pledge templates",
        "Community workshop kits",
        "Disability awareness stories",
        "Social inclusion guides",
        "Event participation toolkits"
      ],
      benefits: []
    }
  ];

  const howWeSupport = [
    "Simple inclusion toolkits",
    "Awareness posters",
    "Community-based resources",
    "Workplace inclusion materials",
    "Digital accessibility guides",
    "Behaviour & communication tools"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600">
          <motion.div 
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        {/* Tool Icons Floating */}
        {[MessageSquare, Monitor, Briefcase, Heart, Wrench, Megaphone].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + (i % 3) * 30}%`,
              top: `${15 + Math.floor(i / 3) * 50}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <Icon className="w-12 h-12 text-white" />
          </motion.div>
        ))}

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 border border-white/30"
                whileHover={{ scale: 1.05 }}
              >
                <Wrench className="w-4 h-4" />
                Practical Resources
              </motion.span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Inclusion Tools &{" "}
                <span className="text-yellow-300">Resources</span>
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto">
                Powerful tools to help improve communication, accessibility, digital interaction, and respectful behaviour toward persons with disabilities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {["Communication", "Digital", "Workplace", "Behaviour"].map((cat, i) => (
                  <motion.span
                    key={cat}
                    className="px-5 py-2.5 bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.3)" }}
                  >
                    {cat}
                  </motion.span>
                ))}
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

      {/* Sections */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-orange-100/50 to-yellow-100/50 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-40 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
                className={`${section.bgColor} rounded-3xl p-8 md:p-10 border ${section.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group`}
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                </div>
                
                <div className="flex flex-col lg:flex-row gap-8 relative">
                  <div className="lg:w-1/3">
                    <motion.div 
                      className={`w-18 h-18 ${section.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg relative`}
                      whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <section.icon className="w-9 h-9 text-white relative z-10" />
                      <motion.div 
                        className={`absolute inset-0 ${section.color} rounded-2xl`}
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.title}</h2>
                    <p className="text-slate-600 mb-6">{section.description}</p>
                    
                    {section.benefits.length > 0 && (
                      <motion.div 
                        className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                        whileHover={{ scale: 1.02 }}
                      >
                        <h4 className="font-semibold text-slate-900 mb-3 text-sm">
                          {section.title.includes("Behaviour") ? "Encourages:" : 
                           section.title.includes("Accessibility") ? "Purpose:" : "Benefits:"}
                        </h4>
                        <div className="space-y-2">
                          {section.benefits.map((benefit, benefitIndex) => (
                            <motion.div 
                              key={benefitIndex} 
                              className="flex items-center gap-2"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: benefitIndex * 0.1 }}
                            >
                              <motion.div 
                                className={`w-5 h-5 ${section.color.replace('-500', '-200')} rounded-full flex items-center justify-center flex-shrink-0`}
                                whileHover={{ scale: 1.2 }}
                              >
                                <Check className={`w-3 h-3 ${section.color.replace('bg-', 'text-').replace('-500', '-700')}`} />
                              </motion.div>
                              <span className="text-slate-700 text-sm">{benefit}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                  <div className="lg:w-2/3">
                    <h3 className="font-semibold text-slate-900 mb-4">{section.heading}</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {section.items.map((item, itemIndex) => (
                        <motion.div 
                          key={itemIndex} 
                          className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: itemIndex * 0.03 }}
                          whileHover={{ x: 5, scale: 1.02 }}
                        >
                          <motion.div 
                            className={`w-6 h-6 ${section.color.replace('-500', '-200')} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Check className={`w-4 h-4 ${section.color.replace('bg-', 'text-').replace('-500', '-700')}`} />
                          </motion.div>
                          <span className="text-slate-700 text-sm">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: How We Support */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-10 right-10 w-20 h-20 border-2 border-pink-200 rounded-full"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-16 h-16 bg-pink-100 rounded-2xl opacity-50"
          animate={{ rotate: [0, 45, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div 
              className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
            >
              <HeartHandshake className="w-8 h-8 text-pink-600" />
            </motion.div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How We Support Inclusion Tools</h2>
            <p className="text-slate-600 mb-8">We provide:</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {howWeSupport.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-lg hover:border-pink-200 border border-transparent transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -3 }}
                >
                  <motion.div 
                    className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Check className="w-4 h-4 text-pink-600 group-hover:text-white transition-colors" />
                  </motion.div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-700 to-orange-700 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Need Support or Tools?</h2>
            <p className="text-teal-100 mb-8">
              If you want help improving inclusion in your workplace, home, or community — we're always ready to guide with resources and awareness.
            </p>
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-white text-teal-700 hover:bg-teal-50 rounded-full px-8">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
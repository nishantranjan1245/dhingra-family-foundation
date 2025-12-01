import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Accessibility, Cog, Users, Scale, ArrowRight, Zap } from "lucide-react";

export default function FocusAreasSection() {
  const focusAreas = [
    {
      icon: Accessibility,
      title: "Accessibility Awareness",
      description: "Guidance on improving public spaces, transport systems, digital platforms, homes, and workplaces.",
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-50 via-red-50 to-orange-50",
      shadowColor: "shadow-red-500/20",
      page: "Accessibility",
      badge: "Popular"
    },
    {
      icon: Cog,
      title: "Assistive Devices Information",
      description: "Easy-to-understand information on wheelchairs, artificial limbs, mobility sticks, braces, and walkers.",
      gradient: "from-orange-500 to-yellow-500",
      bgGradient: "from-orange-50 via-orange-50 to-yellow-50",
      shadowColor: "shadow-orange-500/20",
      page: "AssistiveDevices",
      badge: "Featured"
    },
    {
      icon: Users,
      title: "Inclusion & Participation",
      description: "Promoting inclusive workplaces and disability-friendly practices that encourage equal involvement.",
      gradient: "from-yellow-500 to-red-500",
      bgGradient: "from-yellow-50 via-yellow-50 to-red-50",
      shadowColor: "shadow-yellow-500/20",
      page: "Inclusion",
      badge: null
    },
    {
      icon: Scale,
      title: "Rights & Policies",
      description: "Clear explanations of accessibility laws, government schemes, and disability rights in India.",
      gradient: "from-red-600 to-orange-600",
      bgGradient: "from-red-50 via-red-50 to-orange-50",
      shadowColor: "shadow-red-500/20",
      page: "Programs",
      badge: "Essential"
    }
  ];

  return (
    <section className="py-28 bg-gray-50 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <motion.div 
        className="absolute top-10 left-5 w-80 h-80 bg-gradient-to-br from-red-200/40 to-orange-200/40 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-10 right-5 w-[400px] h-[400px] bg-gradient-to-br from-orange-200/40 to-yellow-200/40 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-40 right-[15%] w-20 h-20 border-2 border-red-200/50 rounded-2xl"
        animate={{ rotate: [0, 180, 360], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-32 left-[10%] w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full"
        animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-[5%] w-12 h-12 border-2 border-orange-200/60 rounded-full"
        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Sparkle Dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-br from-red-300 to-orange-300 rounded-full"
          style={{ left: `${10 + i * 11}%`, top: `${15 + (i % 4) * 20}%` }}
          animate={{ 
            y: [0, -15, 0], 
            opacity: [0.3, 0.9, 0.3],
            scale: [0.8, 1.3, 0.8]
          }}
          transition={{ duration: 3 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}

      <div className="container mx-auto px-6 lg:px-12 relative">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-red-600 rounded-full text-sm font-semibold mb-6 shadow-lg border border-red-100"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4" />
            Key Focus Areas
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            What We{" "}
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              Focus On
            </span>
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            Our key areas of work to create a truly inclusive and accessible society for everyone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {focusAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
            >
              <Link to={createPageUrl(area.page)}>
                <motion.div 
                  className={`relative bg-gradient-to-br ${area.bgGradient} rounded-3xl p-8 h-full transition-all duration-500 cursor-pointer group border border-white/80 shadow-xl ${area.shadowColor} hover:shadow-2xl overflow-hidden`}
                  whileHover={{ y: -12, scale: 1.02 }}
                >
                  {/* Badge with Animation */}
                  {area.badge && (
                    <motion.div 
                      className="absolute top-6 right-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    >
                      <motion.span 
                        className={`px-4 py-1.5 bg-gradient-to-r ${area.gradient} text-white text-xs font-bold rounded-full shadow-lg inline-flex items-center gap-1`}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Zap className="w-3 h-3" />
                        {area.badge}
                      </motion.span>
                    </motion.div>
                  )}

                  {/* Hover Glow Effect */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                  />
                  
                  {/* Shimmer Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-3xl">
                    <motion.div 
                      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                    />
                  </div>
                  
                  <div className="flex items-start gap-6 relative">
                    <motion.div 
                      className={`relative w-18 h-18 bg-gradient-to-br ${area.gradient} rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0`}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                      transition={{ duration: 0.5 }}
                    >
                      <area.icon className="w-9 h-9 text-white relative z-10" />
                      {/* Pulse Ring */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${area.gradient} rounded-2xl`}
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                        {area.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                        {area.description}
                      </p>
                      <motion.div 
                        className="flex items-center text-red-600 font-bold group-hover:text-red-700 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <span>Learn More</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="group-hover:animate-none"
                        >
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-3 transition-transform" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Corner Decoration */}
                  <div className={`absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br ${area.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight, Sparkles, Star, Users, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* Background with NGO Images */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-red-950 to-orange-950">
        
        {/* Background Image Slideshow */}
        <div className="absolute inset-0">
          {[
            "/images/image-1.jpg",
            "/images/image-2.jpg",
            "/images/image-3.jpg"
          ].map((img, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, i === 0 ? 0.25 : 0, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity, 
                delay: i * 5,
                ease: "easeInOut"
              }}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-red-950/85 to-orange-950/90" />
        
        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 opacity-60" style={{
          background: `
            radial-gradient(at 20% 30%, rgba(239, 68, 68, 0.4) 0px, transparent 50%),
            radial-gradient(at 80% 20%, rgba(251, 146, 60, 0.3) 0px, transparent 50%),
            radial-gradient(at 40% 80%, rgba(234, 179, 8, 0.25) 0px, transparent 50%),
            radial-gradient(at 90% 70%, rgba(239, 68, 68, 0.3) 0px, transparent 50%)
          `
        }} />

        {/* Floating Image Cards */}
        <motion.div
          className="absolute top-[15%] right-[5%] w-48 h-32 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 hidden lg:block"
          animate={{ y: [0, -15, 0], rotate: [3, 5, 3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src="/images/hero-image.jpg" alt="Community" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-[25%] right-[12%] w-40 h-28 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 hidden lg:block"
          animate={{ y: [0, 20, 0], rotate: [-2, -4, -2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <img src="/images/hero-image2.jpg" alt="Support" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent" />
        </motion.div>

        <motion.div
          className="absolute top-[40%] left-[3%] w-36 h-24 rounded-xl overflow-hidden shadow-2xl border-2 border-white/10 hidden lg:block"
          animate={{ y: [0, 15, 0], rotate: [-3, -1, -3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <img src="/images/hero-image3.jpg" alt="Inclusion" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/60 to-transparent" />
        </motion.div>
        
        {/* Animated Glowing Orbs */}
        <motion.div 
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-red-500/30 to-orange-500/20 rounded-full blur-[120px]"
          animate={{ 
            x: [0, 80, 0], 
            y: [0, 50, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-yellow-500/25 to-orange-500/20 rounded-full blur-[100px]"
          animate={{ 
            x: [0, -60, 0], 
            y: [0, -70, 0],
            scale: [1, 1.4, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-orange-400/50 to-yellow-400/50"
            style={{
              width: 3 + (i % 4) + "px",
              height: 3 + (i % 4) + "px",
              left: (i * 5) % 100 + "%",
              top: (i * 7) % 100 + "%",
            }}
            animate={{ 
              y: [0, -40 - (i % 3) * 20, 0], 
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{ 
              duration: 4 + (i % 3), 
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-xl text-white rounded-full text-sm font-semibold mb-8 border border-white/20 shadow-2xl"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-yellow-400" />
              </motion.div>
              Empowering Inclusive Communities
            </motion.div>
            
            {/* Main Title */}
            <motion.h1 
  className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-tight tracking-tight"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.8 }}
>
  <span className="inline-block">
    <span className="bg-gradient-to-r from-red-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg">
      Together for a{" "}
    </span>
  </span>

  <span className="relative inline-block">
    <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-xl">
      Better Tomorrow
    </span>

    <motion.span 
      className="absolute -bottom-3 left-0 right-0 h-5 bg-gradient-to-r from-red-500/40 via-orange-500/40 to-yellow-500/40 rounded-full blur-xl"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
    />
  </span>
</motion.h1>

            
            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-6 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Creating awareness, promoting accessibility, and supporting disability inclusion.
            </motion.p>
            
            <motion.p 
              className="text-base md:text-lg text-white/70 mb-12 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Dhingra Family Foundation India works to advance accessibility and equal participation for persons with disabilities through community engagement and awareness campaigns.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap justify-center gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Link to={createPageUrl("Accessibility")}>
                <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 hover:from-red-600 hover:via-orange-600 hover:to-yellow-600 text-white rounded-full px-10 h-14 text-lg font-semibold shadow-2xl shadow-orange-500/40 group border-0">
                    Explore Accessibility
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
              <Link to={createPageUrl("AssistiveDevices")}>
                <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" variant="outline" className="border-2 border-white/30 bg-white/10 backdrop-blur-xl hover:bg-white/20 hover:border-white/50 text-white rounded-full px-10 h-14 text-lg font-semibold shadow-xl">
                    <Heart className="w-5 h-5 mr-2 text-red-400" />
                    Assistive Devices
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Stats Row */}
            <motion.div 
              className="flex flex-wrap justify-center gap-6 mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              {[
                { icon: Users, value: "10K+", label: "Lives Impacted" },
                { icon: Award, value: "100+", label: "Programs" },
                { icon: Star, value: "50+", label: "Communities" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl"
                  whileHover={{ scale: 1.08, y: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/30">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-white/60">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 150L48 140C96 130 192 110 288 100C384 90 480 90 576 95C672 100 768 110 864 115C960 120 1056 120 1152 115C1248 110 1344 100 1392 95L1440 90V150H1392C1344 150 1248 150 1152 150C1056 150 960 150 864 150C768 150 672 150 576 150C480 150 384 150 288 150C192 150 96 150 48 150H0Z" fill="#f9fafb"/>
        </svg>
      </div>

      {/* Animated Corner Decorations */}
      <motion.div 
        className="absolute top-16 left-8 w-24 h-24"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <motion.div 
          className="w-full h-full border-l-2 border-t-2 border-gradient-to-r from-red-500/30 to-orange-500/30 rounded-tl-3xl"
          animate={{ borderColor: ["rgba(239,68,68,0.3)", "rgba(251,146,60,0.3)", "rgba(239,68,68,0.3)"] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.div>
      <motion.div 
        className="absolute top-16 right-8 w-24 h-24"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, type: "spring" }}
      >
        <motion.div 
          className="w-full h-full border-r-2 border-t-2 border-orange-500/30 rounded-tr-3xl"
          animate={{ borderColor: ["rgba(251,146,60,0.3)", "rgba(234,179,8,0.3)", "rgba(251,146,60,0.3)"] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.div>
      <motion.div 
        className="absolute bottom-32 left-8 w-16 h-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div 
          className="w-full h-full border-l-2 border-b-2 border-yellow-500/20 rounded-bl-2xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>
      <motion.div 
        className="absolute bottom-32 right-8 w-16 h-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <motion.div 
          className="w-full h-full border-r-2 border-b-2 border-red-500/20 rounded-br-2xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
      </motion.div>
    </section>
  );
}
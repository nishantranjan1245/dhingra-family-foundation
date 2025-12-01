import React from "react";
import { motion } from "framer-motion";
import { Heart, Shield, Users, Sparkles, Target, Award, TrendingUp, Globe } from "lucide-react";

export default function ImpactSection() {
  const stats = [
    { number: "10K+", label: "Lives Impacted", icon: Users, delay: 0 },
    { number: "500+", label: "Volunteers", icon: Heart, delay: 0.1 },
    { number: "50+", label: "Communities", icon: Globe, delay: 0.2 },
    { number: "100+", label: "Programs", icon: Award, delay: 0.3 }
  ];

  return (
    <section className="py-28 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <motion.div 
        className="absolute top-0 left-0 w-[700px] h-[700px] bg-white/15 rounded-full blur-3xl"
        animate={{ 
          x: [0, 120, 0], 
          y: [0, 60, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-yellow-400/25 rounded-full blur-3xl"
        animate={{ 
          x: [0, -100, 0], 
          y: [0, -50, 0],
          scale: [1, 1.4, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-300/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-20 right-[20%] w-24 h-24 border-2 border-white/20 rounded-2xl"
        animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.1, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-32 left-[15%] w-20 h-20 border-2 border-white/15 rounded-full"
        animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Enhanced Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white/40 rounded-full"
          style={{ 
            width: 3 + (i % 3) + "px",
            height: 3 + (i % 3) + "px",
            left: `${8 + i * 8}%`, 
            top: `${15 + (i % 4) * 20}%` 
          }}
          animate={{ 
            y: [0, -40 - (i % 3) * 10, 0],
            opacity: [0.2, 0.9, 0.2],
            scale: [0.8, 1.4, 0.8]
          }}
          transition={{ duration: 3 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
      
      {/* Light Rays */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-white/50 via-transparent to-transparent"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-white/50 via-transparent to-transparent"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: stat.delay, type: "spring", stiffness: 100 }}
              className="text-center group"
            >
              <motion.div 
                className="relative w-24 h-24 mx-auto mb-5 bg-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center shadow-2xl border border-white/30 overflow-hidden"
                whileHover={{ scale: 1.15, rotate: 5, boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <stat.icon className="w-11 h-11 text-white relative z-10" />
                
                {/* Pulse Ring */}
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-3xl"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
                
                {/* Shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 2, delay: index * 0.5 }}
                />
              </motion.div>
              <motion.p 
                className="text-5xl md:text-6xl font-black text-white mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: stat.delay + 0.2, type: "spring" }}
              >
                {stat.number}
              </motion.p>
              <p className="text-white/90 font-medium text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/15 backdrop-blur-xl text-white rounded-full text-sm font-bold mb-8 border border-white/30 shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5" />
            Why Accessibility Matters
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-10 leading-tight">
            Accessibility is a pathway to{" "}
            <span className="relative inline-block">
              <span className="text-yellow-200">independence, dignity,</span>
              <motion.span 
                className="absolute -bottom-2 left-0 right-0 h-2 bg-yellow-200/30 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
            {" "}and equal opportunity.
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Our work focuses on breaking barriers and building communities where every person can participate fully.
          </p>
        </motion.div>

        {/* Enhanced Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {[
            { icon: Shield, title: "Breaking Barriers", desc: "Removing obstacles to participation" },
            { icon: Heart, title: "Encouraging Inclusion", desc: "Promoting inclusive mindset" },
            { icon: TrendingUp, title: "Building Community", desc: "Creating connected societies" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -15, scale: 1.05 }}
              className="relative bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/50 hover:bg-white/25 transition-all shadow-2xl overflow-hidden group"
            >
              {/* Animated Border Glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)",
                  backgroundSize: "200% 200%"
                }}
                animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <motion.div 
                className="relative w-18 h-18 bg-white/25 rounded-2xl flex items-center justify-center mb-6 shadow-xl"
                whileHover={{ rotate: [0, -15, 15, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <item.icon className="w-9 h-9 text-white relative z-10" />
                
                {/* Icon Glow */}
                <motion.div
                  className="absolute inset-0 bg-white/30 rounded-2xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{item.title}</h3>
              <p className="text-white/80 text-lg relative z-10">{item.desc}</p>
              
              {/* Corner Decoration */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
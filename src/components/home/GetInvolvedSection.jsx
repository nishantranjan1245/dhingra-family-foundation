import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Users, Share2, Handshake, ArrowRight, Sparkles, CheckCircle } from "lucide-react";

export default function GetInvolvedSection() {
  const ways = [
    { icon: Users, title: "Volunteer", desc: "Join awareness campaigns", color: "from-red-500 to-red-600" },
    { icon: Share2, title: "Spread Awareness", desc: "Share in your community", color: "from-orange-500 to-orange-600" },
    { icon: Heart, title: "Support Us", desc: "Contribute to mission", color: "from-yellow-500 to-yellow-600" },
    { icon: Handshake, title: "Partner", desc: "Collaborate on initiatives", color: "from-red-600 to-orange-600" }
  ];

  const benefits = [
    "Make a real difference",
    "Join 500+ volunteers",
    "Impact 50+ communities",
    "Build inclusive society"
  ];

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
      
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-20 left-0 w-[400px] h-[400px] bg-gradient-to-br from-red-100/60 to-orange-100/60 rounded-full blur-3xl"
        animate={{ x: [0, 80, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-100/50 to-yellow-100/50 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Decorative Floating Elements */}
      <motion.div
        className="absolute top-32 right-[20%] w-24 h-24 border-2 border-red-100 rounded-full"
        animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-40 left-[8%] w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl rotate-45"
        animate={{ rotate: [45, 135, 45], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Sparkle Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-orange-300 rounded-full"
          style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{ 
            y: [0, -20, 0], 
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-100 to-orange-100 text-red-600 rounded-full text-sm font-bold mb-6 shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4" />
              Get Involved
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Make a{" "}
              <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                Real Difference
              </span>
            </h2>
            <p className="text-gray-600 text-xl mb-8 leading-relaxed">
              You can help create a more accessible and inclusive society. Every contribution matters in building barrier-free communities.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Ways to Get Involved with Enhanced Effects */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {ways.map((way, index) => (
                <motion.div 
                  key={index}
                  className="relative bg-white rounded-2xl p-5 border border-gray-100 shadow-lg hover:shadow-2xl transition-all overflow-hidden group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                >
                  {/* Animated Background Gradient on Hover */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${way.color} opacity-0 group-hover:opacity-5 transition-all duration-500`}
                  />
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </div>
                  
                  <motion.div 
                    className={`relative w-14 h-14 bg-gradient-to-br ${way.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <way.icon className="w-7 h-7 text-white" />
                    
                    {/* Pulse Ring */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${way.color} rounded-xl`}
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                  </motion.div>
                  
                  <h4 className="font-bold text-gray-900 text-lg relative z-10">{way.title}</h4>
                  <p className="text-gray-500 text-sm relative z-10">{way.desc}</p>
                  
                  {/* Corner Accent */}
                  <div className={`absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br ${way.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity`} />
                </motion.div>
              ))}
            </div>

            <Link to={createPageUrl("Contact")}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white rounded-full px-10 h-14 text-lg font-semibold shadow-2xl shadow-red-500/30 group">
                  Get Involved Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-[2rem] blur-2xl transform rotate-3" />
              <img 
                src="/images/image-5.jpg"
                alt="Community involvement"
                className="rounded-[2rem] shadow-2xl w-full relative z-10 border-4 border-white"
              />
            </motion.div>
            
            {/* Floating Card */}
            <motion.div 
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-3xl font-black text-gray-900">500+</p>
                  <p className="text-gray-500 font-medium">Active Volunteers</p>
                </div>
              </div>
            </motion.div>

            {/* Top Floating Badge */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl px-5 py-3 shadow-xl"
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <p className="font-bold">Join Today!</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
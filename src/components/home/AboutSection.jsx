import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Lightbulb, Accessibility, Cog, Users, Award, Star } from "lucide-react";

export default function AboutSection() {
  const approaches = [
    { icon: Lightbulb, text: "Awareness Programs", color: "from-red-500 to-orange-500" },
    { icon: Accessibility, text: "Accessibility Knowledge", color: "from-orange-500 to-yellow-500" },
    { icon: Cog, text: "Assistive Devices Info", color: "from-yellow-500 to-red-500" },
    { icon: Users, text: "Community Engagement", color: "from-red-600 to-orange-600" }
  ];

  return (
    <section className="py-28 bg-gray-50 relative overflow-hidden">
      {/* Enhanced Background Decorations */}
      <motion.div 
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-red-200/60 to-orange-200/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-yellow-200/50 to-red-200/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating Shapes */}
      <motion.div
        className="absolute top-20 left-[10%] w-20 h-20 border-2 border-red-200 rounded-2xl"
        animate={{ rotate: [0, 90, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-[15%] w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full"
        animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 right-[5%] w-12 h-12 border-2 border-orange-200 rounded-full"
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-red-600 rounded-full text-sm font-bold mb-6 shadow-lg border border-red-100"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-4 h-4" />
              Who We Are
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Empowering Through{" "}
              <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                Accessibility
              </span>
            </h2>
            <p className="text-gray-600 text-xl mb-10 leading-relaxed">
              Dhingra Family Foundation India is a nonprofit dedicated to promoting disability inclusion. We empower individuals and guide communities to create accessible spaces that support independence and equal opportunities.
            </p>

            {/* Approach Cards with Enhanced Animation */}
            <div className="mb-10">
              <h3 className="font-bold text-gray-900 mb-5 text-lg flex items-center gap-2">
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Lightbulb className="w-5 h-5 text-orange-500" />
                </motion.span>
                Our Approach:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {approaches.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="relative flex items-center gap-4 p-4 bg-white rounded-2xl hover:shadow-2xl transition-all border border-gray-100 overflow-hidden group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                  >
                    {/* Hover Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    <motion.div 
                      className={`relative w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-7 h-7 text-white" />
                      <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                    <span className="text-gray-800 font-semibold relative z-10">{item.text}</span>
                    
                    {/* Arrow on hover */}
                    <motion.div
                      className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            <Link to={createPageUrl("About")}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white rounded-full px-10 h-14 text-lg font-semibold group shadow-2xl shadow-red-500/25">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative Frame */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-[2rem]"
                animate={{ rotate: [0, 2, 0, -2, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-[2rem] transform rotate-3"
              />
              <img 
                src="/images/image4.png"
                alt="Community support"
                className="rounded-3xl shadow-2xl w-full relative z-10 border-4 border-white"
              />
            </div>
            
            {/* Stats Card */}
            <motion.div 
              className="absolute -bottom-10 -left-10 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-3xl font-black text-gray-900">10+ Years</p>
                  <p className="text-gray-500 font-medium">Community Service</p>
                </div>
              </div>
            </motion.div>

            {/* Top Badge */}
            <motion.div 
              className="absolute -top-6 -right-6 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl px-6 py-3 shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span className="font-bold">Verified NGO</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
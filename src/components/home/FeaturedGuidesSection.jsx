import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Armchair, Building, Home, Briefcase, ArrowRight, BookOpen, Star, Download } from "lucide-react";

export default function FeaturedGuidesSection() {
  const guides = [
    { 
      icon: Armchair, 
      title: "Wheelchair Guide", 
      desc: "Different wheelchair models and their applications.",
      gradient: "from-red-500 to-orange-500",
      rating: "4.9"
    },
    { 
      icon: Building, 
      title: "Public Accessibility", 
      desc: "Making public spaces safer for everyone.",
      gradient: "from-orange-500 to-yellow-500",
      rating: "4.8"
    },
    { 
      icon: Home, 
      title: "Home Accessibility", 
      desc: "Practical steps for independence at home.",
      gradient: "from-yellow-500 to-red-500",
      rating: "4.9"
    },
    { 
      icon: Briefcase, 
      title: "Workplace Inclusion", 
      desc: "Making offices disability-friendly.",
      gradient: "from-red-600 to-orange-600",
      rating: "4.7"
    }
  ];

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Dark Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <motion.div 
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[100px]"
          animate={{ y: [0, 80, 0], x: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-500/15 rounded-full blur-[100px]"
          animate={{ y: [0, -60, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        {/* Dot Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-xl text-white rounded-full text-sm font-bold mb-6 border border-white/20 shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <BookOpen className="w-4 h-4" />
            Featured Guides
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Helpful{" "}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Resources
            </span>
          </h2>
          <p className="text-gray-300 text-xl">
            Easy-to-follow guides for accessibility improvements in everyday life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {guides.map((guide, index) => {
            const IconComponent = guide.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -15, scale: 1.03 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-7 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all h-full relative overflow-hidden">
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${guide.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-5 right-5 flex items-center gap-1 bg-white/10 backdrop-blur px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-white text-xs font-bold">{guide.rating}</span>
                  </div>
                  
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${guide.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl`}
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3">{guide.title}</h3>
                  <p className="text-gray-400 text-sm mb-6">{guide.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-red-400 font-bold text-sm group-hover:text-red-300">
                      <span>Read Guide</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-3 transition-transform" />
                    </div>
                    <Download className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link to={createPageUrl("AccessibilityGuides")}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white rounded-full px-12 h-14 text-lg font-semibold shadow-2xl shadow-red-500/30">
                View All Guides
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
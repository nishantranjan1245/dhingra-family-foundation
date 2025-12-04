import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";

export default function ContactCTASection() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <motion.div 
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[100px]"
          animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[100px]"
          animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <motion.div 
              className="w-24 h-24 bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-red-500/30"
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <MessageCircle className="w-12 h-12" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Ready to make a{" "}
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                difference?
              </span>
            </h2>
            <p className="text-gray-300 text-xl mb-10 leading-relaxed">
              We welcome partnerships, ideas, and community support. Let us work together to build an inclusive world where everyone belongs.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to={createPageUrl("Contact")}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white rounded-full px-10 h-14 text-lg font-semibold shadow-2xl shadow-red-500/30 group">
                    <Send className="w-5 h-5 mr-2" />
                    Contact Us
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
              <Link to={createPageUrl("Donate")}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" className="bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white hover:bg-white/20 rounded-full px-10 h-14 text-lg font-semibold">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Support Mission
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {[
              { icon: Mail, label: "Email Us", value: "info@dhingrafamilyfoundationindia.org", gradient: "from-red-500 to-red-600" },
              { icon: Phone, label: "Call Us", value: "+91 74908 74578", gradient: "from-orange-500 to-orange-600" },
              { icon: MapPin, label: "Visit Us", value: "Sehore, Madhya Pradesh, India", gradient: "from-yellow-500 to-yellow-600" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white/5 backdrop-blur-2xl rounded-2xl p-6 border border-white/10 flex items-center gap-5 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ x: 15, scale: 1.02 }}
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:shadow-2xl transition-shadow`}
                  whileHover={{ rotate: 10 }}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <p className="text-gray-400 text-sm font-medium mb-1">{item.label}</p>
                  <p className="text-white font-bold text-lg">{item.value}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
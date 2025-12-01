import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  CreditCard, 
  QrCode, 
  Building2, 
  Shield, 
  Users, 
  Share2, 
  Calendar,
  Handshake,
  Mail,
  Phone,
  Check,
  ArrowRight
} from "lucide-react";

export default function Donate() {
  const whySupport = [
    "Improve accessibility awareness in communities",
    "Create inclusive guides and informational resources",
    "Conduct workshops that promote disability inclusion",
    "Support families and individuals with accessibility knowledge",
    "Expand our outreach for a more inclusive environment"
  ];

  const otherWays = [
    { icon: Share2, text: "Share accessibility awareness content" },
    { icon: Users, text: "Volunteer in campaigns" },
    { icon: Calendar, text: "Join community events" },
    { icon: Handshake, text: "Partner with us for programs" },
    { icon: Heart, text: "Spread knowledge about inclusion" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-pink-600 to-orange-600">
          <motion.div 
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 70%, rgba(255,255,255,0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        {/* Floating Hearts */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + i * 12}%`,
              bottom: '20%'
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.5, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.5
            }}
          >
            <Heart className="w-8 h-8 text-white" fill="rgba(255,255,255,0.3)" />
          </motion.div>
        ))}

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 border border-white/30"
                whileHover={{ scale: 1.05 }}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-4 h-4" fill="white" />
                Make a Difference Today
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Support Our{" "}
                <span className="text-yellow-300">Mission</span>{" "}
                of Inclusion
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                Your contribution helps us promote accessibility, disability inclusion, and equal participation for every individual.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div 
                  className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/30"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.25)" }}
                >
                  <p className="text-2xl font-bold text-yellow-300">₹500</p>
                  <p className="text-white/80 text-xs">Starter</p>
                </motion.div>
                <motion.div 
                  className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/30"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.25)" }}
                >
                  <p className="text-2xl font-bold text-yellow-300">₹1000</p>
                  <p className="text-white/80 text-xs">Supporter</p>
                </motion.div>
                <motion.div 
                  className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/30"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.25)" }}
                >
                  <p className="text-2xl font-bold text-yellow-300">₹5000</p>
                  <p className="text-white/80 text-xs">Champion</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex justify-center"
            >
              <motion.div 
                className="w-48 h-48 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Heart className="w-24 h-24 text-white" fill="rgba(255,255,255,0.5)" />
              </motion.div>
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

      {/* Section 1: Why Your Support Matters */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-red-100/50 to-pink-100/50 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
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
            <div className="text-center mb-10">
              <motion.div 
                className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-8 h-8 text-red-500" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Your Support Matters</h2>
              <p className="text-slate-600">Your donation allows us to:</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {whySupport.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-3 bg-red-50 p-4 rounded-xl shadow-sm hover:shadow-lg hover:bg-red-100/50 transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <motion.div 
                    className="w-7 h-7 bg-red-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-red-500 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Check className="w-4 h-4 text-red-700 group-hover:text-white transition-colors" />
                  </motion.div>
                  <span className="text-slate-700">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.p 
              className="text-center text-slate-600 italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Your generosity helps build a future where everyone can live with dignity and independence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: How You Can Donate */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-10 left-10 w-20 h-20 border-2 border-teal-200 rounded-full"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-16 h-16 bg-teal-100 rounded-2xl opacity-50"
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
            <div className="text-center mb-10">
              <motion.div 
                className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              >
                <CreditCard className="w-8 h-8 text-teal-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900">How You Can Donate</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: CreditCard, color: "blue", title: "1. Online Donation", desc: "Secure digital payment options for easy contributions." },
                { icon: QrCode, color: "purple", title: "2. UPI / QR Code", desc: "Quick and simple UPI payment option available." },
                { icon: Building2, color: "green", title: "3. Corporate / CSR Support", desc: "Partnership opportunities for accessibility-focused initiatives.", hasButton: true }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-md text-center border border-slate-100 hover:shadow-2xl hover:border-${item.color}-200 transition-all duration-500 group relative overflow-hidden`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    />
                  </div>
                  
                  <motion.div 
                    className={`w-18 h-18 bg-${item.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10`}
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                  >
                    <item.icon className={`w-9 h-9 text-${item.color}-600`} />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 relative z-10">{item.title}</h3>
                  <p className="text-slate-600 text-sm relative z-10">{item.desc}</p>
                  {item.hasButton && (
                    <Link to={createPageUrl("Contact")} className="relative z-10 inline-block mt-4">
                      <motion.div whileHover={{ scale: 1.05 }}>
                        <Button variant="outline" size="sm" className="rounded-full group-hover:bg-green-500 group-hover:text-white group-hover:border-green-500 transition-colors">
                          Contact for CSR
                          <ArrowRight className="ml-1 w-3 h-3" />
                        </Button>
                      </motion.div>
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Transparency & Trust */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-teal-400/30 rounded-full"
            style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
        
        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div 
              className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20"
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Shield className="w-10 h-10 text-teal-400" />
            </motion.div>
            <h2 className="text-3xl font-bold mb-4">Transparency & Trust</h2>
            <motion.p 
              className="text-slate-300 text-lg leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              We follow a transparent process for all donations. Funds are used solely to support awareness, accessibility knowledge-sharing, inclusion programs, and community engagement activities.
            </motion.p>
            <motion.p 
              className="text-slate-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              You can request information or updates anytime by contacting us.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Other Ways to Support */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute top-20 left-0 w-72 h-72 bg-gradient-to-br from-amber-100/50 to-yellow-100/50 rounded-full blur-3xl"
          animate={{ x: [0, 40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-10">
              <motion.div 
                className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              >
                <Handshake className="w-8 h-8 text-amber-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Other Ways to Support</h2>
              <p className="text-slate-600">Even if you cannot donate, you can still help our mission:</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherWays.map((way, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3 bg-amber-50 p-4 rounded-xl shadow-sm hover:shadow-lg hover:bg-amber-100/70 transition-all duration-300 cursor-pointer group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -3 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-amber-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <way.icon className="w-6 h-6 text-amber-700 group-hover:text-white transition-colors" />
                  </motion.div>
                  <span className="text-slate-700 font-medium">{way.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.p 
              className="text-center text-teal-600 font-medium mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Every action makes an impact.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Need Help? */}
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
        
        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
            <p className="text-teal-100 mb-8">
              If you have any questions about donations, please reach out:
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
              <motion.a 
                href="mailto:info@dhingrafamily.org" 
                className="flex items-center justify-center gap-2 text-white hover:text-teal-200 transition-colors bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
              >
                <Mail className="w-5 h-5" />
                info@dhingrafamily.org
              </motion.a>
              <motion.a 
                href="tel:+917490874578" 
                className="flex items-center justify-center gap-2 text-white hover:text-teal-200 transition-colors bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
              >
                <Phone className="w-5 h-5" />
                +91 74908 74578
              </motion.a>
            </div>

            <motion.p 
              className="text-teal-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              We're here to assist you.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
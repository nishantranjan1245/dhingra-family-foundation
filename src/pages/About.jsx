import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Accessibility,
  BookOpen,
  Building,
  FileText,
  MessageCircle,
  Check,
  ArrowRight
} from "lucide-react";

export default function About() {
  const values = [
    { 
      icon: Accessibility, 
      title: "Accessibility for All", 
      description: "We believe every person deserves equal access to spaces, opportunities, and information." 
    },
    { 
      icon: Heart, 
      title: "Respect & Dignity", 
      description: "We promote respectful, inclusive attitudes within families, workplaces, and communities." 
    },
    { 
      icon: BookOpen, 
      title: "Awareness & Education", 
      description: "We provide simple, practical resources that help people understand accessibility needs." 
    },
    { 
      icon: Users, 
      title: "Inclusion & Participation", 
      description: "Our work encourages participation, visibility, and empowerment of persons with disabilities." 
    }
  ];

  const whatWeDo = [
    "Create accessibility awareness for homes, workplaces & public places",
    "Provide informational resources on assistive devices",
    "Support inclusive community practices",
    "Promote workplace inclusion & disability-friendly environments",
    "Explain accessibility laws & rights in simple language",
    "Conduct awareness campaigns & inclusion workshops"
  ];

  const directors = [
    { name: "Shaharyar Amzad Khan", role: "Director" },
    { name: "Pankaj Purohit", role: "Director" }
  ];

  const registrationDetails = [
    { label: "CIN", value: "U80904MP2019NPL050401" },
    { label: "FCRA", value: "063480008" },
    { label: "Registered Date", value: "18 December 2019" },
    { label: "Location", value: "Sehore, Madhya Pradesh, India" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Video-like animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-red-950 to-orange-950">
          <motion.div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 30% 40%, rgba(239, 68, 68, 0.3) 0px, transparent 50%),
                radial-gradient(circle at 70% 60%, rgba(251, 146, 60, 0.2) 0px, transparent 50%)
              `
            }}
            animate={{
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-400/30 rounded-full"
            style={{
              left: `${10 + i * 8}%`,
              top: `${20 + (i % 4) * 20}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 border border-white/20">
                <Accessibility className="w-4 h-4 text-orange-400" />
                Established 2019
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                About{" "}
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Dhingra Family Foundation
                </span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                A nonprofit organization dedicated to promoting accessibility, disability inclusion, and equal participation in everyday life.
              </p>
              <div className="flex gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-400">10+</p>
                  <p className="text-slate-400 text-sm">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-400">50+</p>
                  <p className="text-slate-400 text-sm">Communities</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <img 
                src="/images/image-4.jpg"
                alt="About Us"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-6 shadow-xl">
                <Award className="w-8 h-8 text-white mb-2" />
                <p className="text-white font-bold">Registered NGO</p>
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

      {/* Section 1: Who We Are */}
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
                <Users className="w-8 h-8 text-red-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Who We Are</h2>
              <motion.p 
                className="text-slate-600 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Founded with the belief that accessibility is a basic human right, Dhingra Family Foundation India works to create environments where every person can move, live, and participate with dignity.
              </motion.p>
              <motion.p 
                className="text-slate-600 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Our focus is on spreading awareness, guiding families and communities, and promoting inclusive practices that make everyday life more accessible for all.
              </motion.p>
              <motion.p 
                className="text-slate-600 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                We aim to bridge the accessibility gap by sharing accurate, easy-to-understand information that helps people take positive steps toward inclusion.
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
                src="/images/image-4.jpg"
                alt="Community together"
                className="rounded-3xl shadow-2xl w-full relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 & 3: Mission & Vision */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-10 right-10 w-20 h-20 border-2 border-red-200 rounded-full"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-16 h-16 bg-orange-100 rounded-2xl opacity-50"
          animate={{ rotate: [0, 45, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-600 to-orange-600 rounded-3xl p-10 text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <motion.div 
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                />
              </div>
              <motion.div 
                className="w-18 h-18 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-white/30"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              >
                <Target className="w-9 h-9" />
              </motion.div>
              <h2 className="text-2xl font-bold mb-4 relative z-10">Our Mission</h2>
              <p className="text-red-100 text-lg leading-relaxed relative z-10">
                To promote accessibility, inclusion, and equal opportunities for persons with disabilities through awareness, informational resources, and community engagement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-10 text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <motion.div 
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                />
              </div>
              <motion.div 
                className="w-18 h-18 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-white/30"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              >
                <Eye className="w-9 h-9" />
              </motion.div>
              <h2 className="text-2xl font-bold mb-4 relative z-10">Our Vision</h2>
              <p className="text-slate-300 text-lg leading-relaxed relative z-10">
                A barrier-free and inclusive society where every individual—regardless of disability—can live independently, access opportunities, and participate fully in community life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Values */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute top-20 left-0 w-80 h-80 bg-gradient-to-br from-red-100/40 to-orange-100/40 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 group cursor-pointer relative overflow-hidden"
                whileHover={{ y: -8, scale: 1.03 }}
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-red-100/50 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                  />
                </div>
                <motion.div 
                  className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:bg-red-500 transition-colors relative z-10"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                >
                  <value.icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
                </motion.div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 relative z-10">{value.title}</h3>
                <p className="text-slate-600 text-sm relative z-10">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: What We Do */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-10 right-10 w-20 h-20 border-2 border-orange-200 rounded-full"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-16 h-16 bg-orange-100 rounded-2xl opacity-50"
          animate={{ rotate: [0, 45, 0], scale: [1, 1.2, 1] }}
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
                className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              >
                <Award className="w-8 h-8 text-orange-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900">What We Do</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {whatWeDo.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-lg hover:bg-orange-50/50 transition-all duration-300 cursor-pointer group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <motion.div 
                    className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-orange-500 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Check className="w-4 h-4 text-orange-600 group-hover:text-white transition-colors" />
                  </motion.div>
                  <span className="text-slate-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Leadership */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-yellow-100/50 to-orange-100/50 rounded-full blur-3xl"
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
            <div className="text-center mb-10">
              <motion.div 
                className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              >
                <Users className="w-8 h-8 text-yellow-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Leadership</h2>
              <p className="text-slate-600">
                The foundation is guided by individuals committed to accessibility and inclusion.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {directors.map((director, index) => (
                <motion.div 
                  key={index} 
                  className="bg-yellow-50 rounded-2xl p-6 text-center border border-yellow-100 hover:shadow-xl hover:border-yellow-200 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-yellow-100/50 to-transparent"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    />
                  </div>
                  <motion.div 
                    className="w-24 h-24 bg-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:bg-yellow-400 transition-colors relative z-10"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-3xl font-bold text-yellow-700 group-hover:text-white transition-colors">
                      {director.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </motion.div>
                  <h3 className="text-lg font-semibold text-slate-900 relative z-10">{director.name}</h3>
                  <p className="text-yellow-600 text-sm relative z-10">{director.role}</p>
                </motion.div>
              ))}
            </div>

            <motion.p 
              className="text-slate-600 text-center mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Their combined experience supports the foundation's mission to encourage disability inclusion and spread awareness across communities.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Registration Details */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-10 left-10 w-24 h-24 border-2 border-red-200 rounded-2xl"
          animate={{ rotate: [0, 45, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-10">
              <motion.div 
                className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              >
                <FileText className="w-8 h-8 text-red-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900">Registration Details</h2>
            </div>
            
            <motion.div 
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -3 }}
            >
              {registrationDetails.map((detail, index) => (
                <motion.div 
                  key={index} 
                  className={`flex justify-between items-center p-5 hover:bg-red-50/50 transition-colors cursor-pointer ${index !== registrationDetails.length - 1 ? 'border-b border-slate-100' : ''}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <span className="font-medium text-slate-700">{detail.label}</span>
                  <span className="text-slate-600">{detail.value}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 8: Our Commitment */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600 text-white relative overflow-hidden">
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
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div 
              className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/30"
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Heart className="w-10 h-10 text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
            <motion.p 
              className="text-xl text-white/90 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Our commitment is simple: To support individuals, families, workplaces, and communities in understanding accessibility and inclusion — and to empower them with the knowledge to make positive changes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section 9: Connect With Us */}
      <section className="py-20 bg-gradient-to-br from-red-700 to-orange-700 relative overflow-hidden">
        {/* Animated Shapes */}
        <motion.div 
          className="absolute top-10 right-10 w-28 h-28 border-2 border-white/10 rounded-full"
          animate={{ rotate: -360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-10 left-10 w-20 h-20 border-2 border-white/15 rounded-2xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl"
          animate={{ y: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        
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
            <h2 className="text-3xl font-bold mb-4">Connect With Us</h2>
            <motion.p 
              className="text-red-100 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Have questions, suggestions, or ideas for collaboration? We welcome partnerships and community engagement.
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
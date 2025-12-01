import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Accessibility, 
  Cog, 
  Briefcase, 
  Scale, 
  Users, 
  Monitor,
  Check,
  ArrowRight,
  MessageCircle,
  Target
} from "lucide-react";

export default function Programs() {
  const programs = [
    {
      icon: Accessibility,
      title: "Accessibility Information Hub",
      color: "bg-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-100",
      description: "A dedicated program that provides practical guidance for building accessible environments. We help communities, organisations, and families understand how to create spaces that support mobility, safety, and independence.",
      items: [
        "Public place accessibility",
        "Transport accessibility",
        "Home & office accessibility",
        "Digital accessibility",
        "Accessibility awareness campaigns"
      ]
    },
    {
      icon: Cog,
      title: "Assistive Device Knowledge Center",
      color: "bg-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-100",
      description: "This program spreads awareness about different types of assistive devices that support daily living and mobility.",
      items: [
        "Wheelchairs and their types",
        "Artificial limbs & prosthetics",
        "Mobility sticks and canes",
        "Braces & orthotic supports",
        "Walkers, rollators & crutches",
        "Daily living tools"
      ],
      note: "The aim is to help people understand the usefulness and purpose of each device."
    },
    {
      icon: Briefcase,
      title: "Workplace Inclusion Initiative",
      color: "bg-yellow-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-100",
      description: "A program designed to promote disability-friendly workplaces and encourage inclusive employment opportunities.",
      items: [
        "Inclusive hiring practices",
        "Workplace accessibility improvements",
        "Staff sensitivity sessions",
        "Assistive technologies at work",
        "Equal opportunity guidelines",
        "Employer awareness toolkit"
      ]
    },
    {
      icon: Scale,
      title: "Accessibility Rights Awareness",
      color: "bg-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-100",
      description: "We help individuals understand their rights under Indian accessibility laws in a simple and clear way.",
      items: [
        "RPwD Act (Rights of Persons with Disabilities Act)",
        "Accessibility standards & guidelines",
        "Government support schemes",
        "Workplace rights",
        "Accessibility for public services"
      ],
      note: "This program strengthens awareness and protects the dignity of persons with disabilities."
    },
    {
      icon: Users,
      title: "Community Inclusion Campaigns",
      color: "bg-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-100",
      description: "Our community-centric programs encourage people to adopt inclusive behaviours and attitudes. We partner with local groups, volunteers, and organisations to spread awareness.",
      items: [
        "Inclusion talks & workshops",
        "Awareness drives",
        "Community accessibility assessments",
        "Behavioural inclusion guides",
        "Inclusive event participation"
      ]
    },
    {
      icon: Monitor,
      title: "Digital Inclusion & Communication",
      color: "bg-yellow-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-100",
      description: "This program focuses on making digital platforms and communication more accessible for all.",
      items: [
        "Screen reader-friendly content",
        "High contrast & readable design",
        "Captioning & transcripts",
        "Accessible web practices",
        "Inclusive communication"
      ]
    }
  ];

  const impactPoints = [
    "Support accessibility",
    "Strengthen inclusion",
    "Promote awareness",
    "Create safer and more welcoming environments",
    "Empower individuals and communities"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Split Background */}
        <div className="absolute inset-0 flex">
          <div className="w-1/2 bg-gradient-to-br from-red-600 via-red-700 to-orange-700" />
          <div className="w-1/2 relative">
            <img 
              src="/images/image-4.jpg"
              alt="Programs"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-transparent" />
          </div>
        </div>

        {/* Decorative Circles */}
        <motion.div 
          className="absolute top-10 left-10 w-64 h-64 border-4 border-white/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-10 left-1/4 w-40 h-40 border-2 border-white/20 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <span className="text-white/80 font-medium">6 Active Programs</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Our{" "}
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Programs
                </span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                Awareness-based programs focused on accessibility, assistive devices, inclusion, and disability rights. Each program is designed to inform, empower, and help communities.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {["Accessibility", "Assistive Devices", "Inclusion", "Rights"].map((tag, i) => (
                  <motion.span 
                    key={tag}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm border border-white/20"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    {tag}
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

      {/* Programs Grid */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-red-100/50 to-orange-100/50 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-40 left-0 w-96 h-96 bg-gradient-to-br from-yellow-100/40 to-red-100/40 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="space-y-12">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
                className={`${program.bgColor} rounded-3xl p-8 md:p-10 border ${program.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group`}
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                </div>
                
                <div className="flex flex-col lg:flex-row gap-8 relative">
                  <div className="lg:w-1/3">
                    <motion.div 
                      className={`w-18 h-18 ${program.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg relative`}
                      whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <program.icon className="w-9 h-9 text-white relative z-10" />
                      <motion.div 
                        className={`absolute inset-0 ${program.color} rounded-2xl`}
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">{program.title}</h2>
                    <p className="text-slate-600">{program.description}</p>
                  </div>
                  <div className="lg:w-2/3">
                    <h3 className="font-semibold text-slate-900 mb-4">
                      {index === 0 ? "What We Cover:" : index === 1 ? "Key Areas:" : "Focus Areas:"}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {program.items.map((item, itemIndex) => (
                        <motion.div 
                          key={itemIndex} 
                          className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group/item"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: itemIndex * 0.05 }}
                          whileHover={{ x: 5, scale: 1.02 }}
                        >
                          <motion.div 
                            className={`w-6 h-6 ${program.color.replace('bg-', 'bg-').replace('-500', '-200')} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Check className={`w-4 h-4 ${program.color.replace('bg-', 'text-').replace('-500', '-700')}`} />
                          </motion.div>
                          <span className="text-slate-700 text-sm">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                    {program.note && (
                      <p className="text-slate-600 italic mt-4 text-sm">{program.note}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600 text-white relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        
        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{ left: `${10 + i * 12}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
        
        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
            <p className="text-white/80 mb-8">Every program we run aims to:</p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {impactPoints.map((point, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20 hover:bg-white/25 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                >
                  <motion.div 
                    className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Check className="w-4 h-4 text-white" />
                  </motion.div>
                  <span className="text-white">{point}</span>
                </motion.div>
              ))}
            </div>

            <motion.p 
              className="text-white font-medium text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Together, these programs help build a more inclusive tomorrow.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              transition={{ duration: 0.5 }}
            >
              <MessageCircle className="w-10 h-10" />
            </motion.div>
            <h2 className="text-3xl font-bold mb-4">Interested in Joining or Supporting?</h2>
            <p className="text-red-100 mb-8">
              We would love to collaborate with you on any of our programs.
            </p>
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
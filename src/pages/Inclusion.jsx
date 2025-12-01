import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Briefcase, 
  Heart, 
  MessageSquare, 
  Building, 
  Scale, 
  HeartHandshake,
  MessageCircle,
  Check,
  ArrowRight
} from "lucide-react";

export default function Inclusion() {
  const keyPrinciples = [
    "Respect",
    "Equal opportunity",
    "Accessibility",
    "Independence",
    "Dignity",
    "Community acceptance"
  ];

  const workplaceComponents = [
    "Accessible office entrances & interiors",
    "Adjustable desks & proper lighting",
    "Assistive technologies (screen readers, magnifiers, etc.)",
    "Flexible work arrangements",
    "Clear walkways & accessible washrooms",
    "Inclusive hiring practices",
    "Sensitivity training for staff"
  ];

  const hiringSteps = [
    "Barrier-free job descriptions",
    "Accessible interview process",
    "Accommodations during evaluation",
    "Supportive onboarding",
    "Regular feedback & accessibility adjustments"
  ];

  const communityInclusion = [
    "Encourage participation in events",
    "Provide accessible community spaces",
    "Promote positive attitudes",
    "Offer assistance respectfully",
    "Avoid stereotypes & assumptions",
    "Support awareness drives"
  ];

  const communicationTips = [
    "Speak directly to the person",
    "Ask before offering help",
    "Use simple and clear language",
    "Listen patiently",
    "Avoid terms that are disrespectful or outdated",
    "Respect personal space, mobility devices & boundaries",
    "When unsure — politely ask"
  ];

  const inclusiveBehaviours = [
    "Holding doors open",
    "Giving extra time for response",
    "Being mindful of accessibility needs",
    "Offering equal participation in conversations"
  ];

  const publicSpaceFeatures = [
    "Ramps",
    "Handrails",
    "Accessible toilets",
    "Braille & tactile indicators",
    "Audio announcements",
    "Clear signboards",
    "Well-lit environments"
  ];

  const rights = [
    "Right to equal opportunity",
    "Right to non-discrimination",
    "Right to accessibility in buildings & transport",
    "Right to accessible information",
    "Workplace protections under RPwD Act",
    "Reasonable accommodations at institutions"
  ];

  const howWeHelp = [
    "Awareness programs",
    "Accessibility guides",
    "Community inclusion workshops",
    "Workplace inclusion recommendations",
    "Assistive device information",
    "Rights-based awareness"
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
                <Users className="w-4 h-4 text-orange-400" />
                Building Inclusive Communities
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Inclusion &{" "}
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Equal Participation
                </span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Inclusion means ensuring that every person has the opportunity to participate fully in society. We promote inclusive mindsets and supportive communities that value dignity and respect.
              </p>
              <Link to={createPageUrl("InclusionTools")}>
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white rounded-full px-8 shadow-xl">
                  Explore Inclusion Tools
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <img 
                  src="/images/image-5.jpg"
                  alt="Inclusion"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-6 shadow-xl">
                  <p className="text-white font-bold text-2xl">100+</p>
                  <p className="text-white/80 text-sm">Communities Empowered</p>
                </div>
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

      {/* Section 1: What is Disability Inclusion? */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-teal-100/50 to-blue-100/50 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-0 w-72 h-72 bg-gradient-to-br from-purple-100/40 to-teal-100/40 rounded-full blur-3xl"
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
                className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Users className="w-8 h-8 text-teal-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">What is Disability Inclusion?</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Disability inclusion is the practice of removing social, physical, and communication barriers so that persons with disabilities can take part in everyday life without discrimination.
              </p>
              <p className="text-slate-700 font-medium mb-4">Key principles:</p>
              <div className="grid grid-cols-2 gap-3">
                {keyPrinciples.map((principle, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-teal-50 transition-colors cursor-pointer group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-7 h-7 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Check className="w-4 h-4 text-teal-600 group-hover:text-white transition-colors" />
                    </motion.div>
                    <span className="text-slate-700">{principle}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-br from-teal-200/30 to-purple-200/30 rounded-3xl"
                animate={{ rotate: [0, 2, 0, -2, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <img 
                src="/images/image-5.jpg"
                alt="Inclusion concept"
                className="rounded-3xl shadow-2xl w-full relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Workplace Inclusion */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-10 right-10 w-20 h-20 border-2 border-blue-200 rounded-full"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-16 h-16 bg-blue-100 rounded-2xl opacity-50"
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
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              >
                <Briefcase className="w-8 h-8 text-blue-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900">Workplace Inclusion</h2>
            </div>
            <p className="text-slate-600 mb-8">
              Inclusive workplaces benefit everyone and create a diverse, productive environment.
            </p>
            
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-md mb-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <motion.div 
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-blue-50/50 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4 relative z-10">Essential components of an inclusive workplace:</h3>
              <div className="grid md:grid-cols-2 gap-4 relative z-10">
                {workplaceComponents.map((component, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Check className="w-4 h-4 text-blue-600" />
                    </motion.div>
                    <span className="text-slate-700">{component}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="bg-blue-50 rounded-2xl p-6 border border-blue-100 mb-6 hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -3 }}
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Inclusive Hiring Steps:</h3>
              <div className="space-y-3">
                {hiringSteps.map((step, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-100/50 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-blue-700 font-semibold">{index + 1}</span>
                    </motion.div>
                    <span className="text-slate-700">{step}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="text-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button variant="outline" className="rounded-full border-2 border-blue-300 text-blue-700 hover:bg-blue-50 shadow-md hover:shadow-lg transition-all">
                  Workplace Inclusion Checklist
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Community Inclusion */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute top-20 left-0 w-80 h-80 bg-gradient-to-br from-green-100/50 to-teal-100/50 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Heart className="w-8 h-8 text-green-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900">Community Inclusion</h2>
            </div>
            <p className="text-slate-600 mb-8">
              Communities play a major role in creating an environment where everyone feels welcome and supported.
            </p>
            
            <motion.div 
              className="bg-green-50 rounded-2xl p-8 border border-green-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <motion.div 
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4 relative z-10">How communities can be inclusive:</h3>
              <div className="grid md:grid-cols-2 gap-4 relative z-10">
                {communityInclusion.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-green-100/50 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-7 h-7 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Check className="w-4 h-4 text-green-700" />
                    </motion.div>
                    <span className="text-slate-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.p 
              className="text-slate-600 italic text-center mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Community inclusion builds trust, confidence, and belonging.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Inclusive Behaviour & Communication */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-10 left-10 w-24 h-24 border-2 border-purple-200 rounded-2xl"
          animate={{ rotate: [0, 45, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-16 h-16 bg-purple-100 rounded-full opacity-50"
          animate={{ scale: [1, 1.3, 1], y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              >
                <MessageSquare className="w-8 h-8 text-purple-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900">Inclusive Behaviour & Communication</h2>
            </div>
            <p className="text-slate-600 mb-8">
              Effective communication ensures that everyone is heard and understood.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300 group relative overflow-hidden"
                whileHover={{ y: -5 }}
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-purple-50/50 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4 relative z-10">Respectful communication tips:</h3>
                <div className="space-y-3 relative z-10">
                  {communicationTips.map((tip, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start gap-3 p-1 rounded-lg hover:bg-purple-50 transition-colors cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 3 }}
                    >
                      <motion.div 
                        className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        whileHover={{ scale: 1.2 }}
                      >
                        <Check className="w-4 h-4 text-purple-600" />
                      </motion.div>
                      <span className="text-slate-700 text-sm">{tip}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="bg-purple-50 rounded-2xl p-6 border border-purple-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300 group relative overflow-hidden"
                whileHover={{ y: -5 }}
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4 relative z-10">Examples of inclusive behaviour:</h3>
                <div className="space-y-3 relative z-10">
                  {inclusiveBehaviours.map((behaviour, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start gap-3 p-2 rounded-lg hover:bg-purple-100/50 transition-colors cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className="w-7 h-7 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Check className="w-4 h-4 text-purple-700" />
                      </motion.div>
                      <span className="text-slate-700">{behaviour}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Inclusion in Public Spaces */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-amber-100/50 to-yellow-100/50 rounded-full blur-3xl"
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
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              >
                <Building className="w-8 h-8 text-amber-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900">Inclusion in Public Spaces</h2>
            </div>
            <p className="text-slate-600 mb-8">
              Public spaces must be designed so that everyone can access them safely.
            </p>
            
            <motion.div 
              className="bg-amber-50 rounded-2xl p-8 border border-amber-100 hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Inclusive public space features:</h3>
              <div className="flex flex-wrap gap-3">
                {publicSpaceFeatures.map((feature, index) => (
                  <motion.span 
                    key={index} 
                    className="px-5 py-2.5 bg-white rounded-full text-slate-700 border border-amber-200 shadow-sm hover:shadow-md hover:bg-amber-100 transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {feature}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.p 
              className="text-slate-600 italic text-center mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              This allows persons with disabilities to move freely and independently.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Rights Supporting Inclusion */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
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
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-10">
              <motion.div 
                className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Scale className="w-10 h-10 text-teal-400" />
              </motion.div>
              <h2 className="text-3xl font-bold mb-4">Rights Supporting Inclusion</h2>
              <p className="text-slate-300">
                India's accessibility and disability rights include:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {rights.map((right, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/15 hover:border-teal-500/30 transition-all duration-300 cursor-pointer group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <motion.div 
                    className="w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500/40 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Check className="w-4 h-4 text-teal-400" />
                  </motion.div>
                  <span className="text-slate-200">{right}</span>
                </motion.div>
              ))}
            </div>

            <motion.p 
              className="text-slate-400 text-center mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Understanding these rights helps strengthen inclusion everywhere.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section 7: How We Promote Inclusion */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-pink-100/50 to-rose-100/50 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-0 w-72 h-72 bg-gradient-to-br from-purple-100/40 to-pink-100/40 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div 
              className="w-20 h-20 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <HeartHandshake className="w-10 h-10 text-pink-600" />
            </motion.div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How We Promote Inclusion</h2>
            <p className="text-slate-600 mb-8">
              Dhingra Family Foundation India supports inclusive environments through:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {howWeHelp.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-2 p-4 bg-pink-50 rounded-xl shadow-sm hover:shadow-lg hover:bg-pink-100/70 transition-all duration-300 cursor-pointer group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -3 }}
                >
                  <motion.div 
                    className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Check className="w-4 h-4 text-pink-700 group-hover:text-white transition-colors" />
                  </motion.div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <Link to={createPageUrl("Accessibility")}>
              <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700 rounded-full shadow-xl shadow-pink-500/30 group px-8">
                  Explore Our Inclusion Resources
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 8: Need Support? */}
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
            <h2 className="text-3xl font-bold mb-4">Need Support?</h2>
            <motion.p 
              className="text-teal-100 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              If you want guidance on workplace, community, or public inclusion practices — we're here to help with awareness, resources, and inclusive ideas.
            </motion.p>
            <Link to={createPageUrl("Contact")}>
              <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="bg-white text-teal-700 hover:bg-teal-50 rounded-full px-10 shadow-xl shadow-teal-900/30 group">
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
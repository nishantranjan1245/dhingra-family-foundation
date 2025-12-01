import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Building, 
  Home, 
  Briefcase, 
  Train, 
  Monitor, 
  MessageSquare,
  Download,
  Check,
  ArrowRight,
  MessageCircle,
  BookOpen
} from "lucide-react";

export default function AccessibilityGuides() {
  const guides = [
    {
      icon: Building,
      title: "Public Place Accessibility Guide",
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
      description: "Public spaces should be safe, easy to navigate, and comfortable for everyone.",
      heading: "What Should Be Accessible?",
      items: [
        "Ramps with handrails at entrances",
        "Wide doorways for easy wheelchair access",
        "Clear, readable signboards",
        "Accessible toilets with grab bars",
        "Non-slip floor surfaces",
        "Reserved parking spaces",
        "Tactile indicators for persons with visual disabilities",
        "Sufficient lighting in all areas",
        "Benches and resting spots in parks & public areas"
      ],
      checklist: [
        "Step-free entrance",
        "Proper ramp slope",
        "Accessible washrooms",
        "Seating areas",
        "Safe pathways"
      ]
    },
    {
      icon: Home,
      title: "Home Accessibility Guide",
      color: "bg-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-100",
      description: "Simple changes at home can reduce risks and improve independence.",
      heading: "Key Recommendations",
      items: [
        "Install grab bars in bathrooms",
        "Use anti-skid flooring",
        "Keep pathways open and clutter-free",
        "Ensure good lighting in all rooms",
        "Use ramps at entrance instead of steps",
        "Place switches & controls at reachable height",
        "Use lever-style door handles",
        "Provide wide doorways for mobility devices",
        "Arrange furniture with wide movement space"
      ],
      checklist: [
        "Easy access in kitchen & bathroom",
        "Safe bedroom layout",
        "Slip-resistant flooring",
        "Ramps instead of steps"
      ]
    },
    {
      icon: Briefcase,
      title: "Office & Workplace Accessibility Guide",
      color: "bg-amber-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-100",
      description: "Inclusive offices allow everyone to work confidently.",
      heading: "Essential Office Changes",
      items: [
        "Step-free building entrance",
        "Accessible workstations",
        "Adjustable-height desks",
        "Clear, wide walkways",
        "Accessible washrooms",
        "Meeting rooms with enough space",
        "Emergency evacuation plan for persons with disabilities",
        "Assistive software (screen readers, magnifiers, captions)",
        "Clear signboards and floor indicators"
      ],
      checklist: [
        "Inclusive hiring process",
        "Comfortable and accessible seating",
        "Good lighting",
        "Digital accessibility in emails & documents"
      ]
    },
    {
      icon: Train,
      title: "Transport Accessibility Guide",
      color: "bg-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-100",
      description: "Safe and accessible travel is essential for independence.",
      heading: "What Improves Transport Accessibility?",
      items: [
        "Low-floor buses",
        "Ramps at bus stops & stations",
        "Audio announcements for stops",
        "Tactile paths at platforms",
        "Priority seating",
        "Wheelchair-friendly auto & taxi options",
        "Trained staff for assistance"
      ],
      checklist: [
        "Non-slip buses and platforms",
        "Braille & tactile marks",
        "Step-free boarding"
      ]
    },
    {
      icon: Monitor,
      title: "Digital Accessibility Guide",
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100",
      description: "Digital platforms must be usable by everyone, including persons with visual or hearing disabilities.",
      heading: "Key Digital Accessibility Practices",
      items: [
        "Provide alt text for images",
        "Use readable fonts and large text",
        "Add captions for videos",
        "Maintain high-contrast colours",
        "Use descriptive links",
        "Ensure website compatibility with screen readers",
        "Provide keyboard navigation",
        "Avoid flashing/fast animations"
      ],
      checklist: [
        "Clear content",
        "Simple navigation",
        "Accessible media files"
      ]
    },
    {
      icon: MessageSquare,
      title: "Communication Accessibility Guide",
      color: "bg-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-100",
      description: "Communication should be respectful, clear, and inclusive.",
      heading: "Best Practices",
      items: [
        "Speak directly to the person",
        "Ask before offering assistance",
        "Use simple, clear language",
        "Maintain respectful tone",
        "Avoid interrupting",
        "Allow extra time for responses",
        "Use visual aids if needed",
        "Provide written versions of important information"
      ],
      checklist: [
        "Respect",
        "Patience",
        "Clarity",
        "Inclusiveness"
      ]
    }
  ];

  const downloadableGuides = [
    "Public Place Accessibility Checklist",
    "Home Accessibility Essentials",
    "Office Accessibility Standards",
    "Digital Accessibility Basics",
    "Inclusive Communication Guide",
    "Transport Accessibility Tips"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-gradient-to-br from-orange-600 via-red-600 to-red-700">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        {/* Floating Books Animation */}
        <motion.div 
          className="absolute top-20 right-20"
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <BookOpen className="w-24 h-24 text-white/20" />
        </motion.div>
        <motion.div 
          className="absolute bottom-32 right-1/4"
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <BookOpen className="w-16 h-16 text-white/15" />
        </motion.div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                Comprehensive Resources
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Accessibility{" "}
                <span className="text-yellow-300">Guides</span>
              </h1>
              <p className="text-lg text-white/85 leading-relaxed mb-8">
                Simple, practical steps to help make homes, workplaces, public spaces, transportation, and digital platforms more inclusive for everyone.
              </p>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-yellow-300">6+</p>
                  <p className="text-white/70 text-sm">Detailed Guides</p>
                </div>
                <div className="w-px h-12 bg-white/30" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-yellow-300">50+</p>
                  <p className="text-white/70 text-sm">Checklist Items</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {[Building, Home, Briefcase, Train, Monitor, MessageSquare].map((Icon, i) => (
                <motion.div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  <Icon className="w-8 h-8 text-yellow-300 mb-2" />
                  <p className="text-white/80 text-sm">Guide {i + 1}</p>
                </motion.div>
              ))}
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

      {/* Guides */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute top-20 left-0 w-80 h-80 bg-gradient-to-br from-orange-100/50 to-red-100/50 rounded-full blur-3xl"
          animate={{ x: [0, 40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-40 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="space-y-12">
            {guides.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
                className={`${guide.bgColor} rounded-3xl p-8 md:p-10 border ${guide.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group`}
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                </div>
                
                <div className="flex flex-col lg:flex-row gap-8 relative">
                  <div className="lg:w-1/3">
                    <motion.div 
                      className={`w-18 h-18 ${guide.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg relative`}
                      whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <guide.icon className="w-9 h-9 text-white relative z-10" />
                      <motion.div 
                        className={`absolute inset-0 ${guide.color} rounded-2xl`}
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">{guide.title}</h2>
                    <p className="text-slate-600 mb-6">{guide.description}</p>
                    
                    <motion.div 
                      className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                      whileHover={{ scale: 1.02 }}
                    >
                      <h4 className="font-semibold text-slate-900 mb-3 text-sm">Checklist Highlights:</h4>
                      <div className="space-y-2">
                        {guide.checklist.map((item, checkIndex) => (
                          <motion.div 
                            key={checkIndex} 
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: checkIndex * 0.1 }}
                          >
                            <motion.div 
                              className={`w-5 h-5 ${guide.color.replace('-500', '-200')} rounded-full flex items-center justify-center flex-shrink-0`}
                              whileHover={{ scale: 1.2 }}
                            >
                              <Check className={`w-3 h-3 ${guide.color.replace('bg-', 'text-').replace('-500', '-700')}`} />
                            </motion.div>
                            <span className="text-slate-700 text-sm">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                  <div className="lg:w-2/3">
                    <h3 className="font-semibold text-slate-900 mb-4">{guide.heading}</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {guide.items.map((item, itemIndex) => (
                        <motion.div 
                          key={itemIndex} 
                          className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: itemIndex * 0.03 }}
                          whileHover={{ x: 5, scale: 1.02 }}
                        >
                          <motion.div 
                            className={`w-6 h-6 ${guide.color.replace('-500', '-200')} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Check className={`w-4 h-4 ${guide.color.replace('bg-', 'text-').replace('-500', '-700')}`} />
                          </motion.div>
                          <span className="text-slate-700 text-sm">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Guides Section */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-10 right-10 w-20 h-20 border-2 border-teal-200 rounded-2xl"
          animate={{ rotate: [0, 90, 0], y: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-16 h-16 bg-teal-100 rounded-full opacity-50"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
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
                <Download className="w-8 h-8 text-teal-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Downloadable Guides</h2>
              <p className="text-slate-600">We offer comprehensive PDF guides including:</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {downloadableGuides.map((guide, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-teal-200 transition-all duration-300 cursor-pointer group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -3 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Download className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors" />
                  </motion.div>
                  <span className="text-slate-700 font-medium">{guide}</span>
                </motion.div>
              ))}
            </div>
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
            <motion.div 
              className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/30"
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <MessageCircle className="w-10 h-10" />
            </motion.div>
            <h2 className="text-3xl font-bold mb-4">Need Personalized Guidance?</h2>
            <p className="text-teal-100 mb-8">
              If you want help understanding accessibility improvements for homes, offices, or public areas — we're here to guide you with clear, simple information.
            </p>
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
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Accessibility, 
  Cog, 
  Briefcase, 
  Users, 
  Building, 
  Scale, 
  BarChart3,
  Download,
  HeartHandshake,
  Check,
  ArrowRight,
  MessageCircle
} from "lucide-react";

export default function ResearchReports() {
  const sections = [
    {
      icon: Accessibility,
      title: "Accessibility Research",
      color: "bg-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-100",
      description: "We study how accessible public spaces, transportation, government buildings, workplaces, and community areas are.",
      heading: "Key Study Areas",
      items: [
        "Public place accessibility",
        "Transport accessibility",
        "Home & workplace access",
        "Digital accessibility",
        "Universal design gaps",
        "Community awareness levels"
      ],
      benefits: ["Identify barriers", "Recommend improvements", "Promote inclusive planning"],
      benefitLabel: "Purpose:"
    },
    {
      icon: Cog,
      title: "Assistive Devices Research",
      color: "bg-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-100",
      description: "This section covers awareness, usage trends, and challenges related to assistive devices used in daily life.",
      heading: "Topics Include",
      items: [
        "Wheelchair usage patterns",
        "Mobility aid awareness",
        "Prosthetic adoption factors",
        "Benefits & limitations of devices",
        "Community-level device knowledge",
        "Accessibility impact through devices"
      ],
      benefits: ["Better understanding for families", "Improved device awareness", "Informed decision-making"],
      benefitLabel: "Outcome:"
    },
    {
      icon: Briefcase,
      title: "Workplace Inclusion Studies",
      color: "bg-yellow-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-100",
      description: "We assess how workplaces support persons with disabilities and what improvements can make work environments more inclusive.",
      heading: "Focus Areas",
      items: [
        "Hiring barriers",
        "Workplace accessibility",
        "Reasonable accommodations",
        "Employee experiences",
        "Assistive tech availability",
        "Inclusion-friendly policies"
      ],
      benefits: ["Employer sensitivity", "Accessible hiring", "Equal opportunity planning"],
      benefitLabel: "Helps With:"
    },
    {
      icon: Users,
      title: "Community Inclusion Reports",
      color: "bg-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-100",
      description: "We document how communities involve and support persons with disabilities.",
      heading: "Includes",
      items: [
        "Participation in community events",
        "Accessibility of local spaces",
        "Behavioural inclusion",
        "Social interaction patterns",
        "Support systems & awareness gaps"
      ],
      benefits: ["Stronger community bonding", "Better inclusion practices"],
      benefitLabel: "Goal:"
    },
    {
      icon: Building,
      title: "Accessibility Gap Assessments",
      color: "bg-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-100",
      description: "Gap reports highlight missing accessibility features across different environments.",
      heading: "Assessment Areas",
      items: [
        "Government buildings",
        "Schools & colleges (structural access only)",
        "Transport hubs",
        "Hospitals & public facilities",
        "Markets, malls & parks",
        "Digital platforms"
      ],
      benefits: ["Show areas needing improvement", "Enable barrier-free design"],
      benefitLabel: "Purpose:"
    },
    {
      icon: Scale,
      title: "Policy & Rights Analysis",
      color: "bg-yellow-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-100",
      description: "We simplify accessibility policies so everyone can understand their rights and responsibilities.",
      heading: "Topics Covered",
      items: [
        "RPwD Act accessibility sections",
        "Accessibility standards",
        "Workplace policies",
        "Rights in public services",
        "Government support schemes"
      ],
      benefits: ["Easy understanding of laws", "Awareness for families & employers"],
      benefitLabel: "Benefit:"
    }
  ];

  const surveyTopics = [
    "Accessibility awareness levels",
    "Assistive device usage",
    "Barriers in daily environments",
    "Digital accessibility challenges",
    "Community behaviour patterns",
    "Inclusion acceptance in workplaces"
  ];

  const downloadableReports = [
    "Public Accessibility Assessment",
    "Assistive Device Awareness Report",
    "Workplace Inclusion Survey",
    "Community Inclusion Findings",
    "Policy & Rights Summary Report"
  ];

  const howWeHelp = [
    "Better awareness",
    "Improved accessibility",
    "Community-driven inclusion",
    "Policy understanding",
    "Assistive device knowledge"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-slate-900">
        {/* Data Visualization Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
          <div className="absolute inset-0" style={{
            background: `radial-gradient(at 30% 30%, rgba(239, 68, 68, 0.3) 0px, transparent 50%),
                         radial-gradient(at 70% 70%, rgba(251, 146, 60, 0.2) 0px, transparent 50%)`
          }} />
        </div>

        {/* Animated Chart Bars */}
        <div className="absolute bottom-0 left-0 right-0 h-40 flex items-end justify-around px-10 opacity-20">
          {[60, 80, 45, 90, 70, 85, 50, 75, 65, 95].map((h, i) => (
            <motion.div
              key={i}
              className="w-8 bg-gradient-to-t from-red-500 to-orange-500 rounded-t-lg"
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 border border-white/20">
                <BarChart3 className="w-4 h-4 text-orange-400" />
                Data-Driven Insights
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Research &{" "}
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Reports
                </span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Highlighting the current state of accessibility, assistive devices awareness, workplace inclusion, and community participation with actionable insights.
              </p>
              <div className="flex gap-8">
                <div>
                  <p className="text-3xl font-bold text-orange-400">6+</p>
                  <p className="text-slate-400 text-sm">Research Areas</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange-400">50+</p>
                  <p className="text-slate-400 text-sm">Studies</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                {[Accessibility, Cog, Briefcase, Users].map((Icon, i) => (
                  <motion.div
                    key={i}
                    className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.1)", scale: 1.02 }}
                  >
                    <Icon className="w-8 h-8 text-orange-400 mb-3" />
                    <div className="h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full" style={{ width: `${60 + i * 10}%` }} />
                  </motion.div>
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

      {/* Research Sections */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-red-100/50 to-orange-100/50 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-40 left-0 w-96 h-96 bg-gradient-to-br from-yellow-100/40 to-red-100/40 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
                className={`${section.bgColor} rounded-3xl p-8 md:p-10 border ${section.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group`}
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
                      className={`w-18 h-18 ${section.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg relative`}
                      whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <section.icon className="w-9 h-9 text-white relative z-10" />
                      <motion.div 
                        className={`absolute inset-0 ${section.color} rounded-2xl`}
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.title}</h2>
                    <p className="text-slate-600 mb-6">{section.description}</p>
                    
                    <motion.div 
                      className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                      whileHover={{ scale: 1.02 }}
                    >
                      <h4 className="font-semibold text-slate-900 mb-3 text-sm">{section.benefitLabel}</h4>
                      <div className="space-y-2">
                        {section.benefits.map((benefit, benefitIndex) => (
                          <motion.div 
                            key={benefitIndex} 
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: benefitIndex * 0.1 }}
                          >
                            <motion.div 
                              className={`w-5 h-5 ${section.color.replace('-500', '-200')} rounded-full flex items-center justify-center flex-shrink-0`}
                              whileHover={{ scale: 1.2 }}
                            >
                              <Check className={`w-3 h-3 ${section.color.replace('bg-', 'text-').replace('-500', '-700')}`} />
                            </motion.div>
                            <span className="text-slate-700 text-sm">{benefit}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                  <div className="lg:w-2/3">
                    <h3 className="font-semibold text-slate-900 mb-4">{section.heading}</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {section.items.map((item, itemIndex) => (
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
                            className={`w-6 h-6 ${section.color.replace('-500', '-200')} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Check className={`w-4 h-4 ${section.color.replace('bg-', 'text-').replace('-500', '-700')}`} />
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

      {/* Section 7: Data Insights & Surveys */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-10">
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-7 h-7 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Data Insights & Surveys</h2>
              <p className="text-slate-600">We create simple surveys to understand:</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {surveyTopics.map((topic, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-slate-700">{topic}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-slate-600 italic">
              Survey findings help us shape better awareness programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 8: Downloadable Reports */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-10">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Download className="w-7 h-7 text-orange-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Downloadable Reports</h2>
              <p className="text-slate-600">You may access PDFs such as:</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {downloadableReports.map((report, index) => (
                <div key={index} className="flex items-center gap-3 bg-orange-50 p-4 rounded-xl border border-orange-100">
                  <div className="w-10 h-10 bg-orange-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Download className="w-5 h-5 text-orange-700" />
                  </div>
                  <span className="text-slate-700">{report}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 9: How Our Research Helps */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HeartHandshake className="w-7 h-7 text-yellow-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How Our Research Helps Society</h2>
            <p className="text-slate-600 mb-8">Our insights support:</p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {howWeHelp.map((item, index) => (
                <span key={index} className="flex items-center gap-2 px-4 py-2 bg-yellow-50 rounded-full">
                  <Check className="w-4 h-4 text-yellow-600" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 10: CTA */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Want to Collaborate?</h2>
            <p className="text-red-100 mb-8">
              If you're a student, researcher, or organisation interested in disability inclusion studies — we welcome collaborations.
            </p>
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-white text-red-700 hover:bg-red-50 rounded-full px-8">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
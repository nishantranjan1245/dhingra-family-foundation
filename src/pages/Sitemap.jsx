import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { 
  Map, 
  Home, 
  Accessibility, 
  Cog, 
  Users, 
  Target, 
  FileText, 
  BookOpen, 
  Shield,
  ArrowRight
} from "lucide-react";

export default function Sitemap() {
  const sections = [
    {
      icon: Home,
      title: "1. Main Pages",
      color: "bg-red-500",
      bgColor: "bg-red-50",
      links: [
        { name: "Home", page: "Home" },
        { name: "Accessibility", page: "Accessibility" },
        { name: "Assistive Devices", page: "AssistiveDevices" },
        { name: "Inclusion", page: "Inclusion" },
        { name: "About", page: "About" },
        { name: "Contact", page: "Contact" },
        { name: "Donate", page: "Donate" }
      ]
    },
    {
      icon: BookOpen,
      title: "2. Accessibility Resources",
      color: "bg-orange-500",
      bgColor: "bg-orange-50",
      links: [
        { name: "Accessibility Guides", page: "AccessibilityGuides" },
        { name: "Public Place Accessibility", page: "AccessibilityGuides" },
        { name: "Home Accessibility", page: "AccessibilityGuides" },
        { name: "Office/Workplace Accessibility", page: "AccessibilityGuides" },
        { name: "Transport Accessibility", page: "AccessibilityGuides" },
        { name: "Digital Accessibility", page: "AccessibilityGuides" },
        { name: "Communication Accessibility", page: "AccessibilityGuides" }
      ]
    },
    {
      icon: Cog,
      title: "3. Assistive Devices Information",
      color: "bg-yellow-500",
      bgColor: "bg-yellow-50",
      links: [
        { name: "Devices Info", page: "DevicesInfo" },
        { name: "Wheelchair Types", page: "DevicesInfo" },
        { name: "Artificial Limbs (Prosthetics)", page: "DevicesInfo" },
        { name: "Mobility Sticks & Canes", page: "DevicesInfo" },
        { name: "Braces & Orthotic Supports", page: "DevicesInfo" },
        { name: "Walkers, Rollators & Crutches", page: "DevicesInfo" },
        { name: "Daily Living Assistive Tools", page: "DevicesInfo" }
      ]
    },
    {
      icon: Users,
      title: "4. Inclusion Resources",
      color: "bg-red-500",
      bgColor: "bg-red-50",
      links: [
        { name: "Inclusion Tools", page: "InclusionTools" },
        { name: "Inclusive Behaviour", page: "InclusionTools" },
        { name: "Workplace Inclusion", page: "InclusionTools" },
        { name: "Community Inclusion", page: "InclusionTools" },
        { name: "Digital Inclusion", page: "InclusionTools" },
        { name: "Social Inclusion Guidelines", page: "InclusionTools" }
      ]
    },
    {
      icon: Target,
      title: "5. Programs",
      color: "bg-orange-500",
      bgColor: "bg-orange-50",
      links: [
        { name: "Accessibility Information Hub", page: "Programs" },
        { name: "Assistive Devices Knowledge Center", page: "Programs" },
        { name: "Workplace Inclusion Initiative", page: "Programs" },
        { name: "Accessibility Rights Awareness", page: "Programs" },
        { name: "Community Inclusion Campaigns", page: "Programs" },
        { name: "Digital Communication Inclusion Program", page: "Programs" }
      ]
    },
    {
      icon: FileText,
      title: "6. Research & Reports",
      color: "bg-yellow-500",
      bgColor: "bg-yellow-50",
      links: [
        { name: "Accessibility Research", page: "ResearchReports" },
        { name: "Assistive Devices Research", page: "ResearchReports" },
        { name: "Workplace Studies", page: "ResearchReports" },
        { name: "Community Inclusion Reports", page: "ResearchReports" },
        { name: "Accessibility Gap Assessments", page: "ResearchReports" },
        { name: "Policy & Rights Analysis", page: "ResearchReports" },
        { name: "Surveys & Data Insights", page: "ResearchReports" }
      ]
    },
    {
      icon: BookOpen,
      title: "7. Blog / Insights",
      color: "bg-red-500",
      bgColor: "bg-red-50",
      links: [
        { name: "Latest Articles", page: "BlogInsights" },
        { name: "Accessibility Stories", page: "BlogInsights" },
        { name: "Assistive Device Awareness Posts", page: "BlogInsights" },
        { name: "Workplace Inclusion Insights", page: "BlogInsights" },
        { name: "Digital Accessibility Posts", page: "BlogInsights" },
        { name: "Community Inclusion Stories", page: "BlogInsights" }
      ]
    },
    {
      icon: Shield,
      title: "8. Policies & Legal Pages",
      color: "bg-orange-500",
      bgColor: "bg-orange-50",
      links: [
        { name: "Privacy Policy", page: "PrivacyPolicy" },
        { name: "Terms of Use", page: "TermsOfService" },
        { name: "Disclaimer", page: "Disclaimer" },
        { name: "Refund & Donation Policy", page: "RefundPolicy" },
        { name: "Cookies Policy", page: "CookiesPolicy" }
      ]
    },
    {
      icon: Accessibility,
      title: "9. Additional Pages",
      color: "bg-yellow-500",
      bgColor: "bg-yellow-50",
      links: [
        { name: "Programs", page: "Programs" },
        { name: "Get Involved / Volunteer", page: "Contact" },
        { name: "Contact Support", page: "Contact" },
        { name: "Partner With Us", page: "Contact" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden bg-gradient-to-br from-red-600 to-orange-600">
        {/* Network Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="1" fill="white"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)"/>
          </svg>
        </div>

        {/* Animated Connection Lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{
              width: '200px',
              left: `${i * 20}%`,
              top: `${30 + i * 10}%`,
              transform: `rotate(${-15 + i * 10}deg)`
            }}
            animate={{ opacity: [0.1, 0.4, 0.1], x: [0, 20, 0] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Map className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  Site<span className="text-yellow-300">map</span>
                </h1>
              </div>
            </div>
            <p className="text-white/85 text-lg max-w-2xl">
              Navigate easily through all pages on dhingrafamilyfoundationindia.org and find the information you need.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 30C1200 50 960 20 720 30C480 40 240 10 0 30L0 60Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-red-100/40 to-orange-100/40 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-40 left-0 w-72 h-72 bg-gradient-to-br from-yellow-100/40 to-red-100/40 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`${section.bgColor} rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    />
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <motion.div 
                      className={`w-12 h-12 ${section.color} rounded-xl flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                    >
                      <section.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h2 className="font-semibold text-slate-900 text-sm">{section.title}</h2>
                  </div>
                  <ul className="space-y-2 relative z-10">
                    {section.links.map((link, linkIndex) => (
                      <motion.li 
                        key={linkIndex}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          to={createPageUrl(link.page)}
                          className="text-slate-600 hover:text-red-600 transition-colors flex items-center gap-2 text-sm group/link"
                        >
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                          <span>{link.name}</span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
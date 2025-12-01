import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  FileText, 
  Heart, 
  Lightbulb, 
  Scale, 
  Wrench, 
  Bell,
  Mail,
  ArrowRight,
  MessageCircle
} from "lucide-react";

export default function BlogInsights() {
  const latestArticles = [
    {
      title: "Understanding Different Wheelchair Types",
      content: "Wheelchairs come in different designs to support various mobility needs. Manual, electric, folding, and sports wheelchairs all provide unique benefits like independence, comfort, and ease of movement."
    },
    {
      title: "Creating Accessible Public Places",
      content: "Public areas become truly inclusive when ramps, railings, tactile paths, clear signage, and accessible washrooms are available. These features allow everyone to move freely and safely."
    },
    {
      title: "Home Accessibility Tips for Safer Living",
      content: "Small changes at home—such as grab bars, anti-skid flooring, brighter lighting, and barrier-free entrances—help improve independence and reduce risks."
    },
    {
      title: "Inclusive Workplaces: What Every Employer Should Know",
      content: "An inclusive workplace includes accessible desks, clear walkways, inclusive hiring, and assistive technologies that support employees with disabilities."
    },
    {
      title: "Digital Accessibility Basics",
      content: "Digital accessibility ensures that websites, apps, and online platforms can be used by everyone through screen readers, high-contrast colors, alt text, captions, and keyboard navigation."
    },
    {
      title: "How Assistive Devices Support Everyday Life",
      content: "Assistive devices such as mobility sticks, walkers, braces, and daily support tools help individuals perform everyday tasks safely and independently."
    }
  ];

  const storiesOfInclusion = [
    {
      title: "Real experiences of persons with disabilities",
      description: "Inspiring stories of resilience, independence, and community support."
    },
    {
      title: "Community inclusion actions",
      description: "How simple behaviours create meaningful change."
    },
    {
      title: "Workplace success stories",
      description: "Employees thriving in inclusive work environments."
    }
  ];

  const accessibilityKnowledge = [
    "How ramps improve mobility",
    "The importance of tactile paths",
    "Understanding mobility sticks",
    "Why communication etiquette matters",
    "What is universal design?",
    "The role of grab bars in safety"
  ];

  const policyInsights = [
    "RPwD Act overview",
    "Accessibility standards",
    "Transport accessibility guidelines",
    "Digital accessibility rules"
  ];

  const inclusionTools = [
    "Inclusive behaviour checklists",
    "Workplace inclusion tips",
    "Community accessibility checklists",
    "Assistive device usage awareness",
    "Digital inclusion tools"
  ];

  const foundationUpdates = [
    "Awareness events",
    "New guides",
    "Research releases",
    "Campaign updates",
    "Community workshops"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden">
        {/* Newspaper/Magazine Style Background */}
        <div className="absolute inset-0">
          <img 
            src="/images/image-8.jpg"
            alt="Blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/95 via-orange-900/90 to-yellow-900/80" />
        </div>

        {/* Floating Text Elements */}
        <motion.div 
          className="absolute top-20 right-20 text-6xl font-bold text-white/5"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          INSIGHTS
        </motion.div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 border border-white/30"
                whileHover={{ scale: 1.05 }}
              >
                <BookOpen className="w-4 h-4" />
                Latest Articles & Stories
              </motion.span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Insights &{" "}
                <span className="text-yellow-300">Updates</span>
              </h1>
              <p className="text-lg text-white/85 leading-relaxed mb-8">
                Articles, stories, guides, and updates related to accessibility, assistive devices, disability inclusion, rights, and community awareness.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Articles", "Stories", "Guides", "Updates"].map((tag, i) => (
                  <motion.span
                    key={tag}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm border border-white/20"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                {[FileText, Heart, Lightbulb, Scale].map((Icon, i) => (
                  <motion.div
                    key={i}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.15)", y: -5 }}
                  >
                    <Icon className="w-8 h-8 text-yellow-300 mb-3" />
                    <div className="space-y-1">
                      <div className="h-2 bg-white/30 rounded w-full" />
                      <div className="h-2 bg-white/20 rounded w-3/4" />
                    </div>
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

      {/* Section 1: Latest Articles */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-10">
              <motion.div 
                className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              >
                <FileText className="w-8 h-8 text-blue-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900">Latest Articles</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {latestArticles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    />
                  </div>
                  
                  <motion.div 
                    className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors relative z-10"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-blue-600 font-bold group-hover:text-white transition-colors">{index + 1}</span>
                  </motion.div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 relative z-10">{article.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed relative z-10">{article.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Stories of Inclusion */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-10 right-10 w-20 h-20 border-2 border-pink-200 rounded-full"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-10">
              <motion.div 
                className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              >
                <Heart className="w-8 h-8 text-pink-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900">Stories of Inclusion</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {storiesOfInclusion.map((story, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-pink-200 transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <motion.div 
                    className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-pink-500 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Heart className="w-5 h-5 text-pink-600 group-hover:text-white transition-colors" />
                  </motion.div>
                  <h3 className="font-semibold text-slate-900 mb-2">{story.title}</h3>
                  <p className="text-slate-600 text-sm">{story.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.p 
              className="text-center text-slate-500 italic mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              (You can add your own stories here later.)
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Accessibility Knowledge */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute bottom-20 right-0 w-72 h-72 bg-gradient-to-br from-amber-100/50 to-yellow-100/50 rounded-full blur-3xl"
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
            <div className="flex items-center gap-4 mb-10">
              <motion.div 
                className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Lightbulb className="w-8 h-8 text-amber-600" />
              </motion.div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Accessibility Knowledge</h2>
                <p className="text-slate-600">Short, informational posts such as:</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {accessibilityKnowledge.map((topic, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3 bg-amber-50 p-4 rounded-xl border border-amber-100 hover:shadow-md hover:bg-amber-100/70 transition-all duration-300 cursor-pointer group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <motion.div 
                    className="w-3 h-3 bg-amber-500 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                  />
                  <span className="text-slate-700">{topic}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Policy Insights */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-20 left-10 w-24 h-24 border-2 border-purple-200 rounded-2xl"
          animate={{ rotate: [0, 45, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
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
                <Scale className="w-8 h-8 text-purple-600" />
              </motion.div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Policy Insights</h2>
                <p className="text-slate-600">Breakdowns of important accessibility rights in simple language:</p>
              </div>
            </div>

            <motion.div 
              className="bg-purple-50 rounded-2xl p-8 border border-purple-100 mb-6 hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -3 }}
            >
              <div className="grid md:grid-cols-2 gap-4">
                {policyInsights.map((policy, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-3 h-3 bg-purple-500 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform"
                    />
                    <span className="text-slate-700">{policy}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.p 
              className="text-slate-600 italic text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              These posts help families and organisations understand their responsibilities.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Inclusion Tools & Guides */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-br from-teal-100/50 to-blue-100/50 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-10">
              <motion.div 
                className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              >
                <Wrench className="w-8 h-8 text-teal-600" />
              </motion.div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Inclusion Tools & Guides</h2>
                <p className="text-slate-600">Articles covering:</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {inclusionTools.map((tool, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3 bg-teal-50 p-4 rounded-xl border border-teal-100 hover:shadow-md hover:bg-teal-100/70 transition-all duration-300 cursor-pointer group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <motion.div 
                    className="w-3 h-3 bg-teal-500 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform"
                  />
                  <span className="text-slate-700">{tool}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Foundation Updates */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Floating Elements */}
        <motion.div 
          className="absolute bottom-20 right-20 w-16 h-16 bg-green-200 rounded-full opacity-50"
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
                className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Bell className="w-8 h-8 text-green-600" />
              </motion.div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Foundation Updates</h2>
                <p className="text-slate-600">Here you can post:</p>
              </div>
            </div>

            <motion.div 
              className="bg-green-50 rounded-2xl p-8 border border-green-100 mb-6 hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -3 }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {foundationUpdates.map((update, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    />
                    <span className="text-slate-700">{update}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.p 
              className="text-slate-600 italic text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              This keeps the audience engaged and informed.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Subscribe CTA */}
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
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Mail className="w-10 h-10" />
            </motion.div>
            <h2 className="text-3xl font-bold mb-4">Subscribe for Updates</h2>
            <p className="text-teal-100 mb-8">
              Sign up to receive new articles and accessibility resources.
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
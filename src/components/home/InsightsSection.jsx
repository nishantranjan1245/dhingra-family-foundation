import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Scale, Newspaper, ArrowRight, TrendingUp, Clock } from "lucide-react";

export default function InsightsSection() {
  const insights = [
    {
      icon: BookOpen,
      category: "New Guide",
      title: "Accessibility guide releases",
      gradient: "from-red-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-red-50 to-orange-50",
      time: "2 days ago"
    },
    {
      icon: FileText,
      category: "Stories",
      title: "Inspiring inclusion stories",
      gradient: "from-orange-500 to-yellow-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-yellow-50",
      time: "5 days ago"
    },
    {
      icon: Newspaper,
      category: "Article",
      title: "Assistive device awareness",
      gradient: "from-yellow-500 to-red-500",
      bgColor: "bg-gradient-to-br from-yellow-50 to-red-50",
      time: "1 week ago"
    },
    {
      icon: Scale,
      category: "Policy",
      title: "Latest policy updates",
      gradient: "from-red-600 to-orange-600",
      bgColor: "bg-gradient-to-br from-red-50 to-orange-50",
      time: "2 weeks ago"
    }
  ];

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <motion.div 
        className="absolute top-20 right-0 w-96 h-96 bg-red-100/50 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 left-0 w-80 h-80 bg-orange-100/50 rounded-full blur-3xl"
        animate={{ x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-100 to-orange-100 text-red-600 rounded-full text-sm font-bold mb-6 shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <TrendingUp className="w-4 h-4" />
            Latest Insights
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Stay{" "}
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              Informed
            </span>
          </h2>
          <p className="text-gray-600 text-xl">
            Latest updates, guides, and insights on accessibility and inclusion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {insights.map((insight, index) => {
            const IconComponent = insight.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className={`${insight.bgColor} rounded-3xl p-7 cursor-pointer group border border-white shadow-xl hover:shadow-2xl transition-all relative overflow-hidden`}
              >
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${insight.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="flex items-center justify-between mb-5">
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-br ${insight.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </motion.div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider bg-white/80 px-2 py-1 rounded-full">{insight.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">{insight.title}</h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <Clock className="w-3 h-3" />
                    <span>{insight.time}</span>
                  </div>
                  <div className="flex items-center text-red-600 font-bold text-sm group-hover:text-red-700">
                    <span>Read</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" />
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
          <Link to={createPageUrl("BlogInsights")}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white rounded-full px-12 h-14 text-lg font-semibold shadow-2xl shadow-red-500/25">
                Read All Insights
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
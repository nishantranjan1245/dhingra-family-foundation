import React from "react";
import { motion } from "framer-motion";
import { 
  Cookie, 
  HelpCircle, 
  CheckCircle, 
  List, 
  Globe, 
  Settings, 
  Database, 
  RefreshCw, 
  Mail 
} from "lucide-react";

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden bg-gradient-to-br from-orange-500 via-yellow-500 to-orange-600">
        {/* Cookie Pattern */}
        <div className="absolute inset-0 opacity-15">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ 
                left: `${5 + i * 10}%`, 
                top: `${10 + (i % 4) * 20}%` 
              }}
              animate={{ 
                rotate: [0, 360],
                y: [0, -10, 0]
              }}
              transition={{ 
                rotate: { duration: 20 + i * 2, repeat: Infinity, ease: "linear" },
                y: { duration: 3 + i * 0.5, repeat: Infinity }
              }}
            >
              <Cookie className="w-8 h-8 text-white" />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Cookie className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Cookies <span className="text-slate-800">Policy</span>
              </h1>
            </div>
            <p className="text-white/90">Last Updated: 2025</p>
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
          className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-orange-100/40 to-yellow-100/40 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-40 left-0 w-72 h-72 bg-gradient-to-br from-yellow-100/40 to-orange-100/40 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="max-w-4xl mx-auto">
            <motion.p 
              className="text-slate-600 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              This Cookies Policy explains how Dhingra Family Foundation India ("we", "our", "us") uses cookies and similar technologies on www.dhingrafamily.org ("website"). By using our website, you agree to the use of cookies as described in this policy.
            </motion.p>

            {/* Section 1 */}
            <motion.div 
              className="mb-10 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center shadow-md"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                >
                  <HelpCircle className="w-6 h-6 text-red-600" />
                </motion.div>
                <h2 className="text-xl font-bold text-slate-900">1. What Are Cookies?</h2>
              </div>
              <p className="text-slate-600 mb-2">
                Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website. They help improve user experience and website functionality.
              </p>
              <p className="text-slate-600">
                Cookies are safe, do not harm your device, and do not access personal files.
              </p>
            </motion.div>

            {/* Section 2 */}
            <motion.div 
              className="mb-10 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shadow-md"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                >
                  <CheckCircle className="w-6 h-6 text-orange-600" />
                </motion.div>
                <h2 className="text-xl font-bold text-slate-900">2. How We Use Cookies</h2>
              </div>
              <p className="text-slate-600 mb-4">We use cookies only for:</p>
              
              <div className="space-y-3 mb-6">
                {[
                  { title: "✔ Website performance", desc: "To ensure pages load correctly and the website functions smoothly." },
                  { title: "✔ Basic analytics", desc: "To understand how visitors use our website (e.g., pages visited, time spent). This helps improve content and user experience." },
                  { title: "✔ Site preferences", desc: "To remember your basic settings (if any)." }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-green-50 p-4 rounded-xl border border-green-100 hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-slate-700 font-medium mb-2">We do NOT use cookies for:</p>
                <ul className="text-slate-600 space-y-1 ml-4">
                  <li>✘ Advertising</li>
                  <li>✘ Tracking for marketing</li>
                  <li>✘ Selling data</li>
                  <li>✘ Collecting unnecessary personal information</li>
                </ul>
              </motion.div>
              <p className="text-slate-600 mt-4 italic">
                Our cookie usage is minimal and strictly for functionality and awareness improvement.
              </p>
            </motion.div>

            {/* Section 3 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <List className="w-5 h-5 text-yellow-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">3. Types of Cookies We Use</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-slate-900 mb-1">a) Essential Cookies</h3>
                  <p className="text-slate-600 text-sm">Required for the website to work properly. Example: page navigation, form functionality.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-slate-900 mb-1">b) Analytics Cookies</h3>
                  <p className="text-slate-600 text-sm">Help us understand visitor behaviour anonymously. Example: number of page views, time spent, device type.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-slate-900 mb-1">c) Preference Cookies</h3>
                  <p className="text-slate-600 text-sm">Remember small settings (like language or site preferences) if used.</p>
                </div>
              </div>
              <p className="text-slate-600 mt-4">We do not use advertising or third-party marketing cookies.</p>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">4. Third-Party Cookies</h2>
              </div>
              <p className="text-slate-600 mb-2">Some cookies may come from trusted third-party tools, such as:</p>
              <ul className="list-disc list-inside text-slate-600 ml-4">
                <li>Google Analytics (basic analytics only)</li>
              </ul>
              <p className="text-slate-600 mt-2">These tools collect anonymous data and comply with standard privacy practices.</p>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Settings className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">5. How to Control Cookies</h2>
              </div>
              <p className="text-slate-600 mb-2">You can manage or disable cookies anytime through your browser settings. You can:</p>
              <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1 ml-4">
                <li>Block all cookies</li>
                <li>Allow only selected cookies</li>
                <li>Delete existing cookies</li>
                <li>Receive cookie alerts</li>
              </ul>
              <p className="text-slate-600">Disabling cookies may affect some website features, but essential pages will still work.</p>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Database className="w-5 h-5 text-yellow-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">6. Data Collected Through Cookies</h2>
              </div>
              <p className="text-slate-600 mb-2">Cookies may collect anonymous data such as:</p>
              <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1 ml-4">
                <li>Browser type</li>
                <li>Device type</li>
                <li>Time spent on pages</li>
                <li>Pages visited</li>
                <li>General website usage</li>
              </ul>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <p className="text-slate-700 font-medium">Cookies do not collect:</p>
                <ul className="text-slate-600 mt-2 space-y-1 ml-4">
                  <li>✘ Personal names</li>
                  <li>✘ Phone numbers</li>
                  <li>✘ Email addresses</li>
                  <li>✘ Payment information</li>
                </ul>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">7. Updates to This Cookies Policy</h2>
              </div>
              <p className="text-slate-600">
                We may update this policy from time to time. Changes will be posted on this page with an updated "Last Updated" date.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">8. Contact Us</h2>
              </div>
              <p className="text-slate-600 mb-4">For questions about our Cookies Policy, contact:</p>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <p className="font-semibold text-slate-900 mb-2">Dhingra Family Foundation India</p>
                <p className="text-slate-600">
                  Shop No.2-7, Basement, Samrat Complex,<br />
                  Opp. New Bus Stand, Sehore,<br />
                  Madhya Pradesh – 466001, India
                </p>
                <p className="text-slate-600 mt-2">
                  <a href="mailto:info@dhingrafamily.org" className="text-red-600 hover:underline">📧 info@dhingrafamily.org</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
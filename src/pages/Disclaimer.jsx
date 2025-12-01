import React from "react";
import { motion } from "framer-motion";
import { 
  AlertTriangle, 
  Stethoscope, 
  FileWarning, 
  ShieldX, 
  ExternalLink, 
  Cog, 
  MessageSquare, 
  FileX, 
  RefreshCw, 
  Mail 
} from "lucide-react";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden bg-slate-900">
        {/* Warning Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          background: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 30px,
            rgba(239, 68, 68, 0.1) 30px,
            rgba(239, 68, 68, 0.1) 60px
          )`
        }} />
        
        <motion.div 
          className="absolute top-1/2 right-20 transform -translate-y-1/2"
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <AlertTriangle className="w-40 h-40 text-orange-500" />
        </motion.div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4 border border-orange-500/30">
              <AlertTriangle className="w-4 h-4 text-orange-400" />
              Important Notice
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Disclaimer</span>
            </h1>
            <p className="text-white/70">Last Updated: 2025</p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 30C1200 50 960 20 720 30C480 40 240 10 0 30L0 60Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-slate-600 mb-4 leading-relaxed">
              The information provided on www.dhingrafamily.org ("website") by Dhingra Family Foundation India ("we", "our", "us") is intended solely for general awareness and informational purposes.
            </p>
            <p className="text-slate-600 mb-12">
              By using this website, you agree to this Disclaimer. If you do not agree, please discontinue using the site.
            </p>

            {/* Section 1 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">1. No Professional Advice</h2>
              </div>
              <p className="text-slate-600 mb-2">All content on this website, including articles, guides, resources, and information on accessibility, assistive devices, and inclusion, is:</p>
              <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1 ml-4">
                <li>NOT medical advice</li>
                <li>NOT legal advice</li>
                <li>NOT professional counselling</li>
                <li>NOT a substitute for expert consultation</li>
              </ul>
              <p className="text-slate-600">For any medical, therapeutic, or legal concerns, please consult qualified professionals.</p>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <FileWarning className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">2. Information Accuracy</h2>
              </div>
              <p className="text-slate-600 mb-2">While we try to keep information accurate and updated, we:</p>
              <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1 ml-4">
                <li>Do not guarantee completeness</li>
                <li>Do not guarantee accuracy</li>
                <li>Do not guarantee error-free content</li>
                <li>May update or modify content without notice</li>
              </ul>
              <p className="text-slate-600">Use the information at your own discretion.</p>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <ShieldX className="w-5 h-5 text-yellow-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">3. No Liability</h2>
              </div>
              <p className="text-slate-600 mb-2">Dhingra Family Foundation India is not responsible for any:</p>
              <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1 ml-4">
                <li>Loss, damage, or inconvenience caused by website use</li>
                <li>Actions taken based on website information</li>
                <li>Technical issues, interruptions, or downtime</li>
                <li>Incorrect or outdated external content</li>
              </ul>
              <p className="text-slate-600">You use the website at your own risk.</p>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">4. External Links Disclaimer</h2>
              </div>
              <p className="text-slate-600 mb-2">Our website may include links to third-party websites for additional information. We do not:</p>
              <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1 ml-4">
                <li>Endorse external content</li>
                <li>Control external websites</li>
                <li>Guarantee accuracy of external information</li>
              </ul>
              <p className="text-slate-600">Users are encouraged to review the terms and privacy policies of third-party sites.</p>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Cog className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">5. Assistive Devices Information</h2>
              </div>
              <p className="text-slate-600 mb-2">Information on wheelchairs, prosthetics, mobility aids, braces, or any assistive devices is purely educational. We do not:</p>
              <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1 ml-4">
                <li>Recommend products</li>
                <li>Sell devices</li>
                <li>Provide medical opinions</li>
                <li>Promote brands</li>
              </ul>
              <p className="text-slate-600">Always consult professionals before choosing or using any device.</p>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-yellow-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">6. Community & User Submissions</h2>
              </div>
              <p className="text-slate-600">
                Any feedback, contact form submissions, or messages you send are voluntary. We are not responsible for the accuracy of information users provide.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <FileX className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">7. No Warranty</h2>
              </div>
              <p className="text-slate-600 mb-2">We provide this website "as is" without any warranties:</p>
              <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                <li>No guarantee of accuracy</li>
                <li>No guarantee of completeness</li>
                <li>No guarantee of uninterrupted access</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">8. Changes to This Disclaimer</h2>
              </div>
              <p className="text-slate-600">
                We may update or revise this Disclaimer anytime. A new "Last Updated" date will be posted when changes occur.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-yellow-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">9. Contact Us</h2>
              </div>
              <p className="text-slate-600 mb-4">For questions regarding this Disclaimer, contact:</p>
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
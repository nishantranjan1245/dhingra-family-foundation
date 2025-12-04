import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { 
  FileText, 
  Target, 
  BookOpen, 
  ShieldCheck, 
  Copyright, 
  ExternalLink, 
  Stethoscope, 
  MessageSquare, 
  AlertTriangle, 
  Lock, 
  RefreshCw, 
  Scale,
  Mail 
} from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-red-700" />
        
        {/* Geometric Shapes */}
        <motion.div 
          className="absolute top-10 right-20 w-40 h-40 border-4 border-white/10 rounded-2xl"
          animate={{ rotate: 45 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-10 left-20 w-24 h-24 border-2 border-white/10 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4">
              <FileText className="w-4 h-4" />
              Legal Agreement
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Terms of <span className="text-yellow-300">Use</span>
            </h1>
            <p className="text-white/80">Last Updated: 2025</p>
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
              Welcome to Dhingra Family Foundation India ("we", "our", "us"). By accessing or using www.dhingrafamilyfoundationindia.org ("website"), you agree to follow these Terms of Use. If you do not agree, please discontinue using the website.
            </p>
            <p className="text-slate-600 mb-12">
              These terms ensure safe, respectful, and informational use of our platform.
            </p>

            {/* Section 1 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">1. Purpose of the Website</h2>
              </div>
              <p className="text-slate-600 mb-2">This website provides informational, educational, and awareness-based content related to:</p>
              <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1 ml-4">
                <li>Accessibility</li>
                <li>Assistive devices</li>
                <li>Inclusion</li>
                <li>Disability rights</li>
                <li>Programs & resources</li>
              </ul>
              <p className="text-slate-600">We do not provide medical, commercial, or legal services.</p>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">2. Website Content</h2>
              </div>
              <p className="text-slate-600 mb-2">All content on this website is for general informational purposes only. We do not guarantee:</p>
              <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1 ml-4">
                <li>Accuracy</li>
                <li>Completeness</li>
                <li>Professional advice</li>
              </ul>
              <p className="text-slate-600">Content may be updated periodically without notice.</p>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-yellow-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">3. Acceptable Use</h2>
              </div>
              <p className="text-slate-600 mb-2">You agree not to:</p>
              <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                <li>Use the website for unlawful purposes</li>
                <li>Upload harmful, abusive, or misleading content</li>
                <li>Attempt unauthorized access to the website</li>
                <li>Copy content for commercial use</li>
                <li>Disrupt or damage the website's operation</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Copyright className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">4. Intellectual Property</h2>
              </div>
              <p className="text-slate-600 mb-4">All content, including text, graphics, images, logos, design, and structure is owned by Dhingra Family Foundation India unless stated otherwise.</p>
              <p className="text-slate-600 mb-2"><strong>You may:</strong></p>
              <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1 ml-4">
                <li>Read and share content for awareness</li>
                <li>Download guides for personal/non-commercial use</li>
              </ul>
              <p className="text-slate-600 mb-2"><strong>You may NOT:</strong></p>
              <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                <li>Copy, sell, or distribute our content commercially</li>
                <li>Modify any content without permission</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">5. External Links</h2>
              </div>
              <p className="text-slate-600">
                Our website may contain links to external websites for additional information. We do not control or endorse external content and are not responsible for their practices.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-yellow-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">6. No Medical or Legal Advice</h2>
              </div>
              <p className="text-slate-600">
                The information on this website is not intended as medical, therapeutic, or legal advice. For medical or legal concerns, please consult qualified professionals.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">7. User Submissions</h2>
              </div>
              <p className="text-slate-600 mb-2">If you submit a message, inquiry, feedback, or form:</p>
              <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                <li>You agree the information is true and accurate</li>
                <li>We may contact you regarding your submission</li>
                <li>We will not share it with third parties without permission (except where legally required)</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">8. Limitation of Liability</h2>
              </div>
              <p className="text-slate-600 mb-2">Dhingra Family Foundation India is not liable for:</p>
              <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1 ml-4">
                <li>Errors or omissions in website content</li>
                <li>Losses due to website use</li>
                <li>Technical issues or interruptions</li>
                <li>Actions taken based on website information</li>
              </ul>
              <p className="text-slate-600">This website is used at your own discretion.</p>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Lock className="w-5 h-5 text-yellow-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">9. Privacy & Data Protection</h2>
              </div>
              <p className="text-slate-600 mb-2">Your privacy matters to us. Our Privacy Policy explains how we collect and use your data.</p>
              <Link to={createPageUrl("PrivacyPolicy")} className="text-red-600 hover:underline font-medium">
                👉 Please read our Privacy Policy for details.
              </Link>
            </div>

            {/* Section 10 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">10. Changes to Terms</h2>
              </div>
              <p className="text-slate-600">
                We may update these Terms of Use at any time. Changes will be posted on this page with a new "Last Updated" date. Continued use of the website means you accept the updated terms.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Scale className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">11. Governing Law</h2>
              </div>
              <p className="text-slate-600">
                These terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of courts in Madhya Pradesh, India.
              </p>
            </div>

            {/* Section 12 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-yellow-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">12. Contact Us</h2>
              </div>
              <p className="text-slate-600 mb-4">For questions regarding these Terms of Use, contact:</p>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <p className="font-semibold text-slate-900 mb-2">Dhingra Family Foundation India</p>
                <p className="text-slate-600">
                  Shop No.2-7, Basement, Samrat Complex,<br />
                  Opp. New Bus Stand, Sehore,<br />
                  Madhya Pradesh – 466001, India
                </p>
                <p className="text-slate-600 mt-2">
                  <a href="mailto:info@dhingrafamilyfoundationindia.org" className="text-red-600 hover:underline">📧 info@dhingrafamilyfoundationindia.org</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
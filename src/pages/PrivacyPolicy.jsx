import React from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  FileText, 
  Database, 
  Share2, 
  Cookie, 
  Lock, 
  ExternalLink, 
  UserCheck, 
  Baby, 
  RefreshCw, 
  Mail 
} from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-red-900 to-orange-900">
        {/* Lock Pattern Background */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M20 18c-2.2 0-4 1.8-4 4v4h8v-4c0-2.2-1.8-4-4-4zm6 8H14v-4c0-3.3 2.7-6 6-6s6 2.7 6 6v4z'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <motion.div 
          className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4 border border-white/20">
              <Shield className="w-4 h-4 text-red-400" />
              Legal Information
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy <span className="text-red-400">Policy</span>
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
            <p className="text-slate-600 mb-8 leading-relaxed">
              Dhingra Family Foundation India ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and safeguard your information when you visit www.dhingrafamily.org or interact with our activities, forms, or communication channels.
            </p>
            <p className="text-slate-600 mb-12">
              By using our website, you agree to the practices described in this policy.
            </p>

            {/* Section 1 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Database className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">1. Information We Collect</h2>
              </div>
              <p className="text-slate-600 mb-4">
                We only collect information that is necessary to provide our services, respond to inquiries, and improve our website.
              </p>
              
              <h3 className="font-semibold text-slate-900 mb-2">a. Information You Provide Voluntarily</h3>
              <p className="text-slate-600 mb-2">When you:</p>
              <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1 ml-4">
                <li>Fill out a contact form</li>
                <li>Subscribe to updates or newsletters</li>
                <li>Send us an email</li>
                <li>Participate in programs or submit inquiries</li>
              </ul>
              <p className="text-slate-600 mb-2">You may provide:</p>
              <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1 ml-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Message or inquiry details</li>
                <li>Optional organisation information</li>
              </ul>

              <h3 className="font-semibold text-slate-900 mb-2">b. Automatically Collected Information</h3>
              <p className="text-slate-600 mb-2">When you visit our website, we may collect:</p>
              <ul className="list-disc list-inside text-slate-600 mb-2 space-y-1 ml-4">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Pages visited</li>
                <li>Time spent on the site</li>
                <li>Basic analytics data</li>
              </ul>
              <p className="text-slate-500 italic text-sm">(This data is collected anonymously for website improvement.)</p>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">2. How We Use Your Information</h2>
              </div>
              <p className="text-slate-600 mb-2">We use your information for:</p>
              <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1 ml-4">
                <li>Responding to your inquiries</li>
                <li>Sending requested information or updates</li>
                <li>Improving website performance</li>
                <li>Understanding how visitors use our site</li>
                <li>Managing participation in programs or events</li>
                <li>Nonprofit communication and awareness activities</li>
              </ul>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <p className="text-slate-700 font-medium">We do NOT:</p>
                <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1 ml-4">
                  <li>Sell, rent, or trade your personal data</li>
                  <li>Share data for advertising or commercial marketing</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Share2 className="w-5 h-5 text-yellow-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">3. Sharing of Information</h2>
              </div>
              <p className="text-slate-600 mb-2">We do not share your personal information with third parties except:</p>
              <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1 ml-4">
                <li>When required by law</li>
                <li>When you provide explicit permission</li>
                <li>When necessary to respond to your requests (example: email service provider)</li>
              </ul>
              <p className="text-slate-600">All trusted partners follow strict data protection practices.</p>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">4. Cookies & Analytics</h2>
              </div>
              <p className="text-slate-600 mb-2">Our website may use cookies or analytics tools to:</p>
              <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1 ml-4">
                <li>Understand visitor behaviour</li>
                <li>Improve user experience</li>
                <li>Measure page performance</li>
              </ul>
              <p className="text-slate-600">You can disable cookies anytime through your browser settings.</p>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Lock className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">5. Data Security</h2>
              </div>
              <p className="text-slate-600 mb-2">We take reasonable steps to protect your information against unauthorized access or misuse, including:</p>
              <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1 ml-4">
                <li>Secure website hosting</li>
                <li>Limited access to data</li>
                <li>Basic encryption methods</li>
                <li>Regular security reviews</li>
              </ul>
              <p className="text-slate-600">However, no method of online transmission is 100% secure.</p>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-yellow-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">6. Links to External Websites</h2>
              </div>
              <p className="text-slate-600">
                Our website may contain links to other websites for informational purposes. We are not responsible for the privacy practices or content of external sites.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">7. Your Rights</h2>
              </div>
              <p className="text-slate-600 mb-2">You may request to:</p>
              <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1 ml-4">
                <li>Access your personal data</li>
                <li>Update or correct information</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent for communication</li>
              </ul>
              <p className="text-slate-600">
                To make such requests, contact us at: <a href="mailto:info@dhingrafamily.org" className="text-red-600 hover:underline">info@dhingrafamily.org</a>
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Baby className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">8. Children's Privacy</h2>
              </div>
              <p className="text-slate-600">
                Our website is not intended for collecting information from children below 13 years. If any such data is accidentally collected, we will remove it upon request.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-yellow-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">9. Changes to This Privacy Policy</h2>
              </div>
              <p className="text-slate-600">
                We may update this policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">10. Contact Us</h2>
              </div>
              <p className="text-slate-600 mb-4">If you have questions about this Privacy Policy, please contact:</p>
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
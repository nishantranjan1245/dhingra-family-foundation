import React from "react";
import { motion } from "framer-motion";
import { 
  RotateCcw, 
  Heart, 
  Receipt, 
  CheckCircle, 
  Mail, 
  Clock, 
  XCircle, 
  FileEdit, 
  Shield, 
  RefreshCw, 
  Phone 
} from "lucide-react";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600">
        {/* Heart Pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: `${10 + i * 12}%`, top: `${20 + (i % 3) * 25}%` }}
              animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
            >
              <Heart className="w-8 h-8 text-white" />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4">
              <RotateCcw className="w-4 h-4" />
              Donation Guidelines
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Refund & <span className="text-yellow-200">Donation Policy</span>
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
              Dhingra Family Foundation India ("we", "our", "us") is committed to maintaining transparency and trust with our donors and supporters. This policy explains how donations are handled and under what circumstances refunds may be considered.
            </p>
            <p className="text-slate-600 mb-12">
              By contributing through www.dhingrafamily.org, you agree to the terms outlined below.
            </p>

            {/* Section 1 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">1. Nature of Donations</h2>
              </div>
              <p className="text-slate-600 mb-4">
                All contributions made to Dhingra Family Foundation India are voluntary charitable donations used to support our nonprofit programs, awareness activities, and community initiatives focused on accessibility and inclusion.
              </p>
              <p className="text-slate-600">
                Donations are non-commercial and non-refundable except under specific conditions described below.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Receipt className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">2. Donation Receipts</h2>
              </div>
              <p className="text-slate-600 mb-2">Upon successful donation, donors will receive:</p>
              <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1 ml-4">
                <li>A confirmation message</li>
                <li>A digital receipt via email</li>
                <li>Basic transaction details</li>
              </ul>
              <p className="text-slate-600">
                Donors are requested to provide accurate email and contact information during donation.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-yellow-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">3. Refund Eligibility</h2>
              </div>
              <p className="text-slate-600 mb-4">Refunds may be granted only in genuine cases, such as:</p>
              
              <div className="space-y-4 mb-4">
                <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                  <p className="font-semibold text-slate-900">✔ Duplicate donation</p>
                  <p className="text-slate-600 text-sm">If a donor accidentally makes the same payment twice.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                  <p className="font-semibold text-slate-900">✔ Transaction error</p>
                  <p className="text-slate-600 text-sm">If a technical issue causes an incorrect or failed payment.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                  <p className="font-semibold text-slate-900">✔ Unauthorized transaction</p>
                  <p className="text-slate-600 text-sm">If a donation was made without the donor's authorization.</p>
                </div>
              </div>
              
              <p className="text-slate-600 font-medium">
                In all cases, donors must notify us within 7 days of the transaction.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">4. Requesting a Refund</h2>
              </div>
              <p className="text-slate-600 mb-4">
                To request a refund, please email us with the following details:
              </p>
              <p className="text-red-600 font-medium mb-4">📧 info@dhingrafamily.org</p>
              <p className="text-slate-600 mb-2">Include:</p>
              <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1 ml-4">
                <li>Full name</li>
                <li>Email address</li>
                <li>Donation amount</li>
                <li>Date of transaction</li>
                <li>Transaction/reference ID</li>
                <li>Reason for refund request</li>
              </ul>
              <p className="text-slate-600">We may ask for additional verification if needed.</p>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">5. Refund Processing</h2>
              </div>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Approved refunds will be processed using the same payment method used originally.</li>
                <li>Processing may take 7–14 business days, depending on the payment provider.</li>
                <li>Bank charges, platform fees, or gateway charges may not be refundable.</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-yellow-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">6. Non-Refundable Donations</h2>
              </div>
              <p className="text-slate-600 mb-2">Refunds cannot be provided when:</p>
              <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                <li>Funds are already allocated or utilized for ongoing programs</li>
                <li>The donor requests a refund after 7 days of donation</li>
                <li>The reason for refund is unclear or unverified</li>
                <li>The donation was made intentionally and successfully</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <FileEdit className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">7. Changes to Donation Amount or Purpose</h2>
              </div>
              <p className="text-slate-600 mb-2">We do not allow donors to alter:</p>
              <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1 ml-4">
                <li>Donation purpose</li>
                <li>Donation amount</li>
                <li>Allocation of recorded contributions</li>
              </ul>
              <p className="text-slate-600">Once received, funds are used toward our nonprofit mission.</p>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">8. Transparency Commitment</h2>
              </div>
              <p className="text-slate-600 mb-2">We are committed to handling all donations responsibly and ensuring that funds support:</p>
              <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1 ml-4">
                <li>Accessibility awareness</li>
                <li>Inclusion programs</li>
                <li>Community initiatives</li>
                <li>Research & informational resources</li>
                <li>Outreach and support activities</li>
              </ul>
              <p className="text-slate-600">We value the trust donors place in our foundation.</p>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-yellow-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">9. Policy Updates</h2>
              </div>
              <p className="text-slate-600">
                We may revise this Refund & Donation Policy at any time. Updated versions will be posted on this page with a new "Last Updated" date.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">10. Contact for Donation Support</h2>
              </div>
              <p className="text-slate-600 mb-4">For any questions related to donations, payment issues, or refunds, contact:</p>
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
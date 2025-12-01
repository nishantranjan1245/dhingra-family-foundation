import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  Facebook, 
  Instagram,
  Youtube,
  Linkedin,
  CheckCircle,
  Handshake,
  Heart,
  Share2,
  ArrowRight
} from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "#" },
    { icon: Instagram, name: "Instagram", url: "#" },
    { icon: Youtube, name: "YouTube", url: "#" },
    { icon: Linkedin, name: "LinkedIn", url: "#" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background with Map/Location Theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600">
          {/* Animated dots like a map */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-white/20 rounded-full"
              style={{
                left: `${5 + (i % 5) * 20}%`,
                top: `${10 + Math.floor(i / 5) * 20}%`
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 2 + i * 0.2,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}
        </div>

        {/* Connection Lines */}
        <motion.div 
          className="absolute top-1/2 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{ scaleX: [0, 1, 0], opacity: [0, 0.5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

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
                <Mail className="w-4 h-4" />
                We're Here to Help
              </motion.span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Get in{" "}
                <span className="text-yellow-300">Touch</span>
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                Questions, collaboration ideas, or accessibility guidance — we would love to hear from you.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: Phone, text: "+91 74908 74578" },
                  { icon: Mail, text: "info@dhingrafamily.org" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                    <item.icon className="w-4 h-4 text-yellow-300" />
                    <span className="text-white text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <MapPin className="w-16 h-16 text-yellow-300 mx-auto mb-4" />
                <p className="text-white text-center font-medium">Sehore, Madhya Pradesh</p>
                <p className="text-white/70 text-center text-sm">India - 466001</p>
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

      {/* Section 1: Contact Details & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-teal-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Details</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Address</h3>
                    <p className="text-slate-600">
                      Shop No.2-7, Basement, Samrat Complex,<br />
                      Opp. New Bus Stand, Sehore,<br />
                      Madhya Pradesh – 466001, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
                    <a href="mailto:info@dhingrafamily.org" className="text-teal-600 hover:underline">
                      info@dhingrafamily.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Phone</h3>
                    <a href="tel:+917490874578" className="text-teal-600 hover:underline">
                      +91 74908 74578
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                  <p className="text-slate-600">We've received your message and will get back to you within 24–48 hours.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Your full name"
                        className="h-12 rounded-xl bg-white"
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="your@email.com"
                          className="h-12 rounded-xl bg-white"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+91 XXXXX XXXXX"
                          className="h-12 rounded-xl bg-white"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        placeholder="How can we help?"
                        className="h-12 rounded-xl bg-white"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us more about your inquiry..."
                        className="min-h-[130px] rounded-xl resize-none bg-white"
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-teal-600 hover:bg-teal-700 rounded-xl h-14">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                    <p className="text-center text-slate-500 text-sm">
                      We aim to respond within 24–48 hours.
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Collaboration & Partnerships */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-red-600 to-orange-700 rounded-3xl p-10 text-white text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Collaboration & Partnerships</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                If you are an organisation, community group, or individual interested in accessibility or inclusion initiatives, we welcome partnerships that promote positive impact.
              </p>
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 rounded-full">
                Reach Out to Discuss
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Volunteer / Support */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-10 border border-pink-100 text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Volunteer / Support</h2>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                If you'd like to support our awareness programs, join events, or volunteer — visit our Get Involved section.
              </p>
              <Link to={createPageUrl("Programs")}>
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700 rounded-full text-white">
                  Get Involved
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Social Media */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Share2 className="w-7 h-7 text-teal-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Social Media</h2>
            <p className="text-slate-600 mb-8">
              Stay connected and follow our latest updates:
            </p>
            
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-14 h-14 bg-white hover:bg-teal-600 rounded-2xl flex items-center justify-center transition-colors group shadow-md border border-slate-100"
                >
                  <social.icon className="w-6 h-6 text-slate-600 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
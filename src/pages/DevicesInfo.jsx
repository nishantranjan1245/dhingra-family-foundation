import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Cog,
  Check,
  ArrowRight,
  MessageCircle,
  HeartHandshake,
  Armchair,
  PersonStanding,
  Eye,
  Home,
  BookOpen
} from "lucide-react";

export default function DevicesInfo() {
  const benefits = [
    "Improved mobility",
    "Increased independence",
    "Safety during movement",
    "Better posture & support",
    "Confidence in daily activities"
  ];

  // --------- Added `image` (public folder) for each wheelchair type ----------
  const wheelchairTypes = [
    {
      title: "Manual Wheelchairs",
      description:
        "Operated by the user or a caregiver. Suitable for short distances and general mobility.",
      image: "/images/manual-wheelchair.jpg"
    },
    {
      title: "Electric Wheelchairs",
      description:
        "Battery-powered and controlled with a joystick. Provide more independence for long distances.",
      image: "/images/electric-wheelchair.png"
    },
    {
      title: "Sports Wheelchairs",
      description:
        "Designed for sports like basketball, racing, etc. Lightweight, durable, and fast.",
      image: "/images/sports-wheelchair.png"
    },
    {
      title: "Folding Wheelchairs",
      description:
        "Easy to carry, travel-friendly. Helpful for transportation and compact spaces.",
      image: "/images/folding-wheelchair.png"
    },
    {
      title: "Commode Wheelchairs",
      description: "Useful for indoor use and bathroom assistance.",
      image: "/images/commode-wheelchair.png"
    }
  ];

  // --------- Prosthetic types already with images ----------
  const prostheticTypes = [
    {
      title: "Lower-limb prosthetics (leg, foot)",
      image: "/images/lower-limb.png",
      description:
        "Prosthetics that replace part or whole of a lower limb to restore walking and balance."
    },
    {
      title: "Upper-limb prosthetics (hand, arm)",
      image: "/images/upper-limb.png",
      description:
        "Devices that replace parts of the arm or hand to help with daily tasks and grip."
    },
    {
      title: "Activity-specific prosthetics (sports, climbing)",
      image: "/images/activity-based.png",
      description:
        "Specialised prosthetics designed for athletics, climbing and other high-activity use."
    }
  ];

  const prostheticBenefits = [
    "Better balance",
    "Restored movement",
    "Increased independence"
  ];

  // --------- Cane types with images ----------
  const caneTypes = [
    {
      title: "Single-point cane",
      description: "Basic support for mild balance issues.",
      image: "/images/single-point.png"
    },
    {
      title: "Quad cane",
      description: "Four-point base for added stability.",
      image: "/images/quad-cane.png"
    },
    {
      title: "Folding cane",
      description: "Portable and easy to carry.",
      image: "/images/folding-cane.png"
    },
    {
      title: "White cane",
      description: "Used by persons with visual impairments for navigation.",
      image: "/images/white-cane.png"
    }
  ];

  const caneBenefits = [
    "Improved stability",
    "Reduced risk of falls",
    "Support during daily walking"
  ];

  // --------- Braces with images (converted from simple strings to objects) ----------
  const braceTypes = [
    {
      title: "Knee braces",
      image: "/images/knee-braces.png",
      description: "Support and stability for the knee joint."
    },
    {
      title: "Ankle supports",
      image: "/images/ankle-support.png",
      description: "Stabilizes the ankle to prevent sprains."
    },
    {
      title: "Back braces",
      image: "/images/back-braces.png",
      description: "Helps posture and reduces lower back strain."
    },
    {
      title: "Wrist & hand supports",
      image: "/images/wrist-hand.png",
      description: "Assists wrist stability and healing."
    },
    {
      title: "AFO (Ankle-Foot Orthosis)",
      image: "/images/ankle-foot.png",
      description: "Supports foot positioning and gait."
    }
  ];

  const braceUses = [
    "Stability",
    "Posture support",
    "Preventing injuries",
    "Improved confidence while walking"
  ];

  // --------- Walkers, Crutches & Rollators with images ----------
  const walkersInfo = [
    {
      title: "Walkers",
      description:
        "For individuals who need full body support. Offers stability for indoor & outdoor use.",
      image: "/images/walkers.png"
    },
    {
      title: "Crutches",
      description:
        "Used for temporary or semi-permanent support after injury or surgery.",
      image: "/images/crutches.png"
    },
    {
      title: "Rollators (Wheeled Walkers)",
      description:
        "Comes with wheels and a seat. Helps in walking long distances with rest support.",
      image: "/images/rollators.png"
    }
  ];

  const dailyLivingTools = [
    "Grab bars",
    "Shower chairs",
    "Non-slip mats",
    "Adaptive cutlery",
    "Reachers & grabbers",
    "Hearing assistance devices",
    "Visual alert systems"
  ];

  const choosingFactors = [
    "Mobility needs",
    "Comfort",
    "Usage environment",
    "Level of support required",
    "Doctor/therapist consultation (if needed)"
  ];

  const howWeHelp = [
    "Clear informational guides",
    "Awareness programs",
    "Assistive devices categories",
    "Community support for accessibility"
  ];

  // Helper: flexible image size classes for cards (user can change w/h classes here)
  const cardImgSizeClass = "w-28 h-20"; // change to increase/decrease image size (tailwind classes)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden">
        {/* Background with Gradient Mesh */}
        <div className="absolute inset-0 bg-slate-900">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              background: `
              radial-gradient(at 0% 0%, rgba(239, 68, 68, 0.4) 0px, transparent 50%),
              radial-gradient(at 100% 0%, rgba(251, 146, 60, 0.3) 0px, transparent 50%),
              radial-gradient(at 100% 100%, rgba(234, 179, 8, 0.3) 0px, transparent 50%),
              radial-gradient(at 0% 100%, rgba(239, 68, 68, 0.2) 0px, transparent 50%)
            `
            }}
          />
        </div>

        {/* Animated Gears */}
        <motion.div
          className="absolute top-20 right-32"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <Cog className="w-20 h-20 text-white/10" />
        </motion.div>
        <motion.div
          className="absolute bottom-40 right-20"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <Cog className="w-32 h-32 text-white/10" />
        </motion.div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <motion.div
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 border border-white/20"
                whileHover={{ scale: 1.05 }}
              >
                <Cog className="w-4 h-4 text-orange-400" />
                Educational Resources
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Assistive Devices{" "}
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Information
                </span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Clear, educational information about different types of assistive devices that support mobility, independence, and daily living.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Armchair, label: "Wheelchairs" },
                  { icon: PersonStanding, label: "Prosthetics" },
                  { icon: Eye, label: "Canes" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10"
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                  >
                    <item.icon className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                    <p className="text-deep-orange-800 text-xs">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="hidden lg:block relative">
              <img src="/images/image-7.jpg" alt="Assistive Devices" className="rounded-3xl shadow-2xl" />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-5 shadow-xl">
                <p className="text-white font-bold text-lg">7+</p>
                <p className="text-white/80 text-xs">Device Categories</p>
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

      {/* Section 1: What Are Assistive Devices? */}
      <section className="py-20 bg-white relative overflow-hidden">
        <motion.div className="absolute top-10 right-0 w-72 h-72 bg-gradient-to-br from-teal-100/50 to-blue-100/50 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }} transition={{ duration: 12, repeat: Infinity }} />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <motion.div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 shadow-lg" whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}>
                <PersonStanding className="w-8 h-8 text-teal-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">What Are Assistive Devices?</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Assistive devices are tools that help people move, communicate, or perform activities independently. They make homes, workplaces, and public spaces more accessible and safe.
              </p>
              <p className="text-slate-700 font-medium mb-4">Common benefits:</p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-teal-50 transition-colors" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ x: 5 }}>
                    <motion.div className="w-7 h-7 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0" whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                      <Check className="w-4 h-4 text-teal-600" />
                    </motion.div>
                    <span className="text-slate-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <motion.div className="absolute -inset-4 bg-gradient-to-br from-teal-200/30 to-blue-200/30 rounded-3xl" animate={{ rotate: [0, 2, 0, -2, 0] }} transition={{ duration: 8, repeat: Infinity }} />
              <img src="/images/image-7.jpg" alt="Assistive devices" className="rounded-3xl shadow-2xl w-full relative z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Wheelchairs */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <motion.div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-blue-200 rounded-full opacity-50" animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }} transition={{ duration: 15, repeat: Infinity }} />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <motion.div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center shadow-lg" whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}>
                <Armchair className="w-8 h-8 text-blue-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900">Wheelchairs</h2>
            </div>
            <p className="text-slate-600 mb-8">
              Wheelchairs are one of the most widely used mobility tools. They assist individuals who face difficulty walking or cannot walk independently.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-6">Types of Wheelchairs:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {wheelchairTypes.map((type, index) => (
                <motion.div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -5, scale: 1.02 }}>
                  {/* Image (from public/images) with fallback */}
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img src={type.image} alt={type.title} onError={(e) => { e.currentTarget.src = "/images/placeholder.jpg"; }} className="w-full h-40 object-cover" />
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <motion.div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold group-hover:bg-blue-500 group-hover:text-white transition-colors" whileHover={{ scale: 1.2 }}>
                      {index + 1}
                    </motion.div>
                    <h4 className="font-semibold text-slate-900">{type.title}</h4>
                  </div>
                  <p className="text-slate-600 text-sm pl-11">{type.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Artificial Limbs (Prosthetics) */}
      <section className="py-20 bg-white relative overflow-hidden">
        <motion.div className="absolute top-20 left-0 w-80 h-80 bg-gradient-to-br from-purple-100/50 to-pink-100/50 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }} transition={{ duration: 15, repeat: Infinity }} />
        <motion.div className="absolute bottom-20 right-0 w-72 h-72 bg-gradient-to-br from-green-100/40 to-teal-100/40 rounded-full blur-3xl" animate={{ y: [0, -30, 0], scale: [1.1, 1, 1.1] }} transition={{ duration: 12, repeat: Infinity }} />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <motion.div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center shadow-lg" whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }} animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                <PersonStanding className="w-8 h-8 text-purple-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900">Artificial Limbs (Prosthetics)</h2>
            </div>
            <p className="text-slate-600 mb-8">Artificial limbs help individuals who have lost an arm, leg, or part of a limb.</p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* LEFT: Types list with images */}
              <motion.div className="bg-purple-50 rounded-2xl p-6 border border-purple-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300 group relative overflow-hidden" whileHover={{ y: -5, scale: 1.02 }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                  <motion.div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent" animate={{ x: ["-100%", "200%"] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }} />
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-4 relative z-10">Types:</h3>

                <ul className="space-y-3 relative z-10">
                  {prostheticTypes.map((item, index) => (
                    <motion.li key={index} className="flex items-center gap-4 p-2 rounded-lg hover:bg-purple-100 transition-all cursor-pointer" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ x: 5 }}>
                      <img src={item.image} alt={item.title} onError={(e) => { e.currentTarget.src = "/images/placeholder.jpg"; }} className="w-14 h-14 object-cover rounded-md border" />
                      <div>
                        <div className="font-medium text-slate-800">{item.title}</div>
                        {item.description && <div className="text-sm text-slate-600">{item.description}</div>}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* RIGHT: Benefits */}
              <motion.div className="bg-green-50 rounded-2xl p-6 border border-green-100 hover:shadow-xl hover:border-green-200 transition-all duration-300 group relative overflow-hidden" whileHover={{ y: -5, scale: 1.02 }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                  <motion.div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent" animate={{ x: ["-100%", "200%"] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4 relative z-10">Benefits:</h3>
                <div className="space-y-3 relative z-10">
                  {prostheticBenefits.map((benefit, index) => (
                    <motion.div key={index} className="flex items-center gap-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ x: 5 }}>
                      <motion.div className="w-7 h-7 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0" whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                        <Check className="w-4 h-4 text-green-700" />
                      </motion.div>
                      <span className="text-slate-700">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.p className="text-slate-500 text-sm italic mt-6 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
              (Note: We provide only informational resources — not medical advice or product sales.)
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Mobility Sticks & Canes */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <motion.div className="absolute top-10 right-10 w-20 h-20 border-2 border-amber-200 rounded-full" animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }} transition={{ duration: 15, repeat: Infinity }} />
        <motion.div className="absolute bottom-20 left-10 w-16 h-16 bg-amber-100 rounded-2xl opacity-50" animate={{ rotate: [0, 45, 0], y: [0, -20, 0] }} transition={{ duration: 8, repeat: Infinity }} />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <motion.div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center shadow-lg" whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}>
                <Eye className="w-8 h-8 text-amber-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900">Mobility Sticks & Canes</h2>
            </div>
            <p className="text-slate-600 mb-8">These devices help with balance and support while walking.</p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {caneTypes.map((type, index) => (
                <motion.div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-xl hover:border-amber-200 transition-all duration-300 group cursor-pointer relative overflow-hidden flex items-start gap-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -5, scale: 1.02 }}>
                  {/* Image added at left */}
                  <img src={type.image} alt={type.title} onError={(e) => { e.currentTarget.src = "/images/placeholder.jpg"; }} className="w-20 h-20 object-cover rounded-md flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 mb-2">{type.title}</h4>
                    <p className="text-slate-600 text-sm">{type.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div className="bg-amber-50 rounded-2xl p-6 border border-amber-100 hover:shadow-lg transition-all duration-300" whileHover={{ y: -3 }}>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Benefits:</h3>
              <div className="flex flex-wrap gap-4">
                {caneBenefits.map((benefit, index) => (
                  <motion.div key={index} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ scale: 1.05 }}>
                    <motion.div className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0" whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                      <Check className="w-4 h-4 text-amber-700" />
                    </motion.div>
                    <span className="text-slate-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Braces & Supports (Orthotics) */}
      <section className="py-20 bg-white relative overflow-hidden">
        <motion.div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-teal-100/40 to-blue-100/40 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], x: [0, -30, 0] }} transition={{ duration: 12, repeat: Infinity }} />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <motion.div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center shadow-lg" whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}>
                <PersonStanding className="w-8 h-8 text-teal-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900">Braces & Supports (Orthotics)</h2>
            </div>
            <p className="text-slate-600 mb-8">Braces support joints, muscles, and limbs for better mobility and posture.</p>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div className="bg-teal-50 rounded-2xl p-6 border border-teal-100 hover:shadow-xl hover:border-teal-200 transition-all duration-300 group relative overflow-hidden" whileHover={{ y: -5 }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                  <motion.div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent" animate={{ x: ["-100%", "200%"] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4 relative z-10">Common Braces:</h3>
                <ul className="space-y-3 relative z-10">
                  {braceTypes.map((type, index) => (
                    <motion.li key={index} className="flex items-center gap-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ x: 5 }}>
                      <img src={type.image} alt={type.title} onError={(e) => { e.currentTarget.src = "/images/placeholder.jpg"; }} className="w-12 h-12 object-cover rounded-md border" />
                      <div>
                        <div className="text-slate-800 font-medium">{type.title}</div>
                        {type.description && <div className="text-sm text-slate-600">{type.description}</div>}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group relative overflow-hidden" whileHover={{ y: -5 }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                  <motion.div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent" animate={{ x: ["-100%", "200%"] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4 relative z-10">Uses:</h3>
                <div className="space-y-3 relative z-10">
                  {braceUses.map((use, index) => (
                    <motion.div key={index} className="flex items-center gap-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ x: 5 }}>
                      <motion.div className="w-7 h-7 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0" whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                        <Check className="w-4 h-4 text-blue-700" />
                      </motion.div>
                      <span className="text-slate-700">{use}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Walkers, Crutches & Rollators */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <motion.div className="absolute top-10 left-10 w-24 h-24 border-2 border-pink-200 rounded-2xl" animate={{ rotate: [0, 45, 0], scale: [1, 1.1, 1] }} transition={{ duration: 10, repeat: Infinity }} />
        <motion.div className="absolute bottom-20 right-10 w-16 h-16 bg-pink-100 rounded-full opacity-50" animate={{ scale: [1, 1.3, 1], y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity }} />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <motion.div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center shadow-lg" whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}>
                <PersonStanding className="w-8 h-8 text-pink-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900">Walkers, Crutches & Rollators</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {walkersInfo.map((item, index) => (
                <motion.div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-2xl hover:border-pink-200 transition-all duration-300 group cursor-pointer relative overflow-hidden" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }} whileHover={{ y: -8, scale: 1.03 }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                    <motion.div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-pink-100/50 to-transparent" animate={{ x: ["-100%", "200%"] }} transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }} />
                  </div>

                  <div className="flex items-start gap-4">
                    <img src={item.image} alt={item.title} onError={(e) => { e.currentTarget.src = "/images/placeholder.jpg"; }} className="w-24 h-20 object-cover rounded-md flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2 text-lg">{item.title}</h4>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Daily Living Assistive Tools */}
      <section className="py-20 bg-white relative overflow-hidden">
        <motion.div className="absolute top-20 left-0 w-80 h-80 bg-gradient-to-br from-green-100/50 to-teal-100/50 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }} transition={{ duration: 15, repeat: Infinity }} />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <motion.div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center shadow-lg" whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }} animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                <Home className="w-8 h-8 text-green-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900">Daily Living Assistive Tools</h2>
            </div>
            <p className="text-slate-600 mb-8">These devices make everyday tasks easier and safer.</p>

            <motion.div className="bg-green-50 rounded-2xl p-8 border border-green-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group" whileHover={{ y: -3 }}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <motion.div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent" animate={{ x: ["-100%", "200%"] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4 relative z-10">Examples:</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
                {dailyLivingTools.map((tool, index) => (
                  <motion.div key={index} className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group/item" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} whileHover={{ x: 5, scale: 1.02 }}>
                    <motion.div className="w-7 h-7 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:bg-green-500 transition-colors" whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                      <Check className="w-4 h-4 text-green-700 group-hover/item:text-white transition-colors" />
                    </motion.div>
                    <span className="text-slate-700">{tool}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.p className="text-slate-600 italic text-center mt-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
              These tools enhance independence at home and in public spaces.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section 8: How to Choose the Right Device */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <motion.div className="absolute top-10 right-10 w-20 h-20 border-2 border-indigo-200 rounded-full" animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }} transition={{ duration: 15, repeat: Infinity }} />
        <motion.div className="absolute bottom-20 left-20 w-16 h-16 bg-indigo-100 rounded-2xl opacity-50" animate={{ rotate: [0, 45, 0], scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <motion.div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center shadow-lg" whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}>
                <BookOpen className="w-8 h-8 text-indigo-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900">How to Choose the Right Device</h2>
            </div>
            <p className="text-slate-600 mb-8">Choosing the right assistive device depends on:</p>

            <motion.div className="bg-white rounded-2xl p-8 shadow-md border border-slate-100 mb-6 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group" whileHover={{ y: -5 }}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <motion.div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-indigo-50/50 to-transparent" animate={{ x: ["-100%", "200%"] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }} />
              </div>
              <div className="grid md:grid-cols-2 gap-4 relative z-10">
                {choosingFactors.map((factor, index) => (
                  <motion.div key={index} className="flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-50 transition-colors cursor-pointer group/item" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ x: 5 }}>
                    <motion.div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:bg-indigo-500 transition-colors" whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                      <span className="text-indigo-600 font-semibold group-hover/item:text-white transition-colors">{index + 1}</span>
                    </motion.div>
                    <span className="text-slate-700">{factor}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.p className="text-slate-600 italic text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
              We encourage families and caregivers to learn about device types to support informed decision-making.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section 9: How We Help */}
      <section className="py-20 bg-white relative overflow-hidden">
        <motion.div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-pink-100/50 to-rose-100/50 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], x: [0, -30, 0] }} transition={{ duration: 12, repeat: Infinity }} />
        <motion.div className="absolute bottom-20 left-0 w-72 h-72 bg-gradient-to-br from-purple-100/40 to-pink-100/40 rounded-full blur-3xl" animate={{ y: [0, -30, 0], scale: [1.1, 1, 1.1] }} transition={{ duration: 15, repeat: Infinity }} />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
            <motion.div className="w-20 h-20 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg" whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }} animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity }}>
              <HeartHandshake className="w-10 h-10 text-pink-600" />
            </motion.div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How We Help</h2>
            <p className="text-slate-600 mb-8">Dhingra Family Foundation India provides:</p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {howWeHelp.map((item, index) => (
                <motion.div key={index} className="flex items-center gap-2 px-5 py-3 bg-pink-50 rounded-full shadow-sm hover:shadow-lg hover:bg-pink-100 transition-all duration-300 cursor-pointer group" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ scale: 1.05, y: -3 }}>
                  <motion.div className="w-6 h-6 bg-pink-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500 transition-colors" whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                    <Check className="w-4 h-4 text-pink-700 group-hover:text-white transition-colors" />
                  </motion.div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <Link to={createPageUrl("Accessibility")}>
              <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700 rounded-full shadow-xl shadow-pink-500/30 group px-8">
                  Explore Accessibility Resources
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 10: Need Guidance? */}
      <section className="py-20 bg-gradient-to-br from-red-700 to-orange-700 relative overflow-hidden">
        <motion.div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/10 rounded-full" animate={{ rotate: 360, scale: [1, 1.1, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
        <motion.div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white/15 rounded-2xl" animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} />
        <motion.div className="absolute top-1/2 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-3xl" animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 8, repeat: Infinity }} />
        <motion.div className="absolute top-1/3 right-1/4 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl" animate={{ y: [0, -30, 0], scale: [1, 1.2, 1] }} transition={{ duration: 6, repeat: Infinity }} />

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div key={i} className="absolute w-2 h-2 bg-white/20 rounded-full" style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }} animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }} />
        ))}

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center text-white">
            <motion.div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/30" whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }} animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity }}>
              <MessageCircle className="w-10 h-10" />
            </motion.div>
            <h2 className="text-3xl font-bold mb-4">Need Guidance?</h2>
            <motion.p className="text-purple-100 mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              Have questions about assistive devices or want to understand their uses? We're here to support with information and awareness.
            </motion.p>
            <Link to={createPageUrl("Contact")}>
              <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 rounded-full px-10 shadow-xl shadow-purple-900/30 group">
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

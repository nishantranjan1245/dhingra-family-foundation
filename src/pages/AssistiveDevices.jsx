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

// Full AssistiveDevices component (with cane images)
export default function AssistiveDevices() {
  const benefits = [
    "Improved mobility",
    "Increased independence",
    "Safety during movement",
    "Better posture & support",
    "Confidence in daily activities"
  ];

  const wheelchairTypes = [
    {
      title: "Manual Wheelchairs",
      description: "Operated by the user or a caregiver. Suitable for short distances and general mobility.",
      image: "/images/manual-wheelchair.jpg"
    },
    {
      title: "Electric Wheelchairs",
      description: "Battery-powered and controlled with a joystick. Provide more independence for long distances.",
      image: "/images/electric-wheelchair.png"
    },
    {
      title: "Sports Wheelchairs",
      description: "Designed for sports like basketball, racing, etc. Lightweight, durable, and fast.",
      image: "/images/sports-wheelchair.png"
    },
    {
      title: "Folding Wheelchairs",
      description: "Easy to carry, travel-friendly. Helpful for transportation and compact spaces.",
      image: "/images/folding-wheelchair.png"
    },
    {
      title: "Commode Wheelchairs",
      description: "Useful for indoor use and bathroom assistance.",
      image: "/images/commode-wheelchair.png"
    }
  ];

  const prostheticTypes = [
    "Lower-limb prosthetics (leg, foot)",
    "Upper-limb prosthetics (hand, arm)",
    "Activity-specific prosthetics (sports, climbing)"
  ];

  const prostheticBenefits = [
    "Better balance",
    "Restored movement",
    "Increased independence"
  ];

  // Cane types with image property
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

  const braceTypes = [
    "Knee braces",
    "Ankle supports",
    "Back braces",
    "Wrist & hand supports",
    "AFO (Ankle-Foot Orthosis)"
  ];

  const braceUses = [
    "Stability",
    "Posture support",
    "Preventing injuries",
    "Improved confidence while walking"
  ];

  const walkersInfo = [
    {
      title: "Walkers",
      description: "For individuals who need full body support. Offers stability for indoor & outdoor use.",
      image: "/images/walkers.png"
    },
    {
      title: "Crutches",
      description: "Used for temporary or semi-permanent support after injury or surgery.",
      image: "/images/crutches.png"
    },
    {
      title: "Rollators (Wheeled Walkers)",
      description: "Comes with wheels and a seat. Helps in walking long distances with rest support.",
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

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/image-7.jpg"
            alt="Assistive Devices"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r 
              from-[#4A1F25]/95 
              via-[#562628]/90 
              via-[#5C2B2E]/85 
              via-[#B55A29]/80 
              to-[#3C1D29]/75"
          />
        </div>
        
        <motion.div 
          className="absolute top-20 right-32"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <Cog className="w-24 h-24 text-white/10" />
        </motion.div>
        <motion.div 
          className="absolute bottom-32 right-20"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Cog className="w-16 h-16 text-white/15" />
        </motion.div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-sm font-semibold mb-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Cog className="w-4 h-4" />
                Empowering Independence
              </motion.span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Assistive{" "}
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Devices
                </span>{" "}
                Information
              </h1>
              <p className="text-lg text-purple-100 leading-relaxed mb-8">
                Clear, educational information about different types of assistive devices that support mobility, independence, and daily living for persons with disabilities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to={createPageUrl("DevicesInfo")}>
                  <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white rounded-full px-8 shadow-xl">
                    Explore Device Types
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Section 1: What Are Assistive Devices? */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                <PersonStanding className="w-7 h-7 text-teal-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">What Are Assistive Devices?</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Assistive devices are tools that help people move, communicate, or perform activities independently. They make homes, workplaces, and public spaces more accessible and safe.
              </p>
              <p className="text-slate-700 font-medium mb-4">Common benefits:</p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-teal-600" />
                    </div>
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="/images/image-7.jpg"
                alt="Assistive devices"
                className="rounded-3xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Wheelchairs (with images) */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Armchair className="w-7 h-7 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Wheelchairs</h2>
            </div>
            <p className="text-slate-600 mb-8">
              Wheelchairs are one of the most widely used mobility tools. They assist individuals who face difficulty walking or cannot walk independently.
            </p>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Types of Wheelchairs:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {wheelchairTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-2xl p-0 shadow-md border border-slate-100 overflow-hidden">
                  {type.image && (
                    <div className="w-full h-40 md:h-44 overflow-hidden">
                      <img
                        src={type.image}
                        alt={type.title}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.currentTarget.src = '/images/wheelchairs/placeholder.jpg'; }}
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="text-slate-400 font-medium">{index + 1}.</span> {type.title}
                    </h4>
                    <p className="text-slate-600 text-sm">{type.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Artificial Limbs (Prosthetics) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center">
                <PersonStanding className="w-7 h-7 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Artificial Limbs (Prosthetics)</h2>
            </div>
            <p className="text-slate-600 mb-8">
              Artificial limbs help individuals who have lost an arm, leg, or part of a limb.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Types:</h3>
                <ul className="space-y-3">
                  {prostheticTypes.map((type, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-slate-700">{type}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Benefits:</h3>
                <div className="space-y-3">
                  {prostheticBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-green-700" />
                      </div>
                      <span className="text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-slate-500 text-sm italic mt-6 text-center">
              (Note: We provide only informational resources — not medical advice or product sales.)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Mobility Sticks & Canes (with images) */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center">
                <Eye className="w-7 h-7 text-amber-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Mobility Sticks & Canes</h2>
            </div>
            <p className="text-slate-600 mb-8">
              These devices help with balance and support while walking.
            </p>
            
            {/* Cane cards with images */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {caneTypes.map((type, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden"
                >
                  {type.image && (
                    <div className="w-full h-36 overflow-hidden">
                      <img
                        src={type.image}
                        alt={type.title}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.currentTarget.src = "/images/canes/placeholder.png"; }}
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <h4 className="font-semibold text-slate-900 mb-2">{type.title}</h4>
                    <p className="text-slate-600 text-sm">{type.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Benefits:</h3>
              <div className="flex flex-wrap gap-4">
                {caneBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-amber-700" />
                    </div>
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Braces & Supports (Orthotics) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center">
                <PersonStanding className="w-7 h-7 text-teal-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Braces & Supports (Orthotics)</h2>
            </div>
            <p className="text-slate-600 mb-8">
              Braces support joints, muscles, and limbs for better mobility and posture.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-teal-50 rounded-2xl p-6 border border-teal-100">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Common Braces:</h3>
                <ul className="space-y-3">
                  {braceTypes.map((type, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-slate-700">{type}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Uses:</h3>
                <div className="space-y-3">
                  {braceUses.map((use, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-blue-700" />
                      </div>
                      <span className="text-slate-700">{use}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Walkers, Crutches & Rollators (with images) */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center">
                <PersonStanding className="w-7 h-7 text-pink-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Walkers, Crutches & Rollators</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {walkersInfo.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-0 shadow-md border border-slate-100 overflow-hidden">
                  {item.image && (
                    <div className="w-full h-36 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.currentTarget.src = '/images/walkers/placeholder.jpg'; }}
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <h4 className="font-semibold text-slate-900 mb-3 text-lg">{index + 1}. {item.title}</h4>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Daily Living Assistive Tools */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center">
                <Home className="w-7 h-7 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Daily Living Assistive Tools</h2>
            </div>
            <p className="text-slate-600 mb-8">
              These devices make everyday tasks easier and safer.
            </p>
            
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Examples:</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dailyLivingTools.map((tool, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white p-3 rounded-xl">
                    <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-700" />
                    </div>
                    <span className="text-slate-700">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-slate-600 italic text-center mt-6">
              These tools enhance independence at home and in public spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 8: How to Choose the Right Device */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-indigo-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">How to Choose the Right Device</h2>
            </div>
            <p className="text-slate-600 mb-8">
              Choosing the right assistive device depends on:
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-md border border-slate-100 mb-6">
              <div className="grid md:grid-cols-2 gap-4">
                {choosingFactors.map((factor, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-indigo-600 font-semibold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-slate-700">{factor}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-slate-600 italic text-center">
              We encourage families and caregivers to learn about device types to support informed decision-making.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 9: How We Help */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HeartHandshake className="w-7 h-7 text-pink-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How We Help</h2>
            <p className="text-slate-600 mb-8">
              Dhingra Family Foundation India provides:
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {howWeHelp.map((item, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-3 bg-pink-50 rounded-full">
                  <div className="w-5 h-5 bg-pink-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-pink-700" />
                  </div>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <Link to={createPageUrl("Accessibility")}>
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 rounded-full">
                Explore Accessibility Resources
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 10: Need Guidance? */}
      <section className="py-20 bg-gradient-to-br from-red-700 to-orange-700 relative overflow-hidden">
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

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}

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
              <MessageCircle className="w-10 h-10" />
            </motion.div>
            <h2 className="text-3xl font-bold mb-4">Need Guidance?</h2>
            <p className="text-purple-100 mb-8">
              Have questions about assistive devices or want to understand their uses? We're here to support with information and awareness.
            </p>
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 rounded-full px-8">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wind, Sun, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0a1f44] via-[#0d2a5e] to-[#0a3d6b]">
      {/* Abstract geometric overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#6abf4b] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400 rounded-full blur-3xl" />
      </div>
      
      {/* Louvre line pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="h-px bg-white"
            style={{ marginTop: `${4 + i * 5}%`, width: '100%' }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#6abf4b]/40 bg-[#6abf4b]/10 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#6abf4b] animate-pulse" />
              <span className="text-slate-300 text-sm font-medium tracking-wide uppercase">Redefining Window Protection</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              The Perfect Blend of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6abf4b] to-[#9fdc7a]">
                Louvres
              </span>{" "}
              &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
                Roller Shutters
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl">
              Adjustable louvred blades that open for airflow and light — then roll away completely when you don't need them. Protection, privacy, and freedom in one elegant system.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to={createPageUrl("HomeOwners")}>
                <Button size="lg" className="bg-[#6abf4b] hover:bg-[#5aaf3b] text-white font-semibold px-8 h-14 text-base rounded-xl shadow-lg shadow-green-500/30 transition-all hover:shadow-green-500/50">
                  Explore for Homes
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl("PubsAndClubs")}>
                <Button size="lg" variant="outline" className="border-white/30 text-slate-200 hover:bg-white/10 hover:text-white px-8 h-14 text-base rounded-xl">
                  Commercial Solutions
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#6abf4b]/20 to-blue-500/20 rounded-3xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Modern home with premium window shutters"
                className="relative rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
              />
              {/* Floating feature cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                    <Sun className="w-5 h-5 text-[#6abf4b]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Heat Reduction</p>
                    <p className="text-xs text-slate-500">Block harsh sunlight</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            { icon: Wind, title: "Airflow Control", desc: "Open louvres for natural ventilation" },
            { icon: Sun, title: "Solar Protection", desc: "Block heat while maintaining light" },
            { icon: Eye, title: "Privacy on Demand", desc: "Adjustable visibility control" },
          ].map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-[#6abf4b]/20 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-[#6abf4b]" />
              </div>
              <div>
                <p className="font-semibold text-white">{feature.title}</p>
                <p className="text-sm text-slate-400">{feature.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
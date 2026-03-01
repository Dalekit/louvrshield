import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <HowItWorks />

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a1f44] to-[#0a3d6b] p-12 md:p-16 text-center"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#6abf4b] rounded-full blur-3xl" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Space?
              </h2>
              <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
                Find a retailer near you and discover how louvred roller shutters can upgrade your home or business.
              </p>
              <Link to={createPageUrl("Contact")}>
                <Button size="lg" className="bg-[#6abf4b] hover:bg-[#5aaf3b] text-white font-semibold px-10 h-14 text-base rounded-xl shadow-lg shadow-green-500/30">
                  Find a Retailer
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
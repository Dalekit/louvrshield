import PageHero from "@/components/PageHero";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Sun, Wind, Eye, Snowflake, ShieldCheck, Thermometer } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const features = [
  {
    icon: Sun,
    title: "Reduce Solar Heat Gain",
    description: "Keep harsh sun off your windows and dramatically reduce the heat entering your home. Lower your cooling costs and stay comfortable all summer."
  },
  {
    icon: Wind,
    title: "Natural Airflow",
    description: "Open the louvred blades in the home position to let fresh breezes flow through your home naturally — no need for air conditioning."
  },
  {
    icon: Eye,
    title: "Adjustable Privacy",
    description: "Control visibility from outside in. Angle the louvres to block prying eyes while still enjoying light and ventilation."
  },
  {
    icon: Snowflake,
    title: "Winter Freedom",
    description: "Fully retract the shutter during cooler months and have absolutely nothing on your windows. Enjoy unobstructed views and maximum sunlight."
  },
  {
    icon: ShieldCheck,
    title: "Security & Storm Protection",
    description: "When fully closed, the roller shutter provides a solid barrier against intruders, storms, and harsh weather conditions."
  },
  {
    icon: Thermometer,
    title: "Year-Round Comfort",
    description: "One system that adapts to every season — block summer heat, embrace winter sun, and maintain airflow all year round."
  },
];

export default function HomeOwners() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        badge="Residential"
        title="Comfort, Airflow & Protection for Your"
        titleHighlight="Home"
        description="Keep the sun off your windows in summer, enjoy open breezes through adjustable louvres, and retract everything completely in winter. The smarter way to manage your home's climate."
        imageSrc="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
        imageAlt="Beautiful modern home"
      />

      {/* Features Grid */}
      <section className="py-24 px-6 md:px-12 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-slate-600 mb-3">Benefits</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Why Homeowners Love It
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <FeatureCard key={i} index={i} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-slate-100 rounded-3xl" />
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80"
                  alt="Bright interior with natural light"
                  className="relative rounded-2xl shadow-lg w-full aspect-[4/3] object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold tracking-widest uppercase text-slate-600 mb-3">Seasonal Flexibility</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Nothing on Your Windows When You Don't Want It
              </h2>
              <p className="mt-6 text-slate-500 text-lg leading-relaxed">
                Unlike fixed louvres or permanent screens, our roller shutter retracts completely into a compact headbox. In winter, enjoy floor-to-ceiling glass with zero obstruction. In summer, lower the shutter and angle the louvres for the perfect balance of shade and breeze.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to={createPageUrl("Contact")}>
                  <Button size="lg" className="bg-slate-600 hover:bg-slate-500 text-white font-semibold px-8 h-12 rounded-xl">
                    Find a Retailer
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
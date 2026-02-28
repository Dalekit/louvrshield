import PageHero from "@/components/PageHero";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { EyeOff, Wind, Cigarette, ShieldCheck, Zap, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const features = [
  {
    icon: EyeOff,
    title: "Block Outside Visibility",
    description: "Perfect for pokies areas and gaming rooms where compliance requires blocking visibility from outside in. Keep interiors private while staying compliant."
  },
  {
    icon: Wind,
    title: "Continuous Ventilation",
    description: "Open the louvred blades to maintain constant airflow. Keep air fresh and circulating without compromising privacy — essential for patron comfort."
  },
  {
    icon: Cigarette,
    title: "Ideal for Smokers Areas",
    description: "Designated smoking areas need fresh air. Our louvred shutters allow smoke to dissipate naturally while keeping the space enclosed and private."
  },
  {
    icon: ShieldCheck,
    title: "After-Hours Security",
    description: "Close the shutters completely after hours for a solid security barrier that protects windows, glass, and entry points from vandalism or break-ins."
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    description: "Reduce HVAC costs by controlling solar heat gain on large glass facades. Less heat in means less energy spent on air conditioning."
  },
  {
    icon: Building2,
    title: "Sleek Commercial Aesthetic",
    description: "Clean, modern lines that enhance your venue's exterior. Available in a range of colours to match your branding and architectural style."
  },
];

export default function PubsAndClubs() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        badge="Commercial"
        title="Privacy, Airflow & Compliance for"
        titleHighlight="Pubs & Clubs"
        description="Block visibility into pokies and gaming areas while maintaining ventilation for smokers sections. The perfect balance of privacy, fresh air, and regulatory compliance."
        imageSrc="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80"
        imageAlt="Modern pub and bar interior"
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
            <p className="text-sm font-semibold tracking-widest uppercase text-amber-600 mb-3">Commercial Benefits</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Built for Hospitality
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <FeatureCard key={i} index={i} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Highlight */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <p className="text-sm font-semibold tracking-widest uppercase text-amber-600 mb-3">Gaming & Pokies</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Compliant Privacy Without Sacrificing Air Quality
              </h2>
              <p className="mt-6 text-slate-500 text-lg leading-relaxed">
                Gaming regulations require that pokies areas are not visible from the street. Traditional solutions block visibility but trap heat and stale air. Our louvred roller shutters solve both problems — solid privacy when closed, adjustable airflow when the louvres are angled open.
              </p>
              <div className="mt-8 p-6 rounded-xl bg-slate-50 border border-slate-100">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-3xl font-bold text-amber-600">100%</p>
                    <p className="text-sm text-slate-500 mt-1">Privacy when closed</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-amber-600">Open</p>
                    <p className="text-sm text-slate-500 mt-1">Airflow with louvres angled</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link to={createPageUrl("Contact")}>
                  <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-8 h-12 rounded-xl">
                    Get a Commercial Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-amber-100 rounded-3xl" />
                <img
                  src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=700&q=80"
                  alt="Bar and club atmosphere"
                  className="relative rounded-2xl shadow-lg w-full aspect-[4/3] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
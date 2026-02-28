import { motion } from "framer-motion";
import { ShieldCheck, Wind, Maximize2, ArrowDown } from "lucide-react";

const steps = [
  {
    icon: ShieldCheck,
    title: "Closed Position",
    description: "Full protection from sun, rain, and intruders. Complete privacy with the shutter fully lowered and louvres closed.",
    color: "bg-slate-900 text-white",
    iconBg: "bg-slate-400/20",
    iconColor: "text-slate-400",
  },
  {
    icon: Wind,
    title: "Louvres Open",
    description: "In the home position, open the louvred blades to let fresh air flow through while maintaining shade and adjustable privacy.",
    color: "bg-amber-50 text-slate-900",
    iconBg: "bg-slate-400/10",
    iconColor: "text-slate-600",
  },
  {
    icon: Maximize2,
    title: "Fully Retracted",
    description: "Roll the shutter completely up and out of sight. Enjoy unobstructed views and maximum natural light — nothing on your windows.",
    color: "bg-white text-slate-900",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-700",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-slate-600 mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Three Modes. One System.
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Seamlessly transition between full protection, ventilation, and completely open — all from a single shutter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative"
            >
              <div className={`${step.color} rounded-2xl p-8 h-full border border-slate-200/50 shadow-sm hover:shadow-lg transition-shadow duration-300`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl ${step.iconBg} flex items-center justify-center`}>
                    <step.icon className={`w-7 h-7 ${step.iconColor}`} />
                  </div>
                  <span className="text-sm font-bold tracking-wider uppercase opacity-40">Step {i + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="leading-relaxed opacity-70">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <ArrowDown className="w-5 h-5 text-slate-300 rotate-[-90deg]" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
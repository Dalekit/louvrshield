import { motion } from "framer-motion";

export default function FeatureCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative bg-white rounded-2xl p-8 border border-slate-100 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-400 to-slate-300 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center mb-6 group-hover:bg-slate-200 transition-colors duration-300">
        <Icon className="w-7 h-7 text-slate-600" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{description}</p>
    </motion.div>
  );
}
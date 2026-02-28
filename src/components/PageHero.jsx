import { motion } from "framer-motion";

export default function PageHero({ badge, title, titleHighlight, description, imageSrc, imageAlt }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-24 md:py-32">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-72 h-72 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-slate-400 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 opacity-[0.03]">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="h-px bg-white" style={{ marginTop: `${3 + i * 6}%` }} />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-amber-300 text-sm font-medium tracking-wide uppercase">{badge}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight">
              {title}{" "}
              {titleHighlight && (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">
                  {titleHighlight}
                </span>
              )}
            </h1>
            <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-xl">
              {description}
            </p>
          </motion.div>

          {imageSrc && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-amber-500/20 to-slate-500/10 rounded-3xl blur-xl" />
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="relative rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
import { useState } from "react";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    postcode: "",
    message: "",
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        badge="Get in Touch"
        title="Find a Retailer"
        titleHighlight="Near You"
        description="Interested in louvred roller shutters for your home or business? Fill out the form below and we'll connect you with an authorised retailer in your area."
      />

      <section className="py-24 px-6 md:px-12 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <p className="text-sm font-semibold tracking-widest uppercase text-slate-600 mb-3">Contact</p>
                <h2 className="text-3xl font-bold text-slate-900">
                  We'd Love to Hear From You
                </h2>
                <p className="mt-4 text-slate-500 leading-relaxed">
                  Whether you're a homeowner looking to upgrade your comfort, or a venue manager seeking compliance solutions — we'll match you with the right retailer.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "info@louvrshield.com.au" },
                  { icon: Phone, label: "Phone", value: "1300 LOUVR (568 87)" },
                  { icon: MapPin, label: "Coverage", value: "Australia Wide" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-400">{item.label}</p>
                      <p className="text-slate-900 font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                  <p className="text-slate-500 text-lg">
                    We've received your enquiry and will connect you with a retailer shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 md:p-10 space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-700 font-medium">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        className="h-12 rounded-xl border-slate-200 focus:border-slate-400 focus:ring-slate-400/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700 font-medium">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        className="h-12 rounded-xl border-slate-200 focus:border-slate-400 focus:ring-slate-400/20"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-700 font-medium">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="04XX XXX XXX"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="h-12 rounded-xl border-slate-200 focus:border-slate-400 focus:ring-slate-400/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postcode" className="text-slate-700 font-medium">Postcode</Label>
                      <Input
                        id="postcode"
                        placeholder="2000"
                        value={formData.postcode}
                        onChange={(e) => handleChange("postcode", e.target.value)}
                        className="h-12 rounded-xl border-slate-200 focus:border-slate-400 focus:ring-slate-400/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-slate-700 font-medium">I'm interested in</Label>
                    <Select value={formData.interest} onValueChange={(value) => handleChange("interest", value)}>
                      <SelectTrigger className="h-12 rounded-xl border-slate-200 focus:border-slate-400 focus:ring-slate-400/20">
                        <SelectValue placeholder="Select your application" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential / Home</SelectItem>
                        <SelectItem value="commercial">Commercial / Hospitality</SelectItem>
                        <SelectItem value="pergola">Pergola / Outdoor</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-700 font-medium">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="min-h-[120px] rounded-xl border-slate-200 focus:border-slate-400 focus:ring-slate-400/20"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-slate-600 hover:bg-slate-500 text-white font-semibold h-14 text-base rounded-xl shadow-lg shadow-slate-500/20 transition-all hover:shadow-slate-500/40"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    Submit Enquiry
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
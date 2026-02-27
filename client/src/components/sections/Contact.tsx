import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { useCreateContact } from "@/hooks/use-contact";

export default function Contact() {
  const { mutate: createContact, isPending } = useCreateContact();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    createContact(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg">Interested in working together? Drop me a message.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="glass-panel p-8 rounded-3xl h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <a href="mailto:jashwanth.ei22@bmsce.ac.in" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">College Email</p>
                    <p className="text-white font-medium group-hover:text-primary transition-colors">jashwanth.ei22@bmsce.ac.in</p>
                  </div>
                </a>

                <a href="mailto:jashwanthsurya.js@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Personal Email</p>
                    <p className="text-white font-medium group-hover:text-accent transition-colors">jashwanthsurya.js@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-secondary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-white font-medium">Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form onSubmit={form.handleSubmit(onSubmit)} className="glass-panel p-8 rounded-3xl space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Your Name</label>
                  <input
                    {...form.register("name")}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                  {form.formState.errors.name && (
                    <p className="text-destructive text-sm mt-1">{form.formState.errors.name.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Email Address</label>
                  <input
                    {...form.register("email")}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                  {form.formState.errors.email && (
                    <p className="text-destructive text-sm mt-1">{form.formState.errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Your Message</label>
                <textarea
                  {...form.register("message")}
                  placeholder="How can I help you?"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                />
                {form.formState.errors.message && (
                  <p className="text-destructive text-sm mt-1">{form.formState.errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isPending ? "Sending..." : "Send Message"}
                {!isPending && <Send size={18} />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

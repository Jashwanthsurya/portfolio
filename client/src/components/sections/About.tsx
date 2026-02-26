import { motion } from "framer-motion";
import { GraduationCap, Award, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am currently pursuing my education at <span className="text-white font-medium">B.M.S. College of Engineering</span>. 
              My core interests lie at the intersection of development and operations, specifically in <span className="text-primary font-medium">DevOps</span> and <span className="text-accent font-medium">Cloud Computing</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Known for my adaptable nature, I thrive in dynamic environments where learning and rapid problem-solving are required. I love automating infrastructure, building resilient deployment pipelines, and crafting seamless full-stack user experiences.
            </p>

            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 glass-panel p-4 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">B.M.S. College</h4>
                  <p className="text-sm text-muted-foreground">Engineering</p>
                </div>
              </div>
              <div className="flex items-center gap-4 glass-panel p-4 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Bangalore, India</h4>
                  <p className="text-sm text-muted-foreground">Location</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-30"></div>
              <div className="glass-panel p-8 rounded-3xl relative z-10 flex flex-col items-center justify-center text-center h-full min-h-[300px]">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-primary/20">
                  <Award size={40} className="text-white" />
                </div>
                <h3 className="text-6xl font-bold text-white mb-4">3+</h3>
                <p className="text-xl text-muted-foreground font-medium">
                  Major DevOps & Cloud<br />Projects Deployed
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Intern",
    company: "Sakha Global",
    period: "Ongoing",
    description: "Contributed to software development lifecycles, assisted in infrastructure management, and collaborated with senior engineers on cloud-based solutions.",
  },
  {
    role: "Intern",
    company: "Octagon Back Private Ltd",
    period: "Ongoing Remote",
    description: "Worked on building scalable backend services and involved in full-stack feature development. Focused on efficient database queries and API integration.",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-black/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">My journey in the tech industry so far.</p>
        </motion.div>

        <div className="space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line for Mobile */}
              <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-white/10"></div>
              
              <div className="glass-panel p-6 sm:p-8 rounded-3xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-primary group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <Briefcase size={20} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{exp.role}</h3>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-sm text-accent font-medium self-start md:self-auto border border-white/10">
                    {exp.period}
                  </span>
                </div>
                
                <h4 className="text-lg font-medium text-white/80 mb-3">{exp.company}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

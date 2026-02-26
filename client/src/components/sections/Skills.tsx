import { motion } from "framer-motion";
import { 
  SiPython, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiGnubash,
  SiDocker, SiKubernetes, SiJenkins, SiGithubactions, SiTerraform, SiAnsible,
  SiAmazonwebservices, SiGooglecloud, SiReact, SiNodedotjs, SiPostgresql, SiMongodb
} from "react-icons/si";
import { FileBadge } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Programming",
    icon: <SiPython className="text-primary" size={24} />,
    skills: [
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML/CSS", icon: SiHtml5 },
      { name: "Bash", icon: SiGnubash },
    ]
  },
  {
    title: "DevOps & Containers",
    icon: <SiDocker className="text-accent" size={24} />,
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Jenkins", icon: SiJenkins },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Terraform", icon: SiTerraform },
      { name: "Ansible", icon: SiAnsible },
    ]
  },
  {
    title: "Cloud & Infrastructure",
    icon: <SiAmazonwebservices className="text-secondary" size={24} />,
    skills: [
      { name: "AWS S3", icon: SiAmazonwebservices },
      { name: "AWS EC2", icon: SiAmazonwebservices },
      { name: "AWS RDS", icon: SiAmazonwebservices },
      { name: "AWS Glue", icon: SiAmazonwebservices },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ]
  },
];

const CERTIFICATIONS = [
  "AWS Certified Solutions Architect (Prep)",
  "Docker Certified Associate",
  "HashiCorp Certified: Terraform Associate",
  "Certified Kubernetes Administrator (CKA) Basics"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical <span className="text-primary">Arsenal</span>
          </h2>
          <p className="text-muted-foreground text-lg">The tools and technologies I use to build robust solutions.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-6 md:p-8 rounded-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/5 text-white/80 hover:bg-white/10 hover:border-white/20 transition-colors">
                    <skill.icon size={16} />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <FileBadge size={120} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
            <FileBadge className="text-accent" /> Certifications & Achievements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-white/90 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

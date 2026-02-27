import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";

const PROJECTS = [
  {
    title: "Full-Stack Attendance Portal",
    description: "A comprehensive attendance tracking system with robust backend and interactive frontend.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    tags: ["React", "Node.js", "PostgreSQL", "Full-Stack"],
    github: "https://github.com/Jashwanthsurya/Full-stack-attendance-portal-",
  },
  {
    title: "Multi-Instance Cloud Deployment",
    description: "Cloud-based deployment architecture for a Flutter application ensuring high availability.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    tags: ["Flutter", "AWS EC2", "Nginx", "DevOps"],
    github: "https://github.com/Jashwanthsurya/Attendence-portal",
  },
  {
    title: "Employee Screening Data Pipeline",
    description: "Automated ETL pipeline for background checks with analytics capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["AWS S3", "AWS Glue", "RDS", "ETL"],
    github: "https://github.com/Jashwanthsurya/employee-Background-Screening-Data-Pipeline-using-aws..git",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing my work in full-stack development, cloud architecture, and data pipelines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel rounded-3xl overflow-hidden group flex flex-col h-full"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <div className="absolute inset-0 bg-background/40 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                {/* coding stock image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/80">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-white/10 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

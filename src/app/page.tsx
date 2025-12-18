"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink, ArrowDown, Terminal, Shield, Database, Cpu, Instagram } from "lucide-react";

const projects = [
  {
    title: "Digital Wallet Backend",
    description: "High-concurrency payment system with ACID-safe transfers and Kafka integration.",
    tags: ["Spring Boot", "MySQL", "Kafka", "Docker"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    link: "https://github.com/rakeshraj22",
  },
  {
    title: "IAM Service",
    description: "JWT-based identity management with RBAC and Redis token revocation.",
    tags: ["Spring Security", "JWT", "PostgreSQL", "Redis"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
    link: "https://github.com/rakeshraj22",
  },
  {
    title: "Pharmacy Management",
    description: "Inventory tracking system with batch management and automated alerts.",
    tags: ["Java", "Spring Boot", "Docker", "REST"],
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80",
    link: "https://github.com/rakeshraj22",
  },
];

const skills = [
  { name: "Java", icon: <Cpu className="w-4 h-4" /> },
  { name: "Spring Boot", icon: <Terminal className="w-4 h-4" /> },
  { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
  { name: "MySQL", icon: <Database className="w-4 h-4" /> },
  { name: "Git", icon: <Terminal className="w-4 h-4" /> },
  { name: "Docker", icon: <Shield className="w-4 h-4" /> },
];

const allSkills = [
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Kafka", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
  { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "REST API", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Maven", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" },
  { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "IntelliJ", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-[family-name:var(--font-plus-jakarta-sans)] selection:bg-emerald-500/30">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 contrast-150" />
      </div>

      <nav className="fixed top-0 w-full z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-8 py-4">
          <span className="text-xl font-[family-name:var(--font-unbounded)] font-bold tracking-tighter">RAKESH.</span>
            <div className="flex gap-8 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#work" className="hover:text-white transition-colors">Projects</a>
            <a href="#blogs" className="hover:text-white transition-colors">Blogs</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center px-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-bold tracking-widest uppercase">
              Backend Systems Engineer
            </div>
            <h1 className="text-6xl md:text-9xl font-[family-name:var(--font-unbounded)] font-black tracking-tighter mb-8 leading-[0.9]">
              N RAKESH<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">RAJ</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-500 mb-12 max-w-xl mx-auto font-medium">
              Architecting secure, high-performance backends with Java, Spring Boot, and Distributed Systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#work" className="px-10 py-5 bg-white text-black font-bold rounded-xl transition-all hover:scale-105 active:scale-95">
                EXPLORE PROJECTS
              </a>
              <a href="#contact" className="px-10 py-5 border border-white/10 hover:bg-white/5 font-bold rounded-xl transition-all">
                LET'S TALK
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-12"
          >
            <ArrowDown className="w-5 h-5 text-zinc-700" />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-40 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-900 group">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/crisp_animated_profile-1766069186873.jpg?width=8000&height=8000&resize=contain" 
                  alt="N Rakesh Raj"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-[80px]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-500 mb-6">Discovery</h2>
              <h3 className="text-4xl md:text-5xl font-[family-name:var(--font-unbounded)] font-bold mb-8 leading-tight">
                Backend engineering is where complexity meets elegance.
              </h3>
              <p className="text-lg text-zinc-400 mb-12 leading-relaxed">
                Currently a B.Tech CSE student at VIT, I'm dedicated to the craft of server-side architecture. 
                I focus on building systems that are not just functional, but resilient, scalable, and secure by design.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                      {skill.icon}
                    </div>
                    <span className="font-bold text-sm tracking-tight">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="work" className="py-40 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
              <div>
                <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-500 mb-6">Archive</h2>
                <h3 className="text-5xl md:text-7xl font-[family-name:var(--font-unbounded)] font-bold tracking-tighter">
                  Selected<br />Works
                </h3>
              </div>
              <p className="text-zinc-500 max-w-xs font-medium">
                A collection of specialized backend systems focusing on security and scalability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative"
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-6 border border-white/10">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <h4 className="text-2xl font-[family-name:var(--font-unbounded)] font-bold mb-4 flex items-center gap-2">
                      {project.title}
                      <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
                    </h4>
                  </a>
                  <p className="text-zinc-500 mb-6 text-sm font-medium leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Blogs Section */}
        <section id="blogs" className="py-40 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
              <div>
                <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-500 mb-6">Thoughts</h2>
                <h3 className="text-5xl md:text-7xl font-[family-name:var(--font-unbounded)] font-bold tracking-tighter">
                  Blog
                </h3>
              </div>
              <p className="text-zinc-500 max-w-xs font-medium">
                Writing about backend development, system design, and lessons learned.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white/5 border border-white/10 p-12 text-center"
            >
              <p className="text-zinc-400 mb-8 text-lg">
                Check out my latest articles on backend engineering and software development.
              </p>
              <a 
                href="https://blog.rakeshraj.tech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 text-black font-bold rounded-xl transition-all hover:scale-105 active:scale-95"
              >
                Visit My Blog
                <ExternalLink className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Skills Infinite Marquee */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-500 mb-4 text-center">Tech Stack</h2>
            <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-unbounded)] font-bold tracking-tighter text-center">
              Technologies I Work With
            </h3>
          </div>
          
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
            
            <div className="flex gap-6 mb-6">
              <motion.div
                className="flex gap-6 shrink-0"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                {[...allSkills, ...allSkills].map((skill, i) => (
                  <div 
                    key={i} 
                    className="group flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:bg-white/10 transition-all duration-300 shrink-0"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 p-2 group-hover:bg-white/20 transition-colors">
                      <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-lg font-semibold tracking-tight whitespace-nowrap">{skill.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
            
            <div className="flex gap-6">
              <motion.div
                className="flex gap-6 shrink-0"
                animate={{ x: ["-50%", "0%"] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                {[...allSkills.slice().reverse(), ...allSkills.slice().reverse()].map((skill, i) => (
                  <div 
                    key={i} 
                    className="group flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:bg-white/10 transition-all duration-300 shrink-0"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 p-2 group-hover:bg-white/20 transition-colors">
                      <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-lg font-semibold tracking-tight whitespace-nowrap">{skill.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-40 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-[3rem] bg-gradient-to-b from-emerald-500/10 to-transparent border border-emerald-500/20 p-12 md:p-24 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl md:text-7xl font-[family-name:var(--font-unbounded)] font-bold tracking-tighter mb-12">
                  Ready to start a<br />new project?
                </h2>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                  <a href="mailto:rakeshrajcdr@gmail.com" className="group flex items-center gap-4 text-2xl md:text-4xl font-bold hover:text-emerald-400 transition-colors">
                    <Mail className="w-8 h-8 md:w-12 md:h-12" />
                    rakeshrajcdr@gmail.com
                  </a>
                </div>
                <div className="flex justify-center gap-8 mt-16">
                  <a href="https://www.linkedin.com/in/rakeshraj22" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors uppercase text-xs font-black tracking-widest flex items-center gap-2">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a href="https://github.com/rakeshraj22" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors uppercase text-xs font-black tracking-widest flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a href="https://www.instagram.com/allaboutrakesh/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors uppercase text-xs font-black tracking-widest flex items-center gap-2">
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                  <a href="https://blog.rakeshraj.tech" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors uppercase text-xs font-black tracking-widest flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Blog
                  </a>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black tracking-[0.4em] uppercase text-zinc-600">
          <span>© 2026 N Rakesh Raj</span>
          <div className="flex gap-12">
            <span>❤️ From Becoming. </span>
            
          </div>
        </div>
      </footer>
    </div>
  );
}

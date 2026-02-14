import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import profileAvatar from "@/assets/profile-avatar.png";
const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden"
    >
      {/* Animated particles */}
      <ParticleBackground />
      
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Profile Avatar */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-xl animate-pulse-glow" />
              <img
                src={profileAvatar}
                alt="Vinayak T S"
                className="relative w-full h-full rounded-full object-cover border-2 border-primary/30 shadow-glow"
              />
            </div>
          </motion.div>

          <p className="font-mono text-sm text-primary mb-4 tracking-wider">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4">
            Vinayak T S
          </h1>
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-12 bg-primary" />
            <p className="text-lg md:text-xl text-muted-foreground font-light">
              Flutter Developer
            </p>
            <span className="h-px w-12 bg-primary" />
          </div>

          <p className="max-w-xl mx-auto text-muted-foreground leading-relaxed mb-10">
            Building scalable, beautiful cross-platform mobile apps with Flutter & Dart.
            Passionate about clean code, stunning UI, and smooth user experiences.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-7 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity shadow-glow"
            >
              <Mail size={16} />
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              download="Vinayak_TS_Resume.pdf"
              className="inline-flex items-center gap-2 glass px-7 py-3 rounded-lg font-medium text-sm text-foreground hover:bg-secondary transition-colors border border-primary/30"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="https://linkedin.com/in/vinayakts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glass px-7 py-3 rounded-lg font-medium text-sm text-foreground hover:bg-secondary transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>

          <div className="flex items-center justify-center gap-5">
            {[
              { icon: Github, href: "https://github.com/vinayakts", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/vinayakts", label: "LinkedIn" },
              { icon: Mail, href: "mailto:tsvinayak65@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:bg-primary/10 transition-colors text-muted-foreground hover:text-primary"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground animate-float block">
            <ArrowDown size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Music, ShoppingCart, Camera } from "lucide-react";

const projects = [
  {
    icon: Music,
    title: "Music Streaming App",
    description:
      "A full-featured music streaming application with audio playback powered by Just Audio. Includes play, pause, seek, and repeat controls with optimized buffering for smooth playback.",
    tags: ["Flutter", "Dart", "Just Audio", "Audio Playback"],
  },
  {
    icon: Camera,
    title: "Instagram UI Clone",
    description:
      "A pixel-perfect Instagram clone featuring feed layouts, stories, smooth animations and responsive transitions. Built with Provider for efficient state management.",
    tags: ["Flutter", "Provider", "Animations", "UI/UX"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce App",
    description:
      "Complete e-commerce solution with product listings, shopping cart, and checkout flow. Integrated with REST APIs and built using GetX for scalable state management.",
    tags: ["Flutter", "GetX", "REST API", "E-Commerce"],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm text-primary mb-2">03.</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Featured Projects</h2>

          <div className="space-y-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass rounded-xl p-6 md:p-8 group hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                    <project.icon size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-lg font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <ExternalLink
                        size={14}
                        className="text-muted-foreground group-hover:text-primary transition-colors"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-mono text-muted-foreground bg-secondary rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

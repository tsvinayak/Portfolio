import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm text-primary mb-2">01.</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>

          <div className="grid md:grid-cols-[2fr_1fr] gap-10 items-start">
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I'm a Flutter Developer with hands-on experience building scalable, responsive
                cross-platform mobile applications using <span className="text-foreground font-medium">Dart</span> and{" "}
                <span className="text-foreground font-medium">Flutter</span>.
              </p>
              <p>
                My expertise spans{" "}
                <span className="text-foreground font-medium">Firebase</span>,{" "}
                <span className="text-foreground font-medium">REST API integration</span>, and
                state management with{" "}
                <span className="text-foreground font-medium">Provider, GetX, and BLoC</span>.
                I have a strong focus on clean UI/UX, performance optimization, and collaborative
                development using Git within Agile teams.
              </p>
              <p>
                Currently working at <span className="text-foreground font-medium">SMEC Technologies</span> in
                Ernakulam, where I develop production-ready Flutter features and optimize
                application performance.
              </p>
            </div>

            <div className="glass rounded-xl p-6 space-y-4">
              <h3 className="font-semibold text-sm text-foreground">Quick Facts</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  BCA Graduate
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  Flutter Certified – SMEClabs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  Based in Kerala, India
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  Open to opportunities
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

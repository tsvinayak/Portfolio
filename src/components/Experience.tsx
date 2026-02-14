import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm text-primary mb-2">04.</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Experience & Education</h2>

          <div className="space-y-8">
            {/* Work Experience */}
            <div className="glass rounded-xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Briefcase size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Android / Flutter Developer Intern
                  </h3>
                  <p className="text-sm text-primary font-mono mb-1">
                    SMEC Technologies, Ernakulam
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">Sep 2025 – Present</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">▹</span>
                      Developed Flutter features using Dart, Firebase Authentication, Firestore, and REST APIs
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">▹</span>
                      Designed responsive UI screens including login, dashboard, and task workflows
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">▹</span>
                      Optimized widget rebuilds and API handling for better performance
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">▹</span>
                      Collaborated in Agile sprints using Git and GitHub
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="glass rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Bachelor of Computer Applications</h3>
                    <p className="text-xs text-muted-foreground mt-1">Completed</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Flutter Development Course – SMEClabs
                    </p>
                    <p className="text-xs text-muted-foreground">Jun 2025 – Sep 2025</p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Award size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Flutter Development Certification</h3>
                    <p className="text-xs text-muted-foreground mt-1">SMEClabs</p>
                    <p className="text-sm text-muted-foreground mt-3">
                      Certified in Flutter, Dart, Firebase, and cross-platform mobile development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

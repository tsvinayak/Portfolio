import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages & Framework",
    skills: ["Dart", "Flutter", "Python (Basic)", "HTML", "CSS"],
  },
  {
    title: "Backend & APIs",
    skills: ["Firebase Auth", "Firestore", "REST APIs", "JSON", "HTTP"],
  },
  {
    title: "State Management",
    skills: ["Provider", "GetX", "BLoC"],
  },
  {
    title: "Tools & Design",
    skills: ["Git", "GitHub", "Android Studio", "VS Code", "Material Design"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm text-primary mb-2">02.</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Skills & Technologies</h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-xl p-6"
              >
                <h3 className="font-semibold text-sm text-foreground mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-mono rounded-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-2xl text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm text-primary mb-2">05.</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
            I'm currently open to new opportunities. Whether you have a project in mind or just
            want to say hi, feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="mailto:tsvinayak65@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-7 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity shadow-glow"
            >
              <Send size={16} />
              Say Hello
            </a>
            <a
              href="https://linkedin.com/in/vinayakts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glass px-7 py-3 rounded-lg font-medium text-sm text-foreground hover:bg-secondary transition-colors"
            >
              <Linkedin size={16} />
              Connect on LinkedIn
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <a
              href="mailto:tsvinayak65@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail size={15} />
              tsvinayak65@gmail.com
            </a>
            <a
              href="tel:+918590492412"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone size={15} />
              +91 8590492412
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

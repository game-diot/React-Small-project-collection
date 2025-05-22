import React from "react";
import { motion } from "framer-motion";
import Main from "./main";
import Skill from "./skills";
import Projects from "./projects";
import About from "./about";
import { div } from "framer-motion/client";

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Container() {
  return (
    <div>
      <section>
        <Main />
      </section>
      <section>
        <Skill />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <About />
      </section>
    </div>
  );
}

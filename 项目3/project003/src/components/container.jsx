import Main from "./Main";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";

const scrollRevealVariants = {
  hidden: { opacity: 0, y: 75 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Container() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <Main />
      </section>
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <Projects />
      </section>
      <section
        id="skills"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800"
      >
        <Skills />
      </section>

      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800"
      >
        <About />
      </section>
    </div>
  );
}

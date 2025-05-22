import { motion } from "framer-motion";
import { FiCode, FiServer, FiDatabase, FiLayers } from "react-icons/fi";

export default function Skills() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const skills = [
    {
      icon: FiCode,
      title: "前端开发",
      description:
        "熟练使用HTML、CSS、JavaScript等前端技术，能够构建响应式、交互性强的网页。",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Vue.js"],
    },
    {
      icon: FiServer,
      title: "后端开发",
      description:
        "熟悉后端开发语言，如Java、Python等，能够开发Web应用程序、API接口等。",
      technologies: ["Java", "Python", "Node.js", "Express", "Django"],
    },
    {
      icon: FiDatabase,
      title: "数据库管理",
      description:
        "熟悉数据库管理系统，如MySQL、MongoDB等，能够设计和优化数据库结构。",
      technologies: ["MySQL", "MongoDB", "SQLite", "Firebase"],
    },
    {
      icon: FiLayers,
      title: "Web开发",
      description:
        "熟悉Web开发工具和框架，如Git、Webpack等，能够进行Web应用程序的开发和部署。",
      technologies: ["Git", "Webpack", "Gulp", "Babel"],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={slideUp} className="text-center mb-16">
            <motion.span
              variants={fadeIn}
              className="inline-block px-3 py-1 text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900 rounded-full mb-4"
            >
              My Skill Pool
            </motion.span>
            <motion.h2
              variants={slideUp}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Skills & Technologies
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              During my learning process, I have seen many skill tools. The
              following are the ones I am good at and recommend.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={slideUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg mr-4 text-primary-600 dark:text-primary-400">
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {skill.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-5">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeIn} className="mt-16 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">
              <span className="mr-2 relative">
                <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
              </span>
              目前正在学习的技能...
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

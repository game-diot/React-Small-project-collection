import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiExternalLink,
  FiGithub,
  FiFilter,
  FiCode,
  FiGlobe,
} from "react-icons/fi";
import me from "../../public/me.png";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description of Project 1",
      tags: ["React", "Node.js", "MongoDB"],
      category: "web",
      link: {
        code: "https://github.com/your-username/project-1",
        live: "https://your-username.github.io/project-1",
      },
    },
  ];
  const filters = [
    {
      id: "all",
      name: "All",
    },
    {
      id: "web",
      name: "Web",
    },
    {
      id: "mobile",
      name: "Mobile",
    },
    {
      id: "desktop",
      name: "Desktop",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const filterItem = {
    hidden: { scale: 0.8, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
  };
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            My
            <span className="text-primary-600 dark:text-primary-400 ml-2">
              Projects
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            下面是我学习过程中,实现的具有意义的小项目
          </p>
        </div>
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              variants={filterItem}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                activeFilter === filter.id
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-500/20"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow hover:shadow-md"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.id === "all" && <FiFilter className="mr-1" />}
              {filter.name}
            </motion.button>
          ))}
        </motion.div>
        <AnimatePresence>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                layout
                className="relative group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className="h-full flex flex-col">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={me}
                      alt="Project Image"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-4">
                        {project.link.live && (
                          <a
                            href={project.link.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-gray-900 p-3 rounded-full hover:bg-primary-500 hover:text-white transition-colors duration-300"
                          >
                            <FiGlobe />
                          </a>
                        )}
                        {project.link.code && (
                          <a
                            href={project.link.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-gray-900 p-3 rounded-full hover:bg-primary-500 hover:text-white transition-colors duration-300"
                          >
                            <FiCode />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-auto">
                      {project.link.live && (
                        <motion.a
                          href={project.link.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                          whileHover={{ x: 3 }}
                        >
                          <FiExternalLink /> Live Demo
                        </motion.a>
                      )}
                      {project.link.code && (
                        <motion.a
                          href={project.link.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                          whileHover={{ x: 3 }}
                        >
                          <FiGithub /> View Code
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <p className="text-gray-600 dark:text-gray-400">
              还没在该板块上传项目,请期待一下
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiExternalLink,
  FiGithub,
  FiFilter,
  FiCode,
  FiGlobe,
} from "react-icons/fi";
import me from "../../public/me.jpg";

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
        code: "ode: URL_ADDRESS.com",
        live: "URL_ADDRESS.com/your-username/project-1",
      },
    },
  ];
  const filters = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Web",
    },
    {
      id: 3,
      name: "Mobile",
    },
    {
      id: 4,
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
    <section>
      <div>
        <div>
          <h2>
            My
            <span>Projects</span>
          </h2>
          <p>下面是我学习过程中,实现的具有意义的小项目</p>
        </div>
        <div>
          {filters.map((filter) => {
            <motion.button
              key={filter.id}
              variants={filterItem}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center ${
                activeFilter === filter.id
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-500/20"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow hover:shadow-md"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {(filter.id = "all") && <FiFilter />}
              {filter.name}
            </motion.button>;
          })}
        </div>
        <AnimatePresence>
          <div>
            {filteredProjects.map((project) => {
              <motion.div
                key={project.id}
                variants={item}
                layout
                className="relative group"
              >
                <div>
                  <div>
                    <img src={me} alt="Media Image" />
                    <div></div>
                    <div>
                      <div>
                        {project.link.live && (
                          <a href="">
                            <FiGlobe />
                          </a>
                        )}
                        {project.link.code && (
                          <a href="">
                            <FiCode />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div>
                      {project.tags.map((tag) => {
                        <span key={tag}>{tag}</span>;
                      })}
                    </div>
                    <div>
                      {project.link.live && (
                        <motion.a href={project.link.live}>
                          <FiExternalLink /> Live Demo
                        </motion.a>
                      )}
                      {project.link.code && (
                        <motion.a href={project.link.code}>
                          <FiGithub /> View Code
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>;
            })}
          </div>
        </AnimatePresence>
        {filteredProjects.length === 0 && (
          <div>
            <p>还没在该板块上传项目,请期待一下</p>
          </div>
        )}
      </div>
    </section>
  );
}

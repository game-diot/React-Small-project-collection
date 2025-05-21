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
    <section>
      <div>
        <div></div>
      </div>

      <div>
        <div>
          <div>
            <span>My Skill Pool</span>
            <h2>Skills & Technologies</h2>
            <p>
              During my learning process, I have seen many skill tools. The
              following are the ones I am good at and recommend.
            </p>
          </div>

          <div>
            {skills.map((skill, index) => {
              <div key={index}>
                <div>
                  <div>{skill.icon}</div>
                  <h3>{skill.title}</h3>
                </div>
                <p>{skill.description}</p>
                <div>
                  {skill.technologies.map((tech, index) => {
                    <span key={index}>{tech}</span>;
                  })}
                </div>
              </div>;
            })}
          </div>

          <motion.div>
            <div>
              <span>
                <span></span>
              </span>
              目前正在学习的技能...
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

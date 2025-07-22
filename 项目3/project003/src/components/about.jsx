import { motion } from "framer-motion";
import { AiFillGithub, AiFillWechat, AiOutlineQq } from "react-icons/ai";
import { useState } from "react";

import Me from "../../public/me.png";

export default function About() {
  const [showNumber, setShowNumber] = useState(false);
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skills = [
    {
      name: "Frontend",
      items: ["React", "Vue", "JavaScript", "TypeScript", "HTML", "CSS", "..."],
    },
    {
      name: "Backend",
      items: ["Node.js", "Express", "Python", "..."],
    },
    {
      name: "Tools",
      items: ["Git", "Docker", "Vite", "MySQL", "MongoDB", "..."],
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <motion.div
        className="container mx-auto px-4 max-w-6xl"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center mb-12">
          <motion.span
            className="inline-block text-primary-600 dark:text-primary-400 font-medium mb-2"
            variants={slideUp}
          >
            About me
          </motion.span>
          <motion.h2
            className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
            variants={slideUp}
          >
            学无止境,无限进步
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            variants={slideUp}
          >
            我是一名对前端感兴趣的学生，喜欢使用React和JavaScript等技术构建用户界面。我熟悉React、Git、Docker、Cite、Notion、即时设计和MongoDB等工具和技术。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <motion.div className="relative" variants={slideUp}>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <div className="aspect-w-4 aspect-h-5">
                <img
                  src={Me}
                  alt="Media Image"
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div className="space-y-4" variants={slideUp}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                你好,我是
                <span className="text-primary-600 dark:text-primary-400 ml-2">
                  Game Idiot
                </span>
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                ⚫ 学无止境，无限进步。
                <br />
                ⚫ 有正确引领者的路，才是实现梦想的捷径。
                <br />
                ⚫ 喜欢文学艺术，感受它的意义就是提升自己。
                <br />
                ⚫ 性格开朗乐观，打倒我，站起来，我会更加优秀。
                <br />⚫
                理性批判思维，什么都会有多角度，找到关键的点，就是胜利。
              </p>
            </motion.div>

            <motion.div className="space-y-4" variants={slideUp}>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white border-l-4 border-primary-500 pl-3">
                我的技能池
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <h5 className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-3">
                      {skill.name}
                    </h5>
                    <ul className="space-y-2">
                      {skill.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-700 dark:text-gray-300"
                        >
                          <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="flex space-x-4 pt-2" variants={slideUp}>
              我的GitHub地址
              {[AiFillGithub].map((Icon, index) => (
                <a
                  href={index === 0 ? "https://github.com/game-diot" : "#"}
                  key={index}
                  target={index === 0 ? "_blank" : "_self"}
                  rel={index === 0 ? "noopener noreferrer" : ""}
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 text-2xl transition-colors duration-300"
                >
                  <Icon />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

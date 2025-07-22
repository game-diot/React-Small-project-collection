import { AiFillGithub, AiFillWechat, AiOutlineQq } from "react-icons/ai";
import { motion } from "framer-motion";
import { FiMail, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer
      id="footer"
      className="relative bg-gray-50 dark:bg-gray-900 pt-16 pb-8 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* 关于我 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              关于这个博客页
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              这个博客页面，展示了我计算机学习规程中的记录，我深信恒能成事。
            </p>
            <div className="flex items-start space-x-4 mt-4">
              <div className="bg-primary-500 text-white px-3 py-1 rounded-md">
                <span>Web应用</span>
              </div>
              <div className="space-y-1">
                <p className="text-gray-600 dark:text-gray-300">我正在学习的</p>
                <p className="text-gray-600 dark:text-gray-300">
                  同样是我感兴趣的
                </p>
              </div>
            </div>
          </motion.div>

          {/* 快速导航 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["main", "projects", "skills", "about"].map((id) => (
                <li
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors cursor-pointer"
                >
                  <FiArrowUp className="transform rotate-45" />
                  <span>{id.charAt(0).toUpperCase() + id.slice(1)}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 联系方式 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              Connect
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                给我们一个合作，将创意实现的机会
              </p>
              <div className="text-gray-600 dark:text-gray-300 space-y-1 text-base leading-relaxed">
                <p>
                  GitHub：
                  <a
                    href="https://github.com/game-diot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-500 underline"
                  >
                    game-diot
                  </a>
                </p>
                <p>电话同微信：13831662370</p>
                <p>QQ：3296592663</p>
                <p>邮箱：3296592663@qq.com 或 zzj2032516667@gmail</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 my-8" />

        {/* 版权信息 + 返回顶部 */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="text-gray-600 dark:text-gray-400">
              &copy; {currentYear} Game-Idiot. All rights reserved.
            </p>
          </motion.div>

          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-500"
            >
              须知
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-500"
            >
              免责
            </a>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-500 text-white p-2 rounded-full hover:bg-primary-600 transition-colors"
              aria-label="Scroll to top"
            >
              <FiArrowUp />
            </motion.button>
          </div>
        </div>
      </div>

      {/* 背景动画元素 */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-primary-600/20 filter blur-xl opacity-70"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-20 right-20 w-20 h-20 rounded-full bg-secondary-600/20 filter blur-xl opacity-70"
      />
    </footer>
  );
}

import { motion } from "framer-motion";
import {
  AiFillAliwangwang,
  AiFillGithub,
  AiFillWechat,
  AiOutlineQq,
} from "react-icons/ai";
import Me from "../../public/me.png";

export default function Main() {
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
  return (
    <section className="relative min-h-screen py-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col md:flex-row items-center justify-between gap-12 py-12"
        >
          {/* 左侧 */}
          <motion.div
            variants={slideUp}
            className="flex-1 space-y-8 text-center md:text-left"
          >
            <motion.div variants={fadeIn} className="inline-block">
              <span className="px-4 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
                A student who likes front-end very much
              </span>
            </motion.div>
            <motion.h1
              variants={slideUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Hi, I'm{" "}
              <span className="text-primary-600 dark:text-primary-400">
                Game Idiot
              </span>
              <br />
              Keep practicing and make progress
              <br />
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl"
            >
              I tried the front and back ends and was deeply attracted by its
              charm
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                我的小项目
              </a>
              <a
                href="#skills"
                className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                我的技能池
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="flex gap-6 justify-center md:justify-start"
            >
              <a
                href="https://www.alipay.com"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                aria-label="Alipay"
              >
                <AiFillAliwangwang className="w-6 h-6" />
              </a>
              <a
                href="https://github.com"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <AiFillGithub className="w-6 h-6" />
              </a>
              <a
                href="https://wechat.com"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                aria-label="WeChat"
              >
                <AiFillWechat className="w-6 h-6" />
              </a>
              <a
                href="https://qq.com"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                aria-label="QQ"
              >
                <AiOutlineQq className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
          {/* 右侧 */}
          <motion.div
            variants={slideUp}
            className="flex-1 flex justify-center md:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl"
            >
              <motion.div
                initial={{ scale: 1.2, rotate: -5 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full h-full rounded-full overflow-hidden"
              >
                <img
                  src={Me}
                  alt="Media Image"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.5 } }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}

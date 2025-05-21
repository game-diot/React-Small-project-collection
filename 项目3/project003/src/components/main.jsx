import { motion } from "framer-motion";
import {
  AiFillAliwangwang,
  AiFillGithub,
  AiFillWechat,
  AiOutlineQq,
} from "react-icons/ai";
import Me from "../../public/me.jpg";

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
    <section>
      <div>
        <div>
          {/* 左侧 */}
          <div>
            <div>
              <span>A student who likes front-end very much</span>
            </div>
            <h1>
              Hi, I'm{" "}
              <span className="text-primary-600 dark:text-primary-400">
                Game Idiot
              </span>
              <br />
              Keep practicing and make progress
              <br />
            </h1>
            <p>
              I tried the front and back ends and was deeply attracted by its
              charm
            </p>
            <div>
              <a href="">我的小项目</a>
              <a href="">我的技能池</a>
            </div>
            <div>
              <a href="">
                <AiFillAliwangwang></AiFillAliwangwang>
              </a>
              <a href="">
                <AiFillGithub></AiFillGithub>
              </a>
              <a href="">
                <AiFillWechat></AiFillWechat>
              </a>
              <a href="">
                <AiOutlineQq></AiOutlineQq>
              </a>
            </div>
          </div>
          {/* 右侧 */}
          <div>
            <div>
              <div>
                <img src={Me} alt="Media Image" />
              </div>
            </div>
          </div>
        </div>
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

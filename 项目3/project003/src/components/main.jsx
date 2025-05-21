import { motion } from "framer-motion";
import {
  AiFillAliwangwang,
  AiFillGithub,
  AiFillWechat,
  AiOutlineQq,
} from "react-icons/ai";
import Me from "../../public/me.jpg";

export default function Main() {
  return (
    <section>
      <div>
        <div>
          {/* 左侧 */}
          <div>
            <div>
              <span></span>
            </div>
            <h1></h1>
            <p></p>
            <div>
              <a href=""></a>
              <a href=""></a>
            </div>
            <div>
              <a href=""></a>
              <a href=""></a>
              <a href=""></a>
              <a href=""></a>
            </div>
          </div>
          {/* 右侧 */}
          <div>
            <div>
              <div>
                <img src="" alt="" />
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

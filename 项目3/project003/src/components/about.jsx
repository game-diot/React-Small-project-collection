import { motion } from "framer-motion";
import { AiFillGithub, AiFillWechat, AiOutlineQq } from "react-icons/ai";
import { SiLeetcode, SiCodepen } from "react-icons/si";
import Me from "../../public/me.jpg";

export default function About() {
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
      items: ["React", "Vue", "JavaScript", "TypeScript", "HTML", "CSS"],
    },
    {
      name: "Backend",
      items: ["Node.js", "Express", "Python", "Django"],
    },
    {
      name: "Tools",
      items: ["Git", "Docker", "Webpack", "Nginx", "MySQL", "MongoDB"],
    },
  ];
  return (
    <section>
      <div>
        <div>
          <span>About me</span>
          <h2>学无止境,无限进步</h2>
          <p>
            我是一名对前端感兴趣的学生，喜欢使用React和JavaScript等技术构建用户界面。我熟悉Git、Docker、Webpack、Nginx、MySQL和MongoDB等工具和技术。
          </p>
        </div>
      </div>
      <div>
        <div>
          <div>
            <div>
              <img src={Me} alt="Media Image" />
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3>
              你好,我是
              <span>Game Idiot</span>
            </h3>
            <p>
              ⚫ 学无止境，无限进步。
              <br />
              ⚫ 有正确引领者的路，才是实现梦想的捷径。
              <br />
              ⚫ 喜欢文学艺术，感受它的意义就是提升自己。
              <br />
              ⚫ 性格开朗乐观，打倒我，站起来，我会更加优秀。
              <br />⚫ 理性批判思维，什么都会有多角度，找到关键的点，就是胜利。
            </p>
          </div>
          <div>
            <h4>我的技能池</h4>
            <div>
              {skills.map((skill, index) => {
                <div>
                  <h5>{skill.name}</h5>
                  <ul>
                    {skill.items.map((item, index) => {
                      <li key={index}>
                        <span></span>
                        <span>{item}</span>
                      </li>;
                    })}
                  </ul>
                </div>;
              })}
            </div>
          </div>
          <div>
            <a href="">联系我</a>
          </div>
          <div>
            {[AiFillGithub, AiFillWechat, AiOutlineQq].map((icon, index) => {
              <a href="" key={index}>
                <icon></icon>
              </a>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

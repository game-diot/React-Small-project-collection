import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  // 定义一个状态变量，用于切换亮暗模式
  const [darkMode, setDarkMode] = useState(() => {
    return (
      localStorage.getItem("darkMode") === "true" ||
      (!localStorage.getItem("darkMode") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const navItems = [
    {
      title: "首页",
      path: "/",
    },
    {
      title: "技能",
      path: "#skills",
    },
    {
      title: "项目",
      path: "#projects",
    },
    {
      title: "关于",
      path: "#about",
    },
  ];
  return (
    <header>
      <nav>
        <div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 flex items-center"
          >
            <NavLink
              to="/"
              className="text-xl font-bold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              My Blog
            </NavLink>
          </motion.div>

          <div>
            {navItems.map((item) => {
              <a key={item.path} href={item.path}>
                {item.title}
              </a>;
            })}
            <button
              onClick={toggleDarkMode}
              aria-label={darkMode ? "切换为日间模式" : "切换为夜间模式"}
            >
              {darkMode ? (
                <FiSun className="w-5 h-5" />
              ) : (
                <FiMoon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import "./navbar.css";

export default function Navbar() {
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
    { title: "首页", path: "/" },
    { title: "技能", path: "/#skills" },
    { title: "项目", path: "/#projects" },
    { title: "关于", path: "/#about" },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`header ${darkMode ? "dark" : ""}`}
    >
      <nav className="nav">
        <div className="nav-container">
          <motion.div whileHover={{ scale: 1.05 }} className="logo-container">
            <NavLink to="/" className="logo-link">
              My Blog
            </NavLink>
          </motion.div>

          <div className="nav-items">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                <a
                  href={item.path}
                  onClick={(e) => {
                    if (item.path.startsWith("/#")) {
                      e.preventDefault();
                      const element = document.querySelector(
                        item.path.substring(1)
                      );
                      if (element) {
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }
                  }}
                  className="nav-link"
                >
                  {item.title}
                </a>
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              aria-label={darkMode ? "切换为日间模式" : "切换为夜间模式"}
              className="theme-button"
            >
              {darkMode ? (
                <FiSun className="theme-icon" />
              ) : (
                <FiMoon className="theme-icon" />
              )}
            </motion.button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}

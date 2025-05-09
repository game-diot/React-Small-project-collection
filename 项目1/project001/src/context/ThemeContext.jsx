import React, { createContext, useContext, useState } from "react";

//创建ThemeContext变量来存储createContext的返回值，用于传递到不同深度的组件树
const ThemeContext = createContext();

//创建ThemeProvider组件，接收子组件作为参数，用来包裹App组件，实现明暗主题切换功能
export function ThemeProvider({ children }) {
  //使用useState来存储当前的主题状态
  const [darkMode, setDarkMode] = useState(() => {
    //使用saveTheme变量来存储当前的主题状态，从浏览器中获取darkMode数据，不存在则返回null
    const savedTheme = localStorage.getItem("darkMode");
    //根据浏览器获取数据情况来决定返回值，true或false，也就是暗或亮主题
    return savedTheme ? JSON.parse(savedTheme) : false;
  });
  //创建toggleTheme函数，用来切换主题状态
  const toggleTheme = () => {
    //调用setDarkMode函数来设置当前的主题状态，传入的prevMode参数，取反作newMode。
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      //使用localStorage来存储修改后的主题状态
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      //返回修改后的主题状态
      return newMode;
    });
  };
  //ThemeProvide组件返回一个JSX形式，ThemeContext.Provider组件包裹子元素，并接收darkMode和toggleTheme作为属性值
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
//将useTheme作为自定义hook，用来获取当前的主题状态
export const useTheme = () => useContext(ThemeContext);

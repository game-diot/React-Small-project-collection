import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import styles from "../styles/TodoList.module.css";
//默认导出TodoList组件，返回的是整体App组件所需要的内容
export default function TodoList() {
  //调用useTheme Hook，并传入darkMode和toggleTheme，作为可以调用的值与方法。
  const { darkMode, toggleTheme } = useTheme();
  //使用useState来存储当前的任务状态,默认调用错误捕捉函数
  //如果存在数据，则返回数据，否则返回空数组。
  const [tasks, setTasks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("tasks")) || [];
    } catch {
      return [];
    }
  });
  //使用useState来存储当前的新任务状态
  const [newTask, setNewTask] = useState("");
  //使用useState来存储当前的错误信息状态
  const [errorMessage, setErrorMessage] = useState("");
  //调用useEffect Hook，当errorMessage状态发生变化时，会调用setTimeout来设置错误信息的消失时间。
  useEffect(() => {
    let timer;
    if (errorMessage) {
      timer = setTimeout(() => {
        setErrorMessage("");
      }, 500); // 0.5秒后自动消失
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [errorMessage]); //关键数组
  //调用useEffect Hook，当tasks状态发生变化时，会调用localStorage.setItem来存储当前的任务状态。
  //创建Item tasks，用于存储当前的任务状态。
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  //创建validTask函数，用于校验新任务的有效性。接收task和existingTask两个参数，task是新任务，existingTask是已存在的任务。
  const validTask = (task, existingTask) => {
    //使用trim方法去除task前后的空格，然后判断是否为空。
    const trimmedTask = task.trim();
    if (!trimmedTask) {
      return "任务不能为空";
    }
    //使用some方法判断existingTask数组中是否存在与task相同的任务，不区分大小写。
    if (
      existingTask.some((t) => t.toLowerCase() === trimmedTask.toLowerCase())
    ) {
      return "相同任务已存在";
    }
    //如果校验通过，则返回空字符串。
    return "";
  };
  //创建addNewTask函数，用于添加新任务。
  const addNewTask = () => {
    //调用validTask函数来校验新任务的有效性。
    const error = validTask(newTask, tasks);
    //如果校验不通过，则返回错误信息，通过则error为false，不进行报错信息。
    if (error) {
      setErrorMessage(error);
      return;
    }
    //如果校验通过，则添加新任务，并清空新任务状态。
    setTasks((prevTasks) => [...prevTasks, newTask.trim()]);
    setNewTask("");
    setErrorMessage("");
  };
  //创建deleteTask函数，用于删除任务。接收index参数，index是任务的索引。
  const deleteTask = (index) => {
    //使用filter方法过滤掉index对应的任务。
    if (index < 0 || index >= tasks.length) return;
    setTasks(tasks.filter((_, i) => i !== index));
  };
  //创建modifyTaskOrder函数，用于修改任务的顺序。接收index和direction两个参数，index是任务的索引，direction是移动的方向。
  const modifyTaskOrder = (index, direction) => {
    //使用slice方法复制tasks数组，并使用解构赋值来交换index和swapIndex对应的任务。
    const updatedTasks = [...tasks];
    //使用三元运算符来判断swapIndex的值，如果direction是up，则swapIndex为index - 1，否则为index + 1。
    const swapIndex = direction === "up" ? index - 1 : index + 1;
    if (swapIndex < 0 || swapIndex >= tasks.length) return;
    //使用解构赋值来交换index和swapIndex对应的任务。
    [updatedTasks[swapIndex], updatedTasks[index]] = [
      updatedTasks[index],
      updatedTasks[swapIndex],
    ];
    //使用setTasks来更新tasks状态。
    setTasks(updatedTasks);
  };
  //返回整体App组件所需要的内容
  return (
    // 最外层div根据当前的darkMode状态来决定className，进而决定使用什么styles样式。
    <div className={darkMode ? styles.dark : styles.light}>
      {/* div元素，包裹整体container页面，className类为container。 */}
      <div className={styles.container}>
        {/* 切换主题按钮，点击事件调用toggleTheme方法来切换主题，类名为 toggleBtn，和对应的主题BTN */}
        <button
          onClick={toggleTheme}
          className={`${styles.toggleBtn} ${
            darkMode ? styles.darkBtn : styles.lightBtn
          }`}
        >
          切换 {darkMode ? "Light" : "Dark"} 模式
        </button>

        <h1 className={styles.title}>备忘录清单</h1>
        {/* 表单，类名为todoForm，onSubmit事件为e.preventDefault()，阻止表单自动提交 */}
        <form className={styles.todoForm} onSubmit={(e) => e.preventDefault()}>
          {/* 输入框，类名为taskInput，value为newTask，onChange事件为setNewTask，placeholder为在此输入你的任务清单，className类为taskInput，和对应的主体Input */}
          <input
            type="text"
            placeholder="在此输入你的任务清单"
            value={newTask}
            onChange={(e) => {
              setNewTask(e.target.value);
              setErrorMessage("");
            }}
            className={`${styles.taskInput} ${
              darkMode ? styles.darkInput : ""
            }`}
          />
          {/* 按钮，类名为addButton，onClick事件为addNewTask，添加新任务 */}
          <button
            type="submit"
            onClick={addNewTask}
            className={styles.addButton}
          >
            添加新任务
          </button>
        </form>
        {/* 任务清单开头错误提示部分 */}
        {/* 错误信息提示，当errorMessage为真也就是存在时，展示p错误信息，不存在则为空，展示下面div任务*/}
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        {/* 任务清单主体部分，类名为taskList */}
        <div className={styles.taskList}>
          {/* 任务数量为空与否，展示不同结果 */}
          {tasks.length === 0 ? (
            // 任务数量为空时，展示p提示信息
            <p className={styles.taskItem}>清单中没有任务待做</p>
          ) : (
            // 任务数量不为空时，展示ul列表
            <ul>
              {/* 遍历tasks数组，展示li列表，key为index，value为task，类名为taskItem */}
              {tasks.map((task, index) => (
                <li className={styles.taskItem} key={index}>
                  {/* 展示任务内容 */}
                  {task}
                  {/* 展示任务操作按钮，className为controls */}
                  <div className={styles.controls}>
                    {/* 展示上下移动按钮，className为moveBtns，onClick事件为modifyTaskOrder，传入index和direction */}
                    <button
                      className={styles.moveBtns}
                      onClick={() => modifyTaskOrder(index, "up")}
                    >
                      👆
                    </button>
                    <button
                      className={styles.moveBtns}
                      onClick={() => modifyTaskOrder(index, "down")}
                    >
                      👇
                    </button>
                    {/* 展示删除按钮，className为deleteBtn，onClick事件为deleteTask，传入index */}
                    <button
                      className={styles.deleteBtn}
                      onClick={() => deleteTask(index)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

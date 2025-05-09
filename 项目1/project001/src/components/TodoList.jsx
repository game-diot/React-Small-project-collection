import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import styles from "../styles/TodoList.module.css";

export default function TodoList() {
  //调用useTheme Hook，并传入darkMode和toggleTheme参数作为属性。
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
  useEffect(() => {
    let timer;
    if (errorMessage) {
      timer = setTimeout(() => {
        setErrorMessage("");
      }, 500); // 3秒后自动消失
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [errorMessage]);
  //调用useEffect Hook，当tasks状态发生变化时，会调用localStorage.setItem来存储当前的任务状态。
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const validTask = (task, existingTask) => {
    const trimmedTask = task.trim();
    if (!trimmedTask) {
      return "任务不能为空";
    }
    if (
      existingTask.some((t) => t.toLowerCase() === trimmedTask.toLowerCase())
    ) {
      return "相同任务已存在";
    }
    return "";
  };
  const addNewTask = () => {
    const error = validTask(newTask, tasks);
    if (error) {
      setErrorMessage(error);
      return;
    }
    setTasks((prevTasks) => [...prevTasks, newTask.trim()]);
    setNewTask("");
    setErrorMessage("");
  };
  const deleteTask = (index) => {
    if (index < 0 || index >= tasks.length) return;
    setTasks(tasks.filter((_, i) => i !== index));
  };
  const modifyTaskOrder = (index, direction) => {
    const updatedTasks = [...tasks];
    const swapIndex = direction === "up" ? index - 1 : index + 1;
    if (swapIndex < 0 || swapIndex >= tasks.length) return;
    [updatedTasks[swapIndex], updatedTasks[index]] = [
      updatedTasks[index],
      updatedTasks[swapIndex],
    ];
    setTasks(updatedTasks);
  };
  return (
    <div className={darkMode ? styles.dark : styles.light}>
      <div className={styles.container}>
        <button
          onClick={toggleTheme}
          className={`${styles.toggleBtn} ${
            darkMode ? styles.darkBtn : styles.lightBtn
          }`}
        >
          切换 {darkMode ? "Light" : "Dark"} 模式
        </button>

        <h1 className={styles.title}>备忘录清单</h1>
        <form className={styles.todoForm} onSubmit={(e) => e.preventDefault()}>
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
          <button
            type="submit"
            onClick={addNewTask}
            className={styles.addButton}
          >
            添加新任务
          </button>
        </form>

        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        <div className={styles.taskList}>
          {tasks.length === 0 ? (
            <p className={styles.taskItem}>清单中没有任务待做</p>
          ) : (
            <ul>
              {tasks.map((task, index) => (
                <li className={styles.taskItem} key={index}>
                  {task}
                  <div className={styles.controls}>
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

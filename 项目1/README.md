# React 备忘录清单应用

## 项目简介

这是一个使用 React 开发的备忘录清单应用，具有明暗主题切换功能，可以帮助用户管理日常任务。应用采用了现代化的设计风格，支持本地数据持久化存储。本项目适合 React 初学者学习和参考。

## 开发环境

- Node.js >= 14.0.0
- React 18
- Vite
- CSS Modules

## 主要功能

- ✅ 添加新任务
- ✅ 删除已有任务
- ✅ 任务顺序调整（上移/下移）
- ✅ 明暗主题切换
- ✅ 本地数据持久化存储
- ✅ 智能错误提示（自动消失）

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 技术实现细节

### 项目架构

- 使用 Vite 作为构建工具
- 采用 React 18 最新特性
- 模块化的文件结构
  - `src/components`: 组件文件
  - `src/context`: Context 相关文件
  - `src/styles`: 样式文件

### 状态管理

- 使用 `useState` 管理任务列表、新任务输入和错误信息
- 使用 `useEffect` 实现数据持久化和错误消息自动消失
- 使用 Context API 实现主题切换功能

### 主题切换

- 支持明暗两种主题模式
- 使用 CSS Modules 实现样式隔离
- 平滑的主题切换动画效果

### 样式特点

- 渐变色标题
- 响应式设计
- 任务项悬停动画
- 优雅的按钮交互效果
- 全屏高度自适应

## 核心代码解析

### 主题切换实现

```jsx
// ThemeContext.jsx
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  // ... 其他实现代码
}
```

## 使用说明

1. 在输入框中输入任务内容
2. 点击"添加新任务"按钮或按回车添加任务
3. 使用 👆👇 按钮调整任务顺序
4. 点击 Delete 按钮删除任务
5. 点击右上角按钮切换主题模式

## 注意事项

- 任务数据存储在浏览器的 LocalStorage 中
- 刷新页面不会丢失数据
- 清除浏览器数据会导致任务列表被清空
- 不支持添加重复的任务
- 任务内容不能为空

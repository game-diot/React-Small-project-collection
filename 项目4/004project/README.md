# 🌦️ Weather Now - React 天气应用

## 📝 项目简介

这是一个基于 React 和 OpenWeatherMap API 开发的天气应用，通过实际项目演练掌握前端与 API 交互的核心知识。本项目采用最新的 Vite + React 技术栈，实现了一个功能完整、界面优雅的天气查询应用。

### 🎯 学习目标

- API 调用与状态管理最佳实践
- React Hooks 在实际项目中的应用
- 动态主题切换的实现方案
- 响应式布局与现代 UI 设计

## 🚀 技术栈

- React 18
- Vite 4.x
- Axios
- OpenWeatherMap API
- CSS Variables（动态主题）

## 💡 核心功能

### 1. API 集成

```javascript
// 天气数据获取
const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`
    );
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// 天气预报获取
const fetchForecast = async (lat, lon) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`
    );
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
```

### 2. 动态主题系统

- 根据天气状况自动切换界面主题
- 支持日出日落场景切换
- 平滑的过渡动画效果

### 3. 数据可视化

- 温度趋势图表展示
- 天气状况图标动画
- 实时天气信息更新

## 📁 项目结构

```
src/
├── components/           # 组件目录
│   ├── WeatherCard/     # 天气卡片组件
│   ├── WeatherDetails/  # 天气详情组件
│   └── WeatherForecast/ # 天气预报组件
├── hooks/               # 自定义 Hooks
│   └── useWeather.js    # 天气数据处理 Hook
├── styles/              # 样式文件
│   └── App.css         # 主样式文件
└── App.jsx             # 主应用组件
```

## 🎯 API 学习要点

### 1. 请求封装

- 使用环境变量管理 API 密钥
- 统一的错误处理机制
- 请求缓存策略

### 2. 数据处理

- 时区转换与本地化
- 温度单位换算
- 天气数据格式化

### 3. 状态管理

- 加载状态处理
- 错误边界处理
- 数据持久化

## 🔧 快速开始

1. 克隆项目并安装依赖

```bash
npm install
```

2. 配置环境变量

```env
VITE_APP_ID=your_openweathermap_api_key
```

3. 启动开发服务器

```bash
npm run dev
```

## 🌈 项目特色

### 1. 优雅的 UI 设计

- 玻璃态设计风格
- 流畅的动画过渡
- 响应式布局适配

### 2. 优秀的用户体验

- 智能的错误提示
- 平滑的加载状态
- 直观的数据展示

### 3. 代码最佳实践

- 组件解耦设计
- 自定义 Hooks 封装
- TypeScript 类型支持

## 📚 进阶优化

1. 性能优化

   - 实现数据缓存
   - 添加请求节流
   - 优化组件重渲染

2. 功能扩展
   - 支持地理定位
   - 添加天气预警
   - 历史天气查询

// 导入项目所需的Hook和包
import { useState, useEffect } from "react";
// 这里导入的是一些图标库中的图标组件。
import { Trash, RotateCcw, Copy, Check } from "lucide-react";

// 定义主要组件App
function App() {
  // 使用useState Hook来管理逻辑中用到的变量，color是当前背景颜色，customColor是自定义颜色输入框中的值，colorHistory是颜色历史记录，copied是一个布尔值，表示是否已经复制了颜色值，animating是一个布尔值，表示是否正在进行动画。
  const [color, setColor] = useState("");
  const [customColor, setCustomColor] = useState("#4e54c8");
  const [colorHistory, setColorHistory] = useState([]);
  const [copied, setCopied] = useState(false);
  const [animating, setAnimating] = useState(false);

  // 定义normal color数组
  const colors = [
    { name: "深红色", value: "darkred" },
    { name: "深绿色", value: "darkgreen" },
    { name: "深蓝色", value: "darkblue" },
    { name: "深灰色", value: "darkgray" },
    { name: "深橙色", value: "darkorange" },
    { name: "深粉色", value: "deeppink" },
    { name: "深紫罗兰", value: "darkviolet" },
    { name: "深黄色", value: "goldenrod" },
    { name: "深棕色", value: "saddlebrown" },
    { name: "深青色", value: "darkcyan" },
    { name: "深青柠", value: "darkolivegreen" },
    { name: "深天蓝", value: "darkturquoise" },
    { name: "深品红", value: "darkmagenta" },
    { name: "深红褐", value: "maroon" },
    { name: "深金色", value: "darkgoldenrod" },
    { name: "深珊瑚", value: "darksalmon" },
    { name: "深海蓝", value: "midnightblue" },
    { name: "深红色", value: "crimson" },
    { name: "墨绿色", value: "seagreen" },
    { name: "深巧克力", value: "saddlebrown" },
  ];
  // 复制颜色到剪贴板主要逻辑
  const copyToClipboard = () => {
    // 访问剪贴板，写入颜色值为当前背景颜色或默认渐变
    navigator.clipboard.writeText(color || "gradient");
    // 将copied状态设置为true，2秒后再设置为false
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  // 切换颜色时触发的动画逻辑,使用useEffect Hook,空数组表明只执行一次。
  useEffect(() => {
    // 逻辑判断,如果当前color不为空,则设置animating状态为true,0.5秒后再设置为false.表示正在进行动画。动画时长为0.5秒。
    if (color) {
      setAnimating(true);
      const timer = setTimeout(() => {
        setAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  // 应用颜色到背景的逻辑
  // 使用handle函数来处理自定义颜色输入框的值,apply函数用来应用自定义颜色到背景。
  const handleCustomColorChange = (e) => {
    setCustomColor(e.target.value);
  };
  const applyCustomColor = () => {
    setColor(customColor);
  };
  // 清空颜色，恢复背景到默认颜色的逻辑
  // 定义resetColor变量,通过调用函数来执行初始化颜色配置,包括背景色,动画状态,颜色输入框不变,历史记录不变,复制状态不变。
  const resetColor = () => {
    setColor("");
    setAnimating(true);
    setTimeout(() => {
      setAnimating(false);
    }, 500);
  };

  // 将颜色添加到历史记录的逻辑
  // 使用useEffect Hook,color为依赖数组
  useEffect(() => {
    // 如果当前颜色不为空,且历史记录中不包含当前颜色,则将当前颜色添加到历史记录中
    // prev表示历史记录的前一个状态,slice(0, 7)表示只保留前7个历史记录
    if (color && !colorHistory.includes(color)) {
      setColorHistory((prev) => [color, ...prev.slice(0, 7)]);
    }
  }, [color]);
  // 清空颜色历史记录的逻辑
  // 使用clearHistory函数来执行清空历史记录
  const clearHistory = () => {
    setColorHistory([]);
  };
  // 点击normal颜色按钮的逻辑
  // 使用handleColorClick函数将当前颜色设置为点击的颜色值,同时将自定义颜色设置为点击的颜色值。
  const handleColorClick = (colorValue) => {
    setColor(colorValue);
    setCustomColor(colorValue);
  };

  // 定义组件返回的用于渲染的JSX部分
  return (
    // 最外层的div元素,设置了一些样式,包括背景颜色,动画效果,以及一些类名。
    <div
      className={`app-container ${animating ? "scale-105" : "scale-100"}`}
      style={{
        background:
          color ||
          "linear-gradient(135deg, var(--primary-color), var(--secondary-color))",
      }}
    >
      {/* 主要内容区域 */}
      <div className="main-content">
        {/* 左侧面板 */}
        <div className="left-panel">
          {/* 左侧头部部分 */}
          <div className="header">
            {/* 标题部分 */}
            <h1 className="title">🎨 修改背景颜色</h1>
            {/* 当前颜色信息部分 */}
            <div className="color-info">
              {/* 信息包括当前颜色值以及复制功能按钮 */}
              <span className="current-color">
                {color ? (
                  <>
                    当前背景值为: <span className="color-value">{color}</span>
                  </>
                ) : (
                  <>默认背景值:gradient渐变</>
                )}
              </span>
              {/* 复制按钮调用copy逻辑函数 */}
              <button
                onClick={copyToClipboard}
                title="复制颜色值"
                className="icon-button"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>
          </div>

          {/* 颜色选择器部分，包含input自定义功能，以及重置功能 */}
          <div className="color-picker-section">
            {/* input自定义颜色，通过颜色选择器与用户输入相互作用 */}
            <div className="color-inputs">
              <input
                type="color"
                value={customColor}
                onChange={handleCustomColorChange}
                className="color-input"
              />
              <input
                type="text"
                value={customColor}
                onChange={handleCustomColorChange}
                className="text-input"
              />
            </div>
            {/* 控制按钮部分，包括应用颜色到背景和重置功能 */}
            <div className="control-buttons">
              <button onClick={applyCustomColor} className="apply-button">
                应用颜色到背景
              </button>
              <button
                onClick={resetColor}
                title="重置背景到默认颜色"
                className="reset-button"
              >
                <RotateCcw size={16} />
                重置背景颜色
              </button>
            </div>
          </div>

          {/* 历史颜色部分 */}
          <div className="history-section">
            {/* 历史颜色头部部分，包括标题和清空历史记录按钮 */}
            <div className="history-header">
              <h3 className="history-title">最近使用过的颜色</h3>
              <button
                onClick={clearHistory}
                title="清空历史记录"
                className="clear-button"
              >
                <Trash size={14} />
                清空历史记录
              </button>
            </div>
            {/* 历史颜色列表部分，使用map函数遍历历史记录，为每个颜色创建一个按钮 */}
            <div className="color-history">
              {colorHistory.map((usedColor, index) => (
                <button
                  key={index}
                  onClick={() => handleColorClick(usedColor)}
                  title={usedColor}
                  className="history-color-button"
                  style={{ backgroundColor: usedColor }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 右侧预览区域 用于添加后续功能的区域*/}
        <div className="right-panel">
          <p>预览区域</p>
        </div>
      </div>

      {/* 颜色按钮部分，包含常见的颜色按钮 */}
      <div className="color-buttons-section">
        {/* 颜色按钮网格，使用map函数遍历颜色数组，为每个颜色创建一个按钮 */}
        <div className="color-buttons-grid">
          {colors.map((colorObj, index) => (
            <button
              key={index}
              onClick={() => handleColorClick(colorObj.value)}
              className="color-button"
              style={{ backgroundColor: colorObj.value, color: "white" }}
            >
              {colorObj.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
// 默认导出App组件供外部使用
export default App;

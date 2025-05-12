import { useState, useEffect } from "react";
import { Trash, RotateCcw, Copy, Check } from "lucide-react";

function App() {
  // 使用useState Hook来管理逻辑中用到的变量
  const [color, setColor] = useState("");
  const [customColor, setCustomColor] = useState("#4e54c8");
  const [colorHistory, setColorHistory] = useState([]);
  const [copied, setCopied] = useState(false);
  const [animating, setAnimating] = useState(false);

  const colors = [
    { name: "红色", value: "red" },
    { name: "绿色", value: "green" },
    { name: "蓝色", value: "blue" },
    { name: "灰色", value: "gray" },
    { name: "橙色", value: "orange" },
    { name: "粉色", value: "pink" },
    { name: "紫罗兰色", value: "violet" },
    { name: "紫色", value: "purple" },
    { name: "黄色", value: "yellow" },
    { name: "棕色", value: "brown" },
    { name: "蓝绿色", value: "teal" },
    { name: "青色", value: "cyan" },
    { name: "靛青色", value: "indigo" },
    { name: "青柠色", value: "lime" },
    { name: "天蓝色", value: "skyblue" },
    { name: "品红色", value: "magenta" },
    { name: "深红色", value: "maroon" },
    { name: "金色", value: "gold" },
    { name: "珊瑚色", value: "coral" },
    { name: "海军蓝", value: "navy" },
    { name: "深红色", value: "crimson" },
    { name: "橄榄色", value: "olive" },
    { name: "深绿色", value: "darkgreen" },
    { name: "巧克力色", value: "chocolate" },
  ];
  // 复制颜色到剪贴板
  const copyToClipboard = () => {
    navigator.clipboard.writeText(color || "gradient");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  // 切换颜色时出发的动画
  useEffect(() => {
    if (color) {
      setAnimating(true);
      const timer = setTimeout(() => {
        setAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);
  // 应用颜色到背景
  const handleCustomColorChange = (e) => {
    setCustomColor(e.target.value);
  };
  const applyCustomColor = () => {
    setColor(customColor);
  };
  // 清空颜色，恢复背景到默认颜色
  const resetColor = () => {
    setColor("");
    setAnimating(true);
    setTimeout(() => {
      setAnimating(false);
    }, 500);
  };
  // 将颜色添加到历史记录中
  useEffect(() => {
    if (color && !colorHistory.includes(color)) {
      setColorHistory((prev) => [color, ...prev.slice(0, 7)]);
    }
  }, [color]);
  // 清空颜色历史记录
  const clearHistory = () => {
    setColorHistory([]);
  };
  // 修改点击普通颜色按钮的处理函数
  const handleColorClick = (colorValue) => {
    setColor(colorValue);
    setCustomColor(colorValue);
  };

  return (
    <div
      className={`app-container ${animating ? "scale-105" : "scale-100"}`}
      style={{
        background:
          color ||
          "linear-gradient(135deg, var(--primary-color), var(--secondary-color))",
      }}
    >
      {/* 项目上部，用于说明项目的名称以及当前的颜色名称，以及复制颜色的功能。 */}
      <div className="header">
        <h1 className="title">🎨 修改背景颜色</h1>
        <div className="color-info">
          <span className="current-color">
            {color ? (
              <>
                当前背景值为: <span className="color-value">{color}</span>
              </>
            ) : (
              <>默认背景</>
            )}
          </span>
          <button
            onClick={copyToClipboard}
            title="复制颜色值"
            className="icon-button"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
          </button>
        </div>
      </div>

      {/* 项目中上部分，用于选择/输入颜色并对主题背景颜色进行修改。 */}
      <div className="color-picker-section">
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

      {/* 历史颜色部分，用于查看之前选择过的颜色 */}
      {colorHistory.length > 0 && (
        <div className="history-section">
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
      )}

      {/* 颜色按钮部分，用于选择常见颜色 */}
      <div className="color-buttons-section">
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

export default App;

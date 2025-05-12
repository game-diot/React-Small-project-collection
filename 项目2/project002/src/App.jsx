import { useState, useEffect } from "react";
import { Trash, RotateCcw, Copy, Check, Navigation } from "lucide-react";

function App() {
  // 使用useState Hook来管理逻辑中用到的变量
  const [color, setColor] = useState("");
  const [customColor, setCustomColor] = useState("#4e54c8");
  const [colorHistory, setColorHistory] = useState([]);
  const [copied, setCopied] = useState(false);
  const [animating, setAnimating] = useState(false);

  const colors = [
    "红色",
    "绿色",
    "蓝色",
    "灰色",
    "橙色",
    "粉色",
    "紫罗兰色",
    "紫色",
    "黄色",
    "棕色",
    "蓝绿色",
    "青色",
    "靛青色",
    "青柠色",
    "天蓝色",
    "品红色",
    "深红色",
    "金色",
    "珊瑚色",
    "海军蓝",
    "深红色",
    "橄榄色",
    "深绿色",
    "巧克力色",
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
  return (
    <div>
      {/* 项目上部，用于说明项目的名称以及当前的颜色名称，以及复制颜色的功能。 */}
      <div>
        <h1>🎨 修改背景颜色</h1>
        <div>
          <span>
            {color ? (
              <>
                当前背景为: <span>{color}</span>
              </>
            ) : (
              <>Gradient Background</>
            )}
          </span>
          <button onClick={copyToClipboard} title="复制颜色值">
            {/* 这里使用了三元运算符来判断是否显示Lucide-React包中的Check图标或者Copy图标 */}
            {copied ? <Check size={18}></Check> : <Copy size={18}></Copy>}
          </button>
        </div>
      </div>
      {/* 项目中上部分，用于选择/输入颜色并对主题背景颜色进行修改。 */}
      <div>
        <div>
          <input
            type="color"
            value={customColor}
            onChange={handleCustomColorChange}
          />
          <input
            type="text"
            value={customColor}
            onChange={handleCustomColorChange}
          />
        </div>
        <button onClick={applyCustomColor}>应用颜色到背景</button>
        <button onClick={resetColor} title="重置背景到默认颜色">
          <RotateCcw size={16}></RotateCcw>重置背景颜色
        </button>
      </div>
      {/* 历史颜色部分，用于查看之前选择过的颜色 */}
      <div>颜色历史，在逻辑完成后编写</div>
      {/* 颜色按钮部分，用于选择常见颜色 */}
      <div>
        <div>button循环</div>
      </div>
    </div>
  );
}

export default App;

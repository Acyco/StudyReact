// 项目的根组件
// App -> index.js -> public/index.html

// 定义组件
const Button = () => {
  // 业务逻辑组件逻辑
  return <button>click me!</button>
}

function App() {
  return (
    <div className="App">
      {/* 自闭合标签 */}
      <Button />
      {/* 成对标签 */}
      <Button></Button>
    </div>
  );
}

export default App;

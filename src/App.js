// 项目的根组件
// App -> index.js -> public/index.html


function App() {
  // 事件参数e
  const handleClick = (name,e) => {
    console.log("button被点击了",name,e);
  }
  return (
    <div className="App">
      <button onClick={(e) =>handleClick('Acyco',e)}>click me</button>
    </div>
  );
}

export default App;

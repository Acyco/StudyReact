// 项目的根组件
// App -> index.js -> public/index.html

import './index.css'

function App() {
    const style = {
        color: 'red',
        fontSize: '50px'
    }

  return (
    <div className="App">
        {/* 行内样式控制 */}
        <span> this is span</span>
        <span style={style}> this is span</span>
        {/* 通过class类名控制 */}
        <span className="foo"> this is class foo</span>
    </div>
  );
}

export default App;

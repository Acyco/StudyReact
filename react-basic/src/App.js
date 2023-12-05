// 项目的根组件
// App -> index.js -> public/index.html

// 1. 父组件传递数据 - 在子组件标签上 `绑定属性`，
// 2. 子组件接收数据 - 子组件通过 `props 参数` 接收数据。
function Son(props) {
  console.log(props);
  return <div>this is son, {props.children}</div>
}

function App() {
  const name = 'this is app name'
    return (
       <div>
         <Son>
           <span>this is span</span>
         </Son>

        </div>
    );
}

export default App;

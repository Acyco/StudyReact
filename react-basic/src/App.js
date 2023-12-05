// 项目的根组件
// App -> index.js -> public/index.html

// 1. 父组件传递数据 - 在子组件标签上 `绑定属性`，
// 2. 子组件接收数据 - 子组件通过 `props 参数` 接收数据。
function Son(props) {
  // props:对象里面包含了父组件传递过来的所有数据
  console.log(props)
  return <div>this is son, {props.name}</div>
}

function App() {
  const name = 'this is app name'
    return (
       <div>
         <Son name={name}/>
        </div>
    );
}

export default App;

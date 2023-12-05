// 项目的根组件
// App -> index.js -> public/index.html

// 1. 父组件传递数据 - 在子组件标签上 `绑定属性`，
// 2. 子组件接收数据 - 子组件通过 `props 参数` 接收数据。
function Son(props) {
  // props:对象里面包含了父组件传递过来的所有数据
  // {name:'父组件中的数据'}
  console.log(props)
  //props.name= 'new name' // TypeError: Cannot assign to read only property 'name' of object '#<Object>'
  return <div>this is son, {props.name}, jsx: {props.child} </div>
}

function App() {
  const name = 'this is app name'
    return (
       <div>
         <Son
           name={name}
           age={18}
           isTrue={false}
           list={['vue', 'react']}
           obj={{name: 'Acyco'}}
           cb={()=> console.log(123)}
           child={<span>this is span</span>}
         />

        </div>
    );
}

export default App;

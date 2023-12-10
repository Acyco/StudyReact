// 项目的根组件
// App -> index.js -> public/index.html


// 问题： 布尔切换的逻辑 当前组件耦合在一起的 不方便复用
// 解决思路： 自定义hook

import {useEffect, useState} from "react";

function useToggle () {
  const [value, setalue] = useState(true)
  const toggle = () => setValue(!value)
  // 哪些状态和回调函数需要在其他组件使用 return
  return {
    value,
    toggle
  }
}
// 封装自定义 hook 通用思路
// 1. 声明一个以 use 打头的函数
// 2. 在函数体内封装可利用的逻辑（只要是可用的逻辑）
// 3. 把组件中用到的状态或回调return出去 (以对象或数组）
// 4. 在哪个组件中要用到这个逻辑， 就执行这个函数， 解构出来状态和回调进行使用

function App() {
  const [value,toggle] = useToggle();
  return (
    <div>
      {value && <div>this is div</div>}
      <button onClick={toggle}>toggle</button>
    </div>
  )
}

export default App;

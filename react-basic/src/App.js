// 项目的根组件
// App -> index.js -> public/index.html

import {useState} from "react";

//  Line 7:1:  React Hook "useState" cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function  react-hooks/rules-of-hooks
// useState(''); // 组件外使用


function App() {
  // if for 组件内部函数
  if(Math.random() >0.5){
    // Line 14:5:  React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render  react-hooks/rules-of-hooks
    useState(''); //
  }
  return (
    <div>
      this is app
    </div>
  )
}

export default App;

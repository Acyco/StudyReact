// 项目的根组件
// App -> index.js -> public/index.html

import {useState} from "react";
function App() {
    const [form, setForm] = useState({name: "Acyco"})
    const changeForm = () => {
        // 错误写法: 直接修改
        // form.name = "Alice"
        // 正确写法： setForm 传入一个全新的对象
        setForm({
            ...form,
            name: "Alice"
        })
    }
  return (
    <div className="App">
        <button onClick={changeForm}>修改form：{form.name}</button>
    </div>
  );
}

export default App;

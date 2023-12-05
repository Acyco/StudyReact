// 项目的根组件
// App -> index.js -> public/index.html


import {useState} from "react";

function Son({onGetSonMsg}) {
  const sonMsg = 'this is son msg'
  return <div>
    this is Son
    <button onClick={()=> onGetSonMsg(sonMsg)}>sendMsg</button>
  </div>
}

function App() {
  const [msg,setMsg] = useState('')
  const getMsg = (msg) => {
    console.log(msg)
    setMsg(msg)
  }
    return (
       <div>
         this is App, {msg}
         <Son onGetSonMsg={getMsg} />
       </div>
    );
}

export default App;

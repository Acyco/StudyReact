// 项目的根组件
// App -> index.js -> public/index.html

import {useEffect, useState} from "react";

const URL= 'https://2023.ipchaxun.com'
function App() {
  const[ip,setIp] = useState([])
  useEffect(() => {
    // 额外的操作，获取频道列表
    async function getIP() {
      const res = await fetch(URL)
      const jsonRes = await res.json()
      console.log(jsonRes)
      setIp(jsonRes.data)
    }
    getIP()
  }, [])
  return (
    <div>
        this is App
      <ul>
        {ip.map(item => <li key={Math.random()}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;

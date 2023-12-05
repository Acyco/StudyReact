// 项目的根组件
// App -> index.js -> public/index.html

import {useState} from "react";

function A({onGetAName}) {
  const name = 'this is A name'
  return (
    <div>
      this is A component,
      <button onClick={() => onGetAName(name)}>send</button>
    </div>
  )
}

function B({name}) {
  return (
    <div>
      this is B component,
      {name}
    </div>
  )
}

function App() {
  const [name, setName] = useState('')
  const getAName = (name) => {
    console.log(name)
    setName(name)
  }
  return (
    <div>
      this is App,
      <A onGetAName={getAName}/>
      <B name={name}/>
    </div>
  );
}

export default App;

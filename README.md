# Study React

## React 是什么 

React由Meta(Facebook)公司研发， 是一个用于 `构建WEB和原生交互界面的库`。

可以在浏览器上运行，也可以打包成移动端应用。 

### 优势
* 想较于传统基于DOM开发
  - 组件化的开发方式
  - 不错的性能
* 相较于其它前端框架
  - 丰富的生态
  - 跨平台支持

## 使用 create-react-app 快速搭建开发环境

create-react-app 是一个快速 `创建React开发环境的工具`， 底层由Webpack构建，`封装了配置细节`，开箱即用。

执行命令： `npx create-react-app react-basic`
- npx: Node.js工具命令，查找并执行后续的包命令。
- create-react-app: 核心包（固定写法）， 用于创建React项目。
- react-basic React项目的名称（可自定义的）。

当然 还有更多创建方式，具体可前往： [启动一个新的 React 项目](https://zh-hans.react.dev/learn/start-a-new-react-project)

## JSX

### 什么是 JSX

JSX 是 javaScript 和 XML(HTML) 的缩写， 表示在 `JS代码中编写HTML模板结构`， 它是React编写UI模板的方式。

为什么要使用 JSX ? 使用它有两个好处：可以使用HTML的声明式模板写法还可以拥有JS的可编程能力。

### JSX 的本质
JSX 并不是标准的 JS 语法，它是 `JS 的语法扩展`， 浏览器并不能识别， 需要通过 `解析工具做了解析` 后才能在浏览器中运行。

### 在JSX 中使用 JS 表达式

在 JSX 中 可以通过 `大括号语法{}` 识别 JavaScript中的表达式， 比如常见的变量、函数调用、方法调用等。

1. 使用引号传递字符串

2. 使用 JavaScript 变量
3. 函数调用
4. 方法调用

```js
const count = 100

function getName() {
    return 'Acyco'
}
function Jsx01() {
    return (
        <div>
            {/* 使用引号传递字符串 */}
            {'this is message'}
            {/* 使用JavaScript变量 */}
            {count}
            {/* 函数调用 */}
            {getName()}
            {/* 方法调用 */}
            {new Date().getDate()}
            {/* js对象 */}
            <div style={{color: 'red'}}> this is div</div>

        </div>
    );

}
```
> 注意： if 语句，switch 语句、 变量声明属于语句，不是表达式， 不能出现在{}中

### JSX 中实现列表渲染

语法： 在 JSX 中可以使用原生 JS 的 `map方法` 遍历渲染列表。

```js
const list = [
    { id: 1001, name: 'Vue'},
    { id: 1002, name: 'React'},
    { id: 1003, name: 'Angular'}
]

function Jsx02() {
    return (
        <div>
            {/*  渲染列表  */}
            <ul>
                {list.map(item=><li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    )
}
```
说明：
* map 循环哪个结构，return 哪个结构。
* 注意事项： 加上一个独一无二的 key, 字符串或 number id。
* key 的作用： React 框架内部使用的，用来提升更新性能的。

### JSX 实现条件渲染

语法： 在 React 中，可以通过 `逻辑与运算符&&、三元表达式(?:)` 实现基础的条件渲染。

```js
const isLogin = true

export default function JSX03 () {
    return (
        <div>
            {/* 逻辑与 && */}
            <div>
                {isLogin && <span> this is span</span>}
            </div>
            {/* 三元运算符 */}
            <div>
                {isLogin ? <span>Acyco</span> : <span>Loading....</span> }
            </div>

        </div>
    )
}
```

### JSX 中实现复杂条件渲染

```js
const articleType = 3 // 0 1 3

// 定义核心函数 （根据文章类型返回不同的JSX模板
function getArticleTemp() {
    if (articleType === 0) {
        return <div>无图文章</div>
    } else if (articleType === 1) {
        return <div>单图文章</div>
    } else {
        return <div>三图模式</div>
    }
}

export default function Jsx04 (){
    return (
        <div>
            {/* 调用函数渲染不同的模板*/}
            {getArticleTemp()}
        </div>
    )
}
```

## React 中的事件绑定

### React 基础事件绑定

语法： `on + 事件名称 = { 事件处理程序 }`，整体上遵循驼峰命名法。

```js
function App() {
  const handleClick = () => {
    console.log("button被点击了");
  }
  return (
    <div className="App">
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
```

### 使用事件对象参数
语法： 在事件回调函数中 `设置形参 e`

```js
function App() {
  // 事件参数e
  const handleClick = (e) => {
    console.log("button被点击了",e);
  }
  return (
    <div className="App">
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
```

### 传递自定义参数
语法： 事件绑定的位置改造成 `箭头函数的写法`， 在执行实际`处理业务函数`的时候传送实参。

```js
function App() {
  // 事件参数e
  const handleClick = (name,e) => {
    console.log("button被点击了",name,e);
  }
  return (
    <div className="App">
      <button onClick={() =>handleClick('Acyco')}>click me</button>
    </div>
  );
}
```

> 注意：不能直接写函数调用，这里事件的绑定需要一个 `函数引用`。

### 同时传递事件对象和自定义参数
语法： 在事件绑定的位置传递事件实参 e 和自定义参数， 处理函数中声明形参，注意顺序要一一对应。

```js
function App() {
  // 事件参数e
  const handleClick = (name,e) => {
    console.log("button被点击了",name,e);
  }
  return (
    <div className="App">
      <button onClick={(e) =>handleClick('Acyco',e)}>click me</button>
    </div>
  );
}
```
















import React from "react"
import "./App.css"
import { useState } from "react"

function App() {
  const [count/*值*/ ,setCount/*更新函数 */] = useState(0) //解构赋值
  const add=()=>{
    setCount(count+1)
  }
  return (
    <div className="App">
      <div>{count}</div>
      <div>
        <button onClick={add}>+1</button>
      </div>
    </div>
  )
}

export default App
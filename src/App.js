import React from "react"
import "./App.css"
import { useState } from "react"


function App() {
  const [count/*值*/ ,setCount/*更新函数 */] = useState(0) //解构赋值
  const [user,setUser]=useState({
    name:'ycy',
    age:18,
    hobbies:['lol','dog','code']
  })

  const add=()=>{
    setCount(count+1)
  }
  const minus=()=>{
    setCount(count-1)
  }
  const old = ()=>{
    setUser({
     ...user,
     age:user.age+1
    })
  }
  const addHobbit = (x)=>{
    let newHobbit = Math.random()
    setUser({
      ...user,
      hobbies:[...user.hobbies,newHobbit]
    })
  }

  return (
    <div className="App">
      <div>{count}</div>
      <div>
        <button onClick={add}>+1</button>
        <button onClick={minus}>-1</button>
      </div>
      <div>
        {user.name},{user.age} <br/>{user.hobbies.join(',')} 
      </div>
      <div>
        <button onClick={old}>+1</button>
      </div>
      <button onClick={addHobbit}>增加爱好</button>
    </div>
  )
}

export default App
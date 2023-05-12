import { useState } from "react"

function Header({data, setData}) {
  const[text,setText] = useState('')
  const addTodo = () =>{
    if (text !== '') {
      setData([{
        completed: false,
        deleted: false,
        important: false,
        correct: false,
        text: text.trim(),
        id:Math.random()
      },...data])
      setText('')
    }
  }
  return (
    <div className="header">
        <button onClick={()=>{
          addTodo()
        }}>+</button>
        <input onChange={e =>{
          setText(e.target.value)
        }}
        placeholder='Create a new todo..' type="text"  value={text}/>
    </div>
  )
}

export default Header
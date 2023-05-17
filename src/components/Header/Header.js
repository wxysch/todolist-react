import { useState } from "react";

function Header({ data, setData,saveToLocal }) {
  const [text, setText] = useState('');
  const addToDo = () => {
    if (text.trim() !== '') {
      setData([{
        completed: false,
        deleted: false,
        important: false,
        correct: false,
        text,
        id: Math.random(),
      }, ...data]);
      setText('')
    }
    saveToLocal()
  }
  
  return (
    <div className="header">
      <button onClick={() => {
        addToDo()
      }}>+</button>
      <input className="header-input" onChange={e => {
        setText(e.target.value)
      }} placeholder='Create   a new todo..' type="text" value={text} />
    </div>
  )
}

export default Header

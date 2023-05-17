import { useState } from "react";

const ToCorrect = ({item , setKey, toCorrectfunc}) => {
    const [text, setText] = useState('');
    return (
        <div className="todolist-menu-item-toCorrect">
            <input value={text} onChange={e => {
                setText(e.target.value)
            }} type="text"  />
            <button onClick={()=>{
                toCorrectfunc(text, item.id)
            }}>save</button>
            <button onClick={() => {
                setKey('correct', item.id)
            }}>cancel</button>
        </div>
    )
}

export default ToCorrect
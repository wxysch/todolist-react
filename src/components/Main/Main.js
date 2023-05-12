function Main({todoList,setKey, status}) {
  return (
    <div className="todolist-menu">

{
  todoList.map(item => {
   return <div key={item.id} className="todolist-menu-item">
        <button onClick={()=>{
          setKey('completed',item.id)
        }}>{item.completed ? '+' : ''}</button>
        <p>{item.text}</p>
        <div className="todolist-menu-item-right">
        <button>correct</button>
        <button>important</button>
        <button onClick={()=>{
          setKey('deleted', item.id)
        }}>delete</button>
      </div>
      </div>
      
  })
}
    </div>
  )
}

export default Main 
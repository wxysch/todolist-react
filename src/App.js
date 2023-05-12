import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import './css/style.css'
import {useState,useEffect} from 'react'

function App() {
  const[data,setData] = useState([])
  const[todoList,setTodoList] = useState([])
  const[status,setStatus] = useState('all')
  const setKey = (key, id) =>{
    setData(data.map(item =>{
      if(id === item.id){
        return{
          ...item,
          [key]: !item[key]
        }
      }else{
        return item
      }
    }))
  }

  useEffect(()=>{
    switch (status) {
      case 'all':{
        setTodoList(data.filter(item =>{
          return !item.deleted
        }))
        break;
      }
      case 'active':{
        setTodoList(data.filter(item =>{
          return !item.deleted && !item.completed
        }))
        break;
      }
      case 'completed':{
        setTodoList(data.filter(item =>{
          return !item.deleted && item.completed
        }))
        break;
      }
      case 'deleted': {
        setTodoList(data.filter(item =>{
          return item.deleted
        }))
      }
    }
  },[data,status])
  return (
    <div className="body">
      <div className="todo">
      <div className="banner">
        <h1>TODO</h1>
      </div>
      <Header data={data} setData={setData}/>
      <Main status={status} setKey={setKey} todoList={todoList}/>
      <Footer status={status} setStatus={setStatus} todoList={todoList}/>
    </div>
    </div>
  );
}

export default App;

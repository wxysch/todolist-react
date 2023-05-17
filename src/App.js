import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import './css/style.css'
import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([]);
  const [local, setLocal] = useState([])
  const [todolist, setTodoList] = useState([]);
  const [status, setStatus] = useState('all');

  const deletePermanently = (id) => {
    setData(local.filter(item => {
      return id !== item.id
    }))
  }
    useEffect(()=>{
      setLocal(JSON.parse(localStorage.getItem("key")))
    },[])

  const setKey = (key, id) => {
    setData(
      data.map(item => {
        if (id === item.id) {
          return {
            ...item,
            [key]: !item[key]
          }
        } else {
          return item
        }
      }))
  }
  const saveToLocal = () =>{
    localStorage.setItem("key",JSON.stringify(data))
  }
  const clearCompleated = () => {

    setData(data.map(item => {

      if (item.completed) {
        return {

          ...item,

          deeleted: true
        }

      } else {
        return item
      }

    }))
  }

  const toCorrectfunc = (text, id) => {
    setData(data.map(item=> {
      if(item.id === id) {
        return {
          ...item,
          text,
          correct:false
        }
      }
      return item
    }))
  }
  useEffect(() => {
    switch (status) {
      case 'all': {
        setTodoList(local.filter(item => {
          return !item.deleted
        }));
        break
      }
      case 'active': {
        setTodoList(local.filter(item => {
          return !item.deleted && !item.completed
        }));
        break
      }
      case 'completed': {
        setTodoList(local.filter(item => {
          return !item.deleted && item.completed
        }));
        break
      }
      case 'deleted': {
        setTodoList(local.filter(item => {
          return item.deleted;
        }));
        break
      }
    }
  }, [local, status])
  return (
    <div className="body">
      <div className="todo">
        <div className="banner">
          <h1 className="h1-todoList">TODO</h1>
        </div>
        <Header data={data} local={local} setData={setData} saveToLocal={saveToLocal}/>
        <Main toCorrectfunc={toCorrectfunc} deletePermanently={deletePermanently} 
        status={status} todoList={todolist} setKey={setKey} setTodoList={setTodoList} />
        <Footer clearCompleated={clearCompleated} status={status} setStatus={setStatus} todoList={todolist} />
      </div>
    </div>
  );
}

export default App;

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import "./css/style.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [todolist, setTodoList] = useState([]);
  const [status, setStatus] = useState("all");
  const deletePermanently = (id) => {
    setData(
      data.filter((item) => {
        return id !== item.id;
      })
    );
  };
  const saveTolocal = () => {
    localStorage.setItem("key", JSON.stringify(data));
  };
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("key")))
  }, []);

  const setKey = (key, id) => {
    setData(
      data.map((item) => {
        if (id === item.id) {
          return {
            ...item,
            [key]: !item[key],
          };
        } else {
          return item;
        }
      })
    );
  };
  const clearCompleated = () => {
    setData(
      data.map((item) => {
        if (item.completed) {
          return {
            ...item,

            deeleted: true,
          };
        } else {
          return item;
        }
      })
    );
  };

  const toCorrectFunc = (text, id) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            text,
            correct: false,
          };
        }
        return item;
      })
    );
  };
  useEffect(() => {
    switch (status) {
      case "all": {
        setTodoList(
          data.filter((item) => {
            return !item.deleted;
          })
        );
        break;
      }
      case "active": {
        setTodoList(
          data.filter((item) => {
            return !item.deleted && !item.completed;
          })
        );
        break;
      }
      case "completed": {
        setTodoList(
          data.filter((item) => {
            return !item.deleted && item.completed;
          })
        );
        break;
      }
      case "deleted": {
        setTodoList(
          data.filter((item) => {
            return item.deleted;
          })
        );
        break;
      }
    }
  }, [data, status]);
  return (
    <div className="body">
      <div className="todo">
        
        <div className="banner d-flex justify-content-between">
          <h1 className="h1-todoList">TODO</h1>
          <button className="save-btn" onClick={()=>{saveTolocal()
        }}>to save</button>
        </div>
        <Header data={data} setData={setData} saveToLocal={saveTolocal} />
        <Main
          toCorrectFunc={toCorrectFunc}
          deletePermanently={deletePermanently}
          status={status}
          todoList={todolist}
          setKey={setKey}
          setTodoList={setTodoList}
        />
        <Footer
          clearCompleated={clearCompleated}
          status={status}
          setStatus={setStatus}
          todoList={todolist}
        />
      </div>
    </div>
  );
}

export default App;

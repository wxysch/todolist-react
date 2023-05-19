
import ToCorrect from "./ToCorrect";

function Main({ todoList, setKey, status, deletePermanently,toCorrectFunc }) {
  return (
    <div className="todolist-menu">
      {
        todoList.map(item => {
          return <div key={item.id}
            className={item.important
              ? "todolist-menu-item todolist-menu-item-important "
              : "todolist-menu-item"}>


            {
              item.correct
                ? <ToCorrect item={item} setKey={setKey}
                  toCorrectfunc={toCorrectFunc}/>
               : <>
<div>
              <button className="bnt-active" onClick={() => {
                setKey('completed', item.id)
              }}>{item.completed ? '///' : ''}</button>

             </div>
            <p >{item.text}</p>

            <div className="todoList-menu-item-right">
              {
                status === 'deleted'
                 ? <>
                    <button className="btn-deleted-permanently" onClick={() => {
                      deletePermanently(item.id);
                    }}></button>
                    <button className="btn-restore" onClick={() => {
                      setKey('deleted', item.id)
                    }}></button>
                  </>
                  : <>
                    <button className="btn-correct"
                      onClick={() => {
                        setKey('correct', item.id)
                      }}>

                    </button>
                    <button className="btn-important"
                      onClick={() => {
                        setKey('important', item.id)
                      }} >

                    </button>
                    <button className="btn-deleted" onClick={() => {
                      setKey('deleted', item.id)
                    }}></button>
                  </>
              }



            </div>
                </>
            }


            
          </div >
        })
      }
      {/* <div className="todolist-menu-item">
        <button></button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div> */}
    </div >
  )
}

export default Main

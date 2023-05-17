function Footer({ atatus, setStatus, todoList, clearCompleated }) {
  const btnList = [
    {
      id: 1,
      text: 'all',
    },
    {
      id: 2,
      text: 'active',
    },
    {
      id: 3,
      text: 'completed',
    },
    {
      id: 4,
      text: 'deleted',
    },
  ];

  return (
    <div className="footer">
      <p className="footer-count"><i>{todoList.length}</i> items</p>
      <div className="footer-center">
        {
          btnList.map(item => {
            return <button key={item.id} onClick={() => {
              setStatus(item.text)
            }} className="footer-btn">{item.text}</button>
          })
        }
      </div>
      <button className="footer-btn" 
      onClick={()=>{
        clearCompleated()
      }}>clear completed</button>
    </div>
  )
}

export default Footer

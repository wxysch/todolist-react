function Footer() {
  return (
    <div className="footer">
      <p className="footer-count"><i>3</i> items</p>
      <div className="footer-center">
      <button className="footer-btn">all</button>
      <button className="footer-btn">active</button>
      <button className="footer-btn">completed</button>
      </div>
      <button className="footer-btn">clear completed</button>
    </div>
  )
}

export default Footer
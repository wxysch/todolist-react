import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import './css/style.css'

function App() {
  return (
    <div className="body">
      <div className="todo">
      <div className="banner">
        <h1>TODO</h1>
      </div>
      <Header />
      <Main />
      <Footer />
    </div>
    </div>
  );
}

export default App;

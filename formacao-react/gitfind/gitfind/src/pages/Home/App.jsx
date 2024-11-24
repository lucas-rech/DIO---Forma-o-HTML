import Header from "../../components/Header/Header"

import background from "../../assets/background.png"

import './App.css'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <div className="content">
        <img className="background" src={background} alt="background app" />
        <div className="info">
          <div>
            <input name="user" placeholder="@username"></input>
            <button>Buscar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

import Header from "../../components/Header/Header"
import ItemList from "../../components/ItemList/ItemList"

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
          <div className="profile">
            <img className="profile-photo" src="https://avatars.githubusercontent.com/u/140991738?s=400&u=02b59f6ec52d1d20fcc861e027a2fcc361547ab1&v=4" alt="profile image" />
            <div>
              <h3>Lucas Rech</h3>
              <span>@lucas-rech</span>
              <p>Descrição</p>
            </div>
          </div>
          <hr />
          <div>
            <h4>Repositórios</h4>
            <ItemList title={"Teste 1"} description={"lorem ipsum"}/>
            <ItemList title={"Teste 2"} description={"lorem ipsum"}/>
            <ItemList title={"Teste 3"} description={"lorem ipsum"}/>
            <ItemList title={"Teste 4"} description={"lorem ipsum"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

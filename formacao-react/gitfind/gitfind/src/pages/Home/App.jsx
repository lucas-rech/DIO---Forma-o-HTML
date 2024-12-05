import Header from "../../components/Header/Header"
import ItemList from "../../components/ItemList/ItemList"

import background from "../../assets/background.png"

import './App.css'

import { useState } from "react"


function App() {
  const [user, setUser] = useState("")
  const [currentUser, setCurrentUser] = useState(null)
  const [repos, setRepos] = useState(null)

  const handleGetData = async() => {
    const userData = await fetch(`https://api.github.com/users/${user}`)
    const newUser = await userData.json()

    if(newUser.name){
      const {avatar_url, name, bio, login} = newUser 
      setCurrentUser({avatar_url, name, bio, login})
      
      const reposData = await fetch(`https://api.github.com/users/${user}/repos`)
      const newRepos = await reposData.json()

      if(newRepos.length) {
        setRepos(newRepos)
      }
    } else {
      alert("Usuário não encontrado")
    }
  }

  return (
    <div className="App">
      <Header></Header>
      <div className="content">
        <img className="background" src={background} alt="background app" />
        <div className="info">
          <div>
            <input 
              name="user" 
              placeholder="@username" 
              value={user} 
              onChange={event => setUser(event.target.value)} 
            />
      
            <button onClick={handleGetData}>Buscar</button>
          </div>

          {currentUser?.name ? (
            <>
              <div className="profile">
                <img 
                  className="profile-photo" 
                  src={currentUser.avatar_url} 
                  alt="profile image" 
                />
                <div>
                  <h3>{currentUser.name}</h3>
                  <span>@{currentUser.login}</span>
                  <p>{currentUser.bio}</p>
                </div>
              </div>
              <hr />
            </>
          ) : null }
          
          {repos?.length ? (
            <>
              <div>
                <h4>Repositórios</h4>
                {repos.map(repo => (
                  <ItemList title={repo.name} description={repo.description}></ItemList>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default App

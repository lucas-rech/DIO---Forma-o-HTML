import { Link } from "react-router-dom"

import { Button } from "../../components/Button/index"

const Home = () => {
  return (<>
    <h1>Home</h1>
    <Button>Teste 1</Button>
    <Button variant="secondary"></Button>
    <Link to="/login">Ir para o login</Link>
  
  </>)
}

export default Home
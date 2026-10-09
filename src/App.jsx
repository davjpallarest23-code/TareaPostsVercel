import ListarUsuarios from './pages/ListarUsuarios'
import Inicio from './pages/Inicio'
import Posts from './pages/PostsPages'
import {Routes, Route} from 'react-router'
import Nav from './components/Nav'
import "./components/Nav.css";

//import AppBar from '@mui/material/AppBar'
//import Toolbar from '@mui/material/Toolbar'
//import Button from '@mui/material/Button'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

function App() {
  //const paginaUsuarios = window.location.pathname === '/usuarios'
  //const paginaPosts = window.location.pathname === '/posts'

  return (
    <>
    <Nav/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/usuarios" element={<ListarUsuarios />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </>
  )

  /*return (
    <>
      <AppBar position="static">
        <Toolbar>
            <Button color="inherit" href="/">
                Inicio
            </Button>

            <Button color="inherit" href="/usuarios">
                Usuarios
            </Button>

            <Button color="inherit" href="/posts">
                Posts
            </Button>
        </Toolbar>
      </AppBar>
      {paginaUsuarios ? <ListarUsuarios /> : paginaPosts ? <Posts /> : <Inicio />}
    </>
  )*/
}

export default App

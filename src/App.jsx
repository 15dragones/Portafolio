import './App.css'
import Certificados from './components/Certificados'
import Banner from './components/Banner'
import Contacto from './components/Contacto'
import Navbar from './components/Navbar'
import Perfil from './components/Perfil'
import Proyectos from './components/Proyectos'
import Servicios from './components/Servicios'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Banner />
        <Perfil />
        <Servicios />
        <Proyectos />
        <Certificados />
        <Contacto />
      </main>
    </div>
  )
}

export default App

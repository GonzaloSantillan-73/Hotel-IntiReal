import Header from './componentes/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Inicio from "./componentes/Inicio"
import Nosotros from "./componentes/Nosotros"
import Habitaciones from "./componentes/Habitaciones"
import Servicios from "./componentes/Servicios"
import Contacto from "./componentes/Contacto"
import Footer from "./componentes/Footer"

function App() {


  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path='/habitaciones' element={<Habitaciones/>}/>
          <Route path='/servicios' element={<Servicios/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App

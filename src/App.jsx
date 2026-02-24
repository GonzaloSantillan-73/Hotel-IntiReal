import Header from './componentes/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <div>
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
    </div>
  )
}

export default App

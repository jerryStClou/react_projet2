import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Contact from './pages/Contact';
import Ping from './pages/ping';
import Navbar from './components/containers/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Accueil/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/ping' element={<Ping/>}/>
    </Routes>
    
    </BrowserRouter>

    </>
  )
}

export default App

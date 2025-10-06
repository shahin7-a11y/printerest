import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import { Login } from './pages/home/login/Login';
import Signform from './pages/home/signform/signform';
import { Home } from './pages/home/homepage/Home';
import { Adminhome } from './pages/home/Adminhome/Adminhome';
// import { Loginhome } from './pages/home/loginhome/LoginHome';
import { Aboutpage } from './pages/home/About/About';
import { Usercard } from './components/usercard/Usercard';
// import { Signform } from './pages/home/signform/signform';


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <BrowserRouter>
     <Routes>
      <Route  path='/' element={<Login/>}/>
      <Route path='/sign' element={<Signform/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/admin' element={<Adminhome/>}/>
      <Route path='/about' element={<Aboutpage/>}/>
      <Route path='/usercard' element={<Usercard/>}/>


     </Routes>
   </BrowserRouter>
    
    </>
  )
}

export default App

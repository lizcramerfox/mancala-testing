import React from 'react'
import { Routes, Route, Link, useNavigate, useLocation, Navigate, Outlet} from 'react-router-dom'
import './index.scss'
import Auth from './Auth/Auth'
import Header from './Header/Header'
import Main from './Main/Main'
import Home from './Home/Home'


function App() {
  return (
    <div>
      <Header />
      

      <Routes>
        <Route path="/main" element={ <Main /> } />
        <Route path="/auth" element={ <Auth /> } />
      </Routes>

      <Home />
    </div>
  )
}

export default App
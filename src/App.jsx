import React from 'react'
import Home from './components/home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import { Signin } from './components/signin'
import { Signup } from './components/signup'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
const App = () => {
  const [showNav, setShowNav] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname == '/signin') {
      setShowNav(false)
    }
    else if (location.pathname == '/signup') {
      setShowNav(false)
    }
    else {
      setShowNav(true)
    }
  }, [location])


  return (
    <>
      <div id="global-loader">
        <div class="whirly-loader"> </div>
      </div>
      <div class="main-wrapper">
        <div className={!showNav && 'd-none'}>
          <Navbar />
        </div>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />



        </Routes>
      </div>
    </>
  )
}

export default App
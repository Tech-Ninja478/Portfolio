import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Experience from './Components/Experience/Experience'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* The Home Route contains all your main sections */}
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Services />
            <MyWork />
            <Contact />
          </>
        } />
        
        {/* The Dedicated Experience Route */}
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
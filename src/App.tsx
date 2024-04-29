/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Index from './pages/Index'
import Contact from './pages/contact'
import Information from './pages/information'
import Services from './pages/services'

import Layout from './layouts/layout'

// import { useState, useEffect } from 'react'

// import Spinner from './components/spinner'

function App() {
  // const [loading, setLoading] = useState(true)

  // if (loading) {
  //   return <div>Cargando...</div>
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/information" element={<Information />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

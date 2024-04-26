/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Index from './pages/Index'
import Contact from './pages/contact'
import Information from './pages/information'
import Services from './pages/services'

import Layout from './layouts/layout'

import { useState, useEffect } from 'react'

import { Data } from './interfaces/types'
import Spinner from './components/spinner'

function App() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Data | null>(null)

  useEffect(() => {
    fetch('src/content/content.json')
      .then((response) => response.json() as unknown as Data)
      .then((data) => {
        setData(data)
        setTimeout(() => setLoading(false), 1800)
      })
      .catch((error) => console.error(error))
  }, [])

  if (loading) {
    return <Spinner /> // Renderizar el spinner si los datos se están cargando
  }

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

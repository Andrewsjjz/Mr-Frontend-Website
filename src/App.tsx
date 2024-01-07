import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Index from './pages/Index'
import Contact from './pages/contact'
import Information from './pages/information'
import Services from './pages/services'

import Layout from './layouts/layout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Index/>}/>
          <Route path='/information' element={<Information/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App

import Header from '../components/header'
import Footer from '../components/footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout

import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import Logo from './logo'
import MobileMenu from './mobile-menu'

const Header = () => {
  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <>
      {' '}
      <header
        className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
          !top ? 'bg-white backdrop-blur-sm shadow-lg' : ''
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Site branding */}
            <div className="shrink-0 mr-4">
              <Logo />
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex md:grow">
              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <Link
                    to="/"
                    className="text-gray-600 ml-3 hover:text-fuchsia-950 transition duration-150 ease-in-out"
                  >
                    Inicio
                  </Link>
                  <Link
                    to="/information"
                    className="text-gray-600 ml-3 hover:text-fuchsia-950 transition duration-150 ease-in-out"
                  >
                    Acerca de mi
                  </Link>
                  <Link
                    to="/services"
                    className="text-gray-600 ml-3 hover:text-fuchsia-950 transition duration-150 ease-in-out"
                  >
                    Proyectos
                  </Link>
                  <Link
                    to="/contact"
                    className="text-gray-600 ml-3 hover:text-fuchsia-950 transition duration-150 ease-in-out"
                  >
                    Contáctame
                  </Link>
                </li>
              </ul>
            </nav>

            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

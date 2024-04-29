import { Link } from 'react-router-dom'
import Logo from './logo'
import { FaWhatsapp } from 'react-icons/fa'
import { SlSocialLinkedin } from 'react-icons/sl'

const Footer = () => {
  return (
    <footer className="">
      <div className="max-w-6xl mx-auto px-3 sm:px-3">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-2 py-5 md:py-5 border-t border-gray-200">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <Logo />
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <Link
              to="/"
              className="text-gray-600 ml-3 hover:text-fuchsia-950 font-medium transition duration-150 ease-in-out"
            >
              Inicio
            </Link>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <Link
              to="/information"
              className="text-gray-600 ml-3 hover:text-fuchsia-950 font-medium transition duration-150 ease-in-out"
            >
              Acerca de mi
            </Link>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <Link
              to="/services"
              className="text-gray-600 ml-3 hover:text-fuchsia-950 font-medium transition duration-150 ease-in-out"
            >
              Proyectos
            </Link>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <Link
              to="/contact"
              className="text-gray-600 ml-3 hover:text-fuchsia-950 font-medium transition duration-150 ease-in-out"
            >
              Contáctame
            </Link>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          {/* Social as */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            {/* <li>
              <a
                href="https://www.instagram.com/mr_frontend_?igsh=azlxeDBvaDc0MDYy"
                className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-7 h-7" />
              </a>
            </li> */}
            {/* <li className="ml-4">
              <a
                href="https://www.facebook.com/profile.php?id=61555523351384"
                className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="w-7 h-7" />
              </a>
            </li> */}
            <li className="ml-4">
              <a
                href="https://api.whatsapp.com/send?phone=573002622078&text=Hola,%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20servicios%20de%20desarrollo%20web"
                className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="w-7 h-7" />
              </a>
            </li>
            <li className="ml-4">
              <a
                href="https://www.linkedin.com/in/andres-jimenez-89b504265"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SlSocialLinkedin className="w-7 h-7" />
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">
            &copy; Mr. Frontend. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

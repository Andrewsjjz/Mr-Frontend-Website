import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react"

export default function Information() {

  useEffect(() => {
    Aos.init({
      once: true,
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })
  
  return (
    <section className="relative bg-white">
    <div className="mx-auto px-4 sm:px-6" data-aos="fade-right" data-aos-delay="150">
      <div className="container my-24 mx-auto md:px-6">
      <section className="overflow-hidden bg-white dark:bg-dark">
    <div className="container mx-auto">
            <h2 className="mb-5 text-3xl font-bold text-dark text-center dark:text-black sm:text-[40px]/[48px]">
            Diseñamos y desarrollamos <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-teal-400">sitios web</span> que capturan la esencia de tu marca.
            </h2>
      <div className="flex flex-wrap items-center justify-between -mx-4">
        <div className="w-full px-4 lg:w-6/12">
          <div className="flex items-center -mx-3 sm:-mx-4">
            <div className="w-full px-3 sm:px-4 xl:w-1/2">
              <div className="py-3 sm:py-4">
                <img src="https://i.ibb.co/gFb3ns6/image-1.jpg" 
                alt="" 
                className="w-full rounded-2xl"
                />
              </div>
              <div className="py-3 sm:py-4">
                <img
                  src="https://i.ibb.co/rfHFq15/image-2.jpg"
                  alt=""
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:px-4 xl:w-1/2">
              <div className="relative z-10 my-4">
                <img
                  src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                  alt=""
                  className="w-full rounded-2xl"
                />
                <span className="absolute -right-7 -bottom-7 z-[-1]">
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
          <div className="mt-10 lg:mt-0">
            <span className="block mb-4 text-lg font-semibold text-primary">
              ¿Por qué escogernos?
            </span>
            <p className="mb-5 text-base text-justify text-body-color dark:text-dark-6">
            Somos un equipo apasionado de desarrolladores web que se enorgullece 
            de transformar ideas en realidades digitales. Con años de experiencia 
            en la industria, hemos perfeccionado nuestras habilidades para ofrecer 
            soluciones de desarrollo web de alta calidad que ayudan a las empresas 
            a destacar en el mundo digital.
            </p>
            <p className="mb-8 text-base text-justify text-body-color dark:text-dark-6">
            Nuestra misión es simple: queremos ayudarte a alcanzar tus metas de negocio 
            a través de soluciones de desarrollo web excepcionales. Ya sea que necesites 
            un sitio web completamente nuevo, una actualización de tu sitio actual o una 
            aplicación web personalizada, estamos aquí para hacerlo realidad.
            </p>
            <p
              className="inline-flex items-center justify-center py-3 text-lg font-bold text-center text-black border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
            >
              En resumen, somos más que solo desarrolladores web. Somos tu socio en el 
              camino hacia el éxito digital.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
      </div>
      {/* <!-- Container for demo purpose --> */}
    </div>
  </section>
  )
}

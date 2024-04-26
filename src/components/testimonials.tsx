// import TestimonialImage from "@/public/images/testimonial.jpg"
import Computer from '../public/images/Developer-activity-bro.webp'
import HandCoding from '../public/images/Hand-coding-bro.webp'
import SEO from '../public/images/Analysis-amico.webp'
import Clients from '../public/images/Generating-new-leads-pana.webp'

import Aos from 'aos'
import 'aos/dist/aos.css'

import { useEffect } from 'react'

export default function Testimonials() {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  return (
    <section className="relative">
      {/* Illustration behind content */}
      {/* <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div> */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6" data-aos="fade-up">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2
              className="text-4xl font-bold mb-4 bg-clip-text text-transparent 
            bg-gradient-to-r from-fuchsia-600 to-teal-400"
            >
              Crea tu futuro digital con nosotros
            </h2>
            <p className="text-xl text-gray-600 " data-aos="zoom-y-out">
              Ofrecemos soluciones de desarrollo web que se adaptan a tus
              necesidades. Juntos, podemos construir la plataforma digital que
              tu negocio merece.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-4">
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img src={Computer} width={300} height={300} alt="Computer" />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img src={HandCoding} width={300} height={300} alt="Hand" />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img src={SEO} width={300} height={300} alt="SEO" />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <img src={Clients} width={300} height={300} alt="Hand" />
            </div>
          </div>

          {/* Testimonials */}
        </div>
      </div>
    </section>
  )
}

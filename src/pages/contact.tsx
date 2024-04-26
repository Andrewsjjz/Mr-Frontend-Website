import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import FormContact from '../components/formContact'
import SocialMedia from '../components/socialMedia'

export default function Contact() {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })
  return (
    <section className="relative bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="container my-24 mx-auto md:px-6">
          <section className="mb-10">
            <div className="flex justify-center">
              <div className="text-center md:max-w-xl lg:max-w-3xl">
                <h2
                  className="mb-12 px-6 text-3xl font-bold text-black"
                  data-aos="fade-left"
                  data-aos-delay="150"
                >
                  Contáctame
                </h2>
              </div>
            </div>
            <div
              className="flex flex-wrap"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              <FormContact />
              <SocialMedia />
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

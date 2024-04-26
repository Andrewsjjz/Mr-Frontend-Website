/* eslint-disable @typescript-eslint/no-unused-vars */
// import VideoThumb from "../public/images/hero-image.png";
import ModalVideo from '../components/modal-video'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import { Data, HomeProps } from '../interfaces/types'

export default function Hero() {
  const [data, setData] = useState<Data | null>(null)

  useEffect(() => {
    Aos.init({
      once: true,
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  useEffect(() => {
    fetch('src/content/content.json')
      .then((response) => response.json() as unknown as Data)
      .then((data) => setData(data))
      .catch((error) => console.error(error))
  }, [])

  if (!data || !data.Home) {
    return
  }

  const homeData: HomeProps = data.Home

  return (
    <section className="relative bg-white">
      <div className="max-w-full">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              {homeData.titleH1}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-teal-400">
                <br></br>Realidad Web
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-2xl text-black font-normal mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                {homeData.bio}
              </p>
            </div>
            <a
              href="src\CV\Jimenez Andres CV.pdf"
              download
              className="bg-fuchsia-500 hover:bg-fuchsia-800 text-white font-bold 
            py-2 px-6 rounded"
            >
              Descargar CV
            </a>
          </div>
          <div></div>

          {/* Hero image */}
          <ModalVideo
            // thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  )
}

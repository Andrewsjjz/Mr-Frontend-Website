import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import Accordion from '../components/accordion'
import Cards from '../components/cards'
import { Data, CardProps } from '../interfaces/types'

export default function Services() {
  const [data, setData] = useState<Data>({
    Project: {},
  })

  useEffect(() => {
    fetch('src/content/content.json')
      .then((response) => response.json() as unknown as Data)
      .then((data) => setData(data))
      .catch((error) => console.error(error))
  }, [])

  useEffect(() => {
    Aos.init({
      once: true,
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  return (
    <>
      <div
        className="max-w-4xl mx-auto px-5 mt-20 mb-16"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div className="flex flex-col items-center">
          <span
            className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 
            to-teal-400 font-bold"
          >
            Innovaciones tecnológicas
          </span>
          <h2 className="text-5xl font-bold"></h2>
          <p className="text-neutral-500 text-xl text-justify mt-3">
            Explora mis proyectos más recientes donde la Ingeniería en
            Computación, el Desarrollo Fullstack, el Machine Learning, la
            Ciencia de Datos y el Diseño UX/UI se unen para crear soluciones
            impactantes.
          </p>
        </div>
      </div>

      {Object.keys(data.Project).map((key, index) => (
        <Accordion key={index} title={key}>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-0 md:gap-8 justify-center items-center">
            {data.Project[key].projects.map(
              (projects: CardProps, i: number) => (
                <Cards
                  key={i}
                  title={projects.title}
                  content={projects.content}
                  link={projects.link}
                  image={projects.image}
                />
              )
            )}
          </div>
        </Accordion>
      ))}
    </>
  )
}

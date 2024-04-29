import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Accordion from '../components/accordion'
import Cards from '../components/cards'
import { Project } from '../content/content.json'

export default function Services() {
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

      <Accordion title={Project.titleH1}>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-0 md:gap-8 justify-center items-center">
          {Project.projects.map((project, index) => (
            <Cards
              key={index}
              title={project.title}
              content={project.content}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>
      </Accordion>

      <Accordion title={Project.titleH2}>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-0 md:gap-8 justify-center items-center">
          {Project.project.map((project, index) => (
            <Cards
              key={index}
              title={project.title}
              content={project.content}
              link={project.link}
            />
          ))}
        </div>
      </Accordion>

      <Accordion title={Project.titleH3}>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-0 md:gap-8 justify-center items-center">
          {Project.projec.map((projec, index) => (
            <Cards
              key={index}
              title={projec.title}
              content={projec.content}
              link={projec.link}
              image={projec.image}
            />
          ))}
        </div>
      </Accordion>
    </>
  )
}

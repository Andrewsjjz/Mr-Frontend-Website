import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import { Data, SkillsProps } from '../interfaces/types'

export default function Information() {
  const [data, setData] = useState<Data | null>(null)

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

  if (!data || !data.Skills) {
    return
  }

  const skillsData: SkillsProps = data.Skills

  return (
    <section className="relative bg-white">
      <div
        className="mx-auto px-4 sm:px-6"
        data-aos="fade-right"
        data-aos-delay="150"
      >
        <div className="container my-24 mx-auto md:px-6">
          <section className="overflow-hidden bg-white dark:bg-dark">
            <div className="container mx-auto">
              <h2 className="mb-8 text-3xl font-bold text-dark text-center dark:text-black sm:text-[40px]/[48px]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-teal-400">
                  Arquitecto de Soluciones Tecnológicas:
                </span>{' '}
                {skillsData.title}
              </h2>
              <div className="flex flex-wrap items-center justify-between -mx-4">
                <div className="w-full px-4 lg:w-6/12">
                  <div className="flex items-center -mx-3 sm:-mx-4">
                    <div className="w-full px-3 sm:px-4 xl:w-1/2">
                      <div className="py-3 sm:py-4">
                        <img
                          src="https://i.ibb.co/gFb3ns6/image-1.jpg"
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
                        <span className="absolute -right-7 -bottom-7 z-[-1]"></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                  <div className="mt-10 lg:mt-0">
                    <div className="flex items-center justify-between mb-8">
                      <span className="block text-xl font-semibold text-primary">
                        ¿Quien soy?
                      </span>
                      <a
                        href="src\CV\Jimenez Andres CV.pdf"
                        download
                        className="bg-fuchsia-500 hover:bg-fuchsia-800 text-white font-bold 
            py-2 px-6 rounded"
                      >
                        Descargar CV
                      </a>
                    </div>
                    <p className="mb-5 text-base text-justify text-body-color dark:text-dark-6">
                      {skillsData.bio}
                    </p>
                    <p className="mb-8 text-base text-justify text-body-color dark:text-dark-6">
                      <span className="font-bold">
                        Desarrollador Fullstack{' '}
                      </span>
                      {skillsData.fullStack}
                      <br></br>
                      <br></br>
                      Las tecnologias que manejo son:
                      <ul>
                        <li>
                          <span className="font-bold">Backend: </span>
                          {skillsData.backend}
                        </li>
                        <li>
                          <span className="font-bold">Frontend: </span>
                          {skillsData.frontend}
                        </li>
                        <li>
                          <span className="font-bold">Base de datos: </span>
                          {skillsData.bbd}
                        </li>
                      </ul>
                    </p>
                    <p className="mb-5 text-base text-justify text-body-color dark:text-dark-6">
                      Como
                      <span className="font-bold">
                        {' '}
                        Científico de Datos
                      </span>{' '}
                      {skillsData.dataScience}{' '}
                      <span className="font-bold"> Machine Learning</span>{' '}
                      {skillsData.machineLearning}
                    </p>
                    <p className="mb-5 text-base text-justify text-body-color dark:text-dark-6">
                      Ademas de
                      <span className="font-bold"> Diseñador UX/UI</span>{' '}
                      {skillsData.UXUI}{' '}
                    </p>
                    <p className="mb-5 text-base text-justify text-body-color dark:text-dark-6">
                      {skillsData.exp1}
                      <br></br>
                      <br></br>
                      {skillsData.exp2}
                      <br></br>
                      <br></br>
                      {skillsData.exp3}{' '}
                    </p>
                    <p className="inline-flex items-center justify-center py-3 text-lg font-bold text-center text-black border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90">
                      {skillsData.message}
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

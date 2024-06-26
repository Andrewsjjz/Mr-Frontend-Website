import Ws from '../public/images/Whatsapp_37229.webp'
import Lk from '../public/images/linkedin.png'
import Gm from '../public/images/gmail.jpg'

export default function Newsletter() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-16">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div
            className="relative bg-fuchsia-400 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden"
            data-aos="zoom-y-out"
          >
            {/* Background illustration */}
            <div
              className="absolute right-0 bottom-0 pointer-events-none hidden lg:block"
              aria-hidden="true"
            >
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient
                    cx="35.542%"
                    cy="34.553%"
                    fx="35.542%"
                    fy="34.553%"
                    r="96.031%"
                    id="ni-a"
                  >
                    <stop stopColor="#fde3ff" offset="0%" />
                    <stop stopColor="#bb00cf" offset="44.317%" />
                    <stop stopColor="#000000" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="#FFF">
                    <ellipse
                      fillOpacity=".04"
                      cx="185"
                      cy="15.576"
                      rx="16"
                      ry="15.576"
                    />
                    <ellipse
                      fillOpacity=".24"
                      cx="100"
                      cy="68.402"
                      rx="24"
                      ry="23.364"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="29"
                      cy="251.231"
                      rx="29"
                      ry="28.231"
                    />
                    <ellipse
                      fillOpacity=".64"
                      cx="29"
                      cy="251.231"
                      rx="8"
                      ry="7.788"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="342"
                      cy="31.303"
                      rx="8"
                      ry="7.788"
                    />
                    <ellipse
                      fillOpacity=".48"
                      cx="62"
                      cy="126.811"
                      rx="2"
                      ry="1.947"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="78"
                      cy="7.072"
                      rx="2"
                      ry="1.947"
                    />
                    <ellipse
                      fillOpacity=".64"
                      cx="185"
                      cy="15.576"
                      rx="6"
                      ry="5.841"
                    />
                  </g>
                  <circle fill="url(#ni-a)" cx="279" cy="237" r="200" />
                </g>
              </svg>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">¿Deseas contactarme?</h3>
                <p className="text-fuchsia-50 text-lg mb-6">
                  Aquí mis redes sociales
                </p>

                {/* CTA form */}
                <div className="flex items-center justify-between sm:justify-start sm:gap-10 md:gap-5">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://api.whatsapp.com/send?phone=573002622078&text=Hola,%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20servicios%20de%20desarrollo%20web"
                  >
                    <img src={Ws} width={50} height={50} alt="Whatsapp" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/andres-jimenez-89b504265/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Lk}
                      width={50}
                      height={50}
                      alt="Facebook"
                      className="bg-white rounded-full"
                    />
                  </a>
                  <img
                    src={Gm}
                    width={50}
                    height={50}
                    alt="Facebook"
                    className="bg-white rounded-full"
                  />
                  <p className="text-xl font-semibold text-white">
                    Andresjimenez884@gmail.com
                  </p>
                  {/* <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/mr_frontend_?igsh=azlxeDBvaDc0MDYy"
                  >
                    <img src={Ig} width={50} height={50} alt="Instagram" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

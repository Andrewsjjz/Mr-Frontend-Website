import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

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
          {/* <!-- Section: Design Block --> */}
          <section className="mb-10">
            <div className="flex justify-center">
              <div className="text-center md:max-w-xl lg:max-w-3xl">
                <h2
                  className="mb-12 px-6 text-3xl font-bold text-black"
                  data-aos="fade-left"
                  data-aos-delay="150"
                >
                  Contactanos
                </h2>
              </div>
            </div>

            <div
              className="flex flex-wrap"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                <form>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-fuchsia-50 py-[0.32rem] 
                    px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear 
                    focus:placeholder:opacity-100 peer-focus:text-fuchsia-500 data-[te-input-state-active]:placeholder:opacity-100 
                    motion-reduce:transition-none dark:text-black dark:placeholder:text-black dark:peer-focus:text-primary 
                    [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleInput90"
                      placeholder="Nombre y Apellido"
                    />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] 
                  leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] 
                  peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] 
                  motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"
                    >
                      Nombre y Apellido
                    </label>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="email"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-fuchsia-50 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all 
                    duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 
                    motion-reduce:transition-none dark:text-black dark:placeholder:text-black dark:peer-focus:text-primary 
                    [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleInput91"
                      placeholder="Correo Electronico"
                    />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] 
                  text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary 
                  peer-data-[te-i<nput-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none 
                  dark:text-black dark:peer-focus:text-primary"
                    >
                      Correo Electronico
                    </label>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <textarea
                      className="peer block min-h-[auto] w-full rounded border-0 bg-fuchsia-50 py-[0.32rem] 
                    px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 
                    data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black 
                    dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlTextarea1"
                      placeholder="Escriba el mensaje"
                    ></textarea>
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate 
                  pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out 
                  peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary 
                  peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] 
                  motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"
                    >
                      Mensaje
                    </label>
                  </div>
                  <button
                    type="button"
                    className="mb-6 inline-block w-full rounded bg-fuchsia-700 px-6 pt-2.5 pb-2 text-xs 
                  font-bold uppercase leading-normal text-white hover:bg-fuchsia-900"
                  >
                    Enviar
                  </button>
                </form>
              </div>

              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div className="flex flex-wrap">
                  {/* Whatsapp */}
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                    <a href="">
                      <div className="flex items-center justify-center">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                            <svg
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              height="3em"
                              width="3em"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18.403 5.633A8.919 8.919 0 0012.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 004.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 00-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 01-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 01-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 015.275 2.188 7.42 7.42 0 012.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 00-.429-.008.826.826 0 00-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-6 grow font-semibold text-lg sm:text-lg">
                          <p className="text-black dark:text-black">
                            +57-30026-22078
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                    <a href="">
                      <div className="flex items-center justify-center">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                            <svg
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              height="3em"
                              width="3em"
                            >
                              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-6 grow font-semibold text-lg sm:text-lg">
                          <p className="text-black dark:text-black">
                            Mr. Frontend
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                      {/* Instagram */}
                      <a href="">
                    <div className="align-start flex items-center justify-center">
                        
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                          <svg
                            viewBox="0 0 1024 1024"
                            fill="currentColor"
                            height="3em"
                            width="3em"
                          >
                            <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-6 grow font-semibold text-lg sm:text-lg">
                        <p className="text-black dark:text-black">
                          Mr Frontend
                        </p>
                      </div>
                    </div>
                      </a>
                  </div>

                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                    <div className="align-start flex items-center justify-center">
                      {/* Email */}
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="3em"
                            width="3em"
                          >
                            <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5-8-5h16m0 12H4V8l8 5 8-5v10z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-6 grow font-semibold text-base">
                        <p className="text-black dark:text-black">
                          support@mrfrontend.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Section: Design Block --> */}
        </div>
        {/* <!-- Container for demo purpose --> */}
      </div>
    </section>
  )
}

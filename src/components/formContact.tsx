const FormContact = () => {
  return (
    <>
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
    </>
  )
}

export default FormContact

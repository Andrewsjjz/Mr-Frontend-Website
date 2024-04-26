import { CardProps } from '../interfaces/types'

const Cards = ({ title, content, image, link }: CardProps) => {
  return (
    <div className="flex gap-0 md:gap-0">
      <div className="block rounded-lg bg-white w-72 justify-center items-center overflow-auto">
        {image && (
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <img className="rounded-xl h-full w-full" src={image} alt={title} />
          </div>
        )}
        <div className="p-2">
          <p className="mb-1 text-2xl font-bold text-black text-center">
            {title}
          </p>
          <p className="mb-4 text-base text-black text-justify">{content}</p>
          <a
            href={link}
            className="bg-fuchsia-500 hover:bg-fuchsia-700 text-white font-bold 
        py-2 px-6 rounded flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visitar
          </a>
        </div>
      </div>
    </div>
  )
}

export default Cards

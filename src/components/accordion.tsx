/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full mx-auto max-w-4xl">
      <div className="bg-white shadow-md rounded my-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-2 text-left"
        >
          <h2 className="font-bold text-2xl">{title}</h2>
        </button>
        {isOpen && <div className="p-5">{children}</div>}
      </div>
    </div>
  )
}

export default Accordion

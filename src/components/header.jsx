import React from "react"
//Icons
import { RiMenu3Fill, RiSearchLine } from "react-icons/ri"

const Header = () => {
  return(
    <header className="flex items-center justify-between xl:justify-center py-2 px-0 h-[10vh] z-50 xl:w-full">
      <div className="xl:w-1/6 text-center">
        <button
          type="button"
          className="font-semibold hover:bg-third transition-colors duration-450 py-2 px-6 bg-primary text-white rounded-xl"
        >
          Ingresa
        </button>
      </div>
      <div className="xl:w-full text-center">
        <a href="#" className="text-5xl font-bold relative p-0 text-secondary hover:text-primary transition-colors duration-500">
          jReboot
        </a>
      </div>
      <div className="xl:w-1/6 items-center flex flex-col md:flex-row">
        <button
          className="text-xl p-3"
        > 
          <RiSearchLine />
        </button>
        <button
          className="text-xl p-3"
        > 
          <RiMenu3Fill />
        </button>
      </div>
    </header>
  )
}

export default Header
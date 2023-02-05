import React, { useState } from "react"
//Icons
import { RiCloseLine, RiMenu3Fill, RiSearchLine } from "react-icons/ri"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  return(
    <header className="flex items-center justify-between xl:justify-center py-2 px-0 h-[10vh] z-50 xl:w-full">
      <div className="xl:w-1/6 text-center hidden xl:block">
        <button
          type="button"
          className="font-semibold hover:bg-bg-third transition-colors duration-450 py-2 px-6 bg-primary text-white rounded-xl"
        >
          Ingresa
        </button>
      </div>
      <div className="xl:w-full text-center">
        <a href="#" className="text-5xl font-bold relative p-0 text-secondary hover:text-primary transition-colors duration-500 ml-3 xl:-ml-2">
          jReboot
        </a>
      </div>
      <nav
        className={`fixed bg-primary text-white font-bold text-xl w-[80%] md:w-[40%] h-full xl:hidden ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-6 transition-all duration-500 z-500`}
      >
        <a href="#" className="text-6xl text-decoration-line:overline">
          jReboot
        </a>
        <span className=""></span>
        <a href="#home" className="hover:bg-third transition-colors duration-300">
          Ultimas Noticias
        </a>
        <a href="#aboutUs" className="hover:bg-third transition-colors duration-300">
          Economia
        </a>
        <a href="#services" className="hover:bg-third transition-colors duration-300">
          Internacional
        </a>
        <a href="#aboutUs" className="hover:bg-third transition-colors duration-300">
          Deportes
        </a>
        <a href="#aboutUs" className="hover:bg-third transition-colors duration-300">
          Politica
        </a>
        <a href="#services" className="hover:bg-third transition-colors duration-300">
          Salud
        </a>
        <a href="#aboutUs" className="hover:bg-third transition-colors duration-300">
          Cultura
        </a>
        <a href="#aboutUs" className="hover:bg-third transition-colors duration-300">
          Tecnologia
        </a>
        <a href="#services" className="hover:bg-third transition-colors duration-300">
          Internacional
        </a>
        <a href="#services" className="hover:bg-third transition-colors duration-300 w-full text-center py-2 bg-red-500">
          Opinión
        </a>
      </nav>
      <div className="xl:w-1/6 items-center flex flex-col md:flex-row">
        <button
          className="text-xl p-3 hidden xl:block"
        > 
          <RiSearchLine />
        </button>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl p-3 xl:hidden"
        > 
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </div>
    </header>
  )
}

export default Header
import React from "react"

const Menuxl = () => {
  return(
    <div className="hidden xl:block">
      <nav
        className="text-white bg-primary mt-2 font-semibold text-100 xl:w-full h-full xl:static flex-1 justify-between px-8 flex flex-col xl:flex-row items-center justify-center"
      >
        <a href="#home" className="hover:bg-third transition-colors duration-300 py-1 px-5">
          Ultimas Noticias
        </a>
        <a href="#aboutUs" className="hover:bg-third transition-colors duration-300 py-1 px-5">
          Economia
        </a>
        <a href="#services" className="hover:bg-third transition-colors duration-300 py-1 px-5">
          Internacional
        </a>
        <a href="#aboutUs" className="hover:bg-third transition-colors duration-300 py-1 px-5">
          Deportes
        </a>
        <a href="#aboutUs" className="hover:bg-third transition-colors duration-300 py-1 px-5">
          Politica
        </a>
        <a href="#services" className="hover:bg-third transition-colors duration-300 py-1 px-5">
          Salud
        </a>
        <a href="#aboutUs" className="hover:bg-third transition-colors duration-300 py-1 px-5">
          Cultura
        </a>
        <a href="#aboutUs" className="hover:bg-third transition-colors duration-300 py-1 px-5">
          Tecnologia
        </a>
        <a href="#services" className="hover:bg-third transition-colors duration-300 py-1 px-5">
          Internacional
        </a>
        <a href="#services" className="hover:bg-third transition-colors duration-300 py-1 bg-red-500 px-5">
          Opinión
        </a>
      </nav>
    </div>
  )
}

export default Menuxl
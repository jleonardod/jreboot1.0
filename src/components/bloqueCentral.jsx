import React from "react"
import NoticiaCentral from "./sub-components/noticiaPrincipal"

const BloqueCentral = () => {
  return(
    <div className="p-8 xl:p-20">
      <div className="grid grid-cols-1 xl:grid-cols-10 gap-8">
        {/* Noticia Principal */}
        <NoticiaCentral />
        <div className="grid grid-cols-1 md:col-span-3 md:grid-cols-1 gap-8">
          <div className="flex flex-col gap-4">
            <img src="work2.png" className="w-full h-56 object-cover rounded-3xl" />
            <p className="text-gray-500">App Design - June 20, 2022</p>
            <h3 className="text-2xl font-bold">Redesign channel website landing page</h3>
          </div>
          <div className="flex flex-col gap-4">
            <img src="work3.png" className="w-full h-56 object-cover rounded-3xl" />
            <p className="text-gray-500">App Design - June 20, 2022</p>
            <h3 className="text-2xl font-bold">New Locator App For a New Company</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BloqueCentral
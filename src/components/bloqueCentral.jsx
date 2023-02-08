import React, {useState} from "react"
import BloqueSecundario from "./sub-components/bloqueSecundario"
import NoticiaCentral from "./sub-components/noticiaPrincipal"

const BloqueCentral = () => {

  return(
    <div className="p-14">
      <div className="grid grid-cols-1 xl:grid-cols-10 gap-0">
        {/* Noticia Principal */}
        <NoticiaCentral />
        {/* Bloque Lateral */}
        <BloqueSecundario />
      </div>
    </div>
  )
}

export default BloqueCentral
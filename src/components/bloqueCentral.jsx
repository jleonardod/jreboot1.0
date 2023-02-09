import React, {useState} from "react"
import BloqueSecundario from "./sub-components/bloqueSecundario"
import NoticiaCentral from "./sub-components/noticiaPrincipal"

const BloqueCentral = () => {

  return(
    <div className="xl:p-14 px-4 py-4">
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
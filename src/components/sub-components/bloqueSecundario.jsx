import React, {useState} from "react"

const BloqueSecundario = () => {
  const [showOpinion, setShowOpinion] = useState(true)
  const [showSocial, setShowSocial] = useState(false)
  const [showAudios, setShowAudios] = useState(false)

  const habilitarOpinion = () => {
    setShowOpinion(true)
    setShowSocial(false)
    setShowAudios(false)
    console.log("Opinion Habilitada")
  }

  const habilitarSocial = () => {
    setShowOpinion(false)
    setShowSocial(true)
    setShowAudios(false)
    console.log("Social Habilitada")
  }

  const habilitarAudios = () => {
    setShowOpinion(false)
    setShowSocial(false)
    setShowAudios(true)
    console.log("Audios Habilitada")
  }
  
  return(
    <div className="grid grid-cols-1 relative md:col-span-3 md:grid-cols-1 gap-0">
      <nav
        className="w-full h-[3rem] absolute flex-1 justify-between flex flex-row items-center justify-center bg-secondary text-white font-bold"
      >
        <a 
          href="#" 
          onClick={habilitarOpinion}
          className={`hover:bg-primary transition-colors duration-300 py-3 px-5 ${ showOpinion ? "border-b-4 border-fourth" : "border-none"} h-full`}
        >
          Opinión
        </a>
        <a href="#" onClick={habilitarSocial} className={`hover:bg-primary transition-colors duration-300 py-3 px-5 ${ showSocial ? "border-b-4 border-fourth" : "border-none"} h-full`}>
          Social
        </a>
        <a href="#" onClick={habilitarAudios} className={`hover:bg-primary transition-colors duration-300 py-3 px-5 ${ showAudios ? "border-b-4 border-fourth" : "border-none"} h-full`}>
          Audios
        </a>
      </nav>
      <div className={`mt-[3rem] p-3 h-full ${ showOpinion && !showSocial && !showAudios ? "block" : "hidden" }`}>
        Opinion
      </div>
      <div className={`mt-[3rem] p-3 h-full ${ showSocial && !showOpinion && !showAudios ? "block" : "hidden" }`}>
        Social
      </div>
      <div className={`mt-[3rem] p-3 h-full ${ showAudios && !showSocial && !showOpinion ? "block" : "hidden" }`}>
        Audios
      </div>
    </div>
  )
}

export default BloqueSecundario
import React, {useState} from "react"
import { TwitterTimelineEmbed} from 'react-twitter-embed'
import ReactAudioPlayer from 'react-audio-player'

const BloqueSecundario = () => {
  const [showOpinion, setShowOpinion] = useState(true)
  const [showSocial, setShowSocial] = useState(false)
  const [showAudios, setShowAudios] = useState(false)

  const habilitarOpinion = () => {
    setShowOpinion(true)
    setShowSocial(false)
    setShowAudios(false)
  }

  const habilitarSocial = () => {
    setShowOpinion(false)
    setShowSocial(true)
    setShowAudios(false)
  }

  const habilitarAudios = () => {
    setShowOpinion(false)
    setShowSocial(false)
    setShowAudios(true)
  }

  return(
    <div className="grid grid-cols-1 relative md:col-span-3 md:grid-cols-1 gap-0">
      <nav
        className="w-full h-[3rem] absolute flex-1 justify-between flex flex-row items-center justify-center bg-secondary text-white font-bold"
      >
        <a 
          href="#" 
          onClick={habilitarOpinion}
          className={`hover:bg-primary transition-colors duration-300 py-3 px-5 
          ${ showOpinion ? "border-b-4 border-fourth" : "border-none"} h-full`}
        >
          Opinión
        </a>
        <a 
          href="#" 
          onClick={habilitarSocial} 
          className={`hover:bg-primary transition-colors duration-300 py-3 px-5 
          ${ showSocial ? "border-b-4 border-fourth" : "border-none"} h-full`}
        >
          Social
        </a>
        <a 
          href="#" 
          onClick={habilitarAudios} 
          className={`hover:bg-primary transition-colors duration-300 py-3 px-5 
          ${ showAudios ? "border-b-4 border-fourth" : "border-none"} h-full`}
        >
          Audios
        </a>
      </nav>
      <div className={`mt-[3rem] h-full ${ showOpinion && !showSocial && !showAudios ? "block" : "hidden" }`}>
        <nav className="w-full gap-4">
          <div className="w-full p-4 pl-4 pb-2 hover:bg-gray-100 transition-color duration-300 bg-blue-200 flex flex-row gap-3 bg-white border-b-2 border-gray-300">
            <img 
              src="https://www.elespectador.com/resizer/Z-Z_SkaZNyKzi8GrtbuhUTk68xg=/120x120/filters:quality(80):format(jpeg)/s3.amazonaws.com/arc-authors/elespectador/18f1e866-7cd2-4ffd-9939-03e2c5bd68fb.png"
              className="w-20 h-20 object-cover rounded-full ring-2 ring-gray-300 cursor-pointer"/>
            <div>
              <a href="#" className="text-[1rem] hover:underline transition-all duration-200 font-black">¿Qué es la mutilación genital femenina y cómo acabar con esta práctica?</a>
              <br />
              <a href="#" className="font-semibold text-[0.8rem]">Las Igualadas</a>
              <p className="text-gray-500 text-[0.8rem]">6 feb. 2023 - 12:00 p. m</p>
            </div>
          </div>
          <div className="w-full p-4 pl-4 pb-2 hover:bg-gray-100 transition-color duration-300 bg-blue-200 flex flex-row gap-3 bg-white border-b-2 border-gray-300">
            <img 
              src="https://www.elespectador.com/resizer/zwsP1b0EnEy49x-TXvQ9vBDQnDw=/120x120/filters:quality(80):format(jpeg)/s3.amazonaws.com/arc-authors/elespectador/39e31163-ba9b-4c30-a9a6-13e6cff17d12.png"
              className="w-20 h-20 object-cover rounded-full ring-2 ring-gray-300 cursor-pointer"/>
            <div>
              <a href="#" className="text-[1rem] hover:underline transition-all duration-200 font-black">Columna de Antonio Casale: La sede de la selección</a>
              <br />
              <a href="#" className="font-semibold text-[0.8rem]">Antonio Casale</a>
              <p className="text-gray-500 text-[0.8rem]">6 feb. 2023 - 12:00 p. m</p>
            </div>
          </div>
          <div className="w-full p-4 pl-4 pb-2 hover:bg-gray-100 transition-color duration-300 bg-blue-200 flex flex-row gap-3 bg-white border-b-2 border-gray-300">
            <img 
              src="https://www.elespectador.com/resizer/K0ZGoBDeKgEpLc2pOvo7SK7z8gg=/120x120/filters:quality(80):format(jpeg)/s3.amazonaws.com/arc-authors/elespectador/e28afff8-99e3-4313-af10-eda5917910ff.png"
              className="w-20 h-20 object-cover rounded-full ring-2 ring-gray-300 cursor-pointer"/>
            <div>
              <a href="#" className="text-[1rem] hover:underline transition-all duration-200 font-black">¿Libertad de expresión o irresponsabilidad?</a>
              <br />
              <a href="#" className="font-semibold text-[0.8rem]">Cartas de los lectores</a>
              <p className="text-gray-500 text-[0.8rem]">5 feb. 2023 - 9:05 p. m.</p>
            </div>
          </div>
          <div className="w-full p-4 pl-4 pb-2 hover:bg-gray-100 transition-color duration-300 bg-blue-200 flex flex-row gap-3 bg-white border-b-2 border-gray-300">
            <img 
              src="https://www.elespectador.com/resizer/MuXRIhopVblpEZ_ZGUj8xuLDBR4=/120x120/filters:quality(80):format(jpeg)/s3.amazonaws.com/arc-authors/elespectador/0269a791-dccf-45da-a1db-6cfc45e8c27f.png"
              className="w-20 h-20 object-cover rounded-full ring-2 ring-gray-300 cursor-pointer"/>
            <div>
              <a href="#" className="text-[1rem] hover:underline transition-all duration-200 font-black">Ponernos al día o cambiar</a>
              <br />
              <a href="#" className="font-semibold text-[0.8rem]">Fernando Barbosa</a>
              <p className="text-gray-500 text-[0.8rem]">5 feb. 2023 - 9:05 p. m</p>
            </div>
          </div>
        </nav>
      </div>
      <div className={`mt-[3rem] p-0 h-full ${ showSocial && !showOpinion && !showAudios ? "block" : "hidden" }`}>
        <nav className="w-full gap-4">
          <TwitterTimelineEmbed
            data-chrome="noheader"
            sourceType="profile"
            screenName="elespectador"
            options={{height: 400}}
          />
        </nav>
      </div>
      <div className={`mt-[3rem] p-0 h-full ${ showAudios && !showSocial && !showOpinion ? "block" : "hidden" }`}>
        <nav className="w-full gap-4">
          <div className="w-full p-4 pl-4 pb-2 hover:text-white hover:bg-third transition-color duration-200 bg-blue-200 gap-3 bg-white border-b-2 border-gray-300">
            <div className="flex flex-row gap-3">
              <img 
                src="avatar1.jpg"
                className="w-16 h-16 object-cover rounded-full ring-2 ring-gray-300 cursor-pointer"/>
              <div>
                <a href="#" className="text-[1rem] hover:underline transition-all duration-200 font-black">¿Hasta cuando "Presidente" Petro?</a>
              </div>
            </div>
            <ReactAudioPlayer
              src="https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3"
              controls
              className="bg-gray-100 w-full mt-2"
            />
          </div>
          <div className="w-full p-4 pl-4 pb-2 hover:text-white hover:bg-third transition-color duration-200 bg-blue-200 gap-3 bg-white border-b-2 border-gray-300">
            <div className="flex flex-row gap-3">
              <img 
                src="avatar2.jpg"
                className="w-16 h-16 object-cover rounded-full ring-2 ring-gray-300 cursor-pointer"/>
              <div>
                <a href="#" className="text-[1rem] hover:underline transition-all duration-200 font-black">Respeto con o sin sangre</a>
              </div>
            </div>
            <ReactAudioPlayer
              src="https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3"
              controls
              className="bg-gray-100 w-full mt-2"
            />
          </div>
          <div className="w-full p-4 pl-4 pb-2 hover:text-white hover:bg-third transition-color duration-200 bg-blue-200 gap-3 bg-white border-b-2 border-gray-300">
            <div className="flex flex-row gap-3">
              <img 
                src="avatar3.jpg"
                className="w-16 h-16 object-cover rounded-full ring-2 ring-gray-300 cursor-pointer"/>
              <div>
                <a href="#" className="text-[1rem] hover:underline transition-all duration-200 font-black">El peor gabinete imaginado</a>
              </div>
            </div>
            <ReactAudioPlayer
              src="https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3"
              controls
              className="bg-gray-100 w-full mt-2"
            />
          </div>
          <div className="w-full p-4 pl-4 pb-2 hover:text-white hover:bg-third transition-color duration-200 bg-blue-200 gap-3 bg-white border-b-2 border-gray-300">
            <div className="flex flex-row gap-3">
              <img 
                src="avatar4.jpg"
                className="w-16 h-16 object-cover rounded-full ring-2 ring-gray-300 cursor-pointer"/>
              <div>
                <a href="#" className="text-[1rem] hover:underline transition-all duration-200 font-black">El daño al FPC es irreparable</a>
              </div>
            </div>
            <ReactAudioPlayer
              src="https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3"
              controls
              className="bg-gray-100 w-full mt-2"
            />
          </div>
        </nav>
      </div>
    </div>
  )
}

export default BloqueSecundario
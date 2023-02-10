import React from "react"

const BloquePrincipal = () =>{
  return (
    <div className="flex flex-col md:col-span-7 gap-2 pb-4">
      <h1 className="xl:text-4xl text-2xl font-black">
        Terremoto en Turquía: cifra de muertos podría multiplicarse por ocho, según la OMS
      </h1>
      <div className="grid xl:grid-cols-6 gap-4">
        <div className="grid grid-cols-1 md:col-span-2 md:grid-cols-1 gap-2 pt-5 xl:text-[1.2rem] text-[1.05rem]">
          <p className="border-b-[1.5px] border-solid border-gray-400 pb-4 xl:pb-4">Nuevos balances han contabilizado que hay al menos 2.600 personas muertas luego del sismo en el borde occidental de Europa.</p>
          <p className="">“Garantizamos a la  ONU que estamos dispuestos a ayudar y coordinar la entrega de ayuda humanitaria a todos los sirios en todo el territorio”</p>
        </div>
        <div className="flex flex-col md:col-span-4">
          <img 
            src="https://www.elespectador.com/resizer/n1Nw_aYuF74iigyiEQQgK5MJcgc=/584x389/filters:quality(80):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/HPIGJVOSIZHZ3OR4CAJFUZSBME.jpg" 
            className="xl:pr-8 object-cover" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 justify-between">
        <div className="bg-white p-2 flex flex-col hover:bg-gray-200 transition-color duration-300 border-r-2 border-gray-200">
          <a href="#">
            <img 
              src="https://www.elespectador.com/resizer/yLM5uZG2QkK7785D2-4H4LDXVXg=/258x172/filters:quality(80):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/MYYUGD6XXZFNTN2VJHJOJ37T2E.jpeg" 
            />
          </a>
          <a href="#">
            <h3 className="text-secondary font-semibold text-[1rem] hover:underline transition-all duration-200">Deportes</h3>
          </a>
          <a href="#">
            <h2 className="text-xl">Colombia, ya clasificado al Mundial Sub-20, enfrenta a Brasil en El Campín</h2>
          </a>
        </div>
        <div className="bg-white p-2 flex flex-col hover:bg-gray-200 transition-color duration-300 border-r-2 border-gray-200">
          <a href="#">
            <img 
              src="https://www.elespectador.com/resizer/InMnnqB4CjO3WtuXkn05WE75etE=/287x191/filters:quality(80):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/CZZCFZMW6ZCO7EAS2RDQL4ZRY4.jpg" 
            />
          </a>
          <a href="#">
            <h3 className="text-secondary font-semibold text-[1rem] hover:underline transition-all duration-200">Politica</h3>
          </a>
          <a href="#">
            <h2 className="text-xl">Samuel Moreno se encuentra en UCI tras sufrir infarto en estación de Policía en Bogotá</h2>
          </a>
        </div>
        <div className="bg-white p-2 flex flex-col hover:bg-gray-200 transition-color duration-300 border-r-2 border-gray-200">
          <a href="#">
            <img 
              src="https://www.elespectador.com/resizer/ADwB1b5z2pzooZYZCppdxK-rlTY=/287x191/filters:quality(80):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/7ADZE37LDJAYBBMR643AKDH5A4.jpg" 
            />
          </a>
          <a href="#">
            <h3 className="text-secondary font-semibold text-[1rem] hover:underline transition-all duration-200">Cultura</h3>
          </a>
          <a href="#">
            <h2 className="text-xl">“The Last of Us”, actriz de la serie se defiende ante críticas sobre su cuerpo</h2>
          </a>
        </div>
        <div className="bg-white p-2 flex flex-col hover:bg-gray-200 transition-color duration-300 border-r-2 border-gray-200">
          <a href="#">
            <img 
              src="https://www.elespectador.com/resizer/gKzmE0d2avgNqt3PW7viQHK9qxI=/287x191/filters:quality(80):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/VAVRF6SXEZDGZMYM6DM2HEJHYM.jpg" 
            />
          </a>
          <a href="#">
            <h3 className="text-secondary font-semibold text-[1rem] hover:underline transition-all duration-200">Internacional</h3>
          </a>
          <a href="#">
            <h2 className="text-xl">Los terremotos más mortíferos del siglo: la esperanza se apaga en Turquía</h2>
          </a>
        </div>
      </div>
    </div>
  )
}

export default BloquePrincipal
import React from "react"

const BloquePrincipal = () =>{
  return (
    <div className="flex flex-col md:col-span-7 gap-2 pb-4">
      <h1 className="xl:text-4xl text-2xl font-black">
        Terremoto en Turquía: cifra de muertos podría multiplicarse por ocho, según la OMS
      </h1>
      <div className="grid xl:grid-cols-6 gap-4 border-b-2 border-gray-200 pb-2">
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
      <div className="grid xl:grid-cols-4 grid-cols-1 gap-2 justify-between">
        <div className="w-full p-2 xl:flex xl:flex-col grid grid-cols-2 hover:bg-gray-200 transition-color duration-300 border-r-2 border-b-2 border-gray-200">
          <div className="md:col-span-1 w-[8rem] xl:w-full">
            <a href="#">
              <img 
                src="https://www.elespectador.com/resizer/yLM5uZG2QkK7785D2-4H4LDXVXg=/258x172/filters:quality(80):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/MYYUGD6XXZFNTN2VJHJOJ37T2E.jpeg" 
              />
            </a>
          </div>
          <div className="xl:flex xl:flex-col md:colspan-1 -ml-8 xl:ml-0">
            <a href="#">
              <h3 className="text-secondary font-semibold text-[1rem] hover:underline transition-all duration-200">Deportes</h3>
            </a>
            <a href="#">
              <h2 className="text-xl">Colombia, ya clasificado al Mundial Sub-20, enfrenta a Brasil en El Campín</h2>
            </a>
          </div>
        </div>
        <div className="w-full p-2 xl:flex xl:flex-col grid grid-cols-2 hover:bg-gray-200 transition-color duration-300 border-r-2 border-b-2 border-gray-200">
          <div className="md:col-span-1 w-[8rem] xl:w-full">
            <a href="#">
              <img 
                src="https://www.elespectador.com/resizer/InMnnqB4CjO3WtuXkn05WE75etE=/287x191/filters:quality(80):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/CZZCFZMW6ZCO7EAS2RDQL4ZRY4.jpg" 
              />
            </a>
          </div>
          <div className="xl:flex xl:flex-col md:colspan-1 -ml-8 xl:ml-0">
            <a href="#">
              <h3 className="text-secondary font-semibold text-[1rem] hover:underline transition-all duration-200">Politica</h3>
            </a>
            <a href="#">
              <h2 className="text-xl">Samuel Moreno se encuentra en UCI tras sufrir infarto en estación de Policía en Bogotá</h2>
            </a>
          </div>
        </div>
        <div className="w-full p-2 xl:flex xl:flex-col grid grid-cols-2 hover:bg-gray-200 transition-color duration-300 border-r-2 border-b-2 border-gray-200">
          <div className="md:col-span-1 w-[8rem] xl:w-full">
            <a href="#">
              <img 
                src="https://www.elespectador.com/resizer/ADwB1b5z2pzooZYZCppdxK-rlTY=/287x191/filters:quality(80):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/7ADZE37LDJAYBBMR643AKDH5A4.jpg" 
              />
            </a>
          </div>
          <div className="xl:flex xl:flex-col md:colspan-1 -ml-8 xl:ml-0">
            <a href="#">
              <h3 className="text-secondary font-semibold text-[1rem] hover:underline transition-all duration-200">Cultura</h3>
            </a>
            <a href="#">
              <h2 className="text-xl">“The Last of Us”, actriz de la serie se defiende ante críticas sobre su cuerpo</h2>
            </a>
          </div>
        </div>
        <div className="w-full p-2 xl:flex xl:flex-col grid grid-cols-2 hover:bg-gray-200 transition-color duration-300 border-r-2 border-b-2 border-gray-200">
          <div className="md:col-span-1 w-[8rem] xl:w-full">
            <a href="#">
              <img 
                src="https://www.elespectador.com/resizer/gKzmE0d2avgNqt3PW7viQHK9qxI=/287x191/filters:quality(80):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/VAVRF6SXEZDGZMYM6DM2HEJHYM.jpg" 
              />
            </a>
          </div>
          <div className="xl:flex xl:flex-col md:colspan-1 -ml-8 xl:ml-0">
            <a href="#">
              <h3 className="text-secondary font-semibold text-[1rem] hover:underline transition-all duration-200">Internacional</h3>
            </a>
            <a href="#">
              <h2 className="text-xl">Los terremotos más mortíferos del siglo: la esperanza se apaga en Turquía</h2>
            </a>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-primary text-xl text-secondary font-bold">
        Noticias del dia
      </div>
      <div className="">
        <nav className="w-full ">
          <div className="grid xl:grid-cols-7 grid-cols-8 hover:bg-gray-200 transition-color duration-300"> 
            <div className="xl:md:col-span-1 col-span-2">
              <a href="">
                <img 
                  src="https://www.elespectador.com/resizer/4tuPfxLXL1qsp8QUwWxbRsGUxek=/525x350/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/SKEWFAAZOFE2PEIBRWTM44NVUE.jpg"
                  className="object-cover xl:w-36 w-full xl:mt-4 mt-10 rounded-xl"
                />
              </a>
            </div>
            <div className="xl:md:col-span-5 col-span-5 p-3 cursor-pointer xl:w-full">
              <a href="#">
                <h3 className="text-secondary font-semibold text-[1rem] hover:underline transition-all duration-200">Politica</h3>
              </a>
              <a href="#">
                <h2 className=" text-xl hover:underline transition-all duration-200">Así será el programa de autoentrevistas de la Casa de Nariño</h2>
              </a>
              <p className="text-gray-500 mt-2">Hace 53 Minutos</p>
            </div>
            <div className="md:col-span-1 xl:w-[3rem] bg-secondary col-span-1 xl:ml-20 cursor-pointer pl-2">
              <p className="text-[#B4FFD8] font-semibold text-7xl mt-6">1</p>
            </div>
          </div>
          <div className="grid xl:grid-cols-7 grid-cols-8 hover:bg-gray-200 transition-color duration-300"> 
            <div className="xl:md:col-span-1 col-span-2">
              <a href="">
                <img 
                  src="https://www.elespectador.com/resizer/Vci2XoKjRIaTo5X4yV-nE2tlzSo=/525x350/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/L5HKA52JMBD4NLQFNK2QL7J3IA.jpg"
                  className="object-cover xl:w-36 w-full xl:mt-4 my-10 rounded-xl"
                />
              </a>
            </div>
            <div className="xl:md:col-span-5 col-span-5 p-3 cursor-pointer xl:w-full">
              <a href="#">
                <h3 className="text-secondary font-semibold text-[1rem] hover:underline transition-all duration-200">Politica</h3>
              </a>
              <a href="#">
                <h2 className="text-xl hover:underline transition-all duration-200">Los argumentos para demandar la reforma tributaria de Petro</h2>
              </a>
              <p className="text-gray-500 mt-2">Hace 39 Minutos</p>
            </div>
            <div className="md:col-span-1 xl:w-[3rem] bg-secondary col-span-1 xl:ml-20 cursor-pointer pl-1">
              <p className="text-[#B4FFD8] font-semibold text-7xl mt-6">2</p>
            </div>
          </div>
          <div className="grid xl:grid-cols-7 grid-cols-8 hover:bg-gray-200 transition-color duration-300"> 
            <div className="xl:md:col-span-1 col-span-2">
              <a href="">
                <img 
                  src="https://www.elespectador.com/resizer/nxgGoBFWm_Fqk_RwyyUbT5-VpR4=/525x350/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/OWRGTU23MBFFRKDAMKMAXNZJUU.jpeg"
                  className="object-cover w-36 mt-4 rounded-xl"
                />
              </a>
            </div>
            <div className="xl:md:col-span-5 col-span-5 p-3 cursor-pointer xl:w-full">
              <a href="#">
                <h3 className="text-secondary font-semibold text-[1rem] hover:underline transition-all duration-200">Politica</h3>
              </a>
              <a href="#">
                <h2 className=" text-xl hover:underline transition-all duration-200">Así fue la injerencia de EE. UU. en el conflicto colombiano: Comisión de la Verdad</h2>
              </a>
              <p className="text-gray-500 mt-2">Hace 29 Minutos</p>
            </div>
            <div className="md:col-span-1 xl:w-[3rem] bg-secondary col-span-1 xl:ml-20 cursor-pointer pl-1">
              <p className="text-[#B4FFD8] font-semibold text-7xl mt-6">3</p>
            </div>
          </div>
          <div className="grid xl:grid-cols-7 grid-cols-8 hover:bg-gray-200 transition-color duration-300"> 
            <div className="xl:md:col-span-1 col-span-2">
              <a href="">
                <img 
                  src="https://www.elespectador.com/resizer/z_jn4TrEzsKecMcYw9a3rfg8UT0=/525x350/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/L76LTRJBZJG4DMXUV7IK6E6LGE.jpg"
                  className="object-cover w-36 mt-4 rounded-xl"
                />
              </a>
            </div>
            <div className="xl:md:col-span-5 col-span-5 p-3 cursor-pointer xl:w-full">
              <a href="#">
                <h3 className="text-secondary font-semibold text-[1rem] hover:underline transition-all duration-200">Deportes</h3>
              </a>
              <a href="#">
                <h2 className=" text-xl hover:underline transition-all duration-200">Linda Caicedo fue elegida por la IFFHS como la mejor jugadora joven de Sudamérica</h2>
              </a>
              <p className="text-gray-500 mt-2">Hace 3 Horas</p>
            </div>
            <div className="md:col-span-1 xl:w-[3rem] bg-secondary col-span-1 xl:ml-20 cursor-pointer pl-1">
              <p className="text-[#B4FFD8] font-semibold text-7xl mt-6">4</p>
            </div>
          </div>
          <div className="grid xl:grid-cols-7 grid-cols-8 hover:bg-gray-200 transition-color duration-300"> 
            <div className="xl:md:col-span-1 col-span-2">
              <a href="">
                <img 
                  src="https://www.elespectador.com/resizer/9khgYj2M1nI8276PmZhQ8x4NXS4=/525x350/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/ZHTHZZNDKBDOVJNYRQU2OBGWRE.jpg"
                  className="object-cover w-36 mt-4 rounded-xl"
                />
              </a>
            </div>
            <div className="xl:md:col-span-5 col-span-5 p-3 cursor-pointer xl:w-full">
              <a href="#">
                <h3 className="text-secondary font-semibold text-[1rem] hover:underline transition-all duration-200">Judicial</h3>
              </a>
              <a href="#">
                <h2 className=" text-xl hover:underline transition-all duration-200">Capturan a Ana Catalina Noguera, exjefe de Finanzas Criminales de la Fiscalía</h2>
              </a>
              <p className="text-gray-500 mt-2">Hace 3 Horas</p>
            </div>
            <div className="md:col-span-1 xl:w-[3rem] bg-secondary col-span-1 xl:ml-20 cursor-pointer pl-1">
              <p className="text-[#B4FFD8] font-semibold text-7xl mt-6">5</p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default BloquePrincipal
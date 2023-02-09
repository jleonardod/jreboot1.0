import React from "react"

const NoticiaCentral = () =>{
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
    </div>
  )
}

export default NoticiaCentral
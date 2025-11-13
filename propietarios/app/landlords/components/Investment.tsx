import Image from "next/image";

export function Investment() {
  return (

    <section className="relative w-full">

    {/* Wrapper proporcional */}
    <div className="relative w-full aspect-[2001/1234] min-h-[700px]">
      
      {/* SVG sin deformación */}
      <svg
        viewBox="0 0 2001 1234"
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M0 686.584V0s400.449 191.911 960.247 191.911c536.935 0 1040.614-191.911 1040.614-191.911v1053.793s-270.892-75.533-995.581-75.533C143.106 978.26 0 1233.91 0 1233.91V686.584Z"
          fill="#cfe0dc"
        />
      </svg>
  
      {/* CONTENIDO ENCIMA DEL SVG */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
      <div className="
        flex flex-col md:flex-row 
        items-center justify-between 
        w-full max-w-[1440px] 
        px-6 sm:px-10 md:px-20 lg:px-[10rem] 
        gap-8 md:gap-12
      ">

    {/* IMAGE */}
    <div className="
      relative
      w-full
      max-w-[220px]
      sm:max-w-[300px]
      md:max-w-[380px]
      lg:max-w-[440px]
      xl:max-w-[500px]
      aspect-[488/480]
      overflow-hidden 
      rounded-3xl 
      shadow-lg 
      flex-shrink-0
    ">
      <Image
        src="/investment-ceos-img.jpg"
        alt="Picture Investment Ceos"
        width={488}
        height={480}
        className="object-cover w-full h-full"
        priority
      />
    </div>


    {/* TEXT BLOCK */}
    <div className="max-w-xl text-gray-800 flex-1 text-center md:text-left">

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
        Convierte tu propiedad en una inversión segura y rentable
      </h2>

      <p className="text-base sm:text-lg lg:text-xl mb-4">
        Nuestro equipo de expertos en Real Estate y diseño gestiona tu
        espacio de principio a fin, maximizando ocupación y valor, sin que tengas
        que preocuparte por nada.
      </p>

      <p className="text-base sm:text-lg lg:text-xl mb-8">
        Ya son más de 200 propietarios los que confían en Enso para obtener
        ingresos estables con una gestión profesional y cercana.
      </p>

      <button className="bg-[#534741] text-white px-6 py-2 rounded-full hover:bg-[#403530] transition">
        Contacta con Enso
      </button>

    </div>

    </div>
  </div>
  </div>

  </section>
    
  );
}
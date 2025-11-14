import Image from "next/image";

export function RentWithStyle() {
  return (
    <section
      className="flex flex-col text-black gap-[3rem]" // 160px = 10rem | 48px entre secciones
    >
      {/* Bloque título y descripción */}
      <section className="flex flex-col gap-[1.5rem]"> {/* 24px = 1.5rem */}
        <h3 className="text-3xl md:text-4xl font-semibold text-gray-700 text-left">
          Alquila tu propiedad con estilo
        </h3>
        <p className="text-gray-600 leading-relaxed text-base md:text-lg text-left">
          En Enso, entendemos que cada detalle importa. Nuestro equipo de diseño
          optimiza y revaloriza cada propiedad, combinando estética,
          funcionalidad y experiencia del usuario para crear espacios que
          enamoran y generan mayor rentabilidad.
        </p>
      </section>
      <section
        aria-labelledby="city-images"
        className="flex flex-col md:flex-row gap-[2rem] w-full"
      >
        {/* Imagen 1: city center (texto dentro del archivo) */}
        <div className="relative flex-1 overflow-hidden rounded-lg aspect-[555/361] min-h-[361px]">
        <Image
            src="/centrociudadgood.png"
            alt="City Center Picture"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Banda inferior con altura fija y padding */}
        <div className="absolute bottom-0 left-0 w-full h-[7.22rem] bg-[#ADD1CC]/70 flex flex-col gap-[0.72rem] py-[2rem] px-[1.5rem]">
            <p className="text-dark-licorice font-sans-custom text-base font-[600] leading-[100%] not-italic">
                Espacios de primer nivel
            </p>
            <h3 className="text-dark-taupe font-playfair-custom text-2xl font-bold leading-[100%] not-italic">
                en el centro de la ciudad
            </h3>
        </div>
        </div>

        {/* Imagen 2: ocupación anual (texto superpuesto) */}
        <div className="flex-1 relative overflow-hidden rounded-lg aspect-[555/361] min-h-[361px]">
        <Image
            src="/ocupacionanual.png"
            alt="Occupation Picture"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
        />

        {/* Banda inferior con altura fija y padding */}
        <div className="absolute bottom-0 left-0 w-full h-[7.22rem] bg-[#ADD1CC]/70 flex flex-col gap-[0.72rem] py-[2rem] px-[1.5rem]">
            <p className="text-dark-licorice font-sans-custom text-base font-[600] leading-[100%] not-italic">
                Rentabilidad anual garantizada
            </p>
            <h3 className="text-dark-taupe font-playfair-custom text-2xl font-bold leading-[100%] not-italic">
                100% de ocupación anual
            </h3>
        </div>



        </div>
        </section>
      {/* Bloque de estadísticas */}
      <section
        aria-labelledby="renting-stats"
        className="grid grid-cols-1 md:grid-cols-2 gap-[2rem]" // 32px entre artículos
      >
        <h2 id="renting-stats" className="sr-only">
          Nuestras métricas clave
        </h2>

        {/* Ocupación */}
        <article className="bg-slate-50 rounded-xl p-8 shadow-sm text-left">
          <h3 className="text-4xl font-extrabold text-gray-900">100%</h3>
          <h4 className="text-lg font-medium text-gray-800 mt-2">Ocupación</h4>
          <p className="text-gray-600 mt-3 text-sm leading-relaxed">
            A través de nuestro sistema de venta y creación de comunidad
            conseguimos mantener una ocupación completa en todos nuestros
            espacios más una lista de espera.
          </p>
        </article>

        {/* Inversión conseguida */}
        <article className="bg-slate-50 rounded-xl p-8 shadow-sm text-left">
          <h3 className="text-4xl font-extrabold text-gray-900">€6.5M</h3>
          <h4 className="text-lg font-medium text-gray-800 mt-2">
            Inversión conseguida
          </h4>
          <p className="text-gray-600 mt-3 text-sm leading-relaxed">
            Llevando los hitos al día, generamos interés e inversión de partners
            como bancos, fondos de capital patrimonial e inversores privados.
          </p>
        </article>

        {/* Habitaciones */}
        <article className="bg-slate-50 rounded-xl p-8 shadow-sm text-left">
          <h3 className="text-4xl font-extrabold text-gray-900">+700</h3>
          <h4 className="text-lg font-medium text-gray-800 mt-2">
            Habitaciones
          </h4>
          <p className="text-gray-600 mt-3 text-sm leading-relaxed">
            Estamos comprometidos en ampliar nuestra cartera día tras día, sin
            sacrificar la experiencia de nuestros clientes ni la calidad del
            servicio a nuestros propietarios.
          </p>
        </article>

        {/* Valor de cartera */}
        <article className="bg-slate-50 rounded-xl p-8 shadow-sm text-left">
          <h3 className="text-4xl font-extrabold text-gray-900">€120M</h3>
          <h4 className="text-lg font-medium text-gray-800 mt-2">
            Valor de cartera
          </h4>
          <p className="text-gray-600 mt-3 text-sm leading-relaxed">
            Nuestra cartera de propiedades tiene un valor de 120 millones de
            dólares y se encuentra distribuida en Barcelona, Madrid y Valencia,
            gracias a la confianza de más de 200 propietarios satisfechos.
          </p>
        </article>
      </section>
    </section>
  );
}

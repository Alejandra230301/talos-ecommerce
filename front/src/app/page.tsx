import Footer from "@/components/primary/Footer";
import Navbar from "../components/primary/Navbar";
import Cards from "@/views/Cards";
import Banner from "@/components/primary/Banner";
import deals from "@/helpers/deals";
import CardDetail from "@/components/primary/CardDetail";
import CardsDetails from "@/views/CardsDetails";


export default function Home() {

  const ofertas = deals;
  return (
    <>
      {/* Navbar de envios */}
      <nav className="bg-green-500 ">
        <div className="flex flex-col xsm:flex-row justify-center p-2">
          <p className="text-black font-bold mx-2 text-center">Envio gratis</p>
          <p className="text-black text-center">Recibe en la puerta de tu casa sin costo</p>
        </div>
      </nav>
      <Navbar />
      {/* Primer Banner */}
      <div className='bg-slate-950 flex flex-col lg:flex-row justify-between '>
        <div className='self-center mx-16 my-6 order-last lg:order-first'>
          <p className='text-4xl md:text-5xl font-bold text-white'>Estrena tus dispositivos iPhone con <span className='text-orange-600'>Talos</span></p>
          <p className='text-2xl md:text-3xl my-2 text-white'>Envios gratis a cualquier parte del país</p>
          <button className='rounded-md bg-green-500 text-black font-bold py-2 px-3 my-2'>Conoce más</button>
        </div>
        <div className='justify-self-end hidden sm:block'>
          <img className="h-64 lg:h-full w-full object-cover" src="https://images.pexels.com/photos/2047909/pexels-photo-2047909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
      </div>
      {/* Ofertas */}
      <div className="my-12">
        <h2 className="text-4xl md:text-5xl text-orange-500 font-bold text-center mb-6">Ofertas Talos</h2>
        <div className="mx-12 lg:mx-24 ">
          <ul className="flex flex-row justify-around flex-wrap">
            {
              ofertas?.map((e) => {
                return (
                  <>
                    <li>
                      <button key={e.id} className="rounded-lg bg-white p-3 my-3">
                        <img className="h-24 w-24" src={e.image} />
                      </button>
                      <p className="text-orange-950 text-center font-bold ">{e.name}</p>
                    </li>
                  </>
                )
              })
            }
          </ul>
        </div>
      </div>
      {/* Ofertas */}
      <div className='bg-orange-950 flex flex-col lg:flex-row justify-between '>
        <div className='justify-self-end hidden sm:block'>
          <img className="h-64 lg:h-full w-full object-cover" src="bannerHome.png" />
        </div>
        <div className='self-center mx-16 my-6 p-6'>
          <p className='text-2xl my-2 text-white'>¿Necesitas ayuda para elegir un dispositivo nuevo?</p>
          <p className='text-4xl font-bold text-white'>Accede a la sección de preguntas frecuentes de la tienda en línea</p>
          <button className='rounded-md bg-orange-500 text-black font-bold py-2 px-3 my-2'>Conoce más</button>
        </div>
      </div>
      {/* Ofertas */}
      <div className="my-12">
        <h2 className="text-4xl md:text-5xl text-green-500 font-bold text-center mb-6">Conoce nuestros beneficios</h2>
        <div className="flex justify-center items-center">
          <ul className="flex flex-col lg:flex-row justify-center">
            <li className="flex flex-row w-3/4 lg:w-1/4 p-3 border-orange-950 border-dashed border rounded-lg mx-3 self-center my-3 lg:my-0">
              <div className="self-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 text-orange-950 mx-3">
                  <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex flex-col self-center">
                <p className="font-bold text-orange-950">0% de interés</p>
                <p className=" text-orange-950">Pagando con bancos aliados</p>
              </div>
            </li>
            <li className="flex flex-row w-3/4 lg:w-1/4 p-3 border-orange-950 border-dashed border rounded-lg mx-3 self-center my-3 lg:my-0" >
              <div className="self-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 text-orange-950 mx-3">
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
              </div>
              <div className="flex flex-col self-center">
                <p className="font-bold text-orange-950">Envios gratis</p>
                <p className=" text-orange-950">Envios gratis a toda Colombia</p>
              </div>
            </li>
            <li className="flex flex-row w-3/4 lg:w-1/4 p-3 border-orange-950 border-dashed border rounded-lg mx-3 self-center my-3 lg:my-0">
              <div className="self-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 text-orange-950 mx-3">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex flex-col self-center">
                <p className="font-bold text-orange-950">Recompensas</p>
                <p className=" text-orange-950">Cada punto equivale a 1 peso colombiano</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* <Cards /> */}
      <CardsDetails/>
      <Footer />
    </>
  );
}

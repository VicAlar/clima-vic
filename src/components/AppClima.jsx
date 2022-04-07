import Busqueda from "./Busqueda";
import Clima from "./Clima";
import Loading from "./Loading";
import useClima from "../hooks/useClima";

const AppClima = () => {
  const { resultadoDos, cargando, noResultado } = useClima();

  return (
    <div className="h-screen w-screen overflow-hidden bg-image bg-center bg-cover">
      <div className="bg-black/[0.4] h-screen w-screen overflow-hidden ">
        <header>
          <h1 className="text-2xl text-center font-bold font-raleway mt-6 text-white">
            Empieza buscando una ciudad del mundo:
          </h1>
        </header>
        <div className="z-90">
          <Busqueda />
          {cargando ? (
              <Loading />
            ) : resultadoDos?.name ? (
                <Clima /> 
            ) : noResultado ? (
              <div className="container bg-t-white rounded-lg mx-auto mt-24 z-0 w-3/4 p-6 text-2xl text-black font-raleway text-center leading-10">
                <p className="">{noResultado}.</p>
                <p>Prueba realizando la busqueda de la siguiente manera:</p>
                <p className="text-3xl mt-3 font-bold">"Ciudad, Pais"</p>
              </div>
            ) : null}
         
        </div>
      </div>
    </div>
  );
};

export default AppClima;

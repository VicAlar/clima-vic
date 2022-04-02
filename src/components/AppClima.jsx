import Busqueda from "./Busqueda"

const AppClima = () => {
  return (
    <>
        <header>  
            <h1 
                className="text-2xl text-center font-bold font-raleway mt-6"
            >Empieza buscando una ciudad del mundo:</h1>
        </header>
        <Busqueda />
    </>
  )
}

export default AppClima
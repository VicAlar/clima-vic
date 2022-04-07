import { BsSearch } from "react-icons/bs"
import { useState } from 'react'
import useClima from "../hooks/useClima"

const Busqueda = () => {
  const [alerta, setAlerta] = useState('');

  const { busqueda, datosBusqueda, consultarClima } = useClima();

  const { ciudad } = busqueda

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(busqueda).includes("")) {
      setAlerta("Debe escribir escribir el nombre de una ciudad");
      return
    }
    setAlerta('');
    consultarClima(busqueda)
  };

  return (
    <form
      className="items-center px-4 flex justify-center mt-6"
      onSubmit={handleSubmit}
    >

      <div className="relative mr-3">
        <div className="absolute top-3 left-3 items-center">
          <BsSearch fill="#fff"/>
        </div>
        <input
          type="text"
          className={`block p-2 pl-10 w-96 text-white text-xl bg-transparent rounded-lg border ${alerta ? "border-red-600 placeholder:text-red-200" : "border-white placeholder:text-gray-200"} outline-none`}
          placeholder="Ej: Caracas, Venezuela"
          name="ciudad"
          id="ciudad"
          onChange={datosBusqueda}
          value={ciudad}
        />
        {alerta && <p className="text-xs text-red-200 ml-3">{alerta}</p>}
      </div>
    </form>
  );
};

export default Busqueda;

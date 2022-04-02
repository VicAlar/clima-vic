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
      setAlerta("Debe escribir el nombre de una ciudad");
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
      {alerta && <p>{alerta}</p>}
      <div className="relative mr-3">
        <div className="absolute top-3 left-3 items-center">
          <BsSearch />
        </div>
        <input
          type="text"
          className="block p-2 pl-10 w-96 text-black-900 text-xl bg-transparent rounded-lg border border-gray-500 outline-none"
          placeholder="Ej: Caracas, Venezuela"
          name="ciudad"
          id="ciudad"
          onChange={datosBusqueda}
          value={ciudad}
        />
      </div>
    </form>
  );
};

export default Busqueda;

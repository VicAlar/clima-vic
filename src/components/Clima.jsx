import useClima from "../hooks/useClima";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";

const Clima = () => {
  const { resultado, resultadoDos } = useClima();

  const { main, weather, wind, timezone } = resultadoDos;

  const { components } = resultado;

  const d = new Date();
  const localTime = d.getTime();
  const localOffset = d.getTimezoneOffset() * 60000;
  const utc = localTime + localOffset;
  const fecha = utc + 1000 * timezone;
  const nd = new Date(fecha);

  const dia = nd.toLocaleString("es-VE", { weekday: "long" });
  const diaFormat = dia.charAt(0).toUpperCase() + dia.slice(1);
  const hora = nd.getHours();
  const min = nd.getMinutes();
  const mes = nd.toLocaleString("es-VE", { month: "long" });
  const mesFormat = mes.charAt(0).toUpperCase() + mes.slice(1);
  const date = nd.getDate();

  const kelvin = 273.15;

  return (
        <div className="container bg-t-white rounded-lg mx-auto mt-32 md:mt-24 z-0 w-10/12 md:w-3/4 pt-3 md:p-6">
          <div className="flex justify-between md:justify-around z-20 p-3 md:p-5 text-center">
            <img
              className="hover:animate-bounce ease-in"
              src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
              alt=""
            />
            <div className="text-black">
              <p className="md:text-5xl text-2xl mb-3">{parseInt(main.temp - kelvin)} °C</p>
              <p className="md:text-lg text-sm">Humedad: {main.humidity}%</p>
              <p className="md:text-lg text-sm">Viento: {wind.speed}km/h</p>
            </div>
            <div className="text-black">
              <p className="text-xl md:text-3xl md:mb-7 mb-3">
                {components.city},{" "}
                {components.country.charAt(0).toUpperCase() +
                  components.country.slice(1)}
              </p>
              <p className="md:text-lg text-md">{`${diaFormat} ${date} de ${mesFormat}`}</p>
              <p className="md:text-lg text-md">Hora: {`${hora}:${min}`}</p>
            </div>
          </div>
          <div className="flex justify-evenly ml-8 md:p-4 p-6 text-lg">
            <div className="flex">
              <div className="w-9 mr-3">
                <FaTemperatureHigh size="lg" />
              </div>
              <div>
                <p className="md:text-2xl text-md">Temperatura Maxima:</p>
                <p className="font-bold md:text-2xl text-xl">
                  {parseInt(main.temp_max - kelvin)}°C
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-9 mr-3">
                <FaTemperatureLow size="lg" />
              </div>
              <div>
                <p className="md:text-2xl text-md">Temperatura Minima:</p>
                <p className="font-bold md:text-2xl text-xl">
                  {parseInt(main.temp_min - kelvin)}°C
                </p>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Clima;

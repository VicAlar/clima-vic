import useClima from "../hooks/useClima"

const Clima = () => {

    const { resultado, resultadoDos } = useClima()

  return (
    <div>Clima</div>
  )
}

export default Clima
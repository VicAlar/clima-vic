import axios from 'axios'
import { useState, createContext } from 'react'

const ClimaContext = createContext()

const ClimaProvider = ({children}) => {

    const [busqueda, setBusqueda ] = useState({
        ciudad: ''
    })
    const [ resultado, setResultado ] = useState({})
    const [ resultadoDos, setResultadoDos ] = useState({})
    const [ cargando, setCargando ] = useState(false)
    const [ noResultado, setNoResultado ] = useState('')

    const datosBusqueda = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const consultarClima = async datos => {
        setNoResultado(false)
        setCargando(true)
        try {
            const { ciudad } = datos
            const appKey = import.meta.env.VITE_API_KEY
            const url = `https://api.opencagedata.com/geocode/v1/json?q=${ciudad}&key=${appKey}`
            const { data } = await axios(url)
            const { lat, lng } = data.results[0].geometry

            setResultado(data.results[0])

            const appId = import.meta.env.VITE_API_KEY_2
            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${appId}`
            
            const { data: clima } = await axios(urlClima)
            setResultadoDos(clima)
        } catch (error) {
            console.log(error)
            setNoResultado('No hay resultados para tu busqueda')
        }
        setCargando(false)
    }

    return (
        <ClimaContext.Provider
            value={{
                busqueda,
                setBusqueda,
                datosBusqueda,
                consultarClima,
                resultado,
                resultadoDos,
                cargando,
                noResultado
            }}
        >
            {children}
        </ClimaContext.Provider>
    )
}

export {
    ClimaProvider
}

export default ClimaContext
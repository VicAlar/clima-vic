import './index.css'
import AppClima from './components/AppClima'
import { ClimaProvider } from './context/ClimaProvider'

function App() {

  return (
    <ClimaProvider>
         <AppClima />
    </ClimaProvider>
  )
}

export default App

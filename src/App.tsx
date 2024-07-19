import { BrowserRouter } from 'react-router-dom'
import { Router } from './Routes/route'
import { CycleContextProvider } from './Contexts/CyclesContext'

export function App() {
  return (
    <BrowserRouter>
      <CycleContextProvider>
        <Router />
      </CycleContextProvider>
    </BrowserRouter>
  )
}

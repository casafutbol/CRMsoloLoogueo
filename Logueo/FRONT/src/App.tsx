import {BrowserRouter} from 'react-router-dom';
import './App.css'

import { Proveedorcontexto } from './elementosHooks/proveedorContext';
import LogueoApp from './LogueoApp/LogueoApp';
import RutasForaApp from './Rutas/RutasForaApp';

function App() {

  return (
    <>
      <BrowserRouter>
        <Proveedorcontexto>
          <LogueoApp>
            <RutasForaApp />
          </LogueoApp>
        </Proveedorcontexto> 
      </BrowserRouter>
    </>
  )
}

export default App

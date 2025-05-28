import {useContext} from 'react';
import { LocalContext } from './proveedorContext';
//
function useDatosContext() {
  const contexto = useContext(LocalContext);
if (!contexto) {
    throw new Error("Proveedorcontexto debe estar dentro de LocalContext.Provider");
}
    return contexto;
  }

export {
    useDatosContext
}
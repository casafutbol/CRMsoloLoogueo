import { useDatosContext } from "../elementosHooks/useDatosContext";
import RutasDentroApp from "../Rutas/RutasDentroApp";

export default function LogueoApp({ children }: { children: React.ReactNode }){
    const {isUserLogueado} = useDatosContext();

    return <>{isUserLogueado ? <div><RutasDentroApp /></div> : <div>{children}</div>}</>

}
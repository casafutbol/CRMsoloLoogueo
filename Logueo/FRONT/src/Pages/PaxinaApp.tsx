import { useDatosContext } from "../elementosHooks/useDatosContext"

const PaxinaApp = ()=>{
    const {logout}=useDatosContext();

    return <h1>
      <div>PaxinaApp0</div>
  <button onClick={logout}>Saír</button>
    </h1>;
}

export default PaxinaApp;
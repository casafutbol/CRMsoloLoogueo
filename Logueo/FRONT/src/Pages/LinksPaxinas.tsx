import { Link, Outlet } from "react-router-dom";
export const LinksPaxinas = ()=>{

    return <><nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contacto">Contact</Link>
      </li>
      <li>
        <Link to="/logueo">Logueate</Link>
      </li>
    </ul>
  </nav>
  <Outlet />
  </>
}
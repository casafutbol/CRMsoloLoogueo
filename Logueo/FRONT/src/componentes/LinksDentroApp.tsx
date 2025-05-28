import { Link, Outlet } from "react-router-dom"
import factura from "../assets/invoices.png";
export const LinksDentroApp = () => {
    let estilo = "links-dentro-app"
    return <>
    <nav className="estilo-nav-dentro">
        <li className={estilo}>
        <Link  to="facturas"><div style={{color:"white"}}>Facturas</div><img src={factura} /></Link>
            
        </li>
        <li>
            <Link to="clientes">Clientes</Link>
        </li>
        <li>
            <Link to="productos">Productos</Link>
        </li>
        <li>
            <Link to="/paxinaapp0">Home</Link>
        </li>
    </nav>
    <Outlet />
    </>
}
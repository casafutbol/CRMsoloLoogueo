import { Route, Routes } from "react-router-dom";
import { PaxinaApp } from "./PaxinasDentroApp";
import { LinksDentroApp } from "../componentes/LinksDentroApp";
import { NoPage } from "./PaxinasForaApp";
import Productos from "../Pages/DentroApp/Productos";
import Clientes from "../Pages/DentroApp/Clientes";
import Facturas from "../Pages/DentroApp/Facturas";

export default function RutasDentroApp(){
    return <>
        <Routes>
            <Route path="/paxinaapp0" element={<LinksDentroApp />}>
                <Route index element={<PaxinaApp />} />
               <Route path="facturas" element={<Facturas />} />
                <Route path="clientes" element={<Clientes />} />
                <Route path="productos" element={<Productos />} /> 
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
        
    </>
}
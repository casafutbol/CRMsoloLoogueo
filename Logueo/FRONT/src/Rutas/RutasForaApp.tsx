import { Route, Routes } from "react-router-dom"
import { Contacto, Home, LinksPaxinas, Logueo, NoPage } from "./PaxinasForaApp"

export default function RutasForaApp(){
    return <>
    <Routes>
        <Route path="/" element={<LinksPaxinas />}>
            <Route index element={<Home />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="logueo" element={<Logueo />} />
            <Route path="*" element={<NoPage />} />
        </Route>
    </Routes>
</>
}
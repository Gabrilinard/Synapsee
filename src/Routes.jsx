import { React, Fragment } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home/index.jsx"
import Login from "./pages/Login"
import Registro from "./pages/Registro"
import Usuario from "./pages/Usuario" 
import Buscar from "./pages/Buscar" 
import useAuth from "./hooks/useAuth.jsx";
import Agendamento from "./pages/Agendamento"
import AgendarConsulta from "./pages/AgendarConsulta"
import VerConsultas from "./pages/VerConsultas"

const Private = ({Item}) =>{
    const {signed} = useAuth();

    return signed > 0 ? <Item /> : <Login />
}


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<Private Item={Home} />} />
                    <Route exact path="/Buscar" element={<Private Item={Buscar} />} />
                    <Route exact path="/Usuario" element={<Private Item={Usuario} />} />
                    <Route path="/Login" element={<Login />} />
                    <Route exact path="/Agendamento" element={<Agendamento />} />
                    <Route exact path="/AgendarConsulta" element={<AgendarConsulta />} />
                    <Route exact path="/VerConsultas" element={<VerConsultas />} />
                    <Route exact path="/Registro" element={<Registro />} />
                    <Route path="*" element={<Login />} />

                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}
import { Fragment } from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Registro from "./pages/Registro"
import Usuario from "./pages/Usuario" 
import useAuth from "./hooks/useAuth.jsx";
import Agendamento from "./pages/Agendamento"
import AgendarConsulta from "./pages/AgendarConsulta"
import VerConsultas from "./pages/VerConsultas"
import Contato from "./pages/Contato"
import TornarEspecialistaPage from "./pages/TornarEspecialista"
import DocumentList from "./pages/DocumentList"
import CriarEvento from "./pages/CriarEvento"
import Duvidas from "./pages/Duvidas"
import Inscricao from "./pages/Inscricao"
import EventosInscritos from "./pages/EventosInscritos"
import Documentos from "./pages/Documentos"

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
                    <Route exact path="/Usuario" element={<Private Item={Usuario} />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Registro" element={<Registro />} />
                    <Route exact path="/Agendamento" element={<Private Item={Agendamento} />} />
                    <Route exact path="/Contato" element={<Private Item={Contato} />} />
                    <Route exact path="/AgendarConsulta" element={<Private Item={AgendarConsulta} />} />
                    <Route exact path="/Especialista" element={<Private Item={TornarEspecialistaPage} />} />
                    <Route exact path="/CriarEvento" element={<Private Item={CriarEvento} />} />
                    <Route exact path="/Duvidas" element={<Private Item={Duvidas} />} />
                    <Route exact path="/VerConsultas" element={<Private Item={VerConsultas} />} />
                    <Route exact path="/Inscricao" element={<Private Item={Inscricao} />} />
                    <Route exact path="/EventosInscritos" element={<Private Item={EventosInscritos} />} />
                    <Route exact path="/DocumentList" element={<Private Item={DocumentList} />} />
                    <Route exact path="/Agendamento" element={<Private Item={Agendamento} />} />
                    <Route exact path="/Documentos" element={<Private Item={Documentos} />} />
                    <Route path="*" element={<Login />} />

                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Header from "../../components/Header";
import { StyledUsuario } from "./style";
import useAuth from "../../hooks/useAuth";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function Usuario() {
  const { user, signout, updateUserInfo } = useAuth();
  const navigate = useNavigate();

  const [editField, setEditField] = useState(null);
  const [newName, setNewName] = useState(user?.name || "");
  const [newLocation, setNewLocation] = useState(user?.location || "");
  const [newEspecialidade, setNewEspecialidade] = useState(user?.areaEspecializacao || "");
  const [newDisponibilidade, setNewDisponibilidade] = useState(user?.disponibilidade || "");
  const [error, setError] = useState("");

  const handleUpdate = () => {
    if (!newName && !newLocation && (user.especialista && !newEspecialidade && !newDisponibilidade)) {
      setError("Preencha pelo menos um campo para atualizar.");
      return;
    }

    const updatedInfo = {
      ...(newName && { name: newName }),
      ...(newLocation && { location: newLocation }),
      ...(user.especialista && newEspecialidade && { areaEspecializacao: newEspecialidade }),
      ...(user.especialista && newDisponibilidade && { disponibilidade: newDisponibilidade }),
    };

    updateUserInfo(updatedInfo);
    setEditField(null);
    setError("");
  };

  const handleEditClick = (field) => {
    setEditField(field);
    setError("");
  };

  return (
    <StyledUsuario>
      <Header />
      <div className="container">
        <div className="containerProfile">
          <h2 className="profile">Perfil do Usuário</h2>

          <div className="profileItens">
            <p>
              <strong>Nome:</strong> {user?.name}
            </p>
            

            <p>
              <strong>Email:</strong> {user?.email}
            </p>

            <p>
              <strong>Localização:</strong> {user?.location}
              <img src={"https://cdn-icons-png.flaticon.com/512/4226/4226577.png"} alt="Edit" onClick={() => handleEditClick('location')} />
            </p>
            {editField === 'location' && (
              <Input type="text" value={newLocation} onChange={(e) => setNewLocation(e.target.value)} placeholder="Nova localização" />
            )}

            {user.especialista && (
              <>
                <p>
                  <strong>Área de Especialização:</strong> {user?.areaEspecializacao}
                  <img src={"https://cdn-icons-png.flaticon.com/512/4226/4226577.png"} alt="Edit" onClick={() => handleEditClick('areaEspecializacao')} />
                </p>
                {editField === 'areaEspecializacao' && (
                  <Input type="text" value={newEspecialidade} onChange={(e) => setNewEspecialidade(e.target.value)} placeholder="Nova área de especialização" />
                )}

                <p>
                  <strong>Disponibilidade:</strong> {user?.disponibilidade}
                  <img src={"https://cdn-icons-png.flaticon.com/512/4226/4226577.png"} alt="Edit" onClick={() => handleEditClick('disponibilidade')} />
                </p>
                {editField === 'disponibilidade' && (
                  <Input type="text" value={newDisponibilidade} onChange={(e) => setNewDisponibilidade(e.target.value)} placeholder="Nova disponibilidade" />
                )}
              </>
            )}

            {editField && (
              <Button Text="Salvar Alterações" onClick={handleUpdate} />
            )}

            {error && <p>{error}</p>}

            <Button Text="Logout" onClick={() => { signout(); navigate("/"); }} />
            <Link to='/'>Voltar para Home</Link>
          </div>
        </div>
      </div>
    </StyledUsuario>
  );
}

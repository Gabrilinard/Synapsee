import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Header from "../../components/Header";
import { StyledUsuario } from "./style";
import useAuth from "../../hooks/useAuth";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Footer from "../../components/Footer";

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

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleUpdate();
    }
  };

  return (
    <>
      <Header />
      <StyledUsuario>
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

              <div className="editField">
                <p>
                  <strong>Localização:</strong> {editField !== 'location' ? (
                    <>
                      {user?.location}
                      <img src={"https://cdn-icons-png.flaticon.com/512/4226/4226577.png"} alt="Edit" onClick={() => handleEditClick('location')} />
                    </>
                  ) : (
                    <Input
                      type="text"
                      value={newLocation}
                      onChange={(e) => setNewLocation(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Nova localização"
                    />
                  )}
                </p>
              </div>

              {user.especialista && (
                <>
                  <div className="editField">
                    <p>
                      <strong>Profissão:</strong> {editField !== 'areaEspecializacao' ? (
                        <>
                          {user?.areaEspecializacao}
                          <img src={"https://cdn-icons-png.flaticon.com/512/4226/4226577.png"} alt="Edit" onClick={() => handleEditClick('areaEspecializacao')} />
                        </>
                      ) : (
                        <Input
                          type="text"
                          value={newEspecialidade}
                          onChange={(e) => setNewEspecialidade(e.target.value)}
                          onKeyDown={handleKeyDown}
                          placeholder="Nova área de especialização"
                        />
                      )}
                    </p>
                  </div>

                  <div className="editField">
                  </div>
                </>
              )}

              {editField && (
                <Button Text="Salvar Alterações" onClick={handleUpdate} />
              )}

              {error && <p>{error}</p>}

              <Button className='btn' Text="Sair" onClick={() => { signout(); navigate("/"); }} />
            </div>
          </div>
        </div>
      </StyledUsuario>
      <Footer />
    </>
  );
}

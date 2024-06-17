import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Link, useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Header from '../../components/Header';

// Corrige o problema com os ícones padrão do Leaflet
delete L.Icon.Default.prototype._getIconUrl;

// Ícones padrão do Leaflet
const defaultIcon = L.icon({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Ícone para especialistas
const specialistIcon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/4161/4161771.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const RecenterMap = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(position);
  }, [map, position]);
  return null;
};

const geocodeAddress = async (address) => {
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
    const data = await response.json();
    if (data.length > 0) {
      return { address: address, lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
    }
    return null;
  } catch (error) {
    console.error('Error geocoding address:', error);
    return null;
  }
};

const Mapa = () => {
  const navigate = useNavigate();
  const [position, setPosition] = useState([51.505, -0.09]);
  const [especialistas, setEspecialistas] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  const fetchSpecialists = async () => {
    try {
      const usersStorage = JSON.parse(localStorage.getItem("users_bd")) || [];
      console.log("All users in localStorage:", usersStorage);

      const specialistsWithCoords = await Promise.all(
        usersStorage
          .filter(user => user.especialista && user.location)
          .map(async user => {
            const coords = await geocodeAddress(user.location);
            if (coords) {
              return { ...user, coords };
            }
            return null;
          })
      );

      const validSpecialists = specialistsWithCoords.filter(user => user !== null);
      console.log("Valid specialists:", validSpecialists);
      setEspecialistas(validSpecialists);
      setUsuarios(usersStorage);
    } catch (error) {
      console.error('Error fetching specialists:', error);
    }
  };

  useEffect(() => {
    fetchSpecialists(); // Executa apenas uma vez, na montagem inicial
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      fetchSpecialists(); // Atualiza a lista de especialistas quando houver mudanças no localStorage
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition([latitude, longitude]);
        },
        (err) => {
          console.error("Error getting location: ", err);
        }
      );
    }
  }, []);

  useEffect(() => {
    console.log(`Usuários: ${usuarios.length}`);
    console.log(`Especialistas: ${especialistas.length}`);
    console.log("Nomes dos especialistas:");
    especialistas.forEach(especialista => {
      console.log(`- ${especialista.name}`);
    });
  }, [usuarios, especialistas]);

  const handleSelectExpert = (expert) => {
    navigate("/agendarconsulta", { state: { selectedExpert: expert } });
  };

  return (
    <>
      <Header />
      <MapContainer center={position} zoom={13} style={{ height: "50vh", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={defaultIcon}>
          <Popup>
            Você está aqui.
          </Popup>
        </Marker>
        <RecenterMap position={position} />
        {especialistas.map((especialista, index) => (
          <Marker key={index} position={[especialista.coords.lat, especialista.coords.lng]} icon={specialistIcon}>
            <Popup>
              <div>
                <strong>{especialista.name}</strong> - Especialista<br />
                {especialista.areaEspecializacao} - Área<br />
                <Link to={"/agendarconsulta"} state={{ selectedExpert: especialista }}>
                  <button onClick={() => handleSelectExpert(especialista)}>Agendar Consulta</button>
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default Mapa;

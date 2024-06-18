import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Title, Label, Select, Input, Button, List, ListItem } from './style';
import Header from '../../components/Header';

const Index = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { selectedExpert } = state || {};

  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [specialists, setSpecialists] = useState([]);

  useEffect(() => {
    const storedAppointments = localStorage.getItem('appointments');
    if (storedAppointments) {
      setAppointments(JSON.parse(storedAppointments));
    }

    const usersStorage = JSON.parse(localStorage.getItem('users_bd')) || [];
    const filteredSpecialists = usersStorage.filter(user => user.especialista);
    setSpecialists(filteredSpecialists);
  }, []);

  const handleDateChange = (e) => setSelectedDate(e.target.value);

  const handleAddAppointment = () => {
    if (selectedExpert && selectedDate) {
      const existingAppointment = appointments.find(appt => appt.date === selectedDate);
      if (existingAppointment) {
        alert(`Você já tem uma consulta marcada para esse dia com ${existingAppointment.specialist}.`);
        return;
      }

      const newAppointment = {
        id: new Date().getTime(), // Gerar um ID único com base no tempo atual
        specialist: selectedExpert.name,
        date: selectedDate
      };

      const updatedAppointments = [...appointments, newAppointment];
      setAppointments(updatedAppointments);

      // Armazenar as consultas no localStorage
      localStorage.setItem('appointments', JSON.stringify(updatedAppointments));

      alert('Consulta marcada com sucesso!');
      setSelectedDate('');

      // Redirecionar para a página VerConsultas
      navigate('/verconsultas');
    } else {
      alert('Por favor, selecione uma data.');
    }
  };

  const formatDate = (date) => {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  };

  return (
  <>
  <Header/>
  <Container>
      <Title>Agendar Consulta</Title>

      <div>
        <Label>
          Especialista:
          <Select value={selectedExpert?.id ? selectedExpert.id.toString() : ''} disabled>
            <option value={selectedExpert?.id ? selectedExpert.id.toString() : ''}>{selectedExpert?.name}</option>
          </Select>
        </Label>
      </div>

      <div>
        <Label>
          Data:
          <Input type="date" value={selectedDate} onChange={handleDateChange} />
        </Label>
      </div>

      <Button onClick={handleAddAppointment}>Agendar</Button>

      <Title>Consultas Agendadas</Title>
      <List>
        {appointments.map((appointment) => (
          <ListItem key={appointment.id}>
            {appointment.specialist} - {formatDate(appointment.date)}
          </ListItem>
        ))}
      </List>
    </Container>
  </>


  );
};

export default Index;

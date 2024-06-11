import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Title, Label, Select, Input, Button, List, ListItem } from './style';

const Index = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { selectedExpert } = state || {};

  const [appointments, setAppointments] = useState([]);

  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    const storedAppointments = localStorage.getItem('appointments');
    if (storedAppointments) {
      setAppointments(JSON.parse(storedAppointments));
    }
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
        specialist: selectedExpert.nome,
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
    <Container>
        
      <Title>Agendar Consulta</Title>

      <div>
        <Label>
          Especialista:
          <Select value={selectedExpert?.id.toString()} disabled>
            <option value={selectedExpert?.id.toString()}>{selectedExpert?.nome}</option>
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
        {appointments.map((appointment, index) => (
          <ListItem key={index}>
            {appointment.specialist} - {formatDate(appointment.date)}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Index;

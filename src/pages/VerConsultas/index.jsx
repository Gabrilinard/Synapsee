import { useEffect, useState } from 'react';
import { Container, Title, List, ListItem, DeleteButton } from './style';
import Header from '../../components/Header';

const VerConsultas = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Carregar as consultas do localStorage ao montar o componente
    const storedAppointments = localStorage.getItem('appointments');
    if (storedAppointments) {
      setAppointments(JSON.parse(storedAppointments));
    }
  }, []);

  const formatDate = (date) => {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  };

  const handleDeleteAppointment = (appointmentIndex) => {
    const updatedAppointments = appointments.filter((_, index) => index !== appointmentIndex);
    setAppointments(updatedAppointments);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
  };

  return (
    <Container>
      <Header />
      <Title>Consultas Agendadas</Title>
      <List>
        {appointments.map((appointment, index) => (
          <ListItem key={index}>
            {appointment.specialist} - {formatDate(appointment.date)}
            <DeleteButton onClick={() => handleDeleteAppointment(index)}>Deletar</DeleteButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default VerConsultas;

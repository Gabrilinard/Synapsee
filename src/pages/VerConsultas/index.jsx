import { useEffect, useState } from 'react';
import { Container, Title, List, ListItem, DeleteButton, ReviewButton, ReviewForm, SubmitButton } from './style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const VerConsultas = () => {
  const [appointments, setAppointments] = useState([]);
  const [currentReview, setCurrentReview] = useState({ index: null, rating: '', comment: '' });

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
    // Exibir caixa de diálogo de confirmação
    const isConfirmed = window.confirm('Você tem certeza que deseja deletar esta consulta?');
    if (isConfirmed) {
      // Se confirmado, deletar a consulta
      const updatedAppointments = appointments.filter((_, index) => index !== appointmentIndex);
      setAppointments(updatedAppointments);
      localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    }
  };

  const handleReviewChange = (e) => {
    setCurrentReview({ ...currentReview, [e.target.name]: e.target.value });
  };

  const handleReviewSubmit = (e, index) => {
    e.preventDefault();
    const updatedAppointments = appointments.map((appointment, idx) => 
      idx === index ? { ...appointment, review: { rating: currentReview.rating, comment: currentReview.comment } } : appointment
    );
    setAppointments(updatedAppointments);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    setCurrentReview({ index: null, rating: '', comment: '' });
  };

  const handleReviewClick = (index) => {
    setCurrentReview({ ...currentReview, index });
  };

  const isPastAppointment = (date) => {
    const today = new Date();
    const appointmentDate = new Date(date);
    return appointmentDate < today;
  };

  return (
    <Container>
      <Header />
      <Title>Consultas Agendadas</Title>
      <List>
        {appointments.map((appointment, index) => (
          <ListItem key={index}>
            {appointment.specialist} - {formatDate(appointment.date)}
            {isPastAppointment(appointment.date) && !appointment.review && (
              <ReviewButton onClick={() => handleReviewClick(index)}>Avaliar</ReviewButton>
            )}
            <DeleteButton onClick={() => handleDeleteAppointment(index)}>Deletar</DeleteButton>
            {currentReview.index === index && (
              <ReviewForm onSubmit={(e) => handleReviewSubmit(e, index)}>
                <label>
                  Avaliação 1 - 5:
                  <input
                    type="number"
                    name="rating"
                    value={currentReview.rating}
                    onChange={handleReviewChange}
                    min="1"
                    max="5"
                    required
                  />
                </label>
                <label>
                  Comentário:
                  <textarea
                    name="comment"
                    value={currentReview.comment}
                    onChange={handleReviewChange}
                    required
                  />
                </label>
                <SubmitButton type="submit">Enviar Avaliação</SubmitButton>
              </ReviewForm>
            )}
          </ListItem>
        ))}
      </List>
      
    </Container>
  );
};

export default VerConsultas;

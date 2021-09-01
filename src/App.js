import React, { useState, useEffect } from 'react';
import * as SEAT_STATUS from './constants/seatStatusCode.const';
import Auditoriums from './components/Auditoriums';
import SeatingPlan from './components/SeatingPlan';
import Loader from './components/Loader';
import { Outer, Inner, EnhancedModal, Content, Button } from './App.style';

const App = () => {
  const [selectedAuditorium, setSelectedAuditorium] = useState(null);
  const [seatsStatus, setSeatsStatus] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (selectedAuditorium === null) {
      return;
    }
    setSelectedSeats([]);
    setIsLoading(true);
    fetch(`http://localhost:8000/${selectedAuditorium}`)
      .then((response) => {
        if (!response.ok) {
          throw Error('系統發生錯誤，請稍候再試');
        }
        return response.json();
      })
      .then((data) => {
        setSeatsStatus(data?.seatsStatus);
        setIsLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setIsLoading(false);
        setIsErrorModalOpen(true);
      });
  }, [selectedAuditorium]);

  const handleSubmit = () => {
    const newSeatsStatus = seatsStatus;
    for (let i = 0; i < selectedSeats.length; i += 1) {
      const [rowIndex, columnIndex] = selectedSeats[i].coordinate;
      newSeatsStatus[rowIndex][columnIndex] = SEAT_STATUS.UNAVAILABLE;
    }
    setIsLoading(true);
    fetch(`http://localhost:8000/${selectedAuditorium}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ seatsStatus: newSeatsStatus })
    })
      .then((response) => {
        if (!response.ok) {
          throw Error('系統發生錯誤，請稍候再試');
        }
        return response.json();
      })
      .then((data) => {
        setSeatsStatus(data?.seatsStatus);
        setIsLoading(false);
        setSelectedSeats([]);
        setIsSubmitModalOpen(true);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setIsLoading(false);
        setIsErrorModalOpen(true);
      });
  };

  const closeSubmitModal = () => {
    setIsSubmitModalOpen(false);
  };

  const closeErrorModal = () => {
    setErrorMessage(null);
    setIsErrorModalOpen(false);
  };

  return (
    <Outer>
      <Inner>
        <Auditoriums handleSelect={setSelectedAuditorium} />
        <SeatingPlan
          selectedAuditorium={selectedAuditorium}
          seatsStatus={seatsStatus}
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
          handleSubmit={handleSubmit}
        />
        <Loader visible={isLoading} />
        <EnhancedModal isOpen={isSubmitModalOpen}>
          <Content>訂位成功</Content>
          <Button onClick={closeSubmitModal}>耶！</Button>
        </EnhancedModal>
        <EnhancedModal isOpen={isErrorModalOpen}>
          <Content>{errorMessage}</Content>
          <Button onClick={closeErrorModal}>OK</Button>
        </EnhancedModal>
      </Inner>
    </Outer>
  );
};

export default App;

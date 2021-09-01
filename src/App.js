import React, { useState, useEffect } from 'react';
import * as SEAT_STATUS from './constants/seatStatusCode.const';
import Auditoriums from './components/Auditoriums';
import SeatingPlan from './components/SeatingPlan';
import Loader from './components/Loader';
import { Outer, Inner } from './App.style';

const App = () => {
  const [selectedAuditorium, setSelectedAuditorium] = useState(null);
  const [seatsStatus, setSeatsStatus] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    if (selectedAuditorium === null) {
      return;
    }
    setSelectedSeats([]);
    setIsLoadingData(true);
    fetch(`http://localhost:8000/${selectedAuditorium}`)
      .then((response) => response.json())
      .then((data) => {
        setSeatsStatus(data?.seatsStatus);
        setIsLoadingData(false);
      });
  }, [selectedAuditorium]);

  const handleSubmit = () => {
    const newSeatsStatus = seatsStatus;
    for (let i = 0; i < selectedSeats.length; i += 1) {
      const [rowIndex, columnIndex] = selectedSeats[i].coordinate;
      newSeatsStatus[rowIndex][columnIndex] = SEAT_STATUS.UNAVAILABLE;
    }
    fetch(`http://localhost:8000/${selectedAuditorium}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ seatsStatus: newSeatsStatus })
    })
      .then((response) => response.json())
      .then((data) => {
        setSeatsStatus(data?.seatsStatus);
        setSelectedSeats([]);
      });
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
        <Loader visible={isLoadingData} />
      </Inner>
    </Outer>
  );
};

export default App;

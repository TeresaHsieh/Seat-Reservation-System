import React, { useState, useEffect } from 'react';
import Select from './components/Select';
import SeatingPlan from './components/SeatingPlan';
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
      const [rowIndex, columnIndex] = selectedSeats[i]?.coordinate;
      newSeatsStatus[rowIndex][columnIndex] = 1;
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
        <Select handleClick={setSelectedAuditorium} />
        <SeatingPlan
          selectedAuditorium={selectedAuditorium}
          isLoadingData={isLoadingData}
          seatsStatus={seatsStatus}
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
          handleSubmit={handleSubmit}
        />
      </Inner>
    </Outer>
  );
};

export default App;

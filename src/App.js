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
    setIsLoadingData(true);
    fetch(`http://localhost:8000/${selectedAuditorium}`)
      .then((response) => response.json())
      .then((data) => {
        setSeatsStatus(data?.seatsStatus);
        setIsLoadingData(false);
      });
  }, [selectedAuditorium]);

  return (
    <Outer>
      <Inner>
        <Select handleClick={setSelectedAuditorium} />
        <SeatingPlan
          isLoadingData={isLoadingData}
          seatsStatus={seatsStatus}
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
        />
      </Inner>
    </Outer>
  );
};

export default App;

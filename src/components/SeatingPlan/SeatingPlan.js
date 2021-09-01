import React from 'react';
import PropTypes from 'prop-types';
import Subtitle from './Subtitle';
import Table from './Table';
import Seat from './Seat';
import { Container, Title, Hint, HintText, Button } from './SeatingPlan.style';

const SeatingPlan = ({
  selectedAuditorium,
  seatsStatus,
  selectedSeats,
  setSelectedSeats,
  handleSubmit
}) => {
  if (seatsStatus.length > 0) {
    return (
      <Container>
        <Title>{selectedAuditorium} 廳</Title>
        <Subtitle seatsStatus={seatsStatus} selectedSeats={selectedSeats} />
        <Table
          seatsStatus={seatsStatus}
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
        />
        <Hint>
          <Seat
            name=""
            size="small"
            hide={false}
            selectable={false}
            selected={false}
          />
          <HintText>不可販售座位</HintText>
        </Hint>
        <Button disabled={selectedSeats.length === 0} onClick={handleSubmit}>
          確定
        </Button>
      </Container>
    );
  }
  return <Container>請選擇影廳</Container>;
};

SeatingPlan.propTypes = {
  selectedAuditorium: PropTypes.string,
  seatsStatus: PropTypes.arrayOf(PropTypes.array),
  selectedSeats: PropTypes.arrayOf(
    PropTypes.shape({
      humanizedCoordinate: PropTypes.string.isRequired,
      coordinate: PropTypes.arrayOf(PropTypes.number).isRequired
    })
  ),
  setSelectedSeats: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

SeatingPlan.defaultProps = {
  selectedAuditorium: null,
  seatsStatus: [],
  selectedSeats: []
};

export default SeatingPlan;

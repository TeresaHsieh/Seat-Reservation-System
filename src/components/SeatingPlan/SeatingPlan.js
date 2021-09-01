import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Loader from '../Loader';
import Seat from './Seat';
import { Container, Button } from './SeatingPlan.style';

const convertCoordinate = (rowIndex, columnIndex) =>
  `${String.fromCharCode(rowIndex + 65)}${columnIndex + 1}`;

const SeatingPlan = ({
  isLoadingData,
  seatsStatus,
  selectedSeats,
  setSelectedSeats,
  handleSubmit
}) => {
  const clickSeat = (rowIndex, columnIndex) => {
    if (
      selectedSeats.some(
        (element) => element.path === convertCoordinate(rowIndex, columnIndex)
      )
    ) {
      setSelectedSeats(
        selectedSeats.filter(
          (element) => element.path !== convertCoordinate(rowIndex, columnIndex)
        )
      );
      return;
    }
    setSelectedSeats([
      ...selectedSeats,
      {
        path: convertCoordinate(rowIndex, columnIndex),
        coordinate: [rowIndex, columnIndex]
      }
    ]);
  };

  if (isLoadingData) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }
  if (seatsStatus.length > 0) {
    return (
      <Container>
        <table>
          <tbody>
            {seatsStatus.map((row, rowIndex) => (
              <tr key={uuidv4()}>
                {row.map((column, columnIndex) => {
                  if (column === 1) {
                    return (
                      <td key={uuidv4()}>
                        <Seat
                          name={convertCoordinate(rowIndex, columnIndex)}
                          selectable={false}
                          selected={false}
                        />
                      </td>
                    );
                  }
                  if (column === 2) {
                    return (
                      <td key={uuidv4()}>
                        <Seat
                          name={convertCoordinate(rowIndex, columnIndex)}
                          selectable
                          selected={selectedSeats
                            .map((seat) => seat.path)
                            .includes(convertCoordinate(rowIndex, columnIndex))}
                          handleClick={() => clickSeat(rowIndex, columnIndex)}
                        />
                      </td>
                    );
                  }
                  return <td key={uuidv4()}>{null}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <Button disabled={selectedSeats.length === 0} onClick={handleSubmit}>
          確定
        </Button>
      </Container>
    );
  }
  return <Container>請選擇影廳</Container>;
};

SeatingPlan.propTypes = {
  isLoadingData: PropTypes.bool.isRequired,
  seatsStatus: PropTypes.arrayOf(PropTypes.array),
  selectedSeats: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedSeats: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

SeatingPlan.defaultProps = {
  seatsStatus: []
};

export default SeatingPlan;

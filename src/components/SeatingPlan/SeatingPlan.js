import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Loader from '../Loader';
import Seat from './Seat';
import Container from './SeatingPlan.style';

const convertCoordinate = (rowIndex, columnIndex) =>
  `${String.fromCharCode(rowIndex + 1 + 65)}${columnIndex + 1}`;

const SeatingPlan = ({
  isLoadingData,
  seatsStatus,
  selectedSeats,
  setSelectedSeats
}) => {
  const clickSeat = (name) => {
    if (selectedSeats.includes(name)) {
      setSelectedSeats(selectedSeats.filter((value) => value !== name));
      return;
    }
    setSelectedSeats([...selectedSeats, name]);
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
                          selected={selectedSeats.includes(
                            convertCoordinate(rowIndex, columnIndex)
                          )}
                          handleClick={() =>
                            clickSeat(convertCoordinate(rowIndex, columnIndex))
                          }
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
      </Container>
    );
  }
  return <Container>請選擇影廳</Container>;
};

SeatingPlan.propTypes = {
  isLoadingData: PropTypes.bool.isRequired,
  seatsStatus: PropTypes.arrayOf(PropTypes.array),
  selectedSeats: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedSeats: PropTypes.func.isRequired
};

SeatingPlan.defaultProps = {
  seatsStatus: []
};

export default SeatingPlan;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import humanizeCoordinate from '../../utils/humanizeCoordinate';
import * as SEAT_STATUS from '../../constants/seatStatusCode.const';
import Seat from './Seat';

const Container = styled.div`
  overflow-x: scroll;
  width: 100%;
  margin-top: 40px;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledTable = styled.table`
  margin: auto;
`;

const Table = ({ seatsStatus, selectedSeats, setSelectedSeats }) => {
  const selectSeat = ({ rowIndex, columnIndex }) => {
    const currentSeatHumanizedCoordinate = humanizeCoordinate({
      rowIndex,
      columnIndex
    });
    if (
      selectedSeats.some(
        (seat) => seat.humanizedCoordinate === currentSeatHumanizedCoordinate
      )
    ) {
      setSelectedSeats(
        selectedSeats.filter(
          (seat) => seat.humanizedCoordinate !== currentSeatHumanizedCoordinate
        )
      );
      return;
    }
    setSelectedSeats([
      ...selectedSeats,
      {
        humanizedCoordinate: currentSeatHumanizedCoordinate,
        coordinate: [rowIndex, columnIndex]
      }
    ]);
  };

  return (
    <Container>
      <StyledTable>
        <tbody>
          {seatsStatus.map((row, rowIndex) => (
            <tr key={uuidv4()}>
              {row.map((seatStatus, columnIndex) => (
                <td key={uuidv4()}>
                  <Seat
                    name={humanizeCoordinate({
                      rowIndex,
                      columnIndex
                    })}
                    size="large"
                    hide={seatStatus === SEAT_STATUS.NOT_EXISTS}
                    selectable={seatStatus === SEAT_STATUS.AVAILABLE}
                    selected={selectedSeats
                      .map((seat) => seat.humanizedCoordinate)
                      .includes(
                        humanizeCoordinate({
                          rowIndex,
                          columnIndex
                        })
                      )}
                    handleSelect={
                      seatStatus === SEAT_STATUS.AVAILABLE
                        ? () => selectSeat({ rowIndex, columnIndex })
                        : () => {}
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </Container>
  );
};

Table.propTypes = {
  seatsStatus: PropTypes.arrayOf(PropTypes.array),
  selectedSeats: PropTypes.arrayOf(
    PropTypes.shape({
      humanizedCoordinate: PropTypes.string.isRequired,
      coordinate: PropTypes.arrayOf(PropTypes.number).isRequired
    })
  ),
  setSelectedSeats: PropTypes.func.isRequired
};

Table.defaultProps = {
  seatsStatus: [],
  selectedSeats: []
};

export default Table;

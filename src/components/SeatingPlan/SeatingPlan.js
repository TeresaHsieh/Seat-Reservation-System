import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Loader from '../Loader';
import Seat from './Seat';
import {
  Container,
  Title,
  Subtitle,
  TableContainer,
  Hint,
  Button
} from './SeatingPlan.style';

const convertCoordinate = (rowIndex, columnIndex) =>
  `${String.fromCharCode(rowIndex + 65)}${columnIndex + 1}`;

const SeatingPlan = ({
  selectedAuditorium,
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
    return <Loader />;
  }
  if (seatsStatus.length > 0) {
    return (
      <Container>
        <Title>{selectedAuditorium} 廳</Title>
        {selectedSeats.length > 0 ? (
          <Subtitle>
            你選擇了 &nbsp;
            {selectedSeats
              .map((seat) => seat.path)
              .sort()
              .join(', ')}
            &nbsp; 座位
          </Subtitle>
        ) : (
          <Subtitle>請選擇座位</Subtitle>
        )}
        {seatsStatus.flat().every((seat) => seat !== 2) && (
          <div style={{ color: 'red' }}>目前沒有可販售座位</div>
        )}
        <TableContainer>
          <table style={{ margin: 'auto' }}>
            <tbody>
              {seatsStatus.map((row, rowIndex) => (
                <tr key={uuidv4()}>
                  {row.map((column, columnIndex) => {
                    if (column === 1) {
                      return (
                        <td key={uuidv4()}>
                          <Seat
                            name={convertCoordinate(rowIndex, columnIndex)}
                            size="large"
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
                            size="large"
                            selectable
                            selected={selectedSeats
                              .map((seat) => seat.path)
                              .includes(
                                convertCoordinate(rowIndex, columnIndex)
                              )}
                            handleClick={() => clickSeat(rowIndex, columnIndex)}
                          />
                        </td>
                      );
                    }
                    return (
                      <td key={uuidv4()}>
                        <div
                          style={{
                            width: 50,
                            height: 50,
                            visibility: 'hidden'
                          }}
                        >
                          {null}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
        <Hint>
          <Seat name="" size="small" selectable={false} selected={false} />
          <span style={{ marginLeft: 20 }}>不可販售座位</span>
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
  selectedAuditorium: PropTypes.string.isRequired,
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

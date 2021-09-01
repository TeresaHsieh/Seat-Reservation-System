import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import * as SEAT_STATUS from '../../constants/seatStatusCode.const';

const dangerMixin = css`
  color: #e2373f;
`;

const Content = styled.h2`
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  text-align: center;
  ${({ danger }) => danger && dangerMixin}
`;

const Subtitle = ({ seatsStatus, selectedSeats }) => {
  if (seatsStatus.flat().every((status) => status !== SEAT_STATUS.AVAILABLE)) {
    return <Content danger>目前沒有可販售座位</Content>;
  }

  if (selectedSeats.length === 0) {
    return <Content>請選擇座位</Content>;
  }

  const selectedSeatsHumanizedCoordinate = selectedSeats
    .map((seat) => seat.humanizedCoordinate)
    .sort()
    .join(', ');

  return (
    <Content>
      你選擇了 &nbsp;
      {selectedSeatsHumanizedCoordinate}
      &nbsp; 座位
    </Content>
  );
};

Subtitle.propTypes = {
  seatsStatus: PropTypes.arrayOf(PropTypes.array),
  selectedSeats: PropTypes.arrayOf(
    PropTypes.shape({
      humanizedCoordinate: PropTypes.string.isRequired,
      coordinate: PropTypes.arrayOf(PropTypes.number).isRequired
    })
  )
};

Subtitle.defaultProps = {
  seatsStatus: [],
  selectedSeats: []
};

export default Subtitle;

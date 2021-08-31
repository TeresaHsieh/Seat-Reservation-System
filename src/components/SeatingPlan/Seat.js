import React from 'react';
import PropTypes from 'prop-types';
import Item from './Seat.style';

const Seat = ({ name, selectable, selected, handleClick }) => (
  <Item selectable={selectable} selected={selected} onClick={handleClick}>
    {name}
  </Item>
);

Seat.propTypes = {
  name: PropTypes.string.isRequired,
  selectable: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  handleClick: PropTypes.func
};

Seat.defaultProps = {
  handleClick: () => {}
};

export default Seat;

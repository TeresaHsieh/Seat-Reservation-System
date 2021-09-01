import React from 'react';
import PropTypes from 'prop-types';
import Item from './Seat.style';

const Seat = ({ name, size, hide, selectable, selected, handleSelect }) => (
  <Item
    size={size}
    hide={hide}
    selectable={selectable}
    selected={selected}
    onClick={handleSelect}
  >
    {name}
  </Item>
);

Seat.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['large', 'small']).isRequired,
  hide: PropTypes.bool.isRequired,
  selectable: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  handleSelect: PropTypes.func
};

Seat.defaultProps = {
  handleSelect: () => {}
};

export default Seat;

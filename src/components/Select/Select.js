import React from 'react';
import PropTypes from 'prop-types';
import { Container, Item } from './Select.style';

const AUDITORIUMS = ['A', 'B', 'C'];

const Select = ({ handleClick }) => (
  <Container>
    {AUDITORIUMS.map((auditorium) => (
      <Item key={auditorium} onClick={() => handleClick(auditorium)}>
        {auditorium} 廳
      </Item>
    ))}
  </Container>
);

Select.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default Select;

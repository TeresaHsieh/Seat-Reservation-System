import React from 'react';
import PropTypes from 'prop-types';
import { Container, Item } from './Auditoriums.style';

const AUDITORIUMS = ['A', 'B', 'C'];

const Auditoriums = ({ handleSelect }) => (
  <Container>
    {AUDITORIUMS.map((auditorium) => (
      <Item key={auditorium} onClick={() => handleSelect(auditorium)}>
        {auditorium} 廳
      </Item>
    ))}
  </Container>
);

Auditoriums.propTypes = {
  handleSelect: PropTypes.func.isRequired
};

export default Auditoriums;

import React from 'react';
import { Container, Item } from './Select.style';

const Select = () => (
  <Container>
    <Item onClick={() => console.log('A')}>A 廳</Item>
    <Item onClick={() => console.log('B')}>B 廳</Item>
    <Item onClick={() => console.log('C')}>C 廳</Item>
  </Container>
);

export default Select;

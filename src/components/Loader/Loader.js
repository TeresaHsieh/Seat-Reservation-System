import React from 'react';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.75);
  color: #3f86ed;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const EnhancedClipLoader = styled(ClipLoader).attrs({
  height: 30,
  width: 4,
  margin: 2.5,
  color: 'currentColor',
  loading: true
})``;

const Loader = () => (
  <Container>
    <EnhancedClipLoader />
  </Container>
);

export default Loader;

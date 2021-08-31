import React from 'react';
import Select from './components/Select';
import SeatingPlan from './components/SeatingPlan';
import { Outer, Inner } from './App.style';

const App = () => (
  <Outer>
    <Inner>
      <Select />
      <SeatingPlan />
    </Inner>
  </Outer>
);

export default App;

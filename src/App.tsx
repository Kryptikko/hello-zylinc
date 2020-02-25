import React from 'react';
import PrimeInput from './PrimeInput';
import OutputTable from './OutputTable';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <Container maxWidth="sm">
      <PrimeInput />
      <OutputTable />
    </Container>
  );
}

export default App;

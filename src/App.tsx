import React from 'react';
import {Provider} from 'react-redux';
import store from './reducers';
import PrimeInput from './components/PrimeInput';
import OutputTable from './components/OutputTable';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="sm">
        <Box py={4}>
          <Box my={2}>
            <PrimeInput />
          </Box>
          <OutputTable />
        </Box>
      </Container>
    </Provider>
  );
}

export default App;

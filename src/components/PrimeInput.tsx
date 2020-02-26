import React, {ChangeEvent} from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import {RootStateT} from '../reducers';
import {setPrimeCount} from '../actions/primes';


interface PrimeInputPropT {
  count: number;
  error: [];
  onChange: Function;
}

function PrimeInput({count, error, onChange}: any) {
  let exception = {}
  if (Boolean(error)) {
    exception = {
      helperText: error.join(" "),
      error: true
    }
  }
  return (
    <TextField
      id="prime-input"
      label="Input N"
      variant="outlined"
      value={count}
      onChange={onChange}
      {...exception}
    />
  );
}

const mapStateToProps = (state: RootStateT) => ({
  count: state.primes.count,
  error: state.primes.error,
})

const mapDispatchToProps = (dispatch: Function) => ({
  onChange: (ev: ChangeEvent<HTMLInputElement>) => dispatch(setPrimeCount(ev.target.value))
})


export default connect(mapStateToProps, mapDispatchToProps)(PrimeInput);

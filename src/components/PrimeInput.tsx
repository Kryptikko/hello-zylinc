import React, {ChangeEvent, FocusEvent} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import TextField from '@material-ui/core/TextField';

import {RootStateT} from '../reducers';
import {setPrimeCount} from '../actions/primes';

type PropsFromRedux = ConnectedProps<typeof connector>

function _onFocus(ev: FocusEvent<HTMLInputElement>) {
  ev.target.select()
}


function PrimeInput({count, error, onChange}: PropsFromRedux) {
  let exception = {}
  if (error) {
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
      onFocus={_onFocus}
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

const connector = connect(mapStateToProps, mapDispatchToProps)
export default connector(PrimeInput);

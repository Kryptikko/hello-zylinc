import React from 'react';
import TextField from '@material-ui/core/TextField';

// type CardProps = {
//   title: string,
//   paragraph: string
// }

export default function PrimeInput() {
  return (
    <TextField
      id="prime-input"
      label="Input N"
      helperText={"Decimal numbers only"}
      error
      variant="outlined"
    />
  );
}

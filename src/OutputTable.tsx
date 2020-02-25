import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {getPrimeNumbers} from './lib/primes';


function createData(dec: number) {
  const base13 = dec.toString(13)
  return { dec, base13 };
}

const rows = getPrimeNumbers(6).map(createData);

export default function OutputTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="prime number table">
        <TableHead>
          <TableRow>
            <TableCell>{"DEC"}</TableCell>
            <TableCell align="right">{"BASE13"}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.dec}>
              <TableCell component="th" scope="row">
                {row.dec}
              </TableCell>
              <TableCell align="right">{row.base13}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

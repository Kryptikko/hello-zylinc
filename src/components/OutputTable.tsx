import React from 'react';
import {connect} from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {RootStateT} from '../reducers';

interface RowT {
  dec: number,
  base13: string,
}

function toBase13Pair(dec: number): RowT {
  const base13 = dec.toString(13)
  return { dec, base13 };
}

function OutputTable({primeSet}: any) {

  const rows = primeSet.map(toBase13Pair)

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
          {rows.map((row: RowT) => (
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

const mapStateToProps = (state: RootStateT) => ({
  primeSet: state.primes.primeSet,
})

const mapDispatchToProps = (dispatch: Function) => ({})


export default connect(mapStateToProps, mapDispatchToProps)(OutputTable);

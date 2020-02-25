import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function getPrimeNumbers(max: number) {
  let primes = [];
  const nextPrime = getPrimeGenerator();
  while (primes.length < max) {
    primes.push(nextPrime())
  }
  return primes;
}

function getPrimeGenerator(){
  let lastPrime = nextPrime(0);
  return () => {
    lastPrime = nextPrime(lastPrime)
    return lastPrime;
  }
}

function nextPrime(lastPrime: number) {
  let next = ++lastPrime;
  while(!isPrime(next)) {
    next++
  }
  return next
}


function isPrime(num: number, i = 2): boolean {
  if (num <= 2)
    return (num==2)
  if ((num % i) == 0)
    return false;
  if ((i * i) > num)
    return true;

  return isPrime(num, i+1);
}

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

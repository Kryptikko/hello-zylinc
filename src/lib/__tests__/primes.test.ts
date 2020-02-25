import {getPrimeNumbers} from '../primes';

test("getPrimeNumbers: should return an array with the lenght its given as parameter", () => {
  expect(getPrimeNumbers(2).length).toBe(2);
});

test("getPrimeNumbers: should return prime numbers", () => {
  expect(getPrimeNumbers(6)).toEqual([2, 3, 5, 7, 11, 13]);
});

test("getPrimeNumbers: should not return 0 and 1", () => {
  expect(getPrimeNumbers(2)).not.toEqual([0, 1]);
});

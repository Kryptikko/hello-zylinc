import {PrimesActionT, SET_PRIME_COUNT} from './../actions/types';

export function setPrimeCount(count: string): PrimesActionT {
  return {
    type: SET_PRIME_COUNT,
    payload: count,
  }
}

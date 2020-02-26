import {PrimesActionT, SET_PRIME_COUNT} from './../actions/types';
import {PrimeStateT} from './types'
import {getPrimeNumbers} from './../lib/primes'

const defaultState: PrimeStateT = {
  count: "",
  error: [],
  primeSet: [],
}

function primesReducer(state = defaultState, action: PrimesActionT): PrimeStateT {
  switch (action.type) {
    case SET_PRIME_COUNT:
      let error = [];
      const count = Number(action.payload);
      if (isNaN(count)) {
        error.push("Decimal numbers only");
      }

      if (count < 0) {
        error.push("Positive numbers only");
      }

      return Object.assign({}, state, {
        count: action.payload,
        primeSet: getPrimeNumbers(count),
        error: error,
      });
  }
  return state;
}

export default primesReducer;

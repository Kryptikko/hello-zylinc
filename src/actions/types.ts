export const SET_PRIME_COUNT = 'SET_PRIME_COUNT'

interface PrimeCountInputActionT {
  type: typeof SET_PRIME_COUNT;
  payload: string;
}

export type PrimesActionT = PrimeCountInputActionT;

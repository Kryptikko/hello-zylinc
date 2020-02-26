import {createStore, combineReducers} from 'redux';
import primesReducer from './primesReducer';

const rootReducer = combineReducers({
  primes: primesReducer,
});

export type RootStateT = ReturnType<typeof rootReducer>

export default createStore(rootReducer);

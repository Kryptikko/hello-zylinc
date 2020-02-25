export function getPrimeNumbers(max: number): Array<number> {
  let primes = [];
  let lastPrime = 0;
  while (primes.length < max) {
    lastPrime = nextPrime(lastPrime)
    primes.push(lastPrime)
  }
  return primes;
}

function nextPrime(lastPrime: number): number {
  do {
    lastPrime++
  } while(!isPrime(lastPrime))
  return lastPrime
}

function isPrime(num: number, i = 2): boolean {
  // the numbers 0 and 1 are neither prime nor composite.
  if (num <= 2)
    return (num === 2)

  if ((num % i) === 0)
    return false;

  if ((i * i) > num)
    return true;

  return isPrime(num, i+1);
}

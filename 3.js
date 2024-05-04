let userArray = [];
let isPrime;
function primeNumbers(min, max) {
  for (let i = min; i <= max; i++) {
    isPrime = true;

    for (let j = 2; j < max; j++) {
      if ((i % j === 0) && (i !== j)) {
        isPrime = false;
      }
      
    }

    if (isPrime === true) {
      userArray.push(i);
    }
  }

  return userArray;
}

console.log(primeNumbers(11, 20));

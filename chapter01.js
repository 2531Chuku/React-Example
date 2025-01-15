const employee = {
  firstName: "Percival",
  age: 27,
  price: function (amount) {
    return amount * 2;
  },
};
const primes = [1, 3, 5, 7];
//console.log(employee?.age);

const price = (amount) => amount * 2;
//console.log(price(12));
const points = [
  { x: 2, y: 4 },
  { x: 56, y: 100 },
];

points.distance = function () {
  let p = this[0];
  let p2 = this[1];

  let xDiff = p2.x - p.x;
  let yDiff = p2.y - p.y;

  let calDistance = Math.sqrt(Math.pow(yDiff) + Math.pow(xDiff));
  return calDistance;
};

function abs(x) {
  if (x > 0) {
    return x;
  } else {
    return -x;
  }
}

function calSum(array) {
  let sum = 0;
  for (let x of array) sum += x;
  return sum;
}

function factorial(n) {
  if (n >= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
//read the last code for understand

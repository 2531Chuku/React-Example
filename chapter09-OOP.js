class Points {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distance() {
    let totalDistance = this.x * this.x + this.y * this.y;
    return Math.sqrt(totalDistance);
  }
}

let pointA = new Points(3, 2);
let results = pointA.distance();
console.log(results);

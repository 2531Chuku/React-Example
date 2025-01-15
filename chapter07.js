const Fruits = ["Banana", "Orange", "Apple", { redApple: 1, greenApple: 2 }];

for (let { index, fruit } of Fruits.entries()) {
  if (index % 2 === 0) console.log(`position ${index}: ${fruit}`);
}

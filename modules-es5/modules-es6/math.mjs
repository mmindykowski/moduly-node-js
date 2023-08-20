function multiply(...numbers) {
  let product = 1;

  for (const number of numbers) {
    product *= number;
  }
  return product;
}

function add(...numbers) {
  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }

  return sum;
}

export default { add, multiply };

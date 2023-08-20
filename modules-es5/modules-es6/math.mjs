export function multiply(...numbers) {
  let product = 1;

  for (const number of numbers) {
    product *= number;
  }
  return product;
}

export function add(...numbers) {
  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }

  return sum;
}


// lub usunac sprzed funkcji i zapisac export {add, multiply}


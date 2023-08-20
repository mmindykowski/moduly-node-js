function add(...numbers) {
    let sum = 0;
  
    for (let number of numbers) {
      sum += number;
    }
  
    return sum;
  }

  function multiply(...numbers) {
    let product = 0;

    for (const number of numbers) {
        product *= number;
    }
    return product;
  }

  
module.exports = add;
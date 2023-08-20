function multiply(...numbers) {
    let product = 1;
  
    for (const number of numbers) {
      product *= number;
    }
    return product;
  }

  module.exports = multiply;
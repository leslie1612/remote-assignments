function avg(data) {
  let sum = 0;
  data.products
    .map((product) => product.price)
    .forEach((price) => (sum += price));

  return sum / data.size;
}

console.log(
  avg({
    size: 3,
    products: [
      { name: "Product 1", price: 100 },
      { name: "Product 2", price: 700 },
      { name: "Product 3", price: 250 },
    ],
  })
);
// should print the average price of all products

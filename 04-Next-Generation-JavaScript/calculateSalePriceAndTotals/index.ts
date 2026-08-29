interface Pro {
  name: string;
  stock: number;
  original: number;
  discount?: number;
  total?: number;
  sale?: number;
}

const products: Pro[] = [
  { name: "Mobile", stock: 3, original: 4000 },
  { name: "Laptop", stock: 1, original: 10000, discount: 0.1 },
  { name: "Mouse", stock: 4, original: 299.99 },
  { name: "Keyboard", stock: 1, original: 299.99, discount: 0.8 },
  { name: "Headphone", stock: 2, original: 199.99, discount: 0.65 }
];

const updatedProducts = products.map((p) => {
  const sale = p.discount !== undefined
    ? p.original - p.original * p.discount
    : p.original;

  const total = sale * p.stock;

  if (p.discount !== undefined) {
    return {
      discount: p.discount,
      name: p.name,
      original: p.original,
      sale: sale,
      stock: p.stock,
      total: total
    };
  }

  // Without discount
  return {
    name: p.name,
    original: p.original,
    sale: sale,
    stock: p.stock,
    total: total
  };
});

console.log(updatedProducts);
export function createProduct({ name, category, price, stock }) {
  return {
    id: crypto.randomUUID(),
    name: name.trim(),
    category: category.trim(),
    price: Number(price),
    stock: Number(stock),
    status: "active",
    createdAt: new Date().toISOString()
  };
}

headers: AUTH_HEADERS

const API_URL = "http://localhost:3000/api/products";

export async function getProducts() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function createProduct(product) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product)
  });
  return res.json();
}

export async function updateProduct(id, data) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function deleteProduct(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}

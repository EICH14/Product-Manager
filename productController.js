let products = [];
let editingId = null;

export function initProductController() {
  const form = document.getElementById("productForm");

  products = getProducts();
  renderProducts(products, handleEdit, handleDelete);

  form.addEventListener("submit", e => {
    e.preventDefault();

    if (editingId) {
      updateProduct(form);
    } else {
      addProduct(form);
    }
  });
}

function addProduct(form) {
  const product = createProduct({
    name: form.name.value,
    category: form.category.value,
    price: form.price.value,
    stock: form.stock.value
  });

  products.push(product);
  persist();
  form.reset();
}

function updateProduct(form) {
  const product = products.find(p => p.id === editingId);
  Object.assign(product, {
    name: form.name.value,
    category: form.category.value,
    price: Number(form.price.value),
    stock: Number(form.stock.value)
  });

  editingId = null;
  persist();
  form.reset();
}

function handleEdit(id) {
  const p = products.find(p => p.id === id);
  editingId = id;

  form.name.value = p.name;
  form.category.value = p.category;
  form.price.value = p.price;
  form.stock.value = p.stock;
}

function handleDelete(id) {
  const product = products.find(p => p.id === id);
  product.status = "inactive";
  persist();
}

function persist() {
  saveProducts(products);
  renderProducts(products, handleEdit, handleDelete);
}

document.getElementById("search").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(value) && p.status === "active"
  );
  renderProducts(filtered, handleEdit, handleDelete);
});
products.sort((a, b) => a.price - b.price);
alert("Product saved successfully");

function showMessage(msg) {
  const el = document.getElementById("message");
  el.textContent = msg;
  el.style.display = "block";
  setTimeout(() => el.style.display = "none", 2500);
}

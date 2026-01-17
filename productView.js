export function renderProducts(products, onEdit, onDelete) {
  const tbody = document.getElementById("productTable");
  tbody.innerHTML = "";

if (products.length === 0) {
  tbody.innerHTML = `
    <tr>
      <td colspan="5" style="text-align:center;">
        No products available
      </td>
    </tr>
  `;
  return;
}

  products.forEach(p => {
    if (p.status !== "active") return;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${p.name}</td>
      <td>${p.category}</td>
      <td>$${p.price.toFixed(2)}</td>
      <td>${p.stock}</td>
      <td>
        <button data-edit="${p.id}">Edit</button>
        <button data-delete="${p.id}">Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  tbody.querySelectorAll("[data-edit]").forEach(btn =>
    btn.onclick = () => onEdit(btn.dataset.edit)
  );

  tbody.querySelectorAll("[data-delete]").forEach(btn =>
    btn.onclick = () => onDelete(btn.dataset.delete)
  );
}

// Подключение Telegram Web App API
const tg = window.Telegram.WebApp;
tg.expand();

// Пример данных пользователя
const user = tg.initDataUnsafe?.user || {};
console.log(`Пользователь: ${user.username}`);

// Отображение продуктов
document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Ноутбук", price: 15000, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Смартфон", price: 8000, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Наушники", price: 1200, image: "https://via.placeholder.com/150" },
  ];

  const productContainer = document.querySelector(".products");

  // Рендер продуктов
  products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p class="price">Цена: ${product.price} ₴</p>
      <button class="buy-btn" data-id="${product.id}">Купить</button>
    `;
    productContainer.appendChild(productCard);
  });

  // Событие на кнопке "Купить"
  document.querySelectorAll(".buy-btn").forEach(button => {
    button.addEventListener("click", () => {
      const productId = button.getAttribute("data-id");
      alert(`Вы купили товар с ID: ${productId}`);
      // Добавить логику Telegram API
    });
  });
});

// cart.js

document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const productList = document.getElementById('product-list');
    const clearCartButton = document.getElementById('clear-cart');

    // Array para almacenar los productos en el carrito
    let cart = [];

    // Función para renderizar los productos en el carrito
    function renderCart() {
        cartItems.innerHTML = '';
        cart.forEach((product, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            itemDiv.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <span>${product.name} - ${product.price}</span>
                <button class="remove-item" data-index="${index}">Eliminar</button>
            `;
            cartItems.appendChild(itemDiv);
        });
        updateProductList();
    }

    // Función para actualizar el campo de texto con los productos del carrito
    function updateProductList() {
        productList.value = cart.map(product => `${product.name} - ${product.price}`).join('\n');
    }

    // Evento para eliminar un producto del carrito
    cartItems.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-item')) {
            const index = e.target.dataset.index;
            cart.splice(index, 1);
            renderCart();
        }
    });

    // Evento para vaciar el carrito
    clearCartButton.addEventListener('click', () => {
        cart = [];
        renderCart();
    });

    // Agrega productos al carrito (solo para ejemplo)
    cart.push({ name: 'Proteina ENA', price: '$34.999,00', img: '../imagenes/whey.jpg' });
    cart.push({ name: 'Creatina ENA', price: '$32.999,00', img: '../imagenes/crea.jpg' });

    renderCart();
});

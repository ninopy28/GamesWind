const header = document.querySelector("header"); //Seleccionamos el header

header.innerHTML = `
<img src="../img/Logo.png" class="logo" alt="">

<nav>
    <a href="../index.html">INICIO</a>
    <a href="../pages/videoJuegos.html">VIDEOJUEGOS</a>
    <a href="../pages/consolas.html">CONSOLAS</a>
    <a href="../pages/accesorios.html">ACCESORIOS</a>
</nav>



<div class="cart-dropdown">
    <a href="#" class="cart-link">
        <img src="../img/carrito.png" alt="Carrito de compras" class="cart-icon" width="40">
    </a>

    <div class="cart-dropdown-content" id="cart-dropdown-content">
        <ul id="cart-items">
            <!-- Los productos añadidos al carrito se mostrarán aquí -->
        </ul>
        <div class="cart-dropdown-footer">
            <button onclick="clearCart()">Vaciar Carrito</button>
            <button id="finalizarCompraButton" onclick="finalizarCompra()" style="display:none;">Finalizar Compra</button>
        </div>
    </div>
</div>

<button id="miBoton" class="button-login">Login</button>

`; // Reemplazamos el valor del header

const footer = document.querySelector("footer"); // Seleccionamos el footer

footer.innerHTML = `
<div class="enlaces">
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">Features</a>
    <a href="">Pricing</a>
    <a href="">Contact us</a>
</div>

<div class="enlaces">
    <a href="">Blog</a>
    <a href="">Search</a>
    <a href="">T & Cs</a>
    <a href="">Privacy</a>
    <a href="">Community</a>
</div>
`;

// Redirigir al login
document.getElementById('miBoton').addEventListener('click', function () {
    window.location.href = '/pages/login.html'; // Cambia a la URL deseada
});

// Función para actualizar el carrito
function updateCart() {
    const cartContent = document.getElementById("cart-items");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartContent.innerHTML = ""; // Limpiar contenido

    if (cart.length === 0) {
        cartContent.innerHTML = "<li>El carrito está vacío.</li>";
        // Ocultar el botón "Finalizar Compra" si el carrito está vacío
        document.getElementById("finalizarCompraButton").style.display = "none";
    } else {
        cart.forEach((item) => {
            cartContent.innerHTML += `<li>${item.name} - $${item.price}</li>`;
        });
        // Mostrar el botón "Finalizar Compra" si hay productos en el carrito
        document.getElementById("finalizarCompraButton").style.display = "inline-block";
    }
}

// Función para vaciar el carrito
function clearCart() {
    localStorage.removeItem("cart");
    updateCart();
    alert("El carrito ha sido vaciado.");
}


// Función para finalizar la compra
function finalizarCompra() {
    // Ocultar el carrito y mostrar mensaje de agradecimiento
    const cartDropdownContent = document.getElementById("cart-dropdown-content");
    cartDropdownContent.innerHTML = ""; // Limpiar el contenido del carrito

    // Crear el mensaje de agradecimiento
    const messageContainer = document.createElement("div");
    messageContainer.classList.add("purchase-message");
    messageContainer.innerHTML = "<p>Gracias por su compra. ¡Pronto será redirigido!</p>";

    // Añadir el mensaje al body o a un contenedor específico
    document.body.appendChild(messageContainer); // Aquí lo añades al final del body, pero también puedes añadirlo en otro lugar específico

    // Esperar unos segundos y redirigir a la página de pago o confirmación de compra
    setTimeout(function() {
        window.location.href = '/pages/checkout.html'; // O la URL de la página de compra
    }, 3000); // Redirige después de 3 segundos (puedes ajustar el tiempo)
}


// Inicializar el carrito al cargar la página
document.addEventListener("DOMContentLoaded", updateCart);
// Ajuste en el estilo para reducir aún más el espacio entre el carrito y el botón de login
const style = document.createElement("style");
style.textContent = `
    .cart-dropdown {
        position: relative;
        display: inline-block;
        margin-left: 650px; /* Reducido para acercar más el carrito al botón */
        vertical-align: middle; /* Asegura que el carrito esté alineado verticalmente con el botón */
    }

    .cart-link {
        text-decoration: none;
        color: inherit;
        padding: 10px;
        display: inline-block;
    }

    .cart-dropdown-content {
        display: none;
        position: absolute;
        right: 0;
        background-color: white;
        border: 1px solid #ccc;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        min-width: 300px;
        max-height: 400px;
        overflow-y: auto;
        z-index: 1000;
    }

    .cart-dropdown:hover .cart-dropdown-content {
        display: block;
    }

    .cart-dropdown-content ul {
        list-style: none;
        margin: 0;
        padding: 10px;
    }

    .cart-dropdown-content ul li {
        padding: 5px 0;
        border-bottom: 1px solid #eee;
    }

    .cart-dropdown-content ul li:last-child {
        border-bottom: none;
    }

    .cart-dropdown-footer {
        text-align: center;
        padding: 10px;
        border-top: 1px solid #eee;
        background-color: #f9f9f9;
    }

    .cart-dropdown-footer button {
        padding: 5px 10px;
        background-color: #333;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin: 5px;
    }

    .cart-dropdown-footer button:hover {
        background-color: #555;
    }

    .purchase-message {
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    padding: 20px;
    background-color: #4CAF50;
    color: white;
    font-size: 18px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 9999; /* Asegura que el mensaje esté por encima de otros elementos */
}

`;

// Agregar el <style> al <head>
document.head.appendChild(style);

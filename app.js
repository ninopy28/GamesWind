const header = document.querySelector("header"); //Seleccionamos el header

header.innerHTML = `


<img src="../img/Logo.png" class="logo" alt="">


<nav>

<a href="../index.html">INICIO</a>
<a href="../pages/videoJuegos.html">VIDEOJUEGOS</a>
<a href="../pages/consolas.html">CONSOLAS</a>
<a href="../pages/accesorios.html">ACCESORIOS</a>

</nav>

<button id="miBoton" class="button-login">Login</button>

`   //Reemplazamos el valor del header


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

`



document.getElementById('miBoton').addEventListener('click', function() {
    window.location.href = 'login.html'; // Cambia a la URL deseada
});
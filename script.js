// Función para generar pedido a WhatsApp de forma dinámica
function pedir(producto) {
  const telefono = "524860000000";
  const mensaje = `Hola, quiero pedir: ${producto} - Detalles y Florería Tancanhuitz`;
  window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`, '_blank');
}

// Lógica para el saludo en la página principal
document.addEventListener("DOMContentLoaded", function () {
  const tituloSaludo = document.getElementById("mensaje-saludo");
  
  if (tituloSaludo) {
    const hora = new Date().getHours();
    if (hora < 12) {
      tituloSaludo.innerHTML = "¡Buenos días! Bienvenido a <span>Detalles y Florería Tancanhuitz</span>";
    } else if (hora < 19) {
      tituloSaludo.innerHTML = "¡Buenas tardes! Bienvenido a <span>Detalles y Florería Tancanhuitz</span>";
    } else {
      tituloSaludo.innerHTML = "¡Buenas noches! Bienvenido a <span>Detalles y Florería Tancanhuitz</span>";
    }
  }
});

// Mensaje promocional interactivo
function mostrarPromocion() {
  alert("¡Promoción del día! En la compra de cualquier arreglo o desayuno, obtén una tarjeta personalizada gratis.");
}
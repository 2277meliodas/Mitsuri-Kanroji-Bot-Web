document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form-registro").addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("registro").style.display = "none";
        document.getElementById("seleccion-bots").style.display = "block";
    });

    window.mostrarPago = function() {
        document.getElementById("seleccion-bots").style.display = "none";
        document.getElementById("pago").style.display = "block";
    };

    document.getElementById("form-pago").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Pago realizado con éxito. ¡Gracias por tu compra!");
    });
});
function saludarSegunHora() {
    var hora = new Date().getHours();
    var mensaje;
    if (hora >=6 && hora<12) {
        mensaje = "Buenos días";
    } else if(hora>=12 && hora<18) {
        mensaje = "Buenas tardes";
    }else{
        mensaje = "Buenas noches"
    }
    document.getElementById("saludo").textContent = mensaje;
}


document.addEventListener('DOMContentLoaded', function() {
 
    document.getElementById('formulario-precios').addEventListener('submit', function(event) {
       
        event.preventDefault();

      
        calcularPrecio();
    });


    function calcularPrecio() {
     
        var producto = document.getElementById('producto').value;
        var cantidad = parseInt(document.getElementById('cantidad').value, 10);

      
        var precios = {
            cereza: 5,
            pistacho: 7,
            almendra: 4,
            pecana: 8
        };

     
        var precioUnitario = precios[producto];

  
        var total = precioUnitario * cantidad;

  
        var resultado = `Precio unitario: $${precioUnitario.toFixed(2)}<br>`;
        resultado += `Cantidad: ${cantidad}<br>`;
        resultado += `Total: $${total.toFixed(2)}`;

    
        var resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = resultado;

        resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
});





document.addEventListener('DOMContentLoaded', function() {
    var productos = document.querySelectorAll('.producto');
    productos.forEach(function(producto) {
        producto.addEventListener('click', function(event) {
            var imagenURL = producto.getAttribute('data-imagen');
            abrirImagenEnNuevaVentana(imagenURL);
            event.preventDefault(); 
        });
    });
});

function abrirImagenEnNuevaVentana(url) {
    window.open(url, '_blank');
}

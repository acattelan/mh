var contadorKm; //timer que suma kilometros

// funciones de los botones
function iniciar() {
    document.location.href = "modo_conduccion_3.html";
}

function detener() {
    clearInterval(contadorKm);

    // mostrar mensaje de exito
    var hopes = $("#hopes").text();
    var msg = "¡Felicidades, acumulaste " + hopes + " hope$!";
    alert(msg);

    AgregarHopes(hopes);

    document.location.href = "menu_principal.html";
}

// funcion del proceso de inicio
function modo_conduccion() {
    contadorKm = window.setInterval(function () {

        // sumar km
        var km = parseInt($("#km").text());
        km++;
        $("#km").text(km);

        // actualizar km inferior
        $("#km_total").text(km);

        // actualizar hopes
        var hopes = km * 10;
        $("#hopes").text(hopes);

    }, 2000);
}

function cambiar_estado_iniciando_botones() {
    $("#contenedor_btn_iniciar").addClass("ui-state-disabled");
    $("#contenedor_btn_detener").removeClass("ui-state-disabled");
}

function cambiar_estado_detenido_botones() {
    $("#contenedor_btn_iniciar").removeClass("ui-state-disabled");
    $("#contenedor_btn_detener").addClass("ui-state-disabled");
}
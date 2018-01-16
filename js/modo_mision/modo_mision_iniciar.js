var counter;

function reloj(duration, display) {
    var timer = duration, minutes, seconds;
    counter = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }

        if (parseInt(minutes) == 0 && parseInt(seconds) == 0) {
            alert("Misión finalizada con éxito");
            clearInterval(counter);
            document.location.href = "modo_mision_cupon.html";
        }
    }, 1000);
}

function detener_mision() {
    r = confirm("¿Está seguro de detener la misión?");

    if (r == true) {
        clearInterval(counter);
        alert("Misión fallida");
        document.location.href = "menu_principal.html";
    }
}

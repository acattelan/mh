// funcion que devuelve los hopes acumulados al momento
function HopesAcumulados() {
    var hopes = localStorage.getItem("hopes");

    if (hopes === null) {
        localStorage.setItem("hopes", 0);
        hopes = localStorage.getItem("hopes");
    }

    return parseInt(hopes);
}

// funcion que agrega x hopes a los acumulados
function AgregarHopes(hopes) {
    var acumulados = HopesAcumulados();
    acumulados += parseInt(hopes);
    localStorage.setItem("hopes", acumulados);
}

// funcion que resta x hopes a los acumulados
function RestarHopes(hopes) {
    var acumulados = HopesAcumulados();
    acumulados -= parseInt(hopes);
    localStorage.setItem("hopes", acumulados);
}
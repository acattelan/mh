function generar_cupon() {
    // verificar que posea suficientes hopes
    var hopes = HopesAcumulados();
    if (HopesAcumulados() < 70) {
        alert("Tiene " + hopes + " hope$. No tienes suficientes hope$ para canjear.");
    } else {

        var r = confirm("¿Generar cupón?");
        if (r == true) {
            RestarHopes(70);
            document.location.href = "modo_market_cupon.html";
        }
    }
}
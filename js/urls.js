// funcion que devuelve los iables pasados por getvalores de las var
$.GET = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
}
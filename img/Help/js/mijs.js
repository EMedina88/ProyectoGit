
function alerta() {
var alert=document.getElementsByClassName("alertIn");
for (var i = 0; i<alert.length; i++) {
    // alert[i].classList.remove("alertIn");
    alert[i].classList.add("alertOut");
    setTimeout("eliminar()",2000)
    
}
}
function eliminar(){
    var alert=document.getElementsByClassName("alertOut");
    for (var i = 0; i<alert.length; i++) {
    var padre = alert[i].parentNode;
        padre.removeChild(alert[i]);
}
}
window.addEventListener("DOMContentLoaded", function(e){
    var form_register = document.querySelector("#form-register");
    form_register.addEventListener("submit",function(e){
        var Nombre = document.querySelector("#Name");
        var Apellido = document.querySelector("#Lastname");
        var CI = document.querySelector("#CI");
        var Email = document.querySelector("#Email");

        var aux = 0;

        if (Nombre.value=="") {
            document.querySelector("#Error_name").innerHTML="El nombre es obligatorio";
        }else if (Nombre.value.length < 3) {
            document.querySelector("#Error_name").innerHTML="El nombre debe tener mas de 3 caracteres";
        }else{
            document.querySelector("#Error_name").innerHTML="";
            aux = aux+1;
        }

        if (Apellido.value=="") {
            document.querySelector("#Error_lastname").innerHTML="El apellido es obligatorio";
        }else if (Apellido.value.length < 3) {
            document.querySelector("#Error_lastname").innerHTML="El apellido debe tener mas de 3 caracteres";
        }else{
            document.querySelector("#Error_lastname").innerHTML="";
            aux = aux+1;
        }

        if (CI.value=="") {
            document.querySelector("#Error_ci").innerHTML="El número de cedula es obligatorio";
        }else if (CI.value.length != 10) {
            document.querySelector("#Error_ci").innerHTML="Número de caracteres incorrecto (10)";
        }else if (isNaN(CI.value) == true) {
            document.querySelector("#Error_ci").innerHTML="Solo se aceptan caracteres numéricos"
        }else{
            document.querySelector("#Error_ci").innerHTML="";
            aux = aux+1;
        }

        if (Email.value=="") {
            document.querySelector("#Error_email").innerHTML="El email es obligatorio";
        }else if (Email.value.includes("@") == false ) {
            document.querySelector("#Error_email").innerHTML="El email es inváñido (debe incluir @)"
        }else if (Email.value.includes(".") == false ) {
            document.querySelector("#Error_email").innerHTML="El email es inváñido (debe incluir '.')"
        }else{
            document.querySelector("#Error_email").innerHTML="";
            aux = aux+1;
        }

        if (aux != 4){
            e.preventDefault();
            aux = 0;
        }

    })
})
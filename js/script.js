//Llamada de las funciones para su funcionamiento

document.getElementById("btn_iniciarSesion").addEventListener("click", login);
document.getElementById("btn_registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declaracion de variables

var formulario_login = document.querySelector(".formulario_login");
var formulario_register = document.querySelector(".formulario_registro");
var formulario_login_register =  document.querySelector(".formulario_login-register");
var clase_trasera_Login = document.querySelector(".clase_trasera_login");
var clase_trasera_Register = document.querySelector(".clase_trasera_register");



function anchoPage(){
    if(window.innerWidth > 800){
        clase_trasera_Register.style.display = "block";
        clase_trasera_Login.style.display = "block";
        

    }else{
        clase_trasera_Register.style.display = "block";
        clase_trasera_Register.style.opacity = "1";
        clase_trasera_Login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_login_register.style.left = "0px";
        formulario_register.style.display = "none";
        
    }
}

anchoPage();



//Funcion para mover los botones del login

function login(){

    if(window.innerWidth > 800){

        formulario_login.style.display = "block"; //cambiamos el switch del display de register
        formulario_login_register.style.left = "10px";
        formulario_register.style.display = "none";
    
        clase_trasera_Register.style.opacity = "1";
        clase_trasera_Login.style.opacity = "0";
    }else{
        formulario_login.style.display = "block"; //cambiamos el switch del display de register
        formulario_login_register.style.left = "0px";
        formulario_register.style.display = "none";

        clase_trasera_Register.style.display = "block";
        clase_trasera_Login.style.display = "none";
    }
}

function register(){

    if(window.innerWidth > 800){
        formulario_register.style.display = "block"; //cambiamos el switch del display de register
        formulario_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        clase_trasera_Register.style.opacity = "0";
        clase_trasera_Login.style.opacity = "1";
    }else{
        formulario_register.style.display = "block"; //cambiamos el switch del display de register
        formulario_login_register.style.left = "0px";
        formulario_login.style.display = "none";

        clase_trasera_Register.style.display = "none";
        clase_trasera_Login.style.display = "block";
        s
        
    }
}


    

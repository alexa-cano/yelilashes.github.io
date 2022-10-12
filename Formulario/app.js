/**
 * Declaración de variables del formulario
 */
const formulario = document.getElementById("formulario");

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const mensaje = document.getElementById("mensaje")

//variable para la expresion regular 
const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(mensaje.value.length);
    //validar nombre
    if (!userName.value.trim()|| !regUserName.test(userName.value)) {
        alert("Nombre inválido");  
    }
    //validar email
    if (!userEmail.value.trim() || !regUserEmail.test(userEmail.value)) {
        alert("Email inválido")
    }
    //validar mensaje 
    if (mensaje.value.length <1 && +mensaje.value.length <5) {
        alert("No se permite ningún campo vacío");  
    }
    console.log("los datos fueron enviados");
    alert("Los datos fueron enviados");  
});
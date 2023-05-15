//mudar a cor do titulo e estilo do botão.
const formsTitle = document.getElementsByClassName("forms_title")[0];
const button = document.getElementsByClassName("button")[0];

formsTitle.style.color = "blue";
button.style.color = "blue";
button.style.backgroundColor = "white";
button.style.borderRadius = "2rem";
button.style.border = "5px solid blue";

//Capturando input e mensagem de erro das tags de USERNAME.
const usernameInput = document.getElementById("login-usuario");
const usernameErrorMessage = document.getElementsByClassName("error-text")[0];

//Capturando input e mensagem de erro das tags de PASSWORD.
const passwordInput = document.getElementById("login-senha");
const passwordErrorMessage = document.getElementsByClassName("error-text")[1];


//SIMULANDO INTERAÇÃO DO USUÁRIO.

//usuário inseriu username errado.
//mudar estilização do input e mensagem de erro do username,
//sinalizando que ele errou.
usernameInput.classList.add("error");
usernameErrorMessage.classList.add("visible");

//usuário acertou o username, mas errou a senha.
//Mudar estilização do input e mensagem de erro das tags de username sinalizando que ele acertou.
usernameInput.classList.remove("error");
usernameInput.classList.add("correct");
usernameErrorMessage.classList.remove("visible");

//Mudar estilização do input e mensagem de erro das tags de password sinalizando que ele errou.
passwordInput.classList.add("error")
passwordErrorMessage.classList.add("visible")



//let titulo = document.querySelector("h2");
//console.log(titulo)

//titulo.style.color = "blue"
//titulo.style.fontSize = "2rem"

//let fazerLogin = document.querySelector("button");
//console.log(fazerLogin)

//fazerLogin.style.color = "blue"


//Primeira interação do usuário
// Usuário digitou um nome de usuário não válido.

 //let loginUsuario = document.getElementById("login-usuario");
 //let errorTextUsuario = document.querySelector(".error-text")
//console.log("errorTextUsuario")

//loginUsuario.classList.add("error")
//errorTextUsuario.classList.add("visible")

//segunda interação do usuário
//usuário digitou um nome de usuário válido.
//Mas uma senha incorreta.

//loginUsuario.classList.remove("error")
//loginUsuario.classList.add("correct")
//errorTextUsuario.classList.remove("visible")

//let passwordInput = document.getElementById("login-senha")
//let errorTextSenha = document.querySelectorAll(".error-text")
//console.log("errorTextSenha")

//loginSenha.classList.add("error")
//errorTextSenha.classList.add("visible")






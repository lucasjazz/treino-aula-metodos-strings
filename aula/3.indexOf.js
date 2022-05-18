//saber se o email é válido
//tem quer ter um @
//tem q ter pelo menos um ponto depois do @

const email = "lucas@hotmail.com";

const indexArroba = email.indexOf("@");
const indexPonto = email.indexOf(".", indexArroba);

if (indexPonto > indexArroba) {
    console.log("Email válido");
}
else {
    console.log("Email inválido");
}
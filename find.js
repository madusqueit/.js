const clientes = require("./cliente.json");

function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave] === valor);
}

const encontrado = encontrar(clientes, "nome", "Peter");

console.log(encontrado);

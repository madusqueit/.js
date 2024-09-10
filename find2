const clientes = require("./cliente.json");

function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor));
}

const encontrado = encontrar(clientes, "nome", "Peter");
const encontrado2 = encontrar(clientes, "telefone", "951389452");

console.log(encontrado);

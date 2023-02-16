

const dados = require('./cliente.json')

console.log(dados)
console.log(typeof dados)

// -------

const dadosEmString = JSON.stringify(dados)

console.log(dadosEmString)
console.log(typeof dadosEmString)

// erro
console.log(dadosEmString.nome)

const dadosObjeto = JSON.parse(dadosEmString)

console.log(dadosObjeto)
console.log(typeof dadosObjeto)
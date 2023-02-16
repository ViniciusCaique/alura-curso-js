
const clientes = require('./clientes.json')

function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor))
}

const encontrado = encontrar(clientes, 'nome', 'Kirby')
const encontrado2 = encontrar(clientes, 'telefone', '2492442110')

console.log(encontrado)
console.log(encontrado2)

// ---------------

function filtarAptoSemComplemento(clientes) {
    return clientes.filter((cliente) => {
        return(
            cliente.endereco.apartamento === true && 
            !cliente.endereco.hasOwnProperty('complemento') 
        )
    })
}

const filtrados = filtarAptoSemComplemento(clientes)

console.log(filtrados)

// -----------------------

function ordenar(lista, propriedade) {
    const resultado = lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) {
            return -1
        } else if (a[propriedade] > b[propriedade]) {
            return 1
        }
        return 0
    })
    return resultado
}

const nomesOrdenados = ordenar(clientes, 'nome')

console.log(nomesOrdenados)
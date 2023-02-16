
const cliente = {
    nome: 'Joao',
    idade: 24,
    email: 'joao@gmail.com',
    telefones: [
        '1122222223',
        '1144344344'
    ],
}

cliente.enderecos = [
    {
    rua: 'Rua ai, tanto faz o nome',
    numero: 1337,
    apartamento: true,
    complemento: 'ap 934',
    },   
]

for (let chave in cliente) {
    let tipo = typeof cliente[chave]
    if (tipo !== 'object' && tipo !== 'function') {
        console.log(`A chave ${chave} tem o valor de ${cliente[chave]}`)
    }
}

// -------------------

const chavesDoObjeto = Object.keys(cliente)

console.log(chavesDoObjeto)

if (!chavesDoObjeto.includes('enderecos')) {
    console.error('Erro, e necessario um endereco!')
}

// ---------------------

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`)
    console.log(`Ligando para ${telefoneResidencial}`)
}

ligaParaCliente(...cliente.telefones)

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
}

console.log(encomenda)
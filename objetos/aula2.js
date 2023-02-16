
const cliente = {
    nome: 'Joao',
    idade: 24,
    email: 'joao@gmail.com',
    telefones: [
        '1122222223',
        '1144344344'
    ],
}

console.log(cliente)

// ----

cliente.enderecos = [
    {
    rua: 'Rua ai, tanto faz o nome',
    numero: 1337,
    apartamento: true,
    complemento: 'ap 934',
    },   
]

console.log(cliente)
console.log(cliente.enderecos)

// ------------

cliente.enderecos.push({
    rua: 'rua 2',
    numero: 404,
    apartamento: false,
})

console.log(cliente.enderecos)

const listaApenasApartamentos = cliente.enderecos.filter((endereco) => endereco.apartamento === true)

console.log(listaApenasApartamentos)

// -----------

const cliente2 = {
    nome: 'Joao2',
    idade: 24,
    email: 'joao2@gmail.com',
    telefones: [
        '1122222223',
        '1144344344'
    ],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log('Saldo Insuficiente')
        } else {
            this.saldo -= valor
            console.log(`Pagamento Realizado, novo saldo: ${this.saldo}`)
        }
    }
}

cliente2.efetuaPagamento(25)

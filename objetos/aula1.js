
// arrays
const listaCPFS = [111111, 2222, 3333]

const infoPessoas = ['nome', 'Jose', 'idade', 32, 'cpf', '111111111']

console.log(infoPessoas[1])

// introducao a objeto

const objetoPessoa = {
    nome: 'Jose',
    idade: 32,
}

const cliente = {
    nome: 'Andre',
    idade: 32, 
    cpf: '111112323',
    email: 'andre@gmail.com'
}

console.log(`O nome do cliente e ${cliente.nome} e possui ${cliente.idade} anos`)
console.log(`Os 3 primeiros digitos do cpf sao ${cliente.cpf.substring(0,3)}`)

// -------

console.log(`O nome do cliente e ${cliente['nome']} e possui ${cliente['idade']} anos`)

const chaves = ['nome', 'idade', 'cpf', 'email', 'altura']

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
});

// -----------

const pessoa = {
    nome: 'Luma',
    profissao: 'Engenheira',
}

console.log(pessoa.nome)
console.log(pessoa.telefone)

pessoa.telefone = '11 222223323'

console.log(pessoa.telefone)

pessoa.nome = 'Luma Silva'

console.log(pessoa)
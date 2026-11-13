function validarCadastro(usuario) {
    if (usuario.nome.length < 3) {
        return "DADOS_INVALIDOS";
    }
    
    if (usuario.idade < 18) {
        return "DADOS_INVALIDOS";
    }
    
    if (!usuario.email.includes("@")) {
        return "DADOS_INVALIDOS";
    }

    return "CADASTRO_OK";
}

const userValido = { nome: "João", idade: 20, email: "joao@email.com" };
const userNomeCurto = { nome: "Jo", idade: 20, email: "joao@email.com" };
const userMenorIdade = { nome: "Maria", idade: 17, email: "maria@email.com" };
const userEmailErrado = { nome: "Pedro", idade: 25, email: "pedro.email.com" };

console.log("Teste Válido:", validarCadastro(userValido));
console.log("Teste Nome Curto:", validarCadastro(userNomeCurto));
console.log("Teste Menor Idade:", validarCadastro(userMenorIdade));
console.log("Teste Email Errado:", validarCadastro(userEmailErrado));
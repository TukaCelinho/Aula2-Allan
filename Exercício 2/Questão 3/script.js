function contarEstoque(produtos, categoriaBuscada) {
    let quantidade = 0;

    for (let i = 0; i < produtos.length; i++) {

        if (produtos[i].categoria === categoriaBuscada) {
            quantidade++;
        }
    }

    return quantidade;
}

const estoqueLoja = [
    { nome: "TV", categoria: "eletronicos" },
    { nome: "Geladeira", categoria: "eletrodomesticos" },
    { nome: "Celular", categoria: "eletronicos" },
    { nome: "Fone de Ouvido", categoria: "eletronicos" },
    { nome: "Fogão", categoria: "eletrodomesticos" }
];

console.log("Qtd Eletrônicos:", contarEstoque(estoqueLoja, "eletronicos")); 
console.log("Qtd Eletrodomésticos:", contarEstoque(estoqueLoja, "eletrodomesticos"));
console.log("Qtd Móveis:", contarEstoque(estoqueLoja, "moveis"));
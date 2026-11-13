function calcularCarrinho(precos) {
    let total = 0;

    for (let i = 0; i < precos.length; i++) {
        total += precos[i];
    }

    if (total > 100) {
        total = total * 0.9; 
    }

    return total;
}

console.log("Carrinho 1 (Desconto):", calcularCarrinho([30, 50, 40])); // Esperado: 108
console.log("Carrinho 2 (Sem desconto):", calcularCarrinho([30, 50]));

console.log("Carrinho 3 (Valor exato):", calcularCarrinho([50, 50]));
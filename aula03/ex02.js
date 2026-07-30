const produtos = [
   { id: 1, nome: "Teclado", preco: 150.00 },
   { id: 2, nome: "Mouse", preco: 45.00 },
   { id: 3, nome: "Fone de Ouvido", preco: 89.90 },
   { id: 4, nome: "Mousepad", preco: 30.00 }
];
 

console.log("Lista de Produtos:");
for (let i = 0; i < produtos.length; i++) {
   console.log(`ID: ${produtos[i].id} | Produto: ${produtos[i].nome} | Preço: R$ ${produtos[i].preco.toFixed(2)}`);
}




const novoTamanho = produtos.push({ id: 5, nome: "Monitor", preco: 899.00 });




console.log(`\nNovo tamanho do array após o push: ${novoTamanho} itens.`);
s
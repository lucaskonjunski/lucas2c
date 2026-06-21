const produtos = [
  { id: 1, nome: "Teclado Mecânico", preco: 150 },
  { id: 2, nome: "Mouse Gamer", preco: 80 },
  { id: 3, nome: "Monitor 24'", preco: 700 },
  { id: 4, nome: "Mousepad", preco: 40 },
  { id: 5, nome: "Headset", preco: 200 }
];
  

const produtoId3 = produtos.find(p => p.id === 3);
console.log("Produto de ID 3 encontrado:");
console.log(produtoId3);




const produtosCaros = produtos.filter(p => p.preco > 100);
console.log("Produtos com preço acima de 100:");
console.log(produtosCaros);




const apenasNomes = produtos.map(p => p.nome);
console.log("Array só com os nomes dos produtos:");
console.log(apenasNomes);





console.log("Produtos formatados:");
produtos.forEach(p => {
  console.log(`ID: ${p.id} | Nome: ${p.nome} - R$ ${p.preco.toFixed(2)}`);
});